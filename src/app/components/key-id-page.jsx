import React from "react";
/** 
 * KeyIdPage is a stateless component for key-id-view content 
 * @component 
 */
export default class KeyIdPage extends React.Component {
    render() {
        return (
            <>
                <div className="spacer">
                    <div className="user">
                        <h1>Innehåll under utveckling.</h1>
                        <hr></hr>
                        <h2>Kommande features: </h2>
                        <p>+ Digital Nyckel & Id</p>
                        <ul className='home-list'>
                            <li>- I mobil app: NFC-Funktionallitet</li>
                            <li>- I Webbappen: Log över dina upplåsning av tvättstuga & sopkärl</li>
                        </ul>
                        <i className="fas fa-key" />
                    </div>
                </div>
            </>
        );
    }
}