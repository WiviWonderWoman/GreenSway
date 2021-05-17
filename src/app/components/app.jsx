import React from "react";
import {
    HashRouter as Router,
    Switch,
    Route
} from "react-router-dom";
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
import Content from "./content";
import HomePage from "./home-page";
import LaudryPage from "./laudry/laudry-page";
import OverviewPage from "./charts/overview-page";
import DetailsPage from "./fractions/details-page";
import KeyIdPage from "./key-id-page";
import Logo from "./logo";

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
        this.props.setEmail(this.props.id, email);
        this.setState({
            email: email,
            newUser: false,
        });
    }

    render() {

        if (this.props.isLoading) {
            return (<h1>LADDAR!</h1>)
        }
        //variable for readability
        const id = this.props.id;
        // Logo shows if new user and button not clicked 
        //  
        if (this.props.errorMessage === null) {


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

                        {/* <Header id={this.props.id} username={this.props.email} newUser={this.state.newUser} /> */}
                        <Logo text={'GreenSway'} className={'mini-container'} />
                        <hr />
                        <Content>
                            <UserForm handleUpdate={(email) => this.handleUpdate(email)} />
                        </Content>
                        <Footer />

                    </>
                );
            }
            // && this.state.clicked === true
            else if (this.state.newUser !== true) {
                return (
                    <>
                        <Router>
                            <Header id={this.props.id} username={this.props.email} newUser={this.state.newUser} />
                            <Content>
                                <Switch>
                                    <Route exact path={`/`}>
                                        <HomePage />
                                    </Route>
                                    <Route exact path={`/laundry/${id}`}>
                                        <LaudryPage />
                                    </Route>
                                    <Route exact path={`/overview/${id}`}>
                                        <OverviewPage />
                                    </Route>
                                    <Route exact path={`/details/${id}`}>
                                        <DetailsPage />
                                    </Route>
                                    <Route exact path={`/key-id/${id}`}>
                                        <KeyIdPage />
                                    </Route>
                                </Switch>
                            </Content>
                            <Footer />
                        </Router>
                    </>
                );
            }
        }
    }
}
App.propTypes = {
    userId: PropTypes.number,
    id: PropTypes.number,
    username: PropTypes.string,
    isLoading: PropTypes.bool,
    errorMessage: PropTypes.string
}
const mapStateToProps = (state) => {
    console.log('redux state: ', state);
    return {
        id: state.user.id,
        email: state.user.email,
        isLoading: state.apiIsLoadingUser,
        errorMessage: state.userErrorMessage,
        // errorMessage: state.hasError.message
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