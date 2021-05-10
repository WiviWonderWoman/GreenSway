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
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <div className="container-fluid">
                        <div >
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" data-bs-auto-close="true" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                        </div>
                        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                            <div className="navbar-nav me-auto mb-2 mb-lg-0">
                                <div className="navbar-nav">
                                    <Link to={`/`} className="nav-item nav-link"><p className="menu-link">Hem</p></Link>
                                </div>
                                <div className="navbar-nav">
                                    <Link to={`/overview/${id}`} className="nav-item nav-link"><p className="menu-link">Min översikt</p></Link>
                                </div>
                                <div className="navbar-nav">
                                    <Link to={`/details/${id}`} className="nav-item nav-link"><p className="menu-link">Min förbrukning</p></Link>
                                </div>
                                <div className="navbar-nav">
                                    <Link to={`/key-id/${id}`} className="nav-item nav-link"><p className="menu-link">Nyckel & Id</p></Link>
                                </div>
                            </div>
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
