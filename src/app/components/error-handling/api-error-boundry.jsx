import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { resetUser, resetFractions } from "../../state/actions";
import FallBackMessage from "./fallback-message";
/** 
 * @component ApiErrorBoundry is a stateless HOC component, an error boundry that handels error from API calls.
 */
class ApiErrorBoundry extends React.Component {

    //handles click on the fallback-message, and attempts to resets errors
    handleClick() {
        this.props.resetUserError();
        this.props.resetFractionError();
    }

    render() {
        const messageData = {
            header: 'Hoppsan! Det inträffade ett fel:',
            body: this.props.userErrorMessage + this.props.fractionsErrorMessage,
            footer: '',
            button: 'Försök igen'
        }
        //Conditinal rendering: if API calls hasError 
        if (this.props.userHasError || this.props.fractionsHasError) {
            return (
                <FallBackMessage
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
    children: PropTypes.any,
    fractionsErrorMessage: PropTypes.string,
    fractionsHasError: PropTypes.bool,
    resetFractionError: PropTypes.func,
    resetUserError: PropTypes.func,
    userErrorMessage: PropTypes.string,
    userHasError: PropTypes.bool,
}
const mapStateToProps = (state) => {
    // console.log('redux state: ', state);
    return {
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
