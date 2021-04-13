import React from "react";

export default class UserButton extends React.Component {

    handelClick(source) {
        console.log('Klick på ' + source + '-button')
    }
    render () {
        console.log('Inuti UserButton');
        return(
            <div>
                <button onClick={() => this.handelClick('användare')}>Användare</button>
                <button onClick={() => this.handelClick('admin')}>Admin</button>   
            </div>   
        )
    }
}