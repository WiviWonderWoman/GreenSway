import React from "react";
import { Booking } from "./booking";
/** 
 * LaudryPage is a stateless component for displaying Booking and calendar.
 * @component 
 */
export default class LaudryPage extends React.Component {

    render() {
        return (
            <div className="user">
                <Booking />
                <hr />
                <h3 style={{color: 'red'}}>Testa bokning genom klick på valfri dag och välj tid: 00.00 - 03.00 + BOKA.</h3><p ><span>Kommande features:</span><br/>Klick på valfri bokningsbar tid.</p>
            </div>
        );
    }
}