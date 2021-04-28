import React from "react";
import NavBar from "./nav-bar";

export default class Details extends React.Component {

    render() {
        return(
            <NavBar role={this.props.role} fractions={this.props.fractions}/>
        )
    }
}