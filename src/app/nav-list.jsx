import React from "react";
import './app.css';

export default class NavList extends React.Component {

    render() {
        console.log('Inuti NavList');

        return(
            <ul className="nav-list">
                <li>list-test</li>
                <li>list-test</li>
                <li>list-test</li>
                <li>list-test</li>
            </ul>
        )
    }
}