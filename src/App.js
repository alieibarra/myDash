//import logo from './logo.svg';
import './App.css';
//import { useState } from 'react';
import Tasks from './components/tasks.js';





const App = () => {

  //HARDWIRED DATA--TEMP👇🏼
  const TASKS = [
    {id: 1, title: "Test Task 1", dueDate: "02/22/2022", priority: 1},
    {id: 2, title: "Test Task 2", dueDate: "02/23/2022", priority: 2},
    {id: 3, title: "Test Task 3", dueDate: "02/24/2022", priority: 3}, 
    {id: 4, title: "Test Task 4", dueDate: "02/25/2022", priority: 4},
  ]; 
  //HARDWIRED DATA--TEMP👆🏼

  return (
    <div className="App">
    <header> Alie's MyDash </header>
      <Tasks tasks={TASKS}/>
      <a href ='https://calendar.google.com/calendar/u/0/r/day?tab=mc'> Today's Scehdule</a>
    </div>
  );
}

export default App;
