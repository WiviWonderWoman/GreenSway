import React from "react";
import NavBar from "./nav-bar";

export default class Menu extends React.Component {

    render() {
        return(
            <nav className="flex.container">
                <button>Registrera</button>
                <button>Översikt</button>
                <button>Detaljer</button>
            </nav>
        )
    }
}