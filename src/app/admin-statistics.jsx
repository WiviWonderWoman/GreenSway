import React from "react";
import ReactDOM from "react-dom";
import './app.css';
import UserButton from './user-button.jsx';

export default class AdminStatistics extends React.Component {

    componentDidMount() {
        this.timer = setInterval(
            () => this.redirect(),
            2000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timer);
      }
      
    redirect() {
        let root = document.getElementById("root");
        ReactDOM.render(<UserButton clicked={true}/>, root);
    }

    render() {
        return (
            <h1>ADMIN-SIDA KOMMER SNART!</h1>
        );
    }
}