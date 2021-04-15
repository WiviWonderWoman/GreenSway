import React from "react";

export default class UserButton extends React.Component {

    constructor(props) {
        super(props);
    }

    render () {
        //console.log(this.props.userServices)
        return(<button onClick={this.props.onClick}>{this.props.text}</button>);
    }
}