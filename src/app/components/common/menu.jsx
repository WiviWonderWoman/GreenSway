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

export default class Menu extends React.Component {

    render() {
        //variable for readability
        const id = this.props.id;

        return(
            <Router>
                <nav className="flex.container">
                    <span className="intro">VÄLKOMMEN: {this.props.username} !</span><br/>
                    <ul className="nav-list">
                    <li>
                        <Link to={`/`}><button>Hem</button></Link>
                    </li>
                    <li>
                        <Link to={`/overview/${id}`}><button>Min översikt</button></Link>
                    </li>
                    <li>
                        <Link to={`/details/${id}`}><button>Min förbrukning</button></Link>
                    </li>
                    <li>
                        <Link to={`/key-id/${id}`}><button>Nyckel & Id</button></Link>
                    </li>
                    </ul>
                   
                </nav>
                <main>
                    <Switch>
                        <Route exact path={`/`}>
                            <HomePage/>
                        </Route>
                        <Route exact path={`/overview/${id}`}>
                            <OverviewPage chartData={this.props.chartData}/>
                        </Route>
                        <Route exact path={`/details/${id}`}>
                            <DetailsPage username={this.props.username} />
                        </Route>
                        <Route exact path={`/key-id/${id}`}>
                            <KeyIdPage/>
                        </Route>
                    </Switch>
                </main>
            </Router>
        );
    }
}
