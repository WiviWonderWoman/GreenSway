import { getFractionsAsync, checkLocalStorage, getUserByIdAsync } from "../../api";

export function fractionsHasError(hasError) {
    // console.log('ACTION: FRACTIONS_HAS_ERROR')
    return {
        type: 'FRACTIONS_HAS_ERROR',
        hasError: hasError
    };
}

export function apiFetchFractionsError(errorMessage) {
    // console.log('ACTION: ', errorMessage)
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
    // console.log('ACTION: API_FETCH_FRACTIONS_SUCCESS')
    return {
        type: 'API_FETCH_FRACTIONS_SUCCESS',
        fractions: fractions
    };
}

export function resetFractions() {
    return async (dispatch) => {

        try {
            const oldUser = checkLocalStorage();
            const id = oldUser.id;
            const user = await getUserByIdAsync(id);
            const garbagehouse = await user.garbagehouse;
            console.log('RESET USER: ', garbagehouse)
            dispatch(apiFetchFractionsError(''));
            dispatch(fractionsHasError(false));
            dispatch(apiIsLoadingFractions(false));
            dispatch(getFractions(garbagehouse));
        }
        catch (error) {
            dispatch(fractionsHasError(true));
            dispatch(apiFetchFractionsError(error.message));
        }
    }
}
export function getFractions(garbagehouse) {
    return async (dispatch) => {
        dispatch(apiIsLoadingFractions(true));
        try {
            const fractions = await getFractionsAsync(garbagehouse);
            dispatch(apiFetchFractionsSuccess(fractions));
            dispatch(apiIsLoadingFractions(false));
            dispatch(fractionsHasError(false));
        }
        catch (error) {
            dispatch(fractionsHasError(true));
            dispatch(apiFetchFractionsError(error.message));
        }
    };
}