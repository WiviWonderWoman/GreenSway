import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import UserForm from "../features/user/user-form";
import Header from "./header";
import Footer from "./footer";

class App extends React.Component {

    constructor() {
        super();
        this.state = {
            clicked: false,
            newUser: true,
        }
    }

    componentDidMount() {
        if (this.props.userId !== undefined) {
            this.setState({
                newUser: false
            });
        }
        // else if (this.props.userId === undefined) {
        //     this.setState({
        //         newUser: true
        //     });
        // }
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
        // this.props.setEmailAsync(this.props.id, email);
        // this.props.userServices.setUserEmail(this.props.userId, this.state.username, (email) => this.props.handleUpdate(email));
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
function mapStateToProps(state) {
    return {
        id: state.user.user.id,
        email: state.user.user.email
    }
}
// function mapDispatchToProps(dispatch) {
//     return {
//         setEmailAsync: (id, email) => dispatch(setEmailAsync(id, email))
//     }
// }, mapDispatchToProps

export default connect(mapStateToProps)(App)