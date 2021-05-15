import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import UserForm from "./user-form";
import Header from "./header";
import Footer from "./footer";
import { checkLocalStorage } from "../api";
import {
    setUserEmail,
    getUserById,
    getNewUser
} from "../state/actions";

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
            this.props.getNewUser();
            this.setState({
                newUser: true
            });
        }
    }

    //handleClick on the logo, only shows for new users
    handleClick() {
        this.setState({
            clicked: true
        });
    }

    handleUpdate(email) {
        // console.log('App received email: ', email, 'Id: ', this.props.id);
        // //save to localStorage
        // this.props.userServices.saveUser(this.props.id, email);
        // //save (PATCH) to API
        this.props.setEmail(this.props.id, email);
        this.setState({
            email: email,
            newUser: false,
        });
    }

    render() {
        // Logo shows if new user and button not clicked 
        //  
        if (this.state.newUser === true && this.state.clicked === false) {
            return (
                <>
                    <Header handleClick={() => this.handleClick()} username={this.props.email} id={this.props.id} clicked={this.state.clicked} />
                    <Footer />
                </>
            );
        }
        // UserForm shows if new user and button is clicked
        else if (this.state.newUser === true && this.state.clicked === true) {
            return (
                <>
                    <UserForm handleUpdate={(email) => this.handleUpdate(email)} />
                    <Footer />
                </>
            );
        }
        // && this.state.clicked === true
        else if (this.state.newUser !== true) {
            return (
                <>
                    <Header id={this.props.id} username={this.props.email} newUser={this.state.newUser} />
                    <Footer />
                </>
            );
        }
    }
}
App.propTypes = {
    userId: PropTypes.number,
    id: PropTypes.number,
    username: PropTypes.string,
}
const mapStateToProps = (state) => {
    console.log('redux state: ', state);
    return {
        id: state.user.id,
        email: state.user.email
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