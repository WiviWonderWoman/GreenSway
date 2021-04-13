import React from "react";
import './app.css';

export default class NavBar extends React.Component {
    render () {
        console.log('Inuti NavBar');

        return(
            <nav className="flex.container">
                <p>NAV-BAR</p>
            </nav>
        )
    }
}