import React from "react";
// import "./app.css";
import FractionButton from "./fraction-button";

export default class NavBar extends React.Component {

    constructor(props) {
        super(props);
        this.state= {
            isAdmin: false
        }
    }

    componentDidMount() {

        if (this.props.role === 'admin') {
            this.setState({
                isAdmin: true
            })
        }
    }
    render () {
        return(
            this.state.isAdmin !== true ?
            <>
            <div className="user">
                    <h1>Välkommen {this.props.username}!</h1>
                </div>
                <nav className="flex.container">
                    <ul className="nav-list">
                        {this.props.children}
                        <FractionButton fractions={this.props.fractions}/>
                    </ul>
                </nav>
            </>
            :
            <>
                <div className="admin">
                    <h1>Välkommen {this.props.username}!</h1>
                </div>
                <nav className="flex.container">
                    <ul className="nav-list">
                        {this.props.children}
                        <FractionButton className="clicked" fractions={this.props.fractions}/>
                    </ul>
                </nav>
            </>
        );
    }
}