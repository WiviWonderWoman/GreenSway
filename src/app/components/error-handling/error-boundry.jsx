import React from "react";
import FallBackMessage from "./fallback-message";

export default class ErrorBoundry extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            hasError: false,
            errorMessage: ''
        };
    }

    static getDerivedStateFromError(error) {
        return {
            hasError: true,
            errorMessage: error.message
        };
    }

    componentDidCatch(error, errorInfo) {
        console.log(error.message);
    }

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
        if (this.state.hasError) {
            // You can render any custom fallback UI
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