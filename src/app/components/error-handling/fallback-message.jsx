import React from "react";
import PropTypes from "prop-types";
import "./fallback.css";
import Modal from "../modal";

export default class FallBackMessage extends React.Component {

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
    body: PropTypes.string,
    button: PropTypes.string,
    footer: PropTypes.string,
    handleClick: PropTypes.func,
    header: PropTypes.string,
    show: PropTypes.bool,
}