import React from "react";
import UserButton from "./user-button";
import Caller from "../../domain/users/caller";

export default class UserForm extends React.Component {
    
    constructor(props) {
        super(props);

        this.state = {
            clicked: false,
            username: '',
            role: ''
        };
    }

    handleUsernameChange = (event) => {
       this.setState({        
        username: event.target.value,
        }) 
        // console.log('handleUsernameChange: ' + this.props.user)
    }

    setUserEmail(id, email) {
        Caller.patch(`/${id}`, {email: email})
        .then(res => {
          const data = res.data;
        //   console.log('USERFORM email: ', data.email);
          this.props.handleUpdate(data.email);
        //   console.log('PATCH: ',data);
          
        })
        .catch((error) => {
          console.log('PATCH: ',error)
        });
      }

    handleUserClick(key) {
        this.setState({
            // clicked: true,
            role: key
        })
        // console.log(key);
    }

    saveUser() {
        if (this.state.username !== "" && this.state.role !== "") {

            this.props.userServices.saveUser(this.props.user, this.state.username, this.state.role);

            this.setUserEmail(this.props.user, this.state.username);
        }
        // console.log('localStorage: ', localStorage);
    }

    render() {
        return( 
            <div className="userForm ">
                <div className="form-group">
                    <label>Vänligen ange din roll:</label>
                </div>
                {this.state.clicked === true ?
                <div className="form-group">
                    {/* <UserButton className="clicked" text={'Användare'} /> */}
                    <UserButton className="clicked" text={'Admin'} /> 
                </div> 
                : 
                <div className="form-group">
                    <UserButton onClick={() => this.handleUserClick('user')} key={'user'} text={'Användare'} />
                    <UserButton className="clicked" text={'Admin'} /> 
                    {/* <UserButton onClick={() => this.handleUserClick('admin')} key={'admin'} text={'Admin'} />  */}
                </div>}
                    <div className="form-group">
                        <label>och ditt användarnamn (email):</label>
                    </div>
                    <div className="form-group">
                        <input  type="text" value={this.state.username} onChange={this.handleUsernameChange}/>
                    </div> 
                    <div className="form-group">
                        <button  onClick={() => this.saveUser()}>SPARA</button> 
                    </div>
            </div> 
        );
    }
}
