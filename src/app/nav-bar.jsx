import React from "react";
import './app.css';
import FractionButton from "./fraction-button";

export default class NavBar extends React.Component {

    
    render () {
        return(
            <>
                <h1>Välkommen {this.props.username}!</h1>
                <nav className="flex.container">
                    <ul className="nav-list">
                        <FractionButton fractions={this.props.fractions}/>
                    </ul>
                </nav>
            </>
        );
    }

}