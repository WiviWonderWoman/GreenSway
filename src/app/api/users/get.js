import Caller from "./caller";

export async function getUserByIdAsync(id) {
    try {
        const response = await Caller.get(`/${id}`, {});
        console.log(response);
        // if (!response.ok) {
        //     throw Error(response.statusText);
        // }
        const user = response.data;
        console.log(user);
        return user;
    }
    catch (error) {
        console.error("err'd ", error)
        throw ({ message: 'Failed to get user by id' });
    }
}

export async function getNewUserAsync() {
    try {
        const response = await Caller.get(`?email`, {});
        console.log(response);
        const newUser = response.data[0];
        console.log(newUser);
        // if (!response.ok) {
        //     throw Error(response.statusText);
        // }
        return newUser;
    }
    catch (err) {
        console.error("err'd ", err)
        throw ({ message: 'Failed to get new user' });
    }
}