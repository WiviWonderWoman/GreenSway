import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { resetUser, resetFractions } from "../../state/actions";
import FallBackMessage from "./fallback-message";
/** 
 * @class @component 
 * @classdesc ApiErrorBoundry is a stateless HOC component, an error boundry that handels error from API calls.
 */
class ApiErrorBoundry extends React.Component {

    /**
     * @method that handles click on the fallback-message, and attempts to resets errors
     */
    handleClick() {
        this.props.resetUserError();
        this.props.resetFractionError();
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
            header: 'Hoppsan! Det inträffade ett fel:',
            body: this.props.userErrorMessage + this.props.fractionsErrorMessage,
            footer: '',
            button: 'Försök igen'
        }
        /**
         * @description
         * Conditinal rendering:
         * if API calls hasError 
         */
        if (this.props.userHasError || this.props.fractionsHasError) {
            return (
                <FallBackMessage
                    show={true}
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
    /**
     * Any child components inside the boundry
     */
    children: PropTypes.element,
    /**
     * Error message from fraction API calls
     */
    fractionsErrorMessage: PropTypes.string,
    /**
     * Keeps track of fraction API call errors
     */
    fractionsHasError: PropTypes.bool,
    /**
     *  Dispatches resetFractions(). 
     */
    resetFractionError: PropTypes.func,
    /**
     *  Dispatches resetUser(). 
     */
    resetUserError: PropTypes.func,
    /**
     * Error message from user API calls
     */
    userErrorMessage: PropTypes.string,
    /**
     * Keeps track of user API call errors
     */
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
