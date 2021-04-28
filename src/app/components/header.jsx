import React from "react";
import Logo from "./logo";
import Menu from "./menu";

export default class Header extends React.Component {

    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return(
            <> {this.props.clicked === true ?
            <header>
                <Logo text={'GreenSway'} className={'mini-container'} />
                <Menu username={this.props.username}/>
            </header> 
            :
            <header>
                <Logo text={'Klicka här!'} className={'btn'} onClick={this.props.handleClick} username={this.props.username} role={this.props.role} userServices={this.props.userServices} fractions={this.props.fractions}/>
            </header>}
            </>
        )
    }
}