import React from "react";
/** 
 * RandomError is a stateless component that generates a random error for testing error boundry 
 * @component 
 */
export default class RandomError extends React.Component {

    render() {
        
        var r = Math.random();
        if (r < 0.2) {
            throw new Error("Oops, nu krashade vi!")
        }
        return(<p><br/>{r}</p>)
    }
}