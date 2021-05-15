
export function loadedUser(state = {}, action) {
    switch (action.type) {
        case 'LOADED_USER':
            return action.user;
        default:
            return state;
    }
}