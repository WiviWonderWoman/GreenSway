import React from "react";
import './app.css';
import Logo from './logo.jsx';
import UserForm from "./user-form";

export default class App extends React.Component {

    
    render() {
        console.log('Inuti App');
        return(
            <div>
                <Logo username={this.props.username} role={this.props.role} userServices={this.props.userServices}/>
                {/* move to logo */}
            </div>
        );
    }
}

