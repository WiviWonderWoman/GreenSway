import React, { useState } from 'react';
import Calendar from 'react-calendar';
// import "./laudry.css";
// import Modal from "../modal";
/** 
 *  @component Booking is a stateful function-component for displaying booking-calendar,
 * with react-calendar component: Calendar 
 */
export function Booking() {
    const [value, onChange] = useState(new Date());
    return (
        <>
            <Calendar
                onChange={onChange}
                value={value}
                onClickDay={(value) => console.log(new Intl.DateTimeFormat('sv-SV').format(value))}
            />
            {/*TODO: implement modal when clicking on day
             <Modal className='modal-hidden' header='Tisdag 1 Juni' button='BOKA'>
                    <table>
                        <tbody>
                            <tr><td><button>00.00 - 03.00</button></td><td><button>03.00 - 06.00</button></td></tr>
                            <tr><td><button>06.00 - 09.00</button></td><td><button style={{ backgroundColor: 'darkred', color: 'gray' }}>09.00 - 12.00</button></td></tr>
                            <tr><td><button>12.00 - 15.00</button></td><td><button>15.00 - 18.00</button></td></tr>
                            <tr><td><button style={{ backgroundColor: 'darkred', color: 'gray' }}>18.00 - 21.00</button></td><td><button>21.00 - 00.00</button></td></tr>
                        </tbody>
                    </table>
            </Modal> */}
        </>

    )
}