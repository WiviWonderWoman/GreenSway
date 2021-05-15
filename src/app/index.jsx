import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import "./app.css";
import App from "./components/app";
// import { checkLocalStorage } from "./api";
import applicationStore from "./state/store";
import ErrorBoundry from "./components/error-boundry";

// const user = checkLocalStorage();
// let id;
// let username;
// if (user !== null || undefined) {
//     id = user.id;
// }
// else {
//     store.dispatch(getNewUserAsync());
//     store.dispatch(getUserByIdAsync(1));
//     id = 1;
//     username = 'demo@greensway.com';
//     // save to localStorage
//     userServices.saveUser(id, username);
// }

let root = document.getElementById("root");

ReactDOM.render(

    <Provider store={applicationStore}>
        <ErrorBoundry>
            <App />
        </ErrorBoundry>
    </Provider>
    , root);


