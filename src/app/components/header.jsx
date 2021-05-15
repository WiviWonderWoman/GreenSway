import React from "react";
import Logo from "./logo";
import Menu from "./menu";
import PropTypes from "prop-types";

export default class Header extends React.Component {

    render() {
        return (
            // returning user : new user
            <> {this.props.clicked === true || this.props.newUser === false ?
                <header>
                    <Menu id={this.props.id} username={this.props.username} />
                    <hr />
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
    id: PropTypes.number,
    username: PropTypes.string,
    handleClick: PropTypes.func
}