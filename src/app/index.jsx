import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import "./app.css";
import App from "./components/app";
import applicationStore from "./state/store";
import ErrorBoundry from "./components/error-handling/error-boundry";

let root = document.getElementById("root");

ReactDOM.render(

    <Provider store={applicationStore}>
        {/* <ErrorBoundry> */}
        <App />
        {/* </ErrorBoundry> */}
    </Provider>
    , root);


