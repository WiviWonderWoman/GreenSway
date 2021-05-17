import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

class MenuLinks extends React.Component {

    render() {
        //variable for readability
        const id = this.props.id;
        return (
            <>
                <div className="navbar-nav">
                    <Link to={`/`} className="nav-item nav-link"><p className="menu-link">Hem</p></Link>
                </div>
                <div className="navbar-nav">
                    <Link to={`/laundry/${id}`} className="nav-item nav-link"><p className="menu-link">Boka tvättstuga</p></Link>
                </div>
                <div className="navbar-nav">
                    <Link to={`/overview/${id}`} className="nav-item nav-link"><p className="menu-link">Förbrukning</p></Link>
                </div>
                <div className="navbar-nav">
                    <Link to={`/details/${id}`} className="nav-item nav-link"><p className="menu-link">Kostnad</p></Link>
                </div>
                <div className="navbar-nav">
                    <Link to={`/key-id/${id}`} className="nav-item nav-link"><p className="menu-link">Nyckel & Id</p></Link>
                </div>
            </>
        )
    }
}
MenuLinks.propTypes = {
    id: PropTypes.number,
}
const mapStateToProps = (state) => {
    // console.log('redux state: ', state);
    return {
        id: state.user.id,
    }
}
export default connect(mapStateToProps)(MenuLinks)