import React from "react";
import { FractionDataService } from "./fractions/fraction-data-services";
import PropTypes from "prop-types";

export default class FractionButton extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            allFractions: []
        }
    }

    handleClick(source) {
        this.props.onClick(source);
    }

    componentDidMount() {
        const fractionDataService = new FractionDataService();
        fractionDataService.loadData();
        const allFractions = fractionDataService.allFractions;
        this.setState({
            allFractions: allFractions
        });
    }

    render() {
        return (
            <>
                {this.state.allFractions.map((element) =>
                    <li key={element.id} onClick={() => this.handleClick(element.source)}><button className={element.id}>{element.name}</button></li>)}
            </>
        );
    }
}
FractionButton.propTypes = {
    onClick: PropTypes.func
}