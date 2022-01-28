import React from 'react';
import Task from './task.js';

const InProgress = ({tasks}) => {
  const listTasks = tasks.map((task) => <Task task= {task}/>); 
  
    return (
  <div >
    <h2 > In Progress </h2>
    <p >{listTasks}</p>
  </div> 
    ); 
};

export default InProgress;