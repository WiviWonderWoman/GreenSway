import React, { useState } from 'react';
import Calendar from 'react-calendar';

export function Booking() {
    const [value, onChange] = useState(new Date());
    // const date = new Intl.DateTimeFormat('sv-SV').format(value)
    // var date = new Date(Date.UTC(2012, 11, 20, 3, 0, 0));
    // console.log(new Intl.DateTimeFormat('sv-SV').format(date));
    return (
        <Calendar
            onChange={onChange}
            value={value}
            onClickDay={(value) => console.log('New date is: ', new Intl.DateTimeFormat('sv-SV').format(value))}
        />
    )
}