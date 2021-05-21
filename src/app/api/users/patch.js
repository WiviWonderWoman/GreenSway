import Caller from "./caller";
/**
 * PATCH email on new user.
 * @async 
 * @param {number} id
 * @param {string} email
 */
export async function setUserEmailAsync(id, email) {
    try {
        const response = await Caller.patch(`/${id}`, { email: email });

        if (response.status !== 200) {
            throw Error(response.statusText);
        }
        const user = response.data;
        return user;
    }
    catch (error) {
        console.error("err'd ", error)
        throw ({ message: 'Failed to set user email' });
    }
}