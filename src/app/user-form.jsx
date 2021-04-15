import React from "react";
import './app.css';

import UserButton from "./user-button";

export default class UserForm extends React.Component {

    
    constructor(props) {
        super(props);

        this.state = {
            clicked: false,
            username: ''
        };
    }

    handleUsernameChange = (event) => {
        
        this.setState({
            username: event.target.value
        })
        console.log('handleUsernameChange: ' + this.state.username)
    }

    handelClick() {
        console.log('handelClick: ' + this.state.username)
        
        this.props.userServices.saveUsername(this.state.username);
        // this.props.username = this.state.username;

         this.setState({
             clicked: true
         })
    }
    
    render() {

        return( this.state.clicked === true ? 
            <>
                <div className="form-group">
                    <label>och din roll:</label>
                </div>
                <div className="form-group">
                    <UserButton  username={this.state.username} role={this.props.role} userServices={this.props.userServices}/>
                </div>
            </>
            :
            <div className="userForm ">
                <form>
                    <div className="form-group">
                        <label>Vänligen ange ditt namn:</label>
                    </div>
                    <div className="form-group">
                        <input  type="text" 
                                value={this.state.username}
                                onChange={this.handleUsernameChange}/>
                    </div> 
                </form>
                <div className="form-group">
                    <button  onClick={() => this.handelClick()}>SPARA</button>
                </div>
            </div>
        );
    }
}
