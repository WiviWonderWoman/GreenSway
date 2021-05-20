import React from "react";
import PropTypes from "prop-types";
/** 
 * @class @component 
 * @classdesc ReuseButton is a stateless reusable react class-component.
 */
export default class ReuseButton extends React.Component {

    render() {
        return (
            <button className={this.props.className} onClick={this.props.onClick}>{this.props.text}</button>
        );
    }
}
ReuseButton.propTypes = {
    /**
     * For styling 
     */
    className: PropTypes.string,
    /**
     * Handels click on modal's button
     */
    onClick: PropTypes.func,
    /**
     * Text to be displayed in the button
     */
    text: PropTypes.string
}