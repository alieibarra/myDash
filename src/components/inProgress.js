import React from 'react';
import Task from './task.js';

const InProgress = ({tasks}) => {
  const inProgressTasks = tasks.filter(task => task.status === "in-progress");

  const sortInProgress = inProgressTasks.sort((a,b) => {
    return a.priority - b.priority;
  });

  const listTasks = sortInProgress.map((task) => <Task task= {task}/>); 
  
    return (
  <div >
    <h2 className="taskList"> In Progress </h2>
    <p>{listTasks}</p>
  </div> 
    ); 
};

export default InProgress;