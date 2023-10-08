import React, {useState} from 'react'

export default function TimePicker() {
    // const today = new Date();
    // const selectedDate = '';
    const [selectedTime, setSelectedTime] = useState('');
    const [selectedTimeFlag, setSelectedTimeFlag] = useState(false)

    const normalSchedule = [
        {time: '2pm', value: '2'},
        {time: '3pm', value: '3'},
        {time: '4pm', value: '4'},
        {time: '5pm', value: '5'},
    ]

  return (
    <div>
        <p>Now Please choose the time slot:</p>
        <div>
            {normalSchedule.map((element) => (
                <div key={element.value}
                    onClick={() => {
                        setSelectedTime(element.time);
                        setSelectedTimeFlag(true)
                    }}
                    style={{border: '1px solid black', background: 'white', padding: '2px', margin: '2px', color: 'black', cursor: 'pointer'}}
                >
                        {element.time}
                </div>
            ))}
        </div>
        {selectedTimeFlag &&
            <div>
                <p>Choosen Time: {selectedTime}</p>
                <p>Send "Confirm" to Reschedule!</p>
            </div>
        }
    </div>
  )
}
