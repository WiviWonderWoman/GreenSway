
export class UserServices {

    checkLocalStorage() {
        
        if(localStorage.getItem('username') !== null || undefined) {

            let id = JSON.parse(localStorage.getItem('id'));
            let username = JSON.parse(localStorage.getItem('username'));
            let role = JSON.parse(localStorage.getItem('role'));
            
            let user = { id: id, username: username, role: role}
            return user;
        }
        else {
            return null;
        }
    }
    
    saveUser(id, username, key) {
        localStorage.setItem('id', JSON.stringify(id))
        localStorage.setItem('username', JSON.stringify(username))
        localStorage.setItem('role', JSON.stringify(key))
        // console.log('localStorage: ',localStorage)
    }
}
