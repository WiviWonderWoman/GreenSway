import React from "react";
/** 
 * @class  @component
 * @classdesc stateless component for footer content 
 */
export default class Footer extends React.Component {
    render() {
        //TODO: Move to separate test-componen
        /**
         * @function that generates random error for testing error boundry
         */
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