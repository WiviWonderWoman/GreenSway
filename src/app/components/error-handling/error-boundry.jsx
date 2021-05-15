import React from "react";
import PropTypes from "prop-types";
import FallBackMessage from "./fallback-message";

export default class ErrorBoundry extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            hasError: false
        };
    }
    static getDerivedStateFromError(error) {
        return { hasError: true }
    }

    componentDidCatch(error) {
        console.log(error);
    }

    handleClick() {
        this.setState({
            hasError: false
        })
        this.props.handleClick;
    }

    render() {
        const messageData = {
            header: 'HOPPSAN!',
            body: 'Något gick fel',
            footer: '',
            button: 'Försök igen'
        }
        if (this.state.hasError) {
            return (
                <FallBackMessage handleClick={() => this.handleClick()} header={messageData.header} body={messageData.body} footer='' button={messageData.button} />
            )
        }
        return this.props.children;
    }
}

ErrorBoundry.propTypes = {
    handleClick: PropTypes.func,
}