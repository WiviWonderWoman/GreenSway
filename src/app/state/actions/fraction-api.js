import { getFractionsAsync, checkLocalStorage, getUserByIdAsync } from "../../api";

/**
 * Redux action
 * @param {bool} hasError 
 */
export function fractionsHasError(hasError) {
    // console.log('ACTION: FRACTIONS_HAS_ERROR')
    return {
        type: 'FRACTIONS_HAS_ERROR',
        hasError: hasError
    };
}
/**
 * Redux action
 * @param { string } errorMessage
 */
export function apiFetchFractionsError(errorMessage) {
    // console.log('ACTION: ', errorMessage)
    return {
        type: 'API_FETCH_FRACTIONS_ERROR',
        errorMessage: errorMessage
    };
}
/**
 * Redux action
 * @param { bool } hasError 
 */
export function apiIsLoadingFractions(isLoading) {
    return {
        type: 'API_IS_LOADING_FRACTIONS',
        isLoading: isLoading
    };
}
/**
 * Redux action
 * @param { array } fractions 
 */
export function apiFetchFractionsSuccess(fractions) {
    // console.log('ACTION: API_FETCH_FRACTIONS_SUCCESS')
    return {
        type: 'API_FETCH_FRACTIONS_SUCCESS',
        fractions: fractions
    };
}
/**
 * Prepare for another call after an error
 * @async
 */
export function resetFractions() {
    return async (dispatch) => {

        try {
            const oldUser = checkLocalStorage();
            const id = oldUser.id;
            const user = await getUserByIdAsync(id);
            const garbagehouse = await user.garbagehouse;
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
/**
 * Dispatches getFractionsAsync(garbagehouse)
 * @async
 * @param {number} garbagehouse
 */
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