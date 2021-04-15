import React from "react";
import ReactDOM from "react-dom";
import logo from './images/recycle.png';
import './app.css';
import UserForm from './user-form'

export default class Logo extends React.Component {

    constructor() {
        super();
        this.state = {
            clicked: false
        }
    }
    // check localStorage

    handelClick(){
        console.log('Klick på GreenSway');
        this.setState({
            clicked: true
        })
        // conditional rendering depending on localStorage
        // UserForm
        // AdminStatistics OR NavBar
        // let root = document.getElementById("root")
        // ReactDOM.render(<UserButton />, root);
 
    }
    
    render() {
        // console.log('Inuti Logo');
        return(
            this.state.clicked === true ? <UserForm /> :
            <div className="container">
                <img src={logo} className="App-logo" alt="recycle-logo"/>
                <button className="btn" onClick={() => this.handelClick()}>GreenSway</button>
            </div>
        )
    }
}