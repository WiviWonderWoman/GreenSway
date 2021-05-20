import React from "react";
import PropTypes from "prop-types";
import Logo from "./logo";
import Menu from "./menu";
/** 
 * @class  @component
 * @classdesc stateless component for header content 
 */
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
    /**
     * Is Logo clicked
     */
    clicked: PropTypes.bool,
    /**
     * Is user new
     */
    newUser: PropTypes.bool,
    /**
     * Handel clicks on Logo
     */
    handleClick: PropTypes.func
}