
import React from "react";
import Card from "./communication/card";
/** 
 * HomePage is a stateless component for home-view content
 * @component  
 */
export default class HomePage extends React.Component {

    render() {
        return (
            <>
            <div className="spacer">
                <div className="user">
                    <Card />
                </div>
            </div>
            <div className="user">
                <hr />
                <h3 style={{color: 'red'}}>Statiska exempel.</h3><p ><span>Kommande features:</span></p>
                <ul className='home-list'>
                        <li>- dynamisk uppdaterad information </li>
                        <li>- visa historik / formulär för ny felanmälan </li>
                        <li>- lämna feedback på städning vid bokad tvättid</li>
                    </ul>
            </div>
        </>
        );
    }
}