import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import "./overview.css";
import WasteChart from './waste-chart';
import LaudryChart from "./laudry-chart";
import Loading from "../loading";
/** 
 * @component OverviewPage is a stateless HOC component for displaying pie-charts over users consumption.
 */
class OverviewPage extends React.Component {

    render() {
        //Conditinal rendering: if API call isLoading
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
                    <p className="user"><hr /><span>Kommande features:</span> Stapeldiagram per fraktioner över tid</p>
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
                <p className="user"><hr /><span>Kommande features:</span> Stapeldiagram per fraktioner över tid</p>
            </>
        );
    }
}
OverviewPage.propTypes = {
    chartData: PropTypes.object,
    electricity: PropTypes.number,
    isloading: PropTypes.bool,
    water: PropTypes.number
}
const mapStateToProps = (state) => {
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