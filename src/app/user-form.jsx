import React from "react";
import './app.css';
import UserButton from "./user-button";

export default class UserForm extends React.Component {

    
    constructor() {
        super();

        this.state = {
            username: ''
        };
    }

    handleUsernameChange = (event) => {
        this.setState({
            username: event.target.value
        })
    }

    render() {

        return(
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
                    <div className="form-group">
                        <label>och din roll:</label>
                    </div>
                    <div className="form-group">
                        <UserButton username={this.state.username}/>
                    </div>
                </form>
            </div>
        );
    }
}
