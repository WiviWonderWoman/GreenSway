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
        console.log(error);
        return { hasError: true }
    }
    handleClick() {
        this.setState({
            hasError: false
        })
        this.props.handleClick;
    }
    render() {
        const messageData = {
            header: 'Hoppsan!',
            body: 'Det inträffade ett fel: ' + this.props.userErrorMessage + this.props.fractionErrorMessage,
            footer: '',
            button: 'Försök igen'
        }
        if (this.state.hasError || this.props.userErrorMessage !== '' || this.props.fractionErrorMessage !== '') {
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
//TODO: dispatch function to reset errorMessage
// const mapDispatchToProps = (dispatch) => {
//     return {

//     }
// }, mapDispatchToProps
export default connect(mapStateToProps)(ErrorBoundry)
