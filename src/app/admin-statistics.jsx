import React from "react";
import ReactDOM from "react-dom";
import './app.css';
import UserButton from './user-button.jsx';

export default class AdminStatistics extends React.Component {

    constructor() {
        super();
        this.state = {
            isClicked: false
        };
    }

    handleClick() {
        console.log('Admin handleClick');

        this.setState({
            isClicked: !this.state.isClicked
        });
    }

    componentDidMount() {
        this.timer = setInterval(
            () => this.redirect(),
            5000
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
            <div>
                {this.state.isClicked === true ? <h1 className="clicked" onClick={() => this.handleClick()}>OTÅLIG??</h1> : <h1 onClick={() => this.handleClick()}>ADMIN-SIDA KOMMER SNART!</h1>}
            </div>
        );
    }
}