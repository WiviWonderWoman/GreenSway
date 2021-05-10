import React from "react";
import {
    HashRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import DetailsPage from "../details/details-page";
import HomePage from "../home/home-page";
import KeyIdPage from "../key-id/key-id-page";
import OverviewPage from "../overview/overview-page";
import PropTypes from "prop-types";
import Logo from "./logo";

export default class Menu extends React.Component {

    render() {
        //variable for readability
        const id = this.props.id;

        return (
            <Router>
                <Logo text={'GreenSway'} className={'mini-container'} />
                <span className="intro">
                    VÄLKOMMEN: {this.props.username}!
                </span>
                <br />
                <hr></hr>
                <nav className="navbar navbar-dark bg-dark">
                    <div className="container-fluid">
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                    </div>
                </nav>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <div className="collapse" id="navbarToggleExternalContent">
                        <div>
                            <Link to={`/`} className="nav-item nav-link"><button>Hem</button></Link>
                        </div>
                        <div>
                            <Link to={`/overview/${id}`} className="nav-item nav-link"><button>Min översikt</button></Link>
                        </div>
                        <div>
                            <Link to={`/details/${id}`} className="nav-item nav-link"><button>Min förbrukning</button></Link>
                        </div>
                        <div>
                            <Link to={`/key-id/${id}`} className="nav-item nav-link"><button>Nyckel & Id</button></Link>
                        </div>
                    </div>
                </nav>
                <hr />
                <main>
                    <Switch>
                        <Route exact path={`/`}>
                            <HomePage />
                        </Route>
                        <Route exact path={`/overview/${id}`}>
                            <OverviewPage chartData={this.props.chartData} />
                        </Route>
                        <Route exact path={`/details/${id}`}>
                            <DetailsPage username={this.props.username} chartData={this.props.chartData} />
                        </Route>
                        <Route exact path={`/key-id/${id}`}>
                            <KeyIdPage />
                        </Route>
                    </Switch>
                </main>
            </Router>
        );
    }
}
Menu.propTypes = {
    id: PropTypes.number,
    username: PropTypes.string,
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
