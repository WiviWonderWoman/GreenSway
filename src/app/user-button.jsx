import React from "react";

export default class UserButton extends React.Component {

    render () {
        return(<button onClick={this.props.onClick}>{this.props.text}</button>);
    }
}