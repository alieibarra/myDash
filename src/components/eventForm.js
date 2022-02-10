import React, { useState } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'
import './eventForm.css';



const EventForm = () => {
    const [title, setTitle]  = useState('');
    const [date, setDate]  = useState(null);

    const handleSubmit = (event) => {
        event.preventDefault();
        const newEvent = {title, date}
        
        axios.post('/events', newEvent)
        .then (() => {
            console.log(newEvent)
        })
    };

    return (
        <div>
            <h3 className="eventform">Add New <br/> Countdown Event 👆🏼</h3>
            <form className="eventform" onSubmit={handleSubmit}>
                <label> Event: </label><br/>
                    <input
                        type="text"
                        required
                        value = {title}
                        onChange = {(event) => setTitle(event.target.value)}
                        />
                        <br/>
                <label> Date: </label><br/> 
                    <DatePicker 
                        selected={date} 
                        onChange = {date => setDate(date)}/><br/><br/>
                <button type='submit'>Creat Countdown</button>
        </form>
    </div>
    )
};

export default EventForm;