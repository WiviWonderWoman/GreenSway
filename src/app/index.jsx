import React from "react";
import ReactDOM from "react-dom";
import "./app.css";
import App from "./components/common/app";
import { UserServices } from "./services/user-services";
import store from "./store";

const userServices = new UserServices();
const user = userServices.checkLocalStorage();
let username;
let id;

if (user !== null || undefined) {
    username = user.username;
    id = user.id;
}

let root = document.getElementById("root");
ReactDOM.render(
    <Provider store={store}>
        <App id={id} username={username} userServices={userServices} />
    </Provider>
    , root);
