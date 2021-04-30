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
        //variable for readability
        const id = this.props.id;

        return(
            <Router>
                <nav className="flex.container">
                    <span className="intro">VÄLKOMMEN: {this.props.username} !</span><br/>
                    <ul className="nav-list">
                    <li>
                        <Link to={`/home/${id}`}><button>Hem</button></Link>
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
                        <Route exact path={`/home/${id}`}>
                            <Home/>
                        </Route>
                        <Route exact path={`/overview/${id}`}>
                            <Overview chartData={this.props.chartData}/>
                        </Route>
                        <Route exact path={`/details/${id}`}>
                            <Details username={this.props.username} />
                        </Route>
                        <Route exact path={`/key-id/${id}`}>
                            <KeyId/>
                        </Route>
                    </Switch>
                </main>
            </Router>
        );
    }
}
