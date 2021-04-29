
export class UserServices {

    checkLocalStorage() {
        
        if(localStorage.getItem('username') !== null || undefined) {

            let id = JSON.parse(localStorage.getItem('id'));
            let username = JSON.parse(localStorage.getItem('username'));
            
            let user = { id: id, username: username}
            return user;
        }
        else {
            return null;
        }
    }
    
    saveUser(id, username) {
        localStorage.setItem('id', JSON.stringify(id))
        localStorage.setItem('username', JSON.stringify(username))
        // console.log('localStorage: ',localStorage)
    }
}
