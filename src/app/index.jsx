import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import "./app.css";
import App from "./components/app";
import { UserServices } from "./features/user/user-services";
import store from "./store";
import { getUserByIdAsync, getNewUserAsync } from "./features/user/user-slice";
import ErrorBoundry from "./components/error-boundry";

const userServices = new UserServices();
const user = userServices.checkLocalStorage();
let id;
let username;

if (user !== null || undefined) {
    id = user.id;
    store.dispatch(getUserByIdAsync(id));
} else {
    // store.dispatch(getNewUserAsync());
    store.dispatch(getUserByIdAsync(1));
    id = 1;
    username = 'demo@greensway.com';
    // save to localStorage
    userServices.saveUser(id, username);
}

let root = document.getElementById("root");

ReactDOM.render(

    <Provider store={store}>
        <ErrorBoundry>
            <App userId={id} />
        </ErrorBoundry>
    </Provider>
    , root);


