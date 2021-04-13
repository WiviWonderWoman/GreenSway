import React from "react";
import './app.css';
import FractionButton from "./fraction-button";

export default class NavList extends React.Component {

    render() {
        console.log('Inuti NavList');

        return(
            <ul className="nav-list">
                <FractionButton/>
            </ul>
        )
    }
}