import React, { useState } from 'react'

export default function DatePickers() {
    const today = new Date();
    const [selectedDate, setSelectedDate] = useState("");
    const [selectedDateFlag, setSelectedDateFlag] = useState(false)

    const nextDay = new Date(today);
    nextDay.setDate(today.getDate()+1);

    const parsoDay = new Date(nextDay);
    parsoDay.setDate(nextDay.getDate()+1);

    const tarsoDay = new Date(parsoDay);
    tarsoDay.setDate(parsoDay.getDate()+1);

    // console.log(today)
    const dates = [
        {date: nextDay, value: nextDay.toDateString()},
        {date: parsoDay, value: parsoDay.toDateString()},
        {date: tarsoDay, value: tarsoDay.toDateString()}
    ];
    // console.log(dates)

    return (
        <div>
            <p>Hi, Please select Date on which to reschedule:</p>
            <div>
                {dates.map((element) => (
                    <div key={element.value} 
                    onClick={() => {
                        setSelectedDate(element.value);
                        setSelectedDateFlag(true)
                    }} 
                    style={{border: '1px solid black', background: 'white', padding: '2px', margin: '2px', color: 'black', cursor: 'pointer'}}>
                        {element.value}
                    </div>
                ))}
            </div>
            {selectedDateFlag && 
                <div style={{borderTop: '1px solid black', marginTop: '5px'}}>
                    <p>
                        Date Choosen: {selectedDate}
                    </p>
                    <p>
                        Send "Select Date" to Confirm!
                    </p>
                </div>
            }
        </div>
    )
}
