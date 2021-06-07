import React, { useState } from 'react';
import Calendar from 'react-calendar';
import "./laudry.css";
import Modal from "../modal/modal";
/** 
 *  Booking is a stateful function-component for displaying booking-calendar, with react-calendar component: Calendar 
 *  @component
 */
export function Booking() {
    const [value, onChange] = useState(new Date());
    const [show, setShow] = useState(false);
    const [style, setStyle] = useState();
    const [date, displayDate] = useState();

    //Conditinal rendering: if day is clicked 
    if (show === true) {
        return (
            <>
                <Calendar
                    onChange={onChange}
                    value={value}
                />
                <Modal className='laundry-modal' header={date} button='BOKA' onClick={() => setShow(!show)}>
                    <table>
                        <tbody>
                            <tr><td><button onClick={() => setStyle({ backgroundColor: 'darkred', color: 'gray' })} style={style}>00.00 - 03.00</button></td><td><button >03.00 - 06.00</button></td></tr>
                            <tr><td><button>06.00 - 09.00</button></td><td><button style={{ backgroundColor: 'darkred', color: 'gray' }}>09.00 - 12.00</button></td></tr>
                            <tr><td><button>12.00 - 15.00</button></td><td><button>15.00 - 18.00</button></td></tr>
                            <tr><td><button style={{ backgroundColor: 'darkred', color: 'gray' }}>18.00 - 21.00</button></td><td><button>21.00 - 00.00</button></td></tr>
                        </tbody>
                    </table>
                </Modal>
            </>
        )
    }
    return (
        <>
            <Calendar
                onChange={onChange}
                value={value}
                onClickDay={(value) => { setShow(!show), displayDate(new Intl.DateTimeFormat('sv-SV').format(value)) }}
            />
        </>

    )
}