import React from "react";
import { FractionDataService } from "./fractions/fraction-data-services";

export default class FractionButton extends React.Component {

    constructor(props) {
        super(props);
    }

    handleClick(source) {
        this.props.onClick(source)
    }

    render() {
        const fractionDataService = new FractionDataService();
        fractionDataService.loadData();
        const allFractions = fractionDataService.allFractions;

        return (
            allFractions.map((element) => 
            <li key={element.id} onClick={() => this.handleClick(element.source)}><button className={element.id}>{element.name}</button></li>)
        );
    }
}