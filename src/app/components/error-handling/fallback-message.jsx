import React from "react";
import PropTypes from "prop-types";
import "./fallback.css";
import ReuseButton from "../reuse-button";
import Modal from "../modal";

export default class FallBackMessage extends React.Component {

    // constructor(props) {
    //     super(props)
    //     this.state = {
    //         hide: false,
    //         class: 'modal'
    //     }
    // }
    handleClick() {
        this.props.handleClick();
    }
    render() {

        return (

            !this.props.show ?
                <Modal className='modal' header={this.props.header} body={this.props.body} footer={this.props.footer} onClick={() => this.handleClick()} text={this.props.button}></Modal>
                :
                <Modal className='modal-hidden' header={this.props.header} body={this.props.body} footer={this.props.footer} onClick={() => this.handleClick()} text={this.props.button}></Modal>

        )
    }
}
FallBackMessage.propTypes = {
    header: PropTypes.string,
    body: PropTypes.string,
    footer: PropTypes.string,
    button: PropTypes.string,
    handleClick: PropTypes.func
}