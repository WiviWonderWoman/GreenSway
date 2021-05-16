
export function apiFetchFractionsError(state = false, action) {
    switch (action.type) {
        case 'API_FETCH_FRACTIONS_ERROR':
            return action.hasErrrored;
        default:
            return state;
    }
}

export function apiIsLoadingFractions(state = false, action) {
    switch (action.type) {
        case 'API_IS_LOADING_FRACTIONS':
            return action.isLoading;
        default:
            return state;
    }

}

export function apiFetchFractionsSuccess(state = [], action) {
    switch (action.type) {
        case 'API_FETCH_FRACTIONS_SUCCESS':
            return action.fractions;
        default:
            return state;
    }
}