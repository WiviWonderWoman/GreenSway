import Caller from "./caller";

export class UserServices {

    checkLocalStorage() {

        if (localStorage.getItem('username') !== null || undefined) {

            let id = JSON.parse(localStorage.getItem('id'));
            let username = JSON.parse(localStorage.getItem('username'));

            let user = { id: id, username: username };
            return user;
        }
        else {
            return null;
        }
    }

    saveUser(id, username) {
        localStorage.setItem('id', JSON.stringify(id));
        localStorage.setItem('username', JSON.stringify(username));
    }

    getUserById(id, callback) {
        Caller.get(`/${id}`, {})
            .then(res => {
                const user = res.data;
                console.log('user: ', user);
                callback(user)
            })
            .catch(error => console.log(error));
    }

    getNewUser(callback) {
        Caller.get(`?email`, {})
            .then(res => {
                const newUser = res.data[0];
                console.log('newUser: ', newUser);
                callback(newUser)
            })
            .catch(error => console.log(error));
    }

    setUserEmail(id, email, callback) {
        Caller.patch(`/${id}`, { email: email })
            .then(res => {
                const data = res.data; //console.log('PATCH: ',data);
                // console.log(data);
                callback(data.email);
            })
            .catch((error) => {
                console.log('PATCH: ', error)
            });
    }
}
