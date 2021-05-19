import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import "./overview.css";
import WasteChart from './waste-chart';
import LaudryChart from "./laudry-chart";
import Loading from "../loading";

class OverviewPage extends React.Component {

    render() {
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
    chartData: PropTypes.object,
    electricity: PropTypes.number,
    isloading: PropTypes.bool,
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