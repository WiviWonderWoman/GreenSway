import React from "react";
import './app.css';
import App from "./app";

export default class AdminStatistics extends React.Component {

    // constructor() {
    //     super();

    // }

    // componentDidMount() {
        
    //     this.timer = setInterval(
    //         () => this.redirect(),
    //         5000
    //     );
    // }

    // componentWillUnmount() {
    //     clearInterval(this.timer);
    // }
      
    // redirect() {
    //     console.log('redirect');
    //     this.setState({
    //         isClicked: true
    //     });
        
    // }

    render() { 

        // console.log('AdminStatistics: ' + this.props.user.username)
        {/* <div className="admin"><h1 >OTÅLIG?? {this.props.username}!</h1><p >Kunde du inte låta bli...</p></div>  */}
        return (
            <div className="admin">
                <h1>Välkommen {this.props.username}!</h1>
                <h2 >ADMIN-SIDA KOMMER SNART!</h2>
            </div>
        );
    }

}