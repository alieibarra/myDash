import React from 'react';
//import PropTypes from 'prop-types';
import Task from './task.js'
import './tasks.css';

const Tasks = ({tasks}) => {
  const listTasks = tasks.map((task) => <Task task= {task}/>); 
  return (
  <div >
    <h3 className="taskContainer"> Backlog </h3>
    <p className="taskContainer">{listTasks}</p>
  </div>
  ); 
};

export default Tasks;