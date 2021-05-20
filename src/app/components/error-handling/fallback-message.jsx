import React from "react";
import PropTypes from "prop-types";
import "./fallback.css";
import Modal from "../modal";
/** 
 * @class @component 
 * @classdesc ApiErrorBoundry is a stateless HOC component, an error boundry that handels error from API calls.
 */
export default class FallBackMessage extends React.Component {
    /**
     * @method that handles click.
     */
    handleClick() {
        this.props.handleClick();
    }
    render() {

        return (

            this.props.show ?
                <Modal className='modal' header={this.props.header} body={this.props.body} footer={this.props.footer} onClick={() => this.handleClick()} button={this.props.button}></Modal>
                :
                <Modal className='modal-hidden' header={this.props.header} body={this.props.body} footer={this.props.footer} onClick={() => this.handleClick()} button={this.props.button}></Modal>

        )
    }
}
FallBackMessage.propTypes = {
    /**
    * Text to be displayed in the body's p tag
    */
    body: PropTypes.string,
    /**
     * Text to be displayed in the button
     */
    button: PropTypes.string,
    /**
     * Text to be displayed in the footer's h3 tag
     */
    footer: PropTypes.string,
    /**
     * Handels click on button
     */
    handleClick: PropTypes.func,
    /**
     * Text to be displayed in the header's h2 tag
     */
    header: PropTypes.string,
    /**
     * To keep track of visability
     */
    show: PropTypes.bool,
}