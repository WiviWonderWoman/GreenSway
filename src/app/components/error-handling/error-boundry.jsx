import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import FallBackMessage from "./fallback-message";

class ErrorBoundry extends React.Component {
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
    componentDidMount() {
        this.setState({
            hasError: true
        })
    }

    render() {
        const messageData = {
            header: 'Hoppsan!',
            body: 'Det inträffade ett fel: ' + this.props.userErrorMessage,
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

const mapStateToProps = (state) => {
    console.log('redux state: ', state);
    return {

        userErrorMessage: state.userErrorMessage,
        fractionErrorMessage: state.fractionErrorMessage
    }
}
const mapDispatchToProps = (dispatch) => {
    return {

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ErrorBoundry)
