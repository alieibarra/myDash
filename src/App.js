//import logo from './logo.svg';
import './App.css';
//import { useState } from 'react';
import Tasks from './components/tasks.js';
import Calendar from './components/calendar.js'

const App = () => {

  //HARDWIRED DATA--TEMP👇🏼
  const TASKS = [
    {id: 1, title: "Test Task 1", dueDate: "02/22/2022", priority: 4, completed: false},
    {id: 2, title: "Test Task 2", dueDate: "02/23/2022", priority: 3, completed: false},
    {id: 3, title: "Test Task 3", dueDate: "02/24/2022", priority: 2, completed: false}, 
    {id: 4, title: "Test Task 4", dueDate: "02/25/2022", priority: 1, completed: false},
  ]; 
  //HARDWIRED DATA--TEMP👆🏼

  return (
    <div className="App">
    <header> myDash </header>
      <Calendar/>
      <Tasks tasks={TASKS}/>
      
    </div>
  );
}

export default App;
