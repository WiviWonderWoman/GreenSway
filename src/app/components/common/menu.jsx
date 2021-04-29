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
                        <Link to={`/home/${this.props.id}`}><button>Hem</button></Link>
                    </li>
                    <li>
                        <Link to={`/overview/${this.props.id}`}><button>Min översikt</button></Link>
                    </li>
                    <li>
                        <Link to={`/details/${this.props.id}`}><button>Min förbrukning</button></Link>
                    </li>
                    <li>
                        <Link to={`/key-id/${this.props.id}`}><button>Nyckel & Id</button></Link>
                    </li>
                    </ul>
                   
                </nav>
                <main>
                    <Switch>
                        <Route path={`/home/${this.props.id}`}>
                            <Home/>
                        </Route>
                        <Route path={`/overview/${this.props.id}`}>
                            <Overview chartData={this.props.chartData}/>
                        </Route>
                        <Route path={`/details/${this.props.id}`}>
                            <Details username={this.props.username} role={this.props.role} />
                            {/* fractions={this.props.fractions} */}
                        </Route>
                        <Route path={`/key-id/${this.props.id}`}>
                            <KeyId/>
                        </Route>
                    </Switch>
                </main>
            </Router>
        )
    }
}
