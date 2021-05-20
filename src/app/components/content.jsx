import React from "react";
import { Switch, Route } from "react-router-dom";
import HomePage from "./home-page";
import LaudryPage from "./laudry/laudry-page";
import OverviewPage from "./charts/overview-page";
import DetailsPage from "./fractions/details-page";
import KeyIdPage from "./key-id-page";
/** 
 * @class @component
 * @classdesc stateless component for main content, with react-router-dom components: 
 * @Switch
 * @Route 
 */
export default class Content extends React.Component {

    render() {
        return (
            <>
                <div className="spacer">
                    <Switch>
                        <Route exact path={`/`}>
                            <HomePage />
                        </Route>
                        <Route exact path={`/laundry`}>
                            <LaudryPage />
                        </Route>
                        <Route exact path={`/overview`}>
                            <OverviewPage />
                        </Route>
                        <Route exact path={`/details`}>
                            <DetailsPage />
                        </Route>
                        <Route exact path={`/key-id`}>
                            <KeyIdPage />
                        </Route>
                    </Switch>
                </div>
                <hr />
            </>
        )
    }
}