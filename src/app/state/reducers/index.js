import { combineReducers } from "redux";
import { apiFetchUserSuccess, apiFetchUserError, apiIsLoadingUser } from "./user-api";
import { apiFetchFractionsSuccess, apiFetchFractionsError, apiIsLoadingFractions } from "./fraction-api";

export default combineReducers({
    user: apiFetchUserSuccess,
    userErrorMessage: apiFetchUserError,
    apiIsLoadingUser,
    fractions: apiFetchFractionsSuccess,
    fractionErrorMessage: apiFetchFractionsError,
    apiIsLoadingFractions
});