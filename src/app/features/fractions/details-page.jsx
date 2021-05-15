import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import DropDown from "./drop-down";

class DetailsPage extends React.Component {

    render() {
        return (<DropDown chartData={this.props.chartData} />);
    }
}
DetailsPage.propTypes = {
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
const mapStateToProps = (state) => {
    return {
        chartData: {
            organic: state.user.organic,
            newspaper: state.user.newspaper,
            cardboard: state.user.cardboard,
            glas: state.user.glas,
            plastic: state.user.plastic,
            metal: state.user.metal,
            residual: state.user.residual,
            electricity: state.user.electricity,
            water: state.user.water
        }
    }
}

export default connect(mapStateToProps)(DetailsPage)