import React from "react";
import PropTypes from "prop-types";
import logo from "../images/recycle.png";
import ReuseButton from "./reuse-button";
/** 
 * Logo is a stateless component for the spinning logo-image 
 * @component 
 */
export default class Logo extends React.Component {

    render() {
        return (

            // Conditinal rendering: returning user || new user
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
    text: PropTypes.string,
}