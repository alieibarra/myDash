import React from 'react';
//import PropTypes from 'prop-types';


const Task = ({task}) => {
  return ([
  <h3 key={task.id}>{task.title}</h3>,<p>Priority: {task.priority}</p>,
  <p>Due: {task.dueDate} </p>, 
  <button>Completed</button>])
};

export default Task;