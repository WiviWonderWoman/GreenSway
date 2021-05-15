import React from "react";
import { Booking } from "./booking";

export default class LaudryPage extends React.Component {

    render() {
        return (
            <div className="spacer">
                <div className="user">
                    <Booking />
                </div>
            </div>
        );
    }
}