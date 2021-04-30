import React from "react";
import Logo from "./logo";
import Menu from "./menu";

export default class Header extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return(
            // returning user : new user
            <> {this.props.clicked === true || this.props.newUser === false ?
            <header>
                <Logo text={'GreenSway'} className={'mini-container'} />
                <Menu id={this.props.id} chartData={this.props.chartData} username={this.props.username} />    
            </header> 
            :
            <header>
                <Logo text={'Klicka här!'} className={'btn'} onClick={this.props.handleClick} username={this.props.username} userServices={this.props.userServices} />
            </header>}
            </>
        )
    }
}