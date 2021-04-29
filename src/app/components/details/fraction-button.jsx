import React from "react";

import { FractionDataService } from "./fractions/fraction-data-services";

export default class FractionButton extends React.Component {

    
    constructor() {
        super();
        this.state = {
            // isClicked: false,
            // allFractions: []
        };
    }
    componentDidMount() {
        

    }
    handleClick(source) {
        // console.log('FractionButtons handleClick. Klick på ' + source );
        
        // this.setState({
        //     isClicked: !this.state.isClicked,
        // });
        
        this.props.onClick(source)
    }

    render() {
        
        // console.log(allFractions);
        // if (this.props.className === 'clicked') {
        //     return (
        //         this.props.fractions.map((element) =>   
        //         <li key={element.id} ><button className={'clicked'}>{element.source}</button></li>)
        //     );
        // }
        const fractionDataService = new FractionDataService();
        fractionDataService.loadData();
        const allFractions = fractionDataService.allFractions;
        return (
            // this.state.isClicked !== true ?
            //  <Table/> : <></>
            allFractions.map((element) => 
            // <li key={element.id} onClick={() => this.handleClick(element.source)}><div className={element.id}><p>Förbrukning</p><p>{element.name}</p><Table/></div></li>
            <li key={element.id} onClick={() => this.handleClick(element.source)}><button className={element.id}>{element.name}</button></li>)
        );
    }
}