import React from "react";
import UserForm from "./user-form";
import NavBar from "./nav-bar";
import Content from "./content";
import Caller from "../domain/users/caller";
import Header from "./header";

export default class App extends React.Component {

    constructor() {
        super();
        this.state = {
            clicked: false,
            newUser: true,
            isAdmin: false,
            redirected: false,
            userId: 0,
            organic: 0,
            newspaper: 0,
            cardboard: 0,
            glas: 0,
            plastic: 0,
            metal: 0,
            residual: 0,
            email: ''
        }
    }

    getUser(id) {
        // console.log('id: ', id)
        Caller.get(`/${id}`, {})
        .then(res => {
            const user = res.data;
            // console.log('USER: ',user);
            this.setState({
                userId: user.id,
                organic: user.organic,
                newspaper: user.newspaper,
                cardboard: user.cardboard,
                glas: user.glas,
                plastic: user.plastic,
                metal: user.metal,
                residual: user.residual,
                email: user.email
            })
            console.log('OLD state.user: ',this.state.userId);
            })
        .catch(error => console.log(error));
    }

    getNewUser() {
        Caller.get(`?email`, {})
        .then(res => {
            const newUser = res.data[0];
            console.log('newUser: ',newUser);
            this.setState({
                userId: newUser.id,
                organic: newUser.organic,
                newspaper: newUser.newspaper,
                cardboard: newUser.cardboard,
                glas: newUser.glas,
                plastic: newUser.plastic,
                metal: newUser.metal,
                residual: newUser.residual
            })
            console.log('NEW state.user: ',this.state.userId);
        })
        .catch(error => console.log(error));
    }
    
    componentDidMount() {
        if(this.props.id !== undefined) {
            console.log('this.props.id: ', this.props.id)
            this.getUser(this.props.id);
        } else {
            this.getNewUser();
        }
    } 
    
    handleClick() {
        // console.log('Klick på GreenSway');
        if (this.props.username !==  undefined) {
            // console.log('App username: ', this.props.username)
            this.setState({
                newUser: false
            })
            if (this.state.role === 'admin') {
                // console.log('App role: ', this.props.role)
                    this.setState({
                    isAdmin: true
                })
            }
        }
        this.setState({
            clicked: true
        }) 
    }
    //TODO: email updated before nav-bar
    handleUpdate(role, email) {
        // console.log('App received email: ',email);
        this.setState({
            email: email,
            clicked: false,
            newUser: false,
            role: role
        })
        // console.log('App state email: ',this.state.email);
    }
    
    render() {
        // console.log('Inuti App.');
        return(
            this.state.clicked === true ?
            <>
            <Header  clicked={this.state.clicked}/>
                <Content>
                {
                this.state.newUser === true ? 
                    <UserForm handleUpdate={(email) => this.handleUpdate(email)} user={this.state.userId} userServices={this.props.userServices} fractions={this.props.fractions}/> 
                : 
                    <NavBar username={this.state.email} role={this.state.role} fractions={this.props.fractions}/>
                }
                </Content>
            </> 
            :
            <>
            <Header handleClick={() => this.handleClick()} clicked={this.state.clicked}/>
            <Content/>
            </>
        );
    }
}
