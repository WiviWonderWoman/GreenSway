import React from "react";
import "./app.css";
import UserButton from "./user-button";

export default class UserForm extends React.Component {
    
    constructor(props) {
        super(props);

        this.state = {
            clicked: false,
            isAdmin: false,
            username: '',
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
            clicked: true
        })
        // console.log(key);
        if (key === 'admin') {
            this.setState({
                isAdmin: true
            })
        }
        this.props.userServices.saveUserRole(key);
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
                        <button  onClick={this.componentWillUnmount()}>SPARA</button> 
                    </div>
                </form>
            </div> 
        );
    }

    componentWillUnmount() {
        console.log('username: ', this.state.username);
        if (this.state.username !== "" ) {
            this.props.userServices.saveUsername(this.state.username);
        }
        console.log('localStorage: ', localStorage);
    }
}
