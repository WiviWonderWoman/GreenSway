import React from "react";
import './app.css';
import Logo from './logo.jsx';
import UserForm from "./user-form";

export default class App extends React.Component {

    
    render() {
        // console.log('Inuti App');
        return(
            <div>
                <Logo />
                {/* move to logo */}
                <UserForm />
            </div>
        );
    }
}