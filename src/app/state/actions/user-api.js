import { setUserEmailAsync, getNewUserAsync, getUserByIdAsync, saveUser, checkLocalStorage } from "../../api";

export function userHasError(hasError) {
    console.log('ACTION: USER_HAS_ERROR')
    return {
        type: 'USER_HAS_ERROR',
        hasError: hasError
    };
}

export function apiFetchUserError(errorMessage) {
    console.log('ACTION: ', errorMessage)
    return {
        type: 'API_FETCH_USER_ERROR',
        errorMessage: errorMessage
    };
}

export function apiIsLoadingUser(isLoading) {
    return {
        type: 'API_IS-LOADING_USER',
        isLoading: isLoading
    };
}

export function apiFetchUserSuccess(user) {
    return {
        type: 'API_FETCH_USER_SUCCESS',
        user
    };
}

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

export function setUserEmail(id, email) {
    return async (dispatch) => {
        dispatch(apiIsLoadingUser(true));
        try {
            const user = await setUserEmailAsync(id, email);
            // console.log('ACTION: ', user);
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