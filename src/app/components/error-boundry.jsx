import React from "react";
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
        console.log('EB: click');
        this.setState({
            hasError: false
        })
        this.props.handleClick;
    }

    render() {
        if (this.state.hasError) {
            return (
                <FallBackMessage handleClick={() => this.handleClick()} />
            )
        }
        return this.props.children;
    }
}