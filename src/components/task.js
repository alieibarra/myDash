import React, { useState } from 'react';
import axios from 'axios';
import './task.css';

const tasksUrl = 'https://mydash-backend.herokuapp.com/tasks'

const Task = ({task}) => {
  const id = task.id
  const title = task.title
  const priority = task.priority
  const status = task.status
  const dateObj = new Date(task.dueDate);
  const month = dateObj.getUTCMonth() + 1; 
  const day = dateObj.getUTCDate();
  const year = dateObj.getUTCFullYear();

  const dueDate = month + "/" + day+ "/" + year;

  const [newStatus, setNewStatus] = useState(status);
  
  const handleStatusChange = (event) => {
    console.log(task.title, status)
    event.preventDefault();
    setNewStatus(event.target.value)
    console.log(newStatus)
  };

  const handleClick = (event) => {
    axios.put(tasksUrl+"/" + id, {
      status : newStatus})
      .then (() => {
        //window.location.reload();
        console.log(task.title + "status changed to " + newStatus);
      })
    };
  
  const handleDelete = () => {
    axios.delete(tasksUrl+"/"+ id)
    .then(() => {
      console.log("Deleted");
      window.location.reload();
      })
    };

  return ([
  <div key={task.id} className="task">
    <h3>{title}</h3>
      <p>Priority: {priority}<br/>Due: {dueDate}</p>
    <form className="taskEditingButtons">
      <select 
      defaultValue = {status}
        onChange={handleStatusChange}>
        <option value='backlog'> Backlog </option>
        <option value='in-progress'> In Progress </option>
        <option value='completed'> Completed </option>
      </select>
      <button className="updateTask" type="submit" onClick={handleClick}> Update Status </button>
    </form>
    <form className="taskEditingButtons">
      <button className="deleteTask" onClick={handleDelete}>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-trash" viewBox="0 0 16 16">
          <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
          <path fillRule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
        </svg>
      </button>
    </form>
  </div>
  ]);
};

export default Task;