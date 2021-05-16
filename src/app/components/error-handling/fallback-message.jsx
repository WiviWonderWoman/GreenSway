import React from "react";
import PropTypes from "prop-types";
import ReuseButton from "../reuse-button";
import "./fallback.css";

export default class FallBackMessage extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            hide: false
        }
    }
    handleClick() {
        this.setState({
            hide: true
        })
        this.props.handleClick();
    }

    render() {
        let modalDisplay;
        if (this.state.hide) {
            modalDisplay = 'modal-hidden'
        } else {
            modalDisplay = 'modal'
        }

        return (
            <div className={modalDisplay}>
                <div className="modal-content">
                    <div className="modal-header">
                        <h2>{this.props.header}</h2>
                    </div>
                    <div className="modal-body">
                        <p>{this.props.body}</p>
                    </div>
                    <div className="modal-footer">
                        <h3>{this.props.footer}</h3>
                        <ReuseButton className="close" onClick={() => this.handleClick()} text={this.props.button} />
                    </div>
                </div>
            </div>
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