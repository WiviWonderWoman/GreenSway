import { combineReducers } from "redux";
import { loadedUser } from "./api";

export default combineReducers({
    user: loadedUser,
});