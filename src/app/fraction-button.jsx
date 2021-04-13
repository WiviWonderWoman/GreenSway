import React from "react";
import { FractionDataService } from './services/fraction-data-services.js'
export default class FractionButton extends React.Component {

    handleClick() {
        console.log('Klick på FractionButton. Inuti handleClick.');
    }

    render() {
        console.log('Inuti FractionButton');
        let fractionDataService = new FractionDataService();
        fractionDataService.loadData();
        let allFractions = fractionDataService.allFractions;

        let allBtn = [];
        
        allFractions.forEach(element => {
            let btn = <li key={element.id} onClick={() => this.handleClick(btn.key)}><button className={element.id}>{element.source}</button></li>;
            console.log(btn.key)
            allBtn.push(btn);
        });
        return allBtn;
    }
}