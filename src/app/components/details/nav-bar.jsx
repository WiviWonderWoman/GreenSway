import React from "react";
import FractionButton from "./fraction-button";
import Table from "./table";
import { FractionDataService } from "./fractions/fraction-data-services";

export default class NavBar extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            fraction: {},
            isClicked: false
        }
    }

    handleClick(source) {
        const fractionDataService = new FractionDataService();
        const fraction = fractionDataService.getFractionBySource(source);
        this.setState({
            isClicked: true,
            fraction: fraction
        });
    }

    render() {
        return (
            this.state.isClicked !== true ?
                <>
                    <nav className="flex.container">
                        <ul className="nav-list">
                            <FractionButton onClick={(source) => this.handleClick(source)} />
                        </ul>
                    </nav>
                </>
                :
                <>
                    <nav className="flex.container">
                        <ul className="nav-list">
                            <FractionButton onClick={(source) => this.handleClick(source)} />
                        </ul>
                    </nav>
                    <div>
                        <Table chartData={this.props.chartData} fraction={this.state.fraction} />
                    </div>
                </>
        );
    }
}