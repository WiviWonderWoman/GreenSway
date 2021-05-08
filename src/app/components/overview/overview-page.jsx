import React from "react";
import WasteChart from './waste-chart';
import PropTypes from "prop-types";
import LaudryChart from "./laudry-chart";

export default class OverviewPage extends React.Component {

    render() {
        return (
            <>
                <div className="overview">
                    <div className="pie-chart">
                        <WasteChart chartData={this.props.chartData} />
                    </div>
                    <div className="pie-chart">
                        <LaudryChart chartData={this.props.chartData} />
                    </div>
                </div>
            </>
        );
    }
}

OverviewPage.propTypes = {
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