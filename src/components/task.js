import React, { useState } from 'react';
//import PropTypes from 'prop-types';
import './task.css';

const Task = ({task}) => {
  const [taskStatus, setTaskStatus] = useState("backlog");

  const handleChange = (event) => {
    let newTaskStatus = event.target.value
    setTaskStatus(newTaskStatus);
    console.log("status changed to ", {taskStatus}, "to ", {newTaskStatus} );
  };

  return ([
  <div key={task.id} className="task">
    <h3>{task.title}</h3>
      <p>Priority: {task.priority}</p>
      <p>Due: {task.dueDate} </p> 
      <p> STATUS: {task.status}</p>
    <select value={task.status} onChange={handleChange}> 
      <option value="backlog">Backlog</option>
      <option value="in-progress">In Progress</option>
      <option value="completed">Completed</option>
    </select>
  </div>
  ]);
};

export default Task;