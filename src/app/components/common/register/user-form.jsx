import React from "react";
import UserButton from "./user-button";
import Caller from "../../../services/caller";
import PropTypes from "prop-types";
import UserServices from "../../../services/user-services";

export default class UserForm extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            // clicked: false,
            username: '',
        };
    }

    handleUsernameChange = (event) => {
       this.setState({        
        username: event.target.value,
        }); // console.log('handleUsernameChange: ' + this.props.user)
    }

    setUserEmail(id, email) {
        Caller.patch(`/${id}`, {email: email})
        .then(res => {
          const data = res.data; //console.log('PATCH: ',data);
          this.props.handleUpdate(data.email);
        })
        .catch((error) => {
          console.log('PATCH: ',error)
        });
      }

    saveUser() {
        if (this.state.username !== "" && this.state.role !== "") {
            //save to localStorage
            this.props.userServices.saveUser(this.props.user, this.state.username, this.state.role);
            //save (PATCH) to API
            this.setUserEmail(this.props.user, this.state.username);
        }
    }

    render() {
        return( 
            <div className="userForm ">
                <div className="form-group">
                    <label>Vänligen ange din roll<br/> För tillfället är det endast möjligt att registrera hushåll.</label>
                </div>
                <div className="form-group">
                    <UserButton className="btn2" key={'user'} text={'Hushåll'} />
                    <UserButton className="clicked" text={'Admin'} /> 
                </div>
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
UserForm.propTypes = {
    handleUpdate: PropTypes.func,
    userServices: PropTypes.instanceOf(UserServices),
    user: PropTypes.number,


}
