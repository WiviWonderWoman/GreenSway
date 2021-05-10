import React from "react";
import Logo from "./logo";
import Menu from "./menu";
import PropTypes from "prop-types";
import { UserServices } from "../../services/user-services";

export default class Header extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            // returning user : new user
            <> {this.props.clicked === true || this.props.newUser === false ?
                <header>
                    <Menu id={this.props.id} chartData={this.props.chartData} username={this.props.username} />
                    <hr></hr>
                </header>
                :
                <header>
                    <Logo text={'Klicka här!'} className={'btn'} onClick={this.props.handleClick} username={this.props.username} userServices={this.props.userServices} />
                </header>}
            </>
        )
    }
}

Header.propTypes = {
    clicked: PropTypes.bool,
    newUser: PropTypes.bool,
    id: PropTypes.number,
    chartData: PropTypes.exact({
        organic: PropTypes.number,
        newspaper: PropTypes.number,
        cardboard: PropTypes.number,
        glas: PropTypes.number,
        plastic: PropTypes.number,
        metal: PropTypes.number,
        residual: PropTypes.number,
        electricity: PropTypes.number,
        water: PropTypes.number
    }),
    username: PropTypes.string,
    handleClick: PropTypes.func,
    userServices: PropTypes.instanceOf(UserServices)

}