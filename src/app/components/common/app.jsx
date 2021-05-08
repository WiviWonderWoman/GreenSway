import React from "react";
import UserForm from "./register/user-form";
import Header from "./header";
import Footer from "./footer";
import PropTypes from "prop-types";

export default class App extends React.Component {

    constructor() {
        super();
        this.state = {
            clicked: false,
            newUser: true,
        }
    }

    getUser(id) {
        this.props.userServices.getUserById(id, (user) => this.setState({
            userId: user.id,
            organic: user.organic,
            newspaper: user.newspaper,
            cardboard: user.cardboard,
            glas: user.glas,
            plastic: user.plastic,
            metal: user.metal,
            residual: user.residual,
            email: user.email
        }));
    }

    getNewUser() {
        this.props.userServices.getNewUser((newUser) => this.setState({
            userId: newUser.id,
            organic: newUser.organic,
            newspaper: newUser.newspaper,
            cardboard: newUser.cardboard,
            glas: newUser.glas,
            plastic: newUser.plastic,
            metal: newUser.metal,
            residual: newUser.residual
        }));
    }

    componentDidMount() {
        if (this.props.id !== undefined) {

            this.getUser(this.props.id);

            this.setState({
                newUser: false
            });
        }
        else {
            this.getNewUser();

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
        console.log('App received email: ', email);
        this.setState({
            email: email,
            newUser: false,
        });
    }

    render() {
        //variable for readability
        //object to pass down as props to Overview and PieChart
        const chartData = {
            organic: this.state.organic,
            newspaper: this.state.newspaper,
            cardboard: this.state.cardboard,
            glas: this.state.glas,
            plastic: this.state.plastic,
            metal: this.state.metal,
            residual: this.state.residual,
        };
        //variable for readability
        //doublecheck the username/email
        let name;
        if (this.props.username !== undefined) {
            name = this.props.username;
        } else {
            name = this.state.email;
        }

        // Logo shows if new user and button not clicked
        if (this.state.newUser === true && this.state.clicked === false) {
            return (
                <>
                    <Header handleClick={() => this.handleClick()} id={this.state.userId} chartData={chartData} username={name} clicked={this.state.clicked} />
                    <Footer />
                </>
            );
        }
        // UserForm shows if new user and button is clicked
        else if (this.state.newUser === true && this.state.clicked === true) {
            return (
                <>
                    <UserForm handleUpdate={(email) => this.handleUpdate(email)} userId={this.state.userId} userServices={this.props.userServices} />
                    <Footer />
                </>
            );
        }
        else if (this.state.newUser !== true) {
            return (
                <>
                    <Header id={this.state.userId} chartData={chartData} username={name} newUser={this.state.newUser} />
                    <Footer />
                </>
            );
        }
    }
}
App.propTypes = {
    id: PropTypes.number,
    username: PropTypes.string,
    userServices: PropTypes.object
}

