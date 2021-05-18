import React from "react";
import PropTypes from "prop-types";
import "./fallback.css";
import ReuseButton from "../reuse-button";

export default class FallBackMessage extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            hide: false
        }
    }
    handleClick() {
        console.log('KLICK FM');
        this.props.handleClick();
        this.setState({
            hide: true
        })
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
    // className: PropTypes.string,
    body: PropTypes.string,
    footer: PropTypes.string,
    button: PropTypes.string,
    handleClick: PropTypes.func
}