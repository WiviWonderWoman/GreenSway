
export function checkLocalStorage() {

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

export function saveUser(id, username) {
    console.log('SaveUser: ', id, username)
    localStorage.setItem('id', JSON.stringify(id));
    localStorage.setItem('username', JSON.stringify(username));
}