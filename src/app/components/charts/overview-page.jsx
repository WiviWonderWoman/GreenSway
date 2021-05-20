import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import "./overview.css";
import WasteChart from './waste-chart';
import LaudryChart from "./laudry-chart";
import Loading from "../loading";
/** 
 * @class @component
 * @classdesc stateless HOC component for displaying pie-charts over users consumption.
 */
class OverviewPage extends React.Component {

    render() {
        /**
         * @description
         * Conditinal rendering:
         * if API call isLoading
         */
        if (this.props.isloading) {
            return (
                <>
                    <div className="overview">
                        <div className="loading">
                            <Loading />
                        </div>
                        <div className="loading">
                            <Loading />
                        </div>
                    </div>
                </>
            );
        }
        return (
            <>
                <div className="overview">
                    <div className="pie-chart">
                        <WasteChart chartData={this.props.chartData} />
                    </div>
                    <div className="pie-chart">
                        <LaudryChart water={this.props.water} electricity={this.props.electricity} />
                    </div>
                </div>
            </>
        );
    }
}
OverviewPage.propTypes = {
    /**
     * Object with data that is passed to WasteChart
     */
    chartData: PropTypes.object,
    /**
     * Data that is passed to LaundryChart
     */
    electricity: PropTypes.number,
    /**
     * Checks if API call isLoading
     */
    isloading: PropTypes.bool,
    /**
     * Data that is passed to LaundryChart
     */
    water: PropTypes.number
}
const mapStateToProps = (state) => {
    console.log(state)
    return {
        isloading: state.apiIsLoadingUser,
        chartData: {
            organic: state.user.organic,
            newspaper: state.user.newspaper,
            cardboard: state.user.cardboard,
            glas: state.user.glas,
            plastic: state.user.plastic,
            metal: state.user.metal,
            residual: state.user.residual,
        },
        electricity: state.user.electricity,
        water: state.user.water
    }
}
export default connect(mapStateToProps)(OverviewPage)