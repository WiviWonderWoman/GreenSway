import Caller from "./caller";

export async function setUserEmail(id, email) {
    try {
        const response = await Caller.patch(`/${id}`, { email: email });

        if (!response.ok) {
            throw Error(response.statusText);
        }
        const respEmail = res.data.email;
        return respEmail;
    }
    catch (error) {
        console.error("err'd ", error)
        throw ({ message: 'Failed to set user email' });
    }
}