import React from "react";

export default class Footer extends React.Component {
    render() {
        // var r = Math.random();
        // if (r < 0.2) {
        //     throw new Error("Oops, nu krashade vi!")
        // }
        return (
            <footer>
                <p id="copy"><span> "WiviWonderWoman" </span><br />&copy; Wivianne Grapenholt</p>
                {/* <br />{r}*/}
            </footer>
        );
    }
}