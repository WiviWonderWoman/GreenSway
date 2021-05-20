/**
 * @module /state/actions/fraction-api.js
 * @despription Redux actions for fractions
 */
import { getFractionsAsync, checkLocalStorage, getUserByIdAsync } from "../../api";

/**
 * @function Redux action
 * @param {bool} hasError 
 * @returns {Object} action
 * @property { string } type 
 * @property { bool } hasError
 */
export function fractionsHasError(hasError) {
    // console.log('ACTION: FRACTIONS_HAS_ERROR')
    return {
        type: 'FRACTIONS_HAS_ERROR',
        hasError: hasError
    };
}
/**
 * @function Redux action
 * @param { string } errorMessage 
 * @returns { Object } action
 * @property { string } type 
 * @property { string } errorMessage
 */
export function apiFetchFractionsError(errorMessage) {
    // console.log('ACTION: ', errorMessage)
    return {
        type: 'API_FETCH_FRACTIONS_ERROR',
        errorMessage: errorMessage
    };
}
/**
 * @function Redux action
 * @param { bool } hasError 
 * @returns { Object } action
 * @property { string } type 
 * @property { bool } isLoading
 */
export function apiIsLoadingFractions(isLoading) {
    return {
        type: 'API_IS_LOADING_FRACTIONS',
        isLoading: isLoading
    };
}
/**
 * @function Redux action
 * @param { array } fractions 
 * @returns { Object } action
 * @property { string } type 
 * @property { aray } fractions
 */
export function apiFetchFractionsSuccess(fractions) {
    // console.log('ACTION: API_FETCH_FRACTIONS_SUCCESS')
    return {
        type: 'API_FETCH_FRACTIONS_SUCCESS',
        fractions: fractions
    };
}
/**
 * @async
 * @function prepare for another call after an error
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
 * @async
 * @function dispatches getFractionsAsync(garbagehouse)
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