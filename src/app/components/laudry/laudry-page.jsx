import React from "react";
import { Booking } from "./booking";
/** 
 * @class @component
 * @classdesc LaudryPage is a stateless component for displaying Booking and calendar.
 */
export default class LaudryPage extends React.Component {

    render() {
        return (
            <div className="user">
                <Booking />
            </div>
        );
    }
}