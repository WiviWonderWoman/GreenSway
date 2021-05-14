import Caller from "./caller";

export async function getUserById(id) {
    try {
        const response = await Caller.get(`/${id}`, {});

        if (!response.ok) {
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

export async function getNewUser() {
    try {
        const response = await Caller.get(`?email`, {});

        if (!response.ok) {
            throw Error(response.statusText);
        }
        const newUser = response.data[0];
        return newUser;
    }
    catch (error) {
        console.error("err'd ", error)
        throw ({ message: 'Failed to get new user' });
    }
}