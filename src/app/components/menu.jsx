import React from "react";

export default class Menu extends React.Component {

    render() {
        return(
            <nav className="flex.container">
                <button>Översikt</button>
                <button>Detaljer</button>
                <button>Nyckel</button>
                <span className="intro">VÄLKOMMEN: {this.props.username} !</span>
            </nav>
        )
    }
}