import React from "react";
import UserForm from "../../features/user/user-form";
import Header from "./header";
import Footer from "./footer";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { setEmailAsync } from "../../features/user/user-slice";

export class App extends React.Component {

    constructor() {
        super();
        this.state = {
            clicked: false,
            newUser: true,
        }
    }

    componentDidMount() {
        if (this.props.id !== undefined) {
            console.log('this.props.id: ', this.props.id)
            this.setState({
                newUser: false
            });
        }
        else {
            // console.log('USER ID I APP: ', this.props.newId)
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
        console.log('App received email: ', email, 'Id: ', this.props.newId);
        //save to localStorage
        // this.props.userServices.saveUser(this.props.newId, email);
        //save (PATCH) to API
        // console.log(this.props.userId, this.state.username);
        this.props.dispatch(setEmailAsync(this.props.newId, email));
        // this.props.userServices.setUserEmail(this.props.userId, this.state.username, (email) => this.props.handleUpdate(email));
        this.setState({
            email: email,
            newUser: false,
        });
    }

    render() {
        //variable for readability
        //object to pass down as props to Overview and PieChart
        const chartData = {
            organic: this.props.organic,
            newspaper: this.props.newspaper,
            cardboard: this.props.cardboard,
            glas: this.props.glas,
            plastic: this.props.plastic,
            metal: this.props.metal,
            residual: this.props.residual,
            electricity: this.props.electricity,
            water: this.props.water
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
                    <Header handleClick={() => this.handleClick()} id={this.props.newId} chartData={chartData} username={name} clicked={this.state.clicked} />
                    <Footer />
                </>
            );
        }
        // UserForm shows if new user and button is clicked
        else if (this.state.newUser === true && this.state.clicked === true) {
            return (
                <>
                    <UserForm handleUpdate={(email) => this.handleUpdate(email)} userId={this.props.newId} userServices={this.props.userServices} />
                    <Footer />
                </>
            );
        }
        else if (this.state.newUser !== true) {
            return (
                <>
                    <Header id={this.props.id} chartData={chartData} username={name} newUser={this.state.newUser} />
                    <Footer />
                </>
            );
        }
    }
}
// App.propTypes = {
//     id: PropTypes.number,
//     username: PropTypes.string,
//     userServices: PropTypes.object
// }
function mapStateToProps(state) {
    // console.log('mapStateToProps: ', state.user.user)
    return { newId: state.user.user.id }
}
// function mapDispatchToProps(dispatch) {
//     return {
//         setEmailAsync: (id, email) => dispatch(setEmailAsync(id, email))
//     }
// }, mapDispatchToProps

export default connect(mapStateToProps)(App)