import React from "react";
import ReactDOM from "react-dom";
import './app.css';
import App from "./app";
import { UserServices } from "./services/user-services";
import { FractionDataService } from "./services/fraction-data-services";

const userServices = new UserServices();

const fractionDataService = new FractionDataService();
fractionDataService.loadData();
let allFractions = fractionDataService.allFractions;
// console.log(allFractions);
const user = userServices.checkLocalStorage();
let username;
let role;

if (user !== null || undefined) {
    username =  user.username;
    role = user.role;
}
// console.log(username, role);
let root = document.getElementById("root");
ReactDOM.render(<App username={username} role={role} userServices={userServices} fractions={allFractions} />, root);
