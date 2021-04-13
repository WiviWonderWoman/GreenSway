import React from "react";
import './app.css';
import FractionButton from "./fraction-button";
import { FractionDataService } from "./services/fraction-data-services";

export default class NavList extends React.Component {

    render() {
        console.log('Inuti NavList');
        
        let fractionDataService = new FractionDataService();
        fractionDataService.loadData();
        let allFractions = fractionDataService.allFractions;

        return(
            <ul className="nav-list">
                <FractionButton fractions={allFractions}/>
            </ul>
        );
    }
}