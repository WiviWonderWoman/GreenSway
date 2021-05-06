import React from "react";
import PropTypes from "prop-types";

export default class UserButton extends React.Component {

    render () {
        return(<button className={this.props.className} onClick={this.props.onClick}>{this.props.text}</button>);
    }
}
UserButton.propTypes = {
    className: PropTypes.string,
    onClick: PropTypes.func,
    text: PropTypes.string
}