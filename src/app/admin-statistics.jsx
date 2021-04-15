import React from "react";
import "./app.css";


export default class AdminStatistics extends React.Component {

    render() { 
        // console.log('AdminStatistics: ' + this.props.user.username)
        return (
            <div className="admin">
                <h1>Välkommen {this.props.username}!</h1>
                <h2 >ADMIN-SIDA KOMMER SNART!</h2>
            </div>
        );
    }
}