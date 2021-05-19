import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { resetUser, resetFractions } from "../../state/actions";
import FallBackMessage from "./fallback-message";

class ApiErrorBoundry extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            hasError: false
        };
    }

    static getDerivedStateFromError(error) {
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
                <FallBackMessage
                    show={!this.state.hasError}
                    handleClick={() => this.handleClick()}
                    header={messageData.header}
                    body={messageData.body}
                    footer=''
                    button={messageData.button}
                />
            )
        }
        return this.props.children;
    }
}
ApiErrorBoundry.propTypes = {
    children: PropTypes.element,
    fractionsErrorMessage: PropTypes.string,
    fractionsHasError: PropTypes.bool,
    garbagehouse: PropTypes.number,
    resetFractionError: PropTypes.func,
    resetUserError: PropTypes.func,
    userErrorMessage: PropTypes.string,
    userHasError: PropTypes.bool,
}
const mapStateToProps = (state) => {
    // console.log('redux state: ', state);
    return {
        garbagehouse: state.user.garbagehouse,
        fractionsErrorMessage: state.fractionsErrorMessage,
        fractionsHasError: state.fractionsHasError,
        userErrorMessage: state.userErrorMessage,
        userHasError: state.userHasError,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        resetFractionError: () => dispatch(resetFractions()),
        resetUserError: () => dispatch(resetUser()),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ApiErrorBoundry)
