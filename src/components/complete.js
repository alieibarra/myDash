import React from 'react';
import Task from './task.js';

const Complete = ({tasks}) => {
  const listTasks = tasks.map((task) => <Task task= {task}/>); 
  
    return (
  <div >
    <h2 > Completed </h2>
    <p >{listTasks}</p>
  </div> 
    ); 
};

export default Complete;