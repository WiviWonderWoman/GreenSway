import React from "react";
import logo from "./images/recycle.png";

export default class Logo extends React.Component {

    render() {
        return(
            this.props.className === 'mini-container' ?
            <div className={this.props.className}>
                <div className="container"> 
                    <img src={logo} className="App-logo" alt="recycle-logo"/>
                </div>
            </div> 
            :
            <div className="container"> 
                 <img src={logo} className="App-logo" alt="recycle-logo"/>
                 <button className={this.props.className} onClick={this.props.onClick}>{this.props.text}</button>
            </div>
        )
    }
}