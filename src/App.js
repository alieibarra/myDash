import './App.css';
//import { useState } from 'react';
import Tasks from './components/tasks.js';
import Calendar from './components/calendar.js'

const App = () => {

  //HARDWIRED DATA--TEMP👇🏼
  const TASKS = [
    {id: 1, title: "Test Task 1", dueDate: "02/22/2022", priority: 1, status: "backlog"},
    {id: 2, title: "Test Task 2", dueDate: "02/23/2022", priority: 3, status: "backlog"},
    {id: 3, title: "Test Task 3", dueDate: "02/24/2022", priority: 2, status: "backlog"}, 
    {id: 4, title: "Test Task 4", dueDate: "02/25/2022", priority: 1, status: "backlog"},
  ]; 
  //HARDWIRED DATA--TEMP👆🏼

  return (

    <div>
    <header> myDash </header>
      <div className="container">
        <Calendar className="calendar"/>
      <div className="container">
        <h3> MISC COLUMN FOR LINKS</h3>
      </div>
      <div className="container kanban">
        <Tasks className="kanban" tasks={TASKS}/>
        <h3 className="kanban"> In Progress </h3>
        <h3 className="kanban">Completed</h3>
      </div>
      </div>
    </div>
  );
}

export default App;
