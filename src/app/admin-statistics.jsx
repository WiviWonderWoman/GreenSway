import React from "react";
import './app.css';

export default class AdminStatistics extends React.Component {

    constructor() {
        super();
        this.state = {
            isClicked: false
        };
    }

    // handleClick() {

       
    // }

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
        console.log('redirect');
        this.setState({
            isClicked: !this.state.isClicked
        });
        // let root = document.getElementById("root");
        // ReactDOM.render(<UserButton clicked={true}/>, root);
    }

    render() { 

        // console.log('AdminStatistics: ' + this.props.user.username)
        return (
            <div>
                {this.state.isClicked === true ? 
                <div className="admin"><h1 >OTÅLIG?? {this.props.username}!</h1><p >Kunde du inte låta bli...</p></div> : 
                <div className="admin"><h1>Välkommen {this.props.username}!</h1><h1 >ADMIN-SIDA KOMMER SNART!</h1><p>(klicka inte ;))</p></div>}
            </div>
        );
    }

}