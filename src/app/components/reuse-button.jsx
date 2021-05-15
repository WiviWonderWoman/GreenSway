import React from "react";
import PropTypes from "prop-types";

export default class ReuseButton extends React.Component {

    render() {
        return (<button className={this.props.className} onClick={this.props.onClick}>{this.props.text}</button>);
    }
}
ReuseButton.propTypes = {
    className: PropTypes.string,
    onClick: PropTypes.func,
    text: PropTypes.string
}