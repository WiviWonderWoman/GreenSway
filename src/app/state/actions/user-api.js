/**
 * @module /state/actions/users-api.js
 * @despription Redux actions for users
 */
import { setUserEmailAsync, getNewUserAsync, getUserByIdAsync, saveUser, checkLocalStorage } from "../../api";
/**
 * @function Redux action
 * @param {bool} hasError 
 * @returns {Object} action
 */
export function userHasError(hasError) {
    console.log('ACTION: USER_HAS_ERROR')
    return {
        type: 'USER_HAS_ERROR',
        hasError: hasError
    };
}
/**
 * @function Redux action
 * @param { string } errorMessage 
 * @returns { Object } action
 */
export function apiFetchUserError(errorMessage) {
    console.log('ACTION: ', errorMessage)
    return {
        type: 'API_FETCH_USER_ERROR',
        errorMessage: errorMessage
    };
}
/**
 * @function Redux action
 * @param { bool } hasError 
 * @returns { Object } action
 */
export function apiIsLoadingUser(isLoading) {
    return {
        type: 'API_IS-LOADING_USER',
        isLoading: isLoading
    };
}
/**
 * @function Redux action
 * @param { array } fractions 
 * @returns { Object } action
 */
export function apiFetchUserSuccess(user) {
    return {
        type: 'API_FETCH_USER_SUCCESS',
        user
    };
}
/**
 * @async
 * @function prepare for another call after an error
 */
export function resetUser() {
    // console.log('reset: ');
    return (dispatch) => {
        dispatch(apiFetchUserError(''));
        dispatch(userHasError(false));
        dispatch(apiIsLoadingUser(false));
        try {
            const user = checkLocalStorage();
            const id = user.id
            dispatch(getUserById(id));
        } catch (error) {
            dispatch(userHasError(true));
            dispatch(apiFetchUserError(error.message));
        }
    }
}
/**
 * @async
 * @function dispatches getUserByIdAsync(id)
 * @param {number} id
 */
export function getUserById(id) {
    return async (dispatch) => {
        dispatch(apiIsLoadingUser(true));
        try {
            const user = await getUserByIdAsync(id);
            dispatch(apiFetchUserSuccess(user));
            dispatch(apiIsLoadingUser(false));
        }
        catch (error) {
            dispatch(userHasError(true));
            dispatch(apiFetchUserError(error.message));
        }
    };
}
/**
 * @async
 * @function dispatches getNewUserAsync()
 */
export function getNewUser() {
    return async (dispatch) => {
        dispatch(apiIsLoadingUser(true));
        try {
            const user = await getNewUserAsync();
            dispatch(apiFetchUserSuccess(user));
            dispatch(apiIsLoadingUser(false));
        }
        catch (error) {
            dispatch(userHasError(true));
            dispatch(apiFetchUserError(error.errorMessage));
        }
    };
}
/**
 * @async
 * @function dispatches setUserEmailAsync(id, email)
 * @param {number} id
 * @param {string} email
 */
export function setUserEmail(id, email) {
    return async (dispatch) => {
        dispatch(apiIsLoadingUser(true));
        try {
            const user = await setUserEmailAsync(id, email);
            dispatch(apiFetchUserSuccess(user));
            saveUser(user.id, user.email);
            dispatch(apiIsLoadingUser(false));
        }
        catch (error) {
            dispatch(userHasError(true));
            dispatch(apiFetchUserError(error.errorMessage));
        }
    };
}