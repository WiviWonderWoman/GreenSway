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
                        <div className="nav-list">
                            <div className="dropdown">
                                <h5>Välj önskad fraktion i menyn nedanför:</h5>
                                <button className="btn btn-success dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                    Fraktioner
                                </button>

                                <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="dropdownMenuButton1">
                                    <FractionButton className="dropdown-item" onClick={(source) => this.handleFractionClick(source)} />
                                </ul>

                            </div>
                            <div className="spacer"></div>
                        </div>
                    </nav>

                </>
                :
                <>
                    <nav className="flex.container">
                        <div className="nav-list">
                            <div className="dropdown">
                                <h5>Välj önskad fraktion i menyn nedanför:</h5>
                                <button className="btn btn-success dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                    Fraktioner
                                </button>

                                <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="dropdownMenuButton1">
                                    <FractionButton className="dropdown-item" chartData={this.props.chartData} onClick={(source) => this.handleFractionClick(source)} />
                                </ul>

                            </div>
                        </div>
                    </nav>
                    <div className="spacer">
                        <Table chartData={this.props.chartData} fraction={this.state.fraction} consumtion={this.state.consumtion} />
                    </div>
                </>
        );
    }
}