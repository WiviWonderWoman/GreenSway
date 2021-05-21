import React from "react";
import FallBackMessage from "./fallback-message";
/** 
 * ErrorBoundry is a stateful component, an error boundry that handels any unexpected errors.
 * @component 
 */
export default class ErrorBoundry extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            hasError: false,
            errorMessage: ''
        };
    }
    //handles catches errors and message.
    static getDerivedStateFromError(error) {
        return {
            hasError: true,
            errorMessage: error.message
        };
    }
    //logs error in console.
    componentDidCatch(error, errorInfo) {
        console.log(error, errorInfo);
    }
    //handles click on the fallback-message, and resets hasError.
    handleClick() {
        this.setState({
            hasError: false
        });
    }

    render() {
        const messageData = {
            header: this.state.errorMessage,
            body: 'Det inträffade ett oväntat fel',
            footer: '',
            button: 'Försök igen'
        }
        //Conditinal rendering: if this.state.hasError 
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