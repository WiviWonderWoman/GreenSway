import React from "react";
import ReactDOM from "react-dom";
import './app.css';
import App from "./components/app";
import { UserServices } from "./domain/users/user-services";
import { FractionDataService } from "./domain/fractions/fraction-data-services";

const fractionDataService = new FractionDataService();
fractionDataService.loadData();
let allFractions = fractionDataService.allFractions;
// console.log(allFractions);

const userServices = new UserServices();
const user = userServices.checkLocalStorage();
let username;
let role;
let id;

if (user !== null || undefined) {
    username =  user.username;
    role = user.role;
    id = user.id;
}
// console.log('From localStorage i App: ', id, username, role);

let root = document.getElementById("root");
ReactDOM.render(<App id={id} username={username} role={role} userServices={userServices} fractions={allFractions} />, root);
