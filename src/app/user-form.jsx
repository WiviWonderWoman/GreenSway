import React from "react";
import "./app.css";
import UserButton from "./user-button";

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
        username: event.target.value
        })       
        // console.log('handleUsernameChange: ' + this.state.username)
    }

    handleUserClick(key) {
        this.setState({
            clicked: true,
            role: key
        })
        // console.log(key);
    }

    saveUser() {
        if (this.state.username !== "" && this.state.role !== "") {
            this.props.userServices.saveUsername(this.state.username);
            this.props.userServices.saveUserRole(this.state.role);
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
                    <UserButton className="clicked" text={'Användare'} />
                    <UserButton className="clicked" text={'Admin'} /> 
                </div> 
                : 
                <div className="form-group">
                    <UserButton onClick={() => this.handleUserClick('user')} key={'user'} text={'Användare'} />
                    <UserButton onClick={() => this.handleUserClick('admin')} key={'admin'} text={'Admin'} /> 
                </div>}
                <form>
                    <div className="form-group">
                        <label>och ditt namn:</label>
                    </div>
                    <div className="form-group">
                        <input  type="text" value={this.state.username} onChange={this.handleUsernameChange}/>
                    </div> 
                    <div className="form-group">
                        <button  onClick={() => this.saveUser()}>SPARA</button> 
                    </div>
                </form>
            </div> 
        );
    }
}
