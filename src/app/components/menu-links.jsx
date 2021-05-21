import React from "react";
import { Link } from "react-router-dom";
/** 
 * MenuLinks is a stateless component for menu-links, with react-router-dom component: Link
 * @component 
 */
export default class MenuLinks extends React.Component {

    render() {
        return (
            <>
                <div className="navbar-nav">
                    <Link to={`/`} className="nav-item nav-link"><p className="menu-link">Hem</p></Link>
                </div>
                <div className="navbar-nav">
                    <Link to={`/laundry`} className="nav-item nav-link"><p className="menu-link">Boka tvättstuga</p></Link>
                </div>
                <div className="navbar-nav">
                    <Link to={`/overview`} className="nav-item nav-link"><p className="menu-link">Förbrukning</p></Link>
                </div>
                <div className="navbar-nav">
                    <Link to={`/details`} className="nav-item nav-link"><p className="menu-link">Kostnad</p></Link>
                </div>
                <div className="navbar-nav">
                    <Link to={`/key-id`} className="nav-item nav-link"><p className="menu-link">Nyckel & Id</p></Link>
                </div>
            </>
        )
    }
}