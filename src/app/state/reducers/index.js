import { combineReducers } from "redux";
import { apiFetchUserSuccess } from "./user-api";
import { apiFetchFractionsSuccess } from "./fraction-api";

export default combineReducers({
    user: apiFetchUserSuccess,
    fractions: apiFetchFractionsSuccess
});