import React from "react";
import ReactDOM from "react-dom";
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
        ReactDOM.render(<UserButton/>, document.getElementById("root"))
    }

    render() {
        return (
            <h1>ADMIN-SIDA KOMMER SNART!</h1>
        );
    }
}