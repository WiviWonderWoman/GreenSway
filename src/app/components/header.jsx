import React from "react";
import PropTypes from "prop-types";
import Logo from "./logo";
import Menu from "./menu";
/** 
 * @component Header is a stateless component for header content 
 */
export default class Header extends React.Component {

    render() {
        return (
            //Conditinal rendering: if button is clicked and not new user
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