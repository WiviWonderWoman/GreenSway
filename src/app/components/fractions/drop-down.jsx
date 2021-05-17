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
        if (this.props.errorMessage === '') {
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
                                        <FractionsButton allFractions={this.props.fractions} className="dropdown-item" onClick={(source) => this.handleFractionClick(source)} />
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
                                        <FractionsButton allFractions={this.props.fractions} className="dropdown-item" onClick={(source) => this.handleFractionClick(source)} />
                                    </ul>
                                </div>
                            </div>
                        </nav>
                        <Table chartData={this.props.chartData} fraction={this.state.fraction} />

                    </>
            );
        }
    }
}
DropDown.propTypes = {
    isLoading: PropTypes.bool,
    errorMessage: PropTypes.string,
    garbagehouse: PropTypes.string,
    chartData: PropTypes.object,
    fractions: PropTypes.array
}
const mapStateToProps = (state) => {
    return {
        isLoading: state.apiIsLoadingFractions,
        errorMessage: state.fractionErrorMessage,
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