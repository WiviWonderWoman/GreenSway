import React from "react";
import PropTypes from "prop-types";

export default class Modal extends React.Component {
    render() {
        return (
            <div className={this.props.className} >
                <div className="modal-content">
                    <div className="modal-header">
                        <h2>{this.props.header}</h2>
                    </div>
                    <div className="modal-body">
                        <p>{this.props.body}</p>
                    </div>
                    <div className="modal-footer">
                        <h3>{this.props.footer}</h3>
                        <button className="close" onClick={this.props.onClick} >{this.props.text}</button>
                    </div>
                </div>
            </div>
        )
    }
}
Modal.propTypes = {
    className: PropTypes.string,
    header: PropTypes.string,
    body: PropTypes.string,
    footer: PropTypes.string,
    button: PropTypes.string,
    onClick: PropTypes.func
}