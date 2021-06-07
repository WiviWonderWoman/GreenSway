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
 * App is a stateful HOC component, the root component of the application.
 * @component 
 */
class App extends React.Component {

    constructor() {
        super();
        this.state = {
            clicked: false,
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
            //--- DEMO CASE ---
            this.props.getUser(1);
            // this.props.getNewUser();
            this.setState({
                newUser: true
            });
        }
    }
    //handles click on the logo, so it only shows for new users
    handleClick() {
        this.setState({
            clicked: true
        });
    }

    //handels updates to user email
    handleUpdate(email) {
        this.props.setEmail(this.props.id, email);
        this.setState({
            email: email,
            newUser: false,
        });
    }
    render() {
        //Conditinal rendering: if new user and button not clicked 
        if (this.state.newUser === true && this.state.clicked === false) {
            return (
                <>
                    <Header handleClick={() => this.handleClick()} clicked={this.state.clicked} />
                    <Footer />
                </>
            );
        }
        // Conditinal rendering: if new user and button is clicked 
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
        //Conditinal rendering: if not new user 
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
    email: PropTypes.string,
    getUser: PropTypes.func,
    getNewUser: PropTypes.func,
    id: PropTypes.number,
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