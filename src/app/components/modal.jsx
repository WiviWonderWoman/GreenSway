import React from "react";
import PropTypes from "prop-types";

export default class Modal extends React.Component {
    render() {
        const className = this.props.className;
        const contentStyle = this.props.className + '-content';
        const headerStyle = this.props.className + '-header';
        const bodyStyle = this.props.className + '-body';
        const footerStyle = this.props.className + '-footer';
        const buttonStyle = this.props.className + '-button';
        return (
            <div className={className} >
                <div className={contentStyle}>
                    <div className={headerStyle}>
                        <h2>{this.props.header}</h2>
                    </div>
                    <div className={bodyStyle}>
                        <p>{this.props.body}</p>
                        {this.props.children}
                    </div>
                    <div className={footerStyle}>
                        <h3>{this.props.footer}</h3>
                        <button className={buttonStyle} onClick={this.props.onClick} >{this.props.button}</button>
                    </div>
                </div>
            </div>
        )
    }
}
Modal.propTypes = {
    body: PropTypes.string,
    button: PropTypes.string,
    className: PropTypes.string,
    footer: PropTypes.string,
    header: PropTypes.string,
    onClick: PropTypes.func
}