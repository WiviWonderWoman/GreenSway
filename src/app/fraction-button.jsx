import React from "react";
import { FractionDataService } from './services/fraction-data-services.js'
export default class FractionButton extends React.Component {

    handleClick(key) {
        console.log('Inuti handleClick: klick på FractionButton: ' + key );
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