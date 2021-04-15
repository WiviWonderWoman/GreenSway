
export class UserServices {

    checkLocalStorage() {
        if(localStorage.getItem('username') !== null || undefined) {

            let username = JSON.parse(localStorage.getItem('username'));
            let role = JSON.parse(localStorage.getItem('role'));
            let user = { username: username, role: role}
            return user;
        }
        else {
            return null;
        }
    }

    saveUsername(username) {
        localStorage.setItem('username', JSON.stringify(username))
        // console.log('localStorage: ',localStorage)
    }

    saveUserRole(key) {
        localStorage.setItem('role', JSON.stringify(key))
        // console.log('localStorage: ',localStorage)
    }

    // clearLocalStorage() {
    //     localStorage.clear();
    // }
}