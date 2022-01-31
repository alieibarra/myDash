import React from 'react';
//import PropTypes from 'prop-types';
import Task from './task.js';
import './backlog.css';



const Backlog = ({tasks}) => {
  
  const backlogTasks = tasks.filter(task => task.status === "backlog");
  
  const sortBacklog = backlogTasks.sort((a,b) => {
    return a.priority - b.priority;
  });

  const listTasks = sortBacklog.map((task) => <Task task= {task}/>); 
  
  return (
    <div >
      <h2 className="taskList"> Backlog </h2>
        <p>{listTasks}</p> 
    </div>    
    );       
  };

export default Backlog;