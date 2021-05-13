import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import NavBar from "./nav-bar";

export class DetailsPage extends React.Component {

    render() {
        return (<NavBar chartData={this.props.chartData} />);
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
function mapStateToProps(state) {
    console.log('mapStateToProps: ', state.user.user.organic, ' ', state.user.user.water)
    return {
        chartData: {
            organic: state.user.user.organic,
            newspaper: state.user.user.newspaper,
            cardboard: state.user.user.cardboard,
            glas: state.user.user.glas,
            plastic: state.user.user.plastic,
            metal: state.user.user.metal,
            residual: state.user.user.residual,
            electricity: state.user.user.electricity,
            water: state.user.user.water
        }
    }
}

export default connect(mapStateToProps)(DetailsPage)