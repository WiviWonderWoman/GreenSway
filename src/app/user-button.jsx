import React from "react";
import ReactDOM from "react-dom";
import NavBar from './nav-bar.jsx';

export default class UserButton extends React.Component {

    handelClick(source) {
        console.log('Klick på ' + source + '-button')
        if (source === 'användare') {
            ReactDOM.render(<NavBar />, document.getElementById("root"))
        } else {
            ReactDOM.render(<h1>ADMIN-SIDA KOMMER SNART!</h1>, document.getElementById("root"))
        }
    }
    render () {
        console.log('Inuti UserButton');
        return(
            <div>
                <button onClick={() => this.handelClick('användare')}>Användare</button>
                <button onClick={() => this.handelClick('admin')}>Admin</button>   
            </div>   
        )
    }
}