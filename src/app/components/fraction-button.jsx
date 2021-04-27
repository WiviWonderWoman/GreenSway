import React from "react";
import Table from "./table";

export default class FractionButton extends React.Component {

    constructor() {
        super();
        this.state = {
            isClicked: false,
            
        };
    }
     //TODO: lift up state to nav-bar
    handleClick(key) {
        // console.log('FractionButtons handleClick. Klick på ' + key );
        this.setState({
            isClicked: !this.state.isClicked,
            source: key
        });
    }

    render() {
        if (this.props.className === 'clicked') {
            return (
                this.props.fractions.map((element) =>   
                <li key={element.id} ><button className={'clicked'}>{element.source}</button></li>)
            );
        }
        return (
            this.props.fractions.map((element) => this.state.isClicked === true ?
            <li key={element.id} onClick={() => this.handleClick(element.source)}><div className={element.id}><p>Förbrukning</p><p>{element.source}</p></div></li>
            :  
            <li key={element.id} onClick={() => this.handleClick(element.source)}><button className={element.id}>{element.source}</button></li>)
        );
    }
}