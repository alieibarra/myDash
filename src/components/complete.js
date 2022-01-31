import React from 'react';
import Task from './task.js';

const Complete = ({tasks}) => {
  const completedTasks = tasks.filter(task => task.status === "completed");

  const sortCompleted = completedTasks.sort((a,b) => {
    return a.priority - b.priority;
  });

  const listTasks = sortCompleted.map((task) => <Task task= {task}/>); 
  
    return (
  <div >
    <h2 className="taskList"> Completed </h2>
    <p >{listTasks}</p>
  </div> 
    ); 
};

export default Complete;