import React from "react";
import './app.css';

export default class FractionButton extends React.Component {

    constructor() {
        super();
        this.state = {
            isClicked: false
        };
    }

    handleClick(key) {
        // console.log('FractionButtons handleClick. Klick på ' + key );
        this.setState({
            isClicked: !this.state.isClicked
        });
    }

    render() {

        return (
            this.props.fractions.map((element) => this.state.isClicked === true ? 
            <li key={element.id} onClick={() => this.handleClick(element.id)}><div className={element.id}><p>Förbrukning</p><p>{element.source}</p></div></li> :  
            <li key={element.id} onClick={() => this.handleClick(element.id)}><button className={element.id}>{element.source}</button></li>)
        );
    }
}