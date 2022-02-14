import React from 'react';
//import PropTypes from 'prop-types';
import Task from './task.js';
import './taskList.css';



const Backlog = ({tasks}) => {
  
  const backlogTasks = tasks.filter(task => task.status === "backlog");
  
  const sortBacklog = backlogTasks.sort((a,b) => {
    return a.priority - b.priority;
  });

  const listTasks = sortBacklog.map((task) => <Task key={task.id} task= {task}/>); 
  
  return (
    <div className="taskList">
      <h2> Backlog </h2>
      <div className = "numTasks"> {listTasks.length} Tasks </div>
      <section className="scroll">{listTasks}
      </section>
    </div>    
    );       
  };

export default Backlog;
