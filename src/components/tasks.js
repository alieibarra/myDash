import React from 'react';
//import PropTypes from 'prop-types';
import Task from './task.js'

const Tasks = ({tasks}) => {
  const listTasks = tasks.map((task) => <Task task= {task}/>); 
  return (<ol>{listTasks}</ol>); 
};

export default Tasks;