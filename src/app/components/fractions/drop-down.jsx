import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import FractionsButton from "./fractions-button";
import Table from "./table";
import { getFractions } from "../../state/actions";
/** 
 * @class @component
 * @classdesc DropDown stateful HOC component 
 * for displaying a drop-down of fractiosButtons and tables with cost.
 */
class DropDown extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            /**
             * @param {bool} state.fraction 
             * keeps track of clicked fraction
             */
            fraction: {},
            /**
             * @param {bool} state.clicked 
             * keeps track of click on button
             */
            isClicked: false
        }
    }
    /**
     * @method that handles click on the fraction, finds the right fraction.
     */
    handleFractionClick(source) {
        const fraction = this.props.fractions.find((f) => f.source === source);
        this.setState({
            isClicked: true,
            fraction: fraction
        });
    }

    componentDidMount() {
        this.props.getFractions(this.props.garbagehouse);
    }

    render() {
        /**
         * @description
         * Conditinal rendering:
         * if button clicked 
         */
        return (
            this.state.isClicked !== true ?
                <>
                    <nav className="flex.container">
                        <div className="nav-list">
                            <div className="dropdown">
                                <h5 className="user">Välj önskad fraktion i menyn nedanför:</h5>
                                <button className="btn btn-success dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
                                    Fraktioner
                                </button>
                                <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="dropdownMenuButton">
                                    <FractionsButton className="dropdown-item" allFractions={this.props.fractions} onClick={(source) => this.handleFractionClick(source)} />
                                </ul>
                            </div>
                        </div>
                    </nav>
                </>
                :
                <>
                    <nav className="flex.container">
                        <div className="nav-list">
                            <div className="dropdown">
                                <h5 className="user">Välj önskad fraktion i menyn nedanför:</h5>
                                <button className="btn btn-success dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
                                    Fraktioner
                                </button>
                                <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="dropdownMenuButton">
                                    <FractionsButton className="dropdown-item" allFractions={this.props.fractions} onClick={(source) => this.handleFractionClick(source)} />
                                </ul>
                            </div>
                        </div>
                    </nav>
                    <Table chartData={this.props.chartData} fraction={this.state.fraction} />

                </>
        );
    }
}
DropDown.propTypes = {
    /**
     * Number representing what garbagehouse user belongs to
     */
    garbagehouse: PropTypes.number,
    /**
     * Object with data that is passed to Table
     */
    chartData: PropTypes.object,
    /**
     * All fractions from users garbagehouse
     */
    fractions: PropTypes.array,
    /**
     * Gets fractions from users garbagehouse. Dispatches getFractions(garbagehouse). 
     */
    getFractions: PropTypes.func,
}
const mapStateToProps = (state) => {
    return {
        garbagehouse: state.user.garbagehouse,
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
        },
        fractions: state.fractions
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        getFractions: (garbagehouse) => dispatch(getFractions(garbagehouse))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(DropDown)