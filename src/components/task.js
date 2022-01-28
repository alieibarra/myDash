import React from 'react';
//import PropTypes from 'prop-types';
import './task.css';



const Task = ({task}) => {
  return ([
  <div className="task">
    <h3 key={task.id}>{task.title}</h3>
    <p>Priority: {task.priority}</p>
    <p>Due: {task.dueDate} </p> 
    <select>
      <option value="backlog">Backlog</option>
      <option value="in progress">In Progress</option>
      <option value="completed">Completed</option>
    </select>
  </div>
  ]);
};

export default Task;