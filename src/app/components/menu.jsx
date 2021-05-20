import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Logo from "./logo";
import Loading from "./loading";
import MenuLinks from "./menu-links";
import ApiErrorBoundry from "./error-handling/api-error-boundry";
/** 
 * @component stateless HOC component for navigation
 */
class Menu extends React.Component {

    render() {
        //Conditinal rendering: if API call isLoading
        return (
            <>
                {
                    this.props.isLoadingUser || this.props.isLoadingFraction ?
                        <div className='mini-container'>
                            <div className="container">
                                <Loading />
                                <h1 className="user">LADDAR...</h1>
                            </div>
                        </div>
                        :
                        <Logo text={'GreenSway'} className={'mini-container'} />
                }
                <hr />
                <ApiErrorBoundry>
                    <span className="intro">
                        VÄLKOMMEN: {this.props.username}!
                </span>
                </ApiErrorBoundry>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <div className="container-fluid">
                        <div >
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" data-bs-auto-close="true" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                        </div>
                        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                            <div className="navbar-nav me-auto mb-2 mb-lg-0">
                                <MenuLinks />
                            </div>
                        </div>
                    </div>
                </nav>
                <hr />
            </>
        );
    }
}
Menu.propTypes = {
    username: PropTypes.string,
    isLoadingUser: PropTypes.bool,
    isLoadingFraction: PropTypes.bool,
}
const mapStateToProps = (state) => {
    // console.log('redux state: ', state);
    return {
        username: state.user.email,
        isLoadingUser: state.apiIsLoadingUser,
        isLoadingFraction: state.apiIsLoadingFractions,
    }
}
export default connect(mapStateToProps)(Menu)