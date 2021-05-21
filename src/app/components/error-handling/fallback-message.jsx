import React from "react";
import PropTypes from "prop-types";
import Modal from "../modal/modal";
/** 
 * FallBackMessage is a stateless component, that displays an UI-fallback.
 * @component 
 */
export default class FallBackMessage extends React.Component {

    // handles click on Modal button.
    handleClick() {
        this.props.handleClick();
    }
    render() {
        return (
            <Modal header={this.props.header} body={this.props.body} footer={this.props.footer} onClick={() => this.handleClick()} button={this.props.button}></Modal>
        )
    }
}
FallBackMessage.propTypes = {
    body: PropTypes.string,
    button: PropTypes.string,
    footer: PropTypes.string,
    handleClick: PropTypes.func,
    header: PropTypes.string,
    show: PropTypes.bool,
}