//import React, { useState } from 'react';
//import PropTypes from 'prop-types';
import Task from './task.js';
import './backlog.css';



const Backlog = ({tasks}) => {
  
  const listTasks = tasks.map((task) => <Task task= {task}/>); 
  return (
  <div >
    <h2> Backlog </h2>
    <p>{listTasks}</p>
  </div>
  ); 
};

export default Backlog;