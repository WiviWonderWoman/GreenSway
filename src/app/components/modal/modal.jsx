import React from "react";
import PropTypes from "prop-types";
import "./modal.css";
/** 
 * @component Modal is a stateless reusable react class-component. A modal that can easily be modified through styling. 
 * To hide Modal just add suffix className with '-hidden'. 
 * @example default styling: ./modal.css
*/
export default class Modal extends React.Component {

    render() {
        /**
         * @typedef for styling individual parts of the modal
         * @type {Object} style
         * @property {string} body
         * @property {string} button
         * @property {string} className 
         * @property {string} content
         * @property {string} header 
         * @property {string} footer
         */
        const style = {
            className: this.props.className,
            content: this.props.className + '-content',
            header: this.props.className + '-header',
            body: this.props.className + '-body',
            footer: this.props.className + '-footer',
            button: this.props.className + '-button'
        }

        return (
            <div className={style.className} >
                <div className={style.content}>
                    <div className={style.header}>
                        <h2>{this.props.header}</h2>
                    </div>
                    <div className={style.body}>
                        <p>{this.props.body}</p>
                        {this.props.children}
                    </div>
                    <div className={style.footer}>
                        <h3>{this.props.footer}</h3>
                        <button className={style.button} onClick={this.props.onClick} >{this.props.button}</button>
                    </div>
                </div>
            </div>
        )
    }
}
Modal.propTypes = {
    /**
     * Text to be displayed in the modal body's p tag
     */
    body: PropTypes.string,
    /**
     * Text to be displayed in the modal button
     */
    button: PropTypes.string,
    /**
     * Allows children to be displayed in the modal body's 
     */
    children: PropTypes.any,
    /**
     * For styling the modal. Hide / visible
     */
    className: PropTypes.string,
    /**
     * Text to be displayed in the modal footer's h3 tag
     */
    footer: PropTypes.string,
    /**
     * Text to be displayed in the modal header's h2 tag
     */
    header: PropTypes.string,
    /**
     * Handels click on modal's button
     */
    onClick: PropTypes.func
}