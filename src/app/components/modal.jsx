import React from "react";
import PropTypes from "prop-types";

/** 
 * @class
 * @classdesc A modal react class-component
*/
export default class Modal extends React.Component {
    render() {
        /**for styling individual parts of the modal
         * @example styles ./errorhandling/fallback.css & ./laundry/laundry.css
         * to hide Modal add suffix className with '-hidden' 
         * @typedef {Object}  
         * @property {string} className 
         * @property {string} content
         * @property {string} header @property {string} body
         * @property {string} footer @property {string} button
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
/**
 *  Specified requireable proptypes 
 */
Modal.propTypes = {
    body: PropTypes.string,
    button: PropTypes.string,
    children: PropTypes.any,
    className: PropTypes.string,
    footer: PropTypes.string,
    header: PropTypes.string,
    onClick: PropTypes.func
}