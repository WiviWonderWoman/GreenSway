import React from "react";
import ReactDOM from "react-dom";
import NavBar from './nav-bar.jsx';
import AdminStatistics from './admin-statistics.jsx';

export default class UserButton extends React.Component {

    handelClick(key) {

        console.log('Klick på ' + key + '-button');
        
        let root = document.getElementById("root");

        if (key === 'admin') {
            ReactDOM.render(<AdminStatistics/>, root);
        } 

        else if (key === 'user') {
            ReactDOM.render(<NavBar />, root);
        }
    }
    
    render () {
        console.log('Inuti UserButton');
        return(
            <div>
                <button key="user" onClick={() => this.handelClick('user')}>Användare</button>
                {this.props.clicked === true ? <button key="admin" className="clicked">Admin</button> : <button key="admin" onClick={() => this.handelClick('admin')}>Admin</button> }
            </div>   
        );
    }
}