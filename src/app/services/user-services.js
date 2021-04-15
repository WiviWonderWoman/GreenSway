
export class UserServices {

    constructor() {
        
    }

    saveUsername(username) {
        // console.log('UserServices saveUsername(): ' + username);
        localStorage.setItem("username", JSON.stringify(username))
        // console.log('localStorage: ',localStorage)
    }

    saveUserRole(key) {
        console.log('UserServices saveUserRole(): ' + key);
        localStorage.setItem("role", JSON.stringify(key))
        console.log('localStorage: ',localStorage)
    }
}