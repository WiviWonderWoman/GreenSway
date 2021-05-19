import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { resetUser, resetFractions } from "../../state/actions";
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
        this.props.resetUserError();
        this.props.resetFractionError();
        this.setState({
            hasError: false
        });
    }
    render() {
        const messageData = {
            header: 'Hoppsan! Det inträffade ett fel:',
            body: this.props.userErrorMessage + this.props.fractionsErrorMessage,
            footer: '',
            button: 'Försök igen'
        }
        if (this.state.hasError || this.props.userHasError || this.props.fractionsHasError) {
            return (
                <FallBackMessage show={this.state.hasError} handleClick={() => this.handleClick()} header={messageData.header} body={messageData.body} footer='' button={messageData.button} />
            )
        }
        return this.props.children;
    }
}
ErrorBoundry.propTypes = {
    handleClick: PropTypes.func,
}
const mapStateToProps = (state) => {
    // console.log('redux state: ', state);
    return {
        garbagehouse: state.user.garbagehouse,
        userErrorMessage: state.userErrorMessage,
        fractionsErrorMessage: state.fractionsErrorMessage,
        userHasError: state.userHasError,
        fractionsHasError: state.fractionsHasError
    }
}
//TODO: dispatch function to reset errorMessage
const mapDispatchToProps = (dispatch) => {
    return {
        resetUserError: () => dispatch(resetUser()),
        resetFractionError: () => dispatch(resetFractions())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ErrorBoundry)
