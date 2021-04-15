import React from "react";
import ReactDOM from "react-dom";
import NavBar from './nav-bar.jsx';
import AdminStatistics from './admin-statistics.jsx';

export default class UserButton extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            clicked: false,
            isAdmin: false
        }
    }

    handelClick(key) {
        // save user name to localStorage
        // save key to localStorage
        // console.log('Från UserButton: ', this.props.userService)
        this.setState({
            clicked: true
        })
        console.log(key);
        if (key === 'admin') {
            this.setState({
                isAdmin: true
            })
        }
        // 
        this.props.userServices.saveUserRole(key);
    }
    
    render () {
        // console.log('Inuti UserButton');
        console.log(this.props.userServices)
        return(
            this.state.clicked === false ?
            <div>
                <button key="user" onClick={() => this.handelClick('user')}>Användare</button>
                <button key="admin" onClick={() => this.handelClick('admin')}>Admin</button> 
            </div> 
            : 
            this.state.isAdmin === true ? <AdminStatistics username={this.props.username} role={this.props.role}/> 
            : 
            <NavBar username={this.props.username} role={this.props.role}/>  
        );
    }
}