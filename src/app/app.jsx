import React from "react";
import './app.css';
import Logo from './logo.jsx';

export default class App extends React.Component {

    render() {
        console.log('Inuti App');
        return(
            <div>
                <Logo />
            </div>
        )
    }
}