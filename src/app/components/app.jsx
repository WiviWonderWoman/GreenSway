import React from "react";
// import "./app.css";
import Logo from "./logo";
import UserForm from "./user-form";
import NavBar from "./nav-bar";
import Content from "./content";
import Caller from "../services/API/users/caller";

export default class App extends React.Component {

    constructor() {
        super();
        this.state = {
            clicked: false,
            newUser: true,
            isAdmin: false,
            redirected: false,
            user: {}
        }
    }

    getNewUser() {
        Caller.get(`?email`, {})
    .then(res => {
        const newUser = res.data[0];
        console.log('newUser: ',newUser);
        this.setState({
            user: newUser
        })
        console.log('state.user: ',this.state.user);
    })
    .catch(error => console.log(error));
    }
    
    componentDidMount() {
        this.getNewUser();
    } 
    
    handleClick() {
        // console.log('Klick på GreenSway');
        if (this.props.username !==  '') {
            // console.log('App username: ', this.props.username)
            this.setState({
                newUser: false
            })

            if (this.props.role !==  undefined) {

                if (this.props.role === 'admin') {
                    // console.log('App role: ', this.props.role)
                    this.setState({
                        isAdmin: true
                    })
                }
            }
        }
        this.setState({
            clicked: true
        }) 
    }

    render() {
        // console.log('Inuti App.');
        return(
            this.state.clicked === true ?
            <>
                <header>
                    <Logo text={'GreenSway'} className={'btn2'} />
                </header> 
                <Content>
                {
                this.state.newUser === true ? 
                    <UserForm user={this.state.user} userServices={this.props.userServices} fractions={this.props.fractions}/> 
                : 
                    <NavBar username={this.props.username} role={this.props.role} fractions={this.props.fractions}/>
                }
                </Content>
            </> 
            :
            <>
            <header>
                <Logo text={'Klicka här!'} className={'btn'} onClick={() => this.handleClick()} username={this.props.username} role={this.props.role} userServices={this.props.userServices} fractions={this.props.fractions}/>
            </header>
            <Content/>
            </>
        );
    }
}
