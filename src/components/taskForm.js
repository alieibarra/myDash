import React, { useState} from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'
import './taskForm.css';

const TaskForm = () => {
    const [title, setTitle]  = useState('');
    const [priority, setPriority]  = useState(null);
    const [dueDate, setDueDate]  = useState(null);
    
    const handleSubmit = (event) => {
        event.preventDefault();
        const newTask = {title, dueDate, priority}
            
        axios.post('/tasks', newTask)
        .then (() => {
            console.log(newTask)
        })
    };

    return (
        <div>
            <h3 className="form">Add New Task 👉🏼 </h3>
            <form className="form" onSubmit={handleSubmit}>
                <label> Title: </label><br/>
                    <input
                    type='text' 
                    required
                    value={title} 
                    onChange={(event) => setTitle(event.target.value)}/><br/>
                
                <label> Priority: </label> <br/>
                    <label> 1 </label>
                    <input
                    name='priority' 
                    type='radio' 
                    value= '1' 
                    onChange={(event) => setPriority(event.target.value)}/>
                    <label> 2 </label>
                    <input
                    name='priority' 
                    type='radio' 
                    value= '2' 
                    onChange={(event) => setPriority(event.target.value)}/> 
                    <label> 3 </label>
                    <input
                    name='priority' 
                    type='radio' 
                    value= '3'
                    onChange={(event) => setPriority(event.target.value)}/>
                <label> 4 </label>
                <input
                    name='priority' 
                    type='radio' 
                    value= '4' 
                    onChange={(event) => setPriority(event.target.value)}/><br/>
                <label> Date: </label><br/> 
                    <DatePicker 
                        selected={dueDate} 
                        onChange = {date => setDueDate(date)}/><br/><br/>
            <button type='submit'>Create Task</button>
        </form>
    </div>
    )
};

export default TaskForm;