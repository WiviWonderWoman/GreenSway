
export function apiFetchFractionsSuccess(state = [], action) {
    switch (action.type) {
        case 'API_FETCH_FRACTIONS_SUCCESS':
            return action.fractions;
        default:
            return state;
    }
}