import React from "react";

export default class HomePage extends React.Component {

    render() {
        return (
            <div className="spacer">
                <div className="user">
                    <h1>Innehåll under utveckling.</h1>
                    <hr></hr>
                    <h2>Kommande features: </h2>
                    <p>+ Kommunikation med hyresvärd:</p>
                    <ul className='home-list'>
                        <li>- driftinformation </li>
                        <li>- felanmälan</li>
                        <li>- städrapportering</li>
                    </ul>
                </div>
            </div>
        );
    }
}