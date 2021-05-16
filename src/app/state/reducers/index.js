import { combineReducers } from "redux";
import { apiFetchUserSuccess, apiFetchUserError, apiIsLoadingUser } from "./user-api";
import { apiFetchFractionsSuccess, apiFetchFractionsError, apiIsLoadingFractions } from "./fraction-api";

export default combineReducers({
    user: apiFetchUserSuccess,
    apiFetchUserError,
    apiIsLoadingUser,
    fractions: apiFetchFractionsSuccess,
    apiFetchFractionsError,
    apiIsLoadingFractions
});