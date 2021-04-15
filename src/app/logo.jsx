import React from "react";
import logo from "./images/recycle.png";
import "./app.css";
import UserForm from './user-form'
import NavBar from "./nav-bar";
import AdminStatistics from "./admin-statistics";

export default class Logo extends React.Component {

    render() {
        return(
            <>
                {this.props.clicked !== true ? 
                <div className="container">
                    <img src={logo} className="App-logo" alt="recycle-logo"/>
                    <button className={this.props.className} onClick={this.props.onClick}>{this.props.text}</button>
                </div> 
                : 
                this.state.newUser === true ? 
                <UserForm userServices={this.props.userServices} fractions={this.props.fractions}/> : this.state.isAdmin === true ? <AdminStatistics username={this.props.username} role={this.props.role}/> : <NavBar username={this.props.username} role={this.props.role} fractions={this.props.fractions}/>}
            </>
        )
    }
}