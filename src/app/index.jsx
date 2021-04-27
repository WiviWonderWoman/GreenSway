import React from "react";
import ReactDOM from "react-dom";
import './app.css';
import App from "./components/app";
import { UserServices } from "./services/API/users/user-services";
import { FractionDataService } from "./services/fraction-data-services";


const userServices = new UserServices();

const fractionDataService = new FractionDataService();
fractionDataService.loadData();
let allFractions = fractionDataService.allFractions;
// console.log(allFractions);
const user = userServices.checkLocalStorage();
let username;
let role;
let newUser;
if (user !== null || undefined) {
    username =  user.username;
    role = user.role;
} else {
    username = '';
    role = 'user';
}
// console.log(username, role);
let root = document.getElementById("root");
ReactDOM.render(<App username={username} role={role} userServices={userServices} fractions={allFractions} />, root);
