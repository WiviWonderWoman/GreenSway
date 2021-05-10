import React from "react";
import logo from "./images/recycle.png";
import PropTypes from "prop-types";

export default class Logo extends React.Component {

    render() {
        return (
            // returning user : new user
            this.props.className === 'mini-container' ?
                <div className={this.props.className}>
                    <div className="container">
                        <img src={logo} className="App-logo" alt="recycle-logo" />
                        <button className={this.props.className} id="copy" ><span>{this.props.text}</span></button>
                    </div>
                </div>
                :
                <div className="container">
                    <img src={logo} className="App-logo" alt="recycle-logo" />
                    <button className={this.props.className} onClick={this.props.onClick}>{this.props.text}</button>
                </div>
        );
    }
}

Logo.propTypes = {
    className: PropTypes.string,
    onClick: PropTypes.func,
    text: PropTypes.string
}