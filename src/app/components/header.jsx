import React from "react";
import PropTypes from "prop-types";
import Logo from "./logo";
import Menu from "./menu";

export default class Header extends React.Component {

    render() {
        return (
            // returning user : new user
            <> {this.props.clicked === true || this.props.newUser === false ?
                <header>
                    <Menu />
                </header>
                :
                <header>
                    <Logo text={'Klicka här!'} className={'btn'} onClick={this.props.handleClick} />
                </header>}
            </>
        )
    }
}
Header.propTypes = {
    clicked: PropTypes.bool,
    newUser: PropTypes.bool,
    handleClick: PropTypes.func
}