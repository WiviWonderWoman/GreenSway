import React from "react";
import ReactDOM from "react-dom";
import './app.css';
import App from './app.jsx';
import { UserServices } from "./services/user-services";

const userServices = new UserServices();

const user = userServices.checkLocalStorage();
let username;
let role;
console.log(username, role);

if (user !== null) {
    username =  user.username;
    role = user.role;
}
// const username =  user.username;
// const role = user.role;
console.log(user);
//console.log('Inuti Main');
let root = document.getElementById("root");
ReactDOM.render(<App username={username} role={role} userServices={userServices}/>, root);
