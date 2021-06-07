import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import FractionsButton from "./fractions-button";
import Table from "./table";
import { getFractions } from "../../state/actions";
/** 
 * @component DropDown stateful HOC component 
 * for displaying a drop-down of fractiosButtons and tables with cost.
 */
class DropDown extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            fraction: {},
            isClicked: false
        }
    }
    //handles click on the fraction, finds the right fraction.
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
        //Conditinal rendering: if button clicked 
        return (
            this.state.isClicked !== true ?
                <>
                    <nav className="flex.container">
                        <div className="nav-list">
                            <div className="dropdown">
                                <h3 className="user">Välj fraktion i menyn nedanför för att se detaljer:</h3>
                                <hr />
                                <button className="btn btn-success dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
                                    Fraktioner
                                </button>
                                <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="dropdownMenuButton">
                                    <FractionsButton className="dropdown-item" allFractions={this.props.fractions} onClick={(source) => this.handleFractionClick(source)} />
                                </ul>
                            </div>

                        </div>
                    </nav>
                    <div className="user">
                        <hr />
                        <p ><span>Kommande features:</span></p>
                        <ul className='home-list'>
                            <li>- översikt av totalkostnader för månads- och årsvy</li>
                        </ul>
                    </div>
                </>
                :
                <>
                    <nav className="flex.container">
                        <div className="nav-list">
                            <div className="dropdown">
                                <h3 className="user">Välj fraktion i menyn nedanför för att se detaljer:</h3>
                                <hr />
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
    garbagehouse: PropTypes.number,
    chartData: PropTypes.object,
    fractions: PropTypes.array,
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