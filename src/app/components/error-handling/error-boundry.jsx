import React from "react";
import FallBackMessage from "./fallback-message";
/** 
 * @class @component 
 * @classdesc ErrorBoundry is a statefull component, an error boundry that handels any unexpected errors.
 */
export default class ErrorBoundry extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            /**
             * @param {bool} state.hasError 
             * keeps track of errors
             */
            hasError: false,
            /**
             * @param {string} state.errorMessage 
             * errorMessage
             */
            errorMessage: ''
        };
    }
    /**
     * @method that handles catches errors and message.
     * @param {*} error
     */
    static getDerivedStateFromError(error) {
        return {
            hasError: true,
            errorMessage: error.message
        };
    }
    /**
     * @method that logs error in console.
     * @param {*} error
     * @param {*} errorInfo
     */
    componentDidCatch(error, errorInfo) {
        console.log(error, errorInfo);
    }
    /**
     * @method that handles click on the fallback-message, and resets hasError.
     */
    handleClick() {
        this.setState({
            hasError: false
        });
    }

    render() {
        /**
         * An object containing parameters for FallBackMessage
         * @typedef {object} messageData
         * @property {string} header
         * @property {string} body
         * @property {string} footer
         * @property {string} button
         */
        const messageData = {
            header: this.state.errorMessage,
            body: 'Det inträffade ett oväntat fel',
            footer: '',
            button: 'Försök igen'
        }
        /**
         * @description
         * Conditinal rendering:
         * if this.state.hasError 
         */
        if (this.state.hasError) {
            return (
                <FallBackMessage
                    show={this.state.hasError}
                    handleClick={() => this.handleClick()}
                    header={messageData.header}
                    body={messageData.body}
                    button={messageData.button}
                />
            )
        }
        return this.props.children;
    }
}