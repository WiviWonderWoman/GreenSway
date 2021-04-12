import React from "react";
import logo from './images/recycle.png';
import './app.css';

export default class Logo extends React.Component {

    render() {
        return(
            <div className="container">
                <img src={logo} className="App-logo" alt="recycle-logo"/>
                <button className="btn">GreenSway</button>
            </div>
        )
    }
}