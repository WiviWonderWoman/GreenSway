
export class UserServices {

    constructor() {
        
    }

    checkLocalStorage() {
        if(localStorage.getItem('username') !== null) {
            let username = JSON.parse(localStorage.getItem('username'));
            let role = JSON.parse(localStorage.getItem('role'));
            console.log(username, role);
            let user = { username: username, role: role}
            return user;
        }
        else {

            return null;
        }
    }

    saveUsername(username) {
        // console.log('UserServices saveUsername(): ' + username);
        localStorage.setItem('username', JSON.stringify(username))
        // console.log('localStorage: ',localStorage)
    }

    saveUserRole(key) {
        console.log('UserServices saveUserRole(): ' + key);
        localStorage.setItem('role', JSON.stringify(key))
        console.log('localStorage: ',localStorage)
    }
}