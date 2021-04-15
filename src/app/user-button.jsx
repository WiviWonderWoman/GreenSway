import React from "react";
import ReactDOM from "react-dom";
import NavBar from './nav-bar.jsx';
import AdminStatistics from './admin-statistics.jsx';

export default class UserButton extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            update: false
        };
    }

    shouldComponentUpdate(nextProps, nextState) {

        if (this.state.update === false) {
            return false;
        }
    }

    handelClick(key) {
        // save user name to localStorage
        // save key to localStorage
        // console.log('Från UserButton: ', this.props.userService)
        console.log('key');
        this.props.userService.saveUserRole(key);
        this.setState({
            update: true
        })
        
        let root = document.getElementById("root");

        // remove 
        if (key === 'admin') {
            
            ReactDOM.render(<AdminStatistics username={this.props.username}/>, root);
        } 

        else if (key === 'user') {
            ReactDOM.render(<NavBar username={this.props.username}/>, root);
        }
    }
    
    render () {
        // console.log('Inuti UserButton');
        console.log(this.props.userService)
        return(
            <div>
                <button key="user" onClick={() => this.handelClick('user')}>Användare</button>
                {this.props.clicked === true ? <button key="admin" className="clicked">Admin</button> : <button key="admin" onClick={() => this.handelClick('admin')}>Admin</button> }
            </div>   
        );
    }
}