import React, { useState } from 'react';
import './taskForm.css';

const TaskForm = () => {
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
            <h3 className="form">Add New Task</h3>
            <form className="form"onSubmit={onSubmit}>
                <label> Title: </label><br/>
                    <input
                    name='title' 
                    type='text' 
                    value={values.title} 
                    onChange={onChange('title')}/><br/>
                <label> Due Date: </label><br/> 
                    <input
                    name='dueDate' 
                    type='date' 
                    value={values.dueDate} 
                    onChange={onChange('dueDate')}/><br/>
                
                <label> Priority: </label> <br/>
                    <label> 1 </label>
                    <input
                    name='priority' 
                    type='radio' 
                    value= '1' 
                    onChange={onChange('priority')}/>
                    <label> 2 </label>
                    <input
                    name='priority' 
                    type='radio' 
                    value= '2' 
                    onChange={onChange('priority')}/> <br/>
                    <label> 3 </label>
                    <input
                    name='priority' 
                    type='radio' 
                    value= '3'
                    onChange={onChange('priority')}/>
                <label> 4 </label>
                <input
                    name='priority' 
                    type='radio' 
                    value= '4' 
                    onChange={onChange('priority')}/><br/>

                
                
            <input type='submit'></input>
        </form>
    </div>
    )
};

export default TaskForm;