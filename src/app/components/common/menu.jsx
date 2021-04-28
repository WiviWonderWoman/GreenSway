import React from "react";
import { 
    HashRouter as Router,
    Switch,
    Route,
    Link 
  } from "react-router-dom";
import Details from "../details/details";
import Home from "../home/home";
import KeyId from "../key-id/key-id";
import Overview from "../overview/overview";

export default class Menu extends React.Component {

    render() {
        return(
            <Router>
                <nav className="flex.container">
                    <span className="intro">VÄLKOMMEN: {this.props.username} !</span><br/>
                    <ul className="nav-list">
                    <li>
                        <Link to="/home"><button>Hem</button></Link>
                    </li>
                    <li>
                        <Link to="/overview"><button>Min översikt</button></Link>
                    </li>
                    <li>
                        <Link to="/details"><button>Min förbrukning</button></Link>
                    </li>
                    <li>
                        <Link to="/key-id"><button>Nyckel & Id</button></Link>
                    </li>
                    </ul>
                </nav>
                <main>
                    <Switch>
                        <Route path="/home">
                            <Home/>
                        </Route>
                        <Route path="/overview">
                            <Overview chartData={this.props.chartData}/>
                        </Route>
                        <Route path="/details">
                            <Details username={this.props.username} role={this.props.role} fractions={this.props.fractions}/>
                        </Route>
                        <Route path="/key-id">
                            <KeyId/>
                        </Route>
                    </Switch>
                </main>
            </Router>
        )
    }
}