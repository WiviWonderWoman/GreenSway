import { setUserEmailAsync, getNewUserAsync, getUserByIdAsync, saveUser, checkLocalStorage } from "../../api";
/**
 * Redux action
 * @param {bool} hasError 
 */
export function userHasError(hasError) {
    return {
        type: 'USER_HAS_ERROR',
        hasError: hasError
    };
}
/**
 * Redux action
 * @param { string } errorMessage 
 */
export function apiFetchUserError(errorMessage) {
    return {
        type: 'API_FETCH_USER_ERROR',
        errorMessage: errorMessage
    };
}
/**
 * Redux action
 * @param { bool } hasError 
 */
export function apiIsLoadingUser(isLoading) {
    return {
        type: 'API_IS-LOADING_USER',
        isLoading: isLoading
    };
}
/**
 * Redux action
 * @param { array } fractions 
 */
export function apiFetchUserSuccess(user) {
    return {
        type: 'API_FETCH_USER_SUCCESS',
        user
    };
}
/**
 *  Prepare for another call after an error
 * @async
 */
export function resetUser() {
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
 * Dispatches getUserByIdAsync(id)
 * @async
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
 * Dispatches getNewUserAsync()
 * @async
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
 * Dispatches setUserEmailAsync(id, email)
 * @async
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