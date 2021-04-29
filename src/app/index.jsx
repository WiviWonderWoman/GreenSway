import React from "react";
import ReactDOM from "react-dom";
import './app.css';
import App from "./components/common/app";
import { UserServices } from "./utils/user-services";

const userServices = new UserServices();
const user = userServices.checkLocalStorage();
let username;
let id;

if (user !== null || undefined) {
    username =  user.username;
    id = user.id;
}

let root = document.getElementById("root");
ReactDOM.render(<App id={id} username={username} userServices={userServices}  />, root); 
