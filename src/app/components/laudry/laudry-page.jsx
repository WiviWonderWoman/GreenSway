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
                <p ><hr /><span>Kommande features:</span> Klick på dag aktiverar en pop-up med bokningsbara tider</p>
            </div>
        );
    }
}