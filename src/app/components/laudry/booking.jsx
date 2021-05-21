import React, { useState } from 'react';
import Calendar from 'react-calendar';
/** 
 *  Booking is a stateful function-component for displaying booking-calendar, with react-calendar component: Calendar 
 *  @component
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
        </>
    )
}