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
                <Logo text={'GreenSway'} className={'btn2'} />
                <Menu/>
            </header> 
            :
            <header>
                <Logo text={'Klicka här!'} className={'btn'} onClick={this.props.handleClick} username={this.state.email} role={this.state.role} userServices={this.props.userServices} fractions={this.props.fractions}/>
            </header>}
            </>
        )
    }
}