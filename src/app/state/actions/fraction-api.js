import { getFractionsAsync } from "../../api";

export function apiFetchFractionsError(errorMessage) {
    return {
        type: 'API_FETCH_FRACTIONS_ERROR',
        errorMessage: errorMessage
    };
}

export function apiIsLoadingFractions(isLoading) {
    return {
        type: 'API_IS_LOADING_FRACTIONS',
        isLoading: isLoading
    };
}

export function apiFetchFractionsSuccess(fractions) {
    return {
        type: 'API_FETCH_FRACTIONS_SUCCESS',
        fractions: fractions
    };
}

export function getFractions(garbagehouse) {
    return async (dispatch) => {
        dispatch(apiIsLoadingFractions(true));
        try {
            const fractions = await getFractionsAsync(garbagehouse);
            dispatch(apiFetchFractionsSuccess(fractions));
            dispatch(apiIsLoadingFractions(false));
        }
        catch (error) {
            dispatch(apiFetchFractionError(error.errorMessage));
        }
    };
}