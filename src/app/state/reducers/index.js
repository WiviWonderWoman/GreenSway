/**
 * @module 
 * @despription Redux CombineReducer - rootReducer
 */
import { combineReducers } from "redux";
import { apiFetchUserSuccess, apiFetchUserError, apiIsLoadingUser, userHasError } from "./user-api";
import { apiFetchFractionsSuccess, apiFetchFractionsError, apiIsLoadingFractions, fractionsHasError } from "./fraction-api";

export default combineReducers({
    user: apiFetchUserSuccess,
    userErrorMessage: apiFetchUserError,
    apiIsLoadingUser,
    userHasError,
    fractions: apiFetchFractionsSuccess,
    fractionsErrorMessage: apiFetchFractionsError,
    apiIsLoadingFractions,
    fractionsHasError
});