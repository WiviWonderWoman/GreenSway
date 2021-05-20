import Caller from "./caller";
/**
 * @async
 * @function GET all fractions by garbagehouse
 * @param {number} garbagehouse 
 * @returns {Array} allFractions, an array with fraction-objects
 */
export async function getFractionsAsync(garbagehouse) {
    try {
        const response = await Caller.get(`/${garbagehouse}`, {});

        if (response.status !== 200) {
            throw Error(response.statusText);
        }
        const fractions = response.data;
        const allFractions = fractions.allFractions;
        // console.log('GET: ', allFractions)
        return allFractions;
    }
    catch (error) {
        console.error("err'd ", error)
        throw ({ message: 'Failed to get fractions' });
    }
}
