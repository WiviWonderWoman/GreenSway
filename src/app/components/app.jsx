import React from "react";
import { HashRouter as Router } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { checkLocalStorage } from "../api";
import { setUserEmail, getUserById, getNewUser } from "../state/actions";
import Content from "./content";
import Logo from "./logo";
import UserForm from "./user-form";
import Header from "./header";
import Footer from "./footer";
import ApiErrorBoundry from "./error-handling/api-error-boundry";
/** 
 * @class @component 
 * @classdesc App is a stateful HOC component, the root component of the application.
 */
class App extends React.Component {

    constructor() {
        super();
        this.state = {
            /**
             * @param {bool} state.clicked 
             * keeps track of click on Logo
             */
            clicked: false,
            /**
             * @param {bool} state.newUser
             * keeps track of new users
             */
            newUser: true,
        }
    }

    componentDidMount() {
        const user = checkLocalStorage();
        if (user !== null || undefined) {
            this.props.getUser(user.id);
            this.setState({
                newUser: false
            });
        }
        else {
            this.props.getNewUser();
            this.setState({
                newUser: true
            });
        }
    }
    /**
     * @event
     * @method that handles click on the logo, so it only shows for new users
     */
    handleClick() {
        this.setState({
            clicked: true
        });
    }
    /**
     * @method that handels updates to user email
     * @param {string} email 
     */
    handleUpdate(email) {
        this.props.setEmail(this.props.id, email);
        this.setState({
            /**
             * @param {string} state.email
             */
            email: email,
            newUser: false,
        });
    }
    render() {
        /**
         * @description
         * Conditinal rendering:
         * if new user and button not clicked 
         */
        if (this.state.newUser === true && this.state.clicked === false) {
            return (
                <>
                    <Header handleClick={() => this.handleClick()} clicked={this.state.clicked} />
                    <Footer />
                </>
            );
        }
        /**
         * @description
         * Conditinal rendering:
         * if new user and button is clicked 
         */
        else if (this.state.newUser === true && this.state.clicked === true) {
            return (
                <>

                    <Logo text={'GreenSway'} className={'mini-container'} />
                    <hr />
                    <div className='spacer'>
                        <UserForm handleUpdate={(email) => this.handleUpdate(email)} />
                    </div>
                    <Footer />

                </>
            );
        }
        /**
         * @description
         * Conditinal rendering:
         * if not new user 
         */
        else if (this.state.newUser !== true) {
            return (
                <>
                    <Router>
                        <Header newUser={this.state.newUser} />
                        <ApiErrorBoundry>
                            <Content />
                        </ApiErrorBoundry>
                        <Footer />
                    </Router>
                </>
            );
        }
    }
}
App.propTypes = {
    /**
     * User email
     */
    email: PropTypes.string,
    /**
     * Gets returning user by id, gets id from checkLocalStorage(). Dispatches getUserById(id)
     * @param {number} id  
     * @getUserById 
     */
    getUser: PropTypes.func,
    /**
     * Gets new user, first user with email = ''. Dispatches getNewUser(). 
     * @getNewUser
     */
    getNewUser: PropTypes.func,
    /**
     * User id
     */
    id: PropTypes.number,
    /**
     * Sets new User email, id from getNewUser() and email from user input in UserForm through handleUpdate(email). Dispatches setUserEmail(id, email)
     * @param {number} id 
     * @param {string} email 
     * @setUserEmail 
     */
    setEmail: PropTypes.func,
}
const mapStateToProps = (state) => {
    return {
        id: state.user.id,
        email: state.user.email,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        getUser: (id) => dispatch(getUserById(id)),
        getNewUser: () => dispatch(getNewUser()),
        setEmail: (id, email) => dispatch(setUserEmail(id, email)),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(App)