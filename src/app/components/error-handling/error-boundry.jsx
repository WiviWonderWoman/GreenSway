import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { reset } from "../../state/actions";
import FallBackMessage from "./fallback-message";

class ErrorBoundry extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            hasError: false
        };
    }
    static getDerivedStateFromError(error) {
        console.log(error);
        return { hasError: true }
    }
    handleClick() {
        console.log('KLICK EB');
        this.props.resetError();

        this.setState({
            hasError: false
        })

    }
    render() {
        const messageData = {
            header: 'Hoppsan!',
            body: 'Det inträffade ett fel: ' + this.props.userErrorMessage + this.props.fractionErrorMessage,
            footer: '',
            button: 'Försök igen'
        }
        if (this.state.hasError || this.props.userHasError) {
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
        fractionErrorMessage: state.fractionErrorMessage,
        userHasError: state.userHasError
    }
}
//TODO: dispatch function to reset errorMessage
const mapDispatchToProps = (dispatch) => {
    return {
        resetError: () => dispatch(reset())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ErrorBoundry)
