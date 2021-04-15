import React from "react";
import ReactDOM from "react-dom";
import logo from './images/recycle.png';
import './app.css';
import UserForm from './user-form'
import NavBar from "./nav-bar";
import AdminStatistics from "./admin-statistics";

export default class Logo extends React.Component {

    constructor() {
        super();
        this.state = {
            clicked: false,
            newUser: true,
            isAdmin: false
        }
    }
    
    handelClick(){
        console.log('Klick på GreenSway');
        if (this.props.username !==  undefined) {
            console.log('Logo username: ', this.props.username)
            this.setState({
                newUser: false
            })
            if (this.props.role !==  undefined) {

                if (this.props.role === 'admin') {
                    console.log('Logo role: ', this.props.role)
                    this.setState({
                        isAdmin: true
                    })
                }
            }
        }
        this.setState({
            clicked: true
        })
    }
    
    render() {
        // console.log('Inuti Logo');
        
        return(
            <>
                {this.state.clicked !== true ? 
                <div className="container">
                    <img src={logo} className="App-logo" alt="recycle-logo"/>
                    <button className="btn" onClick={() => this.handelClick()}>GreenSway</button>
                </div> : this.state.newUser === true ? 
                <UserForm userServices={this.props.userServices}/> : this.state.isAdmin === true ? <AdminStatistics username={this.props.username} role={this.props.role}/> : <NavBar username={this.props.username} role={this.props.role}/>}
            </>
        )
    }
}