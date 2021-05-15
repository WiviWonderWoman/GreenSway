import React from "react";
import logo from "../images/recycle.png";
import PropTypes from "prop-types";
import ReuseButton from "./reuse-button";

export default class Logo extends React.Component {

    render() {
        return (
            // returning user : new user
            this.props.className === 'mini-container' ?
                <div className={this.props.className}>
                    <div className="container">
                        <img src={logo} className="App-logo" alt="recycle-logo" />
                    </div>
                    <div id="copy">
                        <h1 >{this.props.text}</h1>
                    </div>
                </div>
                :
                <div className="container">
                    <img src={logo} className="App-logo" alt="recycle-logo" />
                    <ReuseButton className={this.props.className} onClick={this.props.onClick} text={this.props.text} />
                </div>
        );
    }
}

Logo.propTypes = {
    className: PropTypes.string,
    onClick: PropTypes.func,
    text: PropTypes.string
}