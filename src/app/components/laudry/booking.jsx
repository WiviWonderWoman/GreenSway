import React, { useState } from 'react';
import Calendar from 'react-calendar';

export function Booking() {
    const [value, onChange] = useState(new Date());

    return (
        <Calendar
            onChange={onChange}
            value={value}
            // onClickDay={(value) => console.log('New date is: ', new Intl.DateTimeFormat('sv-SV').format(value))}
            onClickDay={(value) => alert('New date is: ' + new Intl.DateTimeFormat('sv-SV').format(value))}
        />
    )
}