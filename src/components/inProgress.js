import React from 'react';
import Task from './task.js';
import './inProgress.css';

const InProgress = ({tasks}) => {
  const inProgressTasks = tasks.filter(task => task.status === "in-progress");

  const sortInProgress = inProgressTasks.sort((a,b) => {
    return a.priority - b.priority;
  });

  const listTasks = sortInProgress.map((task) => <Task task= {task}/>); 
  
    return (
  <div>
    <h2 className="inPorgress"> In Progress </h2>
    <section className="scroll">{listTasks}
      </section>
  </div> 
    ); 
};

export default InProgress;