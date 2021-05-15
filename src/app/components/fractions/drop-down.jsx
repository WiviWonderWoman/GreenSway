import React from "react";
import PropTypes from "prop-types";
import FractionButton from "./fraction-button";
import Table from "./table";
import { FractionDataService } from "../../features/fractions/fraction-data-services";

export default class DropDown extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            fraction: {},
            allFractions: [],
            isClicked: false,
            consumtionKey: ''
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
            consumtionKey: key
        });
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
            this.state.isClicked !== true ?
                <>
                    <nav className="flex.container">
                        <div className="nav-list">
                            <div className="dropdown">
                                <h5 className="user">Välj önskad fraktion i menyn nedanför:</h5>
                                <button className="btn btn-success dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                    Fraktioner
                                </button>
                                <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="dropdownMenuButton1">
                                    <FractionButton allFractions={this.state.allFractions} className="dropdown-item" onClick={(source) => this.handleFractionClick(source)} />
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
                                <h5 className="user">Välj önskad fraktion i menyn nedanför:</h5>
                                <button className="btn btn-success dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                    Fraktioner
                                </button>
                                <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="dropdownMenuButton1">
                                    <FractionButton allFractions={this.state.allFractions} className="dropdown-item" onClick={(source) => this.handleFractionClick(source)} />
                                </ul>
                            </div>
                        </div>
                    </nav>
                    <div className="table-spacer">
                        <Table chartData={this.props.chartData} fraction={this.state.fraction} />
                    </div>
                </>
        );
    }
}
DropDown.propTypes = {
    chartData: PropTypes.exact({
        organic: PropTypes.number,
        newspaper: PropTypes.number,
        cardboard: PropTypes.number,
        glas: PropTypes.number,
        plastic: PropTypes.number,
        metal: PropTypes.number,
        residual: PropTypes.number,
        electricity: PropTypes.number,
        water: PropTypes.number
    })
}