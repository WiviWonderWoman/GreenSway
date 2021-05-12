import React from "react";
import ReactDOM from "react-dom";
import "./app.css";
import App from "./components/common/app";
import { UserServices } from "./features/user/user-services";
import store from "./store";
import { Provider } from "react-redux";
import { getUserByIdAsync, getNewUserAsync } from "./features/user/user-slice";

const userServices = new UserServices();
const user = userServices.checkLocalStorage();
let id;
let username;

if (user !== null || undefined) {
    id = user.id;
    username = user.username;
    store.dispatch(getUserByIdAsync(id));
} else {
    store.dispatch(getNewUserAsync());
}


let root = document.getElementById("root");
ReactDOM.render(
    <Provider store={store}>
        <App user={user} id={id} username={username} userServices={userServices} />
    </Provider>
    , root);
