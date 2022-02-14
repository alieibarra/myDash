import React from 'react';
import Task from './task.js';
import './taskList.css';

const InProgress = ({tasks}) => {
  const inProgressTasks = tasks.filter(task => task.status === "in-progress");

  const sortInProgress = inProgressTasks.sort((a,b) => {
    return a.priority - b.priority;
  });

  const listTasks = sortInProgress.map((task) => <Task key={task.id} task= {task}/>); 
  
    return (
  <div className="taskList">
    <h2> In Progress </h2>
    <div className = "numTasks"> {listTasks.length} Tasks </div>
    <section className="scroll">{listTasks}
      </section>
  </div> 
    ); 
};

export default InProgress;