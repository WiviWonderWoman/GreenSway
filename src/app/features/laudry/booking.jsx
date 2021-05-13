import React, { useState } from 'react';
import Calendar from 'react-calendar';

export function Booking() {
    const [value, onChange] = useState(new Date());
    return (
        <Calendar
            onChange={onChange}
            // showWeekNumbers
            value={value}
            onClickDay={(value) => console.log('New date is: ', value)} />
    )
}