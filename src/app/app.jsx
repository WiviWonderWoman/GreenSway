import React from "react";
import "./app.css";
import Logo from "./logo";
import UserForm from "./user-form";
import NavBar from "./nav-bar";
import Content from "./content";

export default class App extends React.Component {

    constructor() {
        super();
        this.state = {
            clicked: false,
            newUser: true,
            isAdmin: false,
            redirected: false
        }
    }

    handleClick() {
        // console.log('Klick på GreenSway');
        if (this.props.username !==  undefined) {
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
                    <UserForm  userServices={this.props.userServices} fractions={this.props.fractions}/> 
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
