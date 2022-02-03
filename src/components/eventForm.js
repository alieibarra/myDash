import React, { useState } from 'react';
import './eventForm.css';

const EventForm = () => {
    const [values, setValues]  = useState({
        message: ''
    });

    const onChange = (name) => {
        return ({ target: { value } }) => {
            setValues(oldValues => ({ ...oldValues, [name]: value }));
            console.log(values)
        }
    }; 

    const saveFormData = () => {
        console.log(values)
    };

    const onSubmit = (event) => {
        event.preventDefault();
        saveFormData();
        console.log('success');
        setValues({message: 'New Task Created'});
    };

    return (
        <div>
            <h3 className="eventform">Add New <br/> Countdown Event 👆🏼</h3>
            <form className="eventform"onSubmit={onSubmit}>
                <label> Event: </label><br/>
                    <input
                    name='title' 
                    type='text' 
                    value={values.title} 
                    onChange={onChange('title')}/><br/>
                <label> Date: </label><br/> 
                    <input
                    name='dueDate' 
                    type='date' 
                    value={values.dueDate} 
                    onChange={onChange('dueDate')}/><br/>
            <input type='submit'></input>
        </form>
    </div>
    )
};

export default EventForm;