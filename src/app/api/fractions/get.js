
import Caller from "./caller";

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
