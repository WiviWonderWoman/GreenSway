
export function userHasError(state = false, action) {
    switch (action.type) {
        case 'USER_HAS_ERROR':
            return action.hasError;
        default:
            return state;
    }
}

export function apiFetchUserError(state = '', action) {
    switch (action.type) {
        case 'API_FETCH_USER_ERROR':
            return action.errorMessage;
        default:
            return state;
    }
}

export function apiIsLoadingUser(state = false, action) {
    switch (action.type) {
        case 'API_IS-LOADING_USER':
            return action.isLoading;
        default:
            return state;
    }

}

export function apiFetchUserSuccess(state = {}, action) {
    switch (action.type) {
        case 'API_FETCH_USER_SUCCESS':
            return action.user;
        default:
            return state;
    }
}

