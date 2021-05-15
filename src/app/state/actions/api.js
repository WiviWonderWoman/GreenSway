
import { setUserEmailAsync, getNewUserAsync, getUserByIdAsync, saveUser } from "../../api";

export function apiFetchError(errorMessage) {
    return {
        type: 'API_FETCH_ERROR',
        errorMessage: errorMessage
    };
}

export function apiIsLoading(isLoading) {
    return {
        type: 'API_IS-LOADING',
        isLoading: isLoading
    };
}

export function apiFetchUserSuccess(user) {
    return {
        type: 'LOADED_USER',
        user
    };
}

export function getUserById(id) {
    return async (dispatch) => {
        dispatch(apiIsLoading(true));
        try {
            const user = await getUserByIdAsync(id);
            dispatch(apiFetchUserSuccess(user));
            dispatch(apiIsLoading(false));
        }
        catch (error) {
            dispatch(apiFetchError(error.errorMessage));
        }
    };
}

export function getNewUser() {
    return async (dispatch) => {
        dispatch(apiIsLoading(true));
        try {
            const user = await getNewUserAsync();
            dispatch(apiFetchUserSuccess(user));

            dispatch(apiIsLoading(false));
        }
        catch (error) {
            dispatch(apiFetchError(error.errorMessage));
        }
    };
}

export function setUserEmail(id, email) {
    return async (dispatch) => {
        dispatch(apiIsLoading(true));
        try {
            const user = await setUserEmailAsync(id, email);
            // console.log('ACTION: ', user);
            dispatch(apiFetchUserSuccess(user));
            saveUser(user.id, user.email);
            dispatch(apiIsLoading(false));
        }
        catch (error) {
            dispatch(apiFetchError(error.errorMessage));
        }
    };
}