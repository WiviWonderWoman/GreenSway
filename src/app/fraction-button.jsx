import React from "react";
import './app.css';

export default class FractionButton extends React.Component {

    handleClick(key) {
        console.log('Klick på ' + key );
    }

    render() {
        console.log('Inuti FractionButton');

        return (
            this.props.fractions.map((f) => <li key={f.id} onClick={() => this.handleClick(f.id)}><button className={f.id}>{f.source}</button></li>)
        );
    }
}