import React from "react";
import Logo from "./logo";

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
            </header> 
            :
            <header>
                <Logo text={'Klicka här!'} className={'btn'} onClick={this.props.handleClick} username={this.state.email} role={this.state.role} userServices={this.props.userServices} fractions={this.props.fractions}/>
            </header>}
            </>
        )
    }
}