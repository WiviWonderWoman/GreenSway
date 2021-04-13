import React from "react";

export default class FractionButton extends React.Component {

    handleClick() {
        console.log('Klick på FractionButton');
    }

    render() {
        console.log('Inuti FractinButton');

        return(
            <li><button onClick={() => this.handleClick()}>list-test</button></li>
        )
    }
}