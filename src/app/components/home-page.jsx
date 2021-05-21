import React from "react";
/** 
 * HomePage is a stateless component for home-view content
 * @component  
 */
export default class HomePage extends React.Component {

    render() {
        return (
            <div className="spacer">
                <div className="user">
                    <h1>Kommande features: </h1>
                    <hr />
                    <p>+ Kommunikation med hyresvärd:</p>
                    <ul className='home-list'>
                        <li>- allmän information </li>
                        <li>- driftinformation </li>
                        <li>- felanmälan</li>
                        <li>- städrapportering</li>
                    </ul>
                </div>
            </div>
        );
    }
}