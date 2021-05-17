import React from "react";
import { Switch, Route } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import HomePage from "./home-page";
import LaudryPage from "./laudry/laudry-page";
import OverviewPage from "./charts/overview-page";
import DetailsPage from "./fractions/details-page";
import KeyIdPage from "./key-id-page";

class Content extends React.Component {

    render() {
        //variable for readability
        const id = this.props.id;
        return (
            <div className="spacer">
                <Switch>
                    <Route exact path={`/`}>
                        <HomePage />
                    </Route>
                    <Route exact path={`/laundry/${id}`}>
                        <LaudryPage />
                    </Route>
                    <Route exact path={`/overview/${id}`}>
                        <OverviewPage />
                    </Route>
                    <Route exact path={`/details/${id}`}>
                        <DetailsPage />
                    </Route>
                    <Route exact path={`/key-id/${id}`}>
                        <KeyIdPage />
                    </Route>
                </Switch>
            </div>
        )
    }
}
Content.propTypes = {
    id: PropTypes.number,
}
const mapStateToProps = (state) => {
    console.log('redux state: ', state);
    return {
        id: state.user.id,
    }
}
export default connect(mapStateToProps)(Content)