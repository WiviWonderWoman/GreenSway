import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import FractionsButton from "./fractions-button";
import Table from "./table";
import { getFractions } from "../../state/actions";


class DropDown extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            fraction: {},
            isClicked: false
        }
    }

    handleFractionClick(source) {
        const fraction = this.props.fractions.find((f) => f.source === source);
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
        this.props.getFractions(this.props.garbagehouse);
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
                                    <FractionsButton allFractions={this.props.fractions} className="dropdown-item" onClick={(source) => this.handleFractionClick(source)} />
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
                                    <FractionsButton allFractions={this.props.fractions} className="dropdown-item" onClick={(source) => this.handleFractionClick(source)} />
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
    garbagehouse: PropTypes.string,
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
    }),
    fractions: PropTypes.array
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