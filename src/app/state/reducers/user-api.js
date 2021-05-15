
export function apiFetchUserSuccess(state = {}, action) {
    switch (action.type) {
        case 'API_FETCH_USER_SUCCESS':
            return action.user;
        default:
            return state;
    }
}