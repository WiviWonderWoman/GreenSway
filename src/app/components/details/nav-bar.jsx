import React from "react";
import FractionButton from "./fraction-button";
import Table from "./table";
import { FractionDataService } from "./fractions/fraction-data-services";

export default class NavBar extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            fraction: {},
            isClicked: false,
            consumtion: ''
        }
    }

    handleFractionClick(source) {
        const fractionDataService = new FractionDataService();
        const fraction = fractionDataService.getFractionBySource(source);
        this.setState({
            isClicked: true,
            fraction: fraction
        });
    }

    handleConsumptionClick(key) {
        this.setState({
            isClicked: true,
            consumtion: key
        });
    }

    render() {
        return (
            this.state.isClicked !== true ?
                <>
                    <nav className="flex.container">
                        <ul className="nav-list">
                            <FractionButton onClick={(source) => this.handleFractionClick(source)} />
                        </ul>
                    </nav>
                </>
                :
                <>
                    <nav className="flex.container">
                        <ul className="nav-list">
                            <FractionButton chartData={this.props.chartData} onClick={(source) => this.handleFractionClick(source)} />
                        </ul>
                    </nav>
                    <div>
                        <Table chartData={this.props.chartData} fraction={this.state.fraction} consumtion={this.state.consumtion} />
                    </div>
                </>
        );
    }
}