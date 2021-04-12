import React from "react";
import './app.css';
import Logo from './logo.jsx';

export default class App extends React.Component {

    render() {
        console.log('Inuti App');
        return(
            <div>
                <Logo />
                <h1>HEY from app.jsx!</h1>
            </div>
        )
    }
}