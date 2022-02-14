import React from 'react';
import Task from './task.js';
import './taskList.css';

const Complete = ({tasks}) => {
  

  const completedTasks = tasks.filter(task => task.status === "completed" && new Date(task.dueDate) > new Date().getTime());
  

  const sortCompleted = completedTasks.sort((a,b) => {
    return new Date(b.dueDate) - new Date(a.dueDate);
  });

  const listTasks = sortCompleted.map((task) => <Task key={task.id} task= {task}/>); 
  
    return (
  <div className="taskList">
    <h2> Completed </h2>
    <div className = "numTasks"> {listTasks.length} Tasks </div>
    <section className="scroll">{listTasks} 
    </section>
  </div> 
    ); 
};

export default Complete;