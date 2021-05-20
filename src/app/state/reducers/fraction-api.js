/**
 * @module /state/reducers/fraction-api.js
 * @despription Redux reducer for fractions
 */
export function fractionsHasError(state = false, action) {
    switch (action.type) {
        case 'FRACTIONS_HAS_ERROR':
            return action.hasError;
        default:
            return state;
    }
}

export function apiFetchFractionsError(state = '', action) {
    switch (action.type) {
        case 'API_FETCH_FRACTIONS_ERROR':
            return action.errorMessage;
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