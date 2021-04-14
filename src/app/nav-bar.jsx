import React from "react";
import './app.css';
import NavList from "./nav-list";


export default class NavBar extends React.Component {

    render () {
        // console.log('Inuti NavBar');

        return(
            <nav className="flex.container">
                <NavList username={this.props.username}/>
            </nav>
        );
    }
}