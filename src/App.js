import './App.css';
//import { useState } from 'react';
import Calendar from './components/calendar.js'
import Backlog from './components/backlog.js';
import InProgress from './components/inProgress.js';
import Complete from './components/complete.js';


const App = () => {

  //HARDWIRED DATA--TEMP👇🏼
  const TASKS = [
    {id: 1, title: "Test Task 1", dueDate: "02/22/2022", priority: 1, status: "backlog"},
    {id: 2, title: "Test Task 2", dueDate: "02/23/2022", priority: 3, status: "backlog"},
    {id: 3, title: "Test Task 3", dueDate: "02/24/2022", priority: 2, status: "in-progress"}, 
    {id: 4, title: "Test Task 4", dueDate: "02/25/2022", priority: 1, status: "completed"},
  ]; 
  //HARDWIRED DATA--TEMP👆🏼

  return (
    <div>
    <header>
    <h1>myDash</h1>
      <p>Welcome, Alie!</p>
    </header>
      <div className="container">
        <Calendar className="calendar"/>
        <Backlog tasks={TASKS}/>
        <InProgress tasks={TASKS}/>
        <Complete tasks={TASKS}/>
      </div>
    </div>
  );
}

export default App;
