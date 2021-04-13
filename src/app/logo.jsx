import React from "react";
import ReactDOM from "react-dom";
import logo from './images/recycle.png';
import './app.css';
import UserButton from './user-button.jsx';

export default class Logo extends React.Component {

    handelClick(){
        console.log('Klick på GreenSway');
        
        let root = document.getElementById("root")
        ReactDOM.render(<UserButton />, root);
    }
    
    render() {
        console.log('Inuti Logo');
        return(
            <div className="container">
                <img src={logo} className="App-logo" alt="recycle-logo"/>
                <button className="btn" onClick={() => this.handelClick()}>GreenSway</button>
            </div>
        )
    }
}