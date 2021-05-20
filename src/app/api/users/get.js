import Caller from "./caller";
/**
 * @async
 * @function GET user by id
 * @param {number} id 
 * @returns {Object} user
 */
export async function getUserByIdAsync(id) {
    try {
        const response = await Caller.get(`/${id}`, {});

        if (response.status !== 200) {
            throw Error(response.statusText);
        }
        const user = response.data;
        return user;
    }
    catch (error) {
        console.error("err'd ", error)
        throw ({ message: 'Failed to get user by id' });
    }
}
/**
 * @async
 * @function GET new user 
 * @returns {Object} user
 */
export async function getNewUserAsync() {
    try {
        const response = await Caller.get(`?email`, {});

        if (response.status !== 200) {
            throw Error(response.statusText);
        }
        const newUser = response.data[0];
        return newUser;
    }
    catch (err) {
        console.error("err'd ", err)
        throw ({ message: 'Failed to get new user' });
    }
}