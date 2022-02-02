import './App.css';
//import { useState } from 'react';
import Calendar from './components/calendar.js'
import TaskForm from './components/taskForm';
import Backlog from './components/backlog.js';
import InProgress from './components/inProgress.js';
import Complete from './components/complete.js';
import Countdown from './components/countdown';
import EventForm from './components/eventForm';


const App = () => {

  //HARDWIRED DATA--TEMP👇🏼
  const TASKS = [
    {id: 1, title: "Test Task 1", dueDate: "02/22/2022", priority: 1, status: "backlog"},
    {id: 2, title: "Test Task 2", dueDate: "02/23/2022", priority: 3, status: "backlog"},
    {id: 3, title: "Test Task 3", dueDate: "02/24/2022", priority: 2, status: "in-progress"}, 
    {id: 4, title: "Test Task 4", dueDate: "02/25/2022", priority: 3, status: "in-progress"},
    {id: 5, title: "Test Task 5", dueDate: "02/21/2022", priority: 1, status: "completed"},
    {id: 6, title: "Test Task 6", dueDate: "02/24/2022", priority: 1, status: "in-progress"},
    {id: 7, title: "Test Task 7", dueDate: "02/24/2022", priority: 4, status: "backlog"},
    {id: 8, title: "Test Task 8", dueDate: "02/28/2022", priority: 3, status: "completed"},
    {id: 9, title: "Test Task 9", dueDate: "02/24/2022", priority: 1, status: "in-progress"},
    {id: 10, title: "Test Task 10", dueDate: "02/24/2022", priority: 4, status: "backlog"},
    {id: 11, title: "Test Task 11", dueDate: "02/28/2022", priority: 3, status: "completed"},
  ]; 


  const EVENTS = [
    {id: 1, title: "Capstone Presentation", date: '2022-02-17'},
    {id: 2, title: "Alie's Birthday", date: '2022-06-24'},
    {id: 3, title: "Start Internship", date: '2022-02-28'}, 
    {id: 4, title: "Ella's Birthday", date: '2022-02-09'},
    {id: 5, title: "Ben's Birthday", date: '2022-10-23'},
    {id: 6, title: "Family Vacation", date: '2022-10-15'},
  ];
  //HARDWIRED DATA--TEMP👆🏼

  return (
    <div>
      <header>
        <h1>myDash</h1>
        <p>Welcome, Alie!</p>
      </header>
      <div className="topline">
        <EventForm /> 
        <Countdown importantDates={EVENTS}/>
      </div>
      <div className="container">
        <Calendar className="calendar"/>
        <div className="add">             
          <TaskForm />
          <button className="addButton">GO TO EMAIL <br/> 📧 </button>
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
