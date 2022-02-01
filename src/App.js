import './App.css';
//import { useState } from 'react';
import Calendar from './components/calendar.js'
import TaskForm from './components/taskForm';
import Backlog from './components/backlog.js';
import InProgress from './components/inProgress.js';
import Complete from './components/complete.js';


const App = () => {

  //HARDWIRED DATA--TEMP👇🏼
  const TASKS = [
    {id: 1, title: "Test Task 1", dueDate: "02/22/2022", priority: 1, status: "backlog"},
    {id: 2, title: "Test Task 2", dueDate: "02/23/2022", priority: 3, status: "backlog"},
    {id: 3, title: "Test Task 3", dueDate: "02/24/2022", priority: 2, status: "in-progress"}, 
    {id: 4, title: "Test Task 4", dueDate: "02/25/2022", priority: 3, status: "in-progress"},
    {id: 5, title: "Test Task 5", dueDate: "02/25/2022", priority: 1, status: "completed"},
    {id: 6, title: "Test Task 6", dueDate: "02/24/2022", priority: 1, status: "in-progress"},
    {id: 7, title: "Test Task 7", dueDate: "02/24/2022", priority: 4, status: "backlog"},
    {id: 8, title: "Test Task 8", dueDate: "02/24/2022", priority: 3, status: "completed"},
  ]; 
  //HARDWIRED DATA--TEMP👆🏼

  return (
    <div>
    <header>
    <h1>myDash</h1>
    </header>
    <div >
      <h2>Welcome, Alie! 🙋🏻‍♀️</h2>
      <div className="topline">
        <ul>Countdown to:
          <li>Project: DATE/TIME</li>
          <li>Presentation: DATE/TIME</li>
          <li>Vacation: DATE/TIME</li>
        </ul>
        <button className="addButton"> CREATE NEW COUNT DOWN <br/> 📆</button>
      </div>  
    </div>
    <div className="container">
      <Calendar className="calendar"/>
      
      <div className="add">             
        <h2> Controls </h2>
        <button className="addButton">GO TO EMAIL <br/> 📧 </button>
        <TaskForm />
        <button className="addButton"> CREATE NEW EVENT <br/> 🗓 </button>
      </div>
      <Backlog tasks={TASKS}/>
      <InProgress tasks={TASKS}/>
      <Complete tasks={TASKS}/>
    </div>
  </div>
  );
}

export default App;
