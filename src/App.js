import './App.css';
//import axios from 'axios';
import { useEffect, useState } from 'react';
import Calendar from './components/calendar.js'
import TaskForm from './components/taskForm';
import Backlog from './components/backlog.js';
import InProgress from './components/inProgress.js';
import Complete from './components/complete.js';
import Countdown from './components/countdown';
import EventForm from './components/eventForm';


const App = () => {

  //HARDWIRED DATA--TEMP👇🏼
  // const TASKS = [
  //   {id: 1, title: "Test Task 1", dueDate: '2022-02-23', priority: 1, status: "backlog"},
  //   {id: 2, title: "Test Task 2", dueDate: '2022-01-23', priority: 3, status: "backlog"},
  //   {id: 3, title: "Test Task 3", dueDate: '2022-02-25', priority: 2, status: "in-progress"}, 
  //   {id: 4, title: "Test Task 4", dueDate: '2022-02-08', priority: 3, status: "in-progress"},
  //   {id: 5, title: "Test Task 5", dueDate: '2022-02-20', priority: 1, status: "completed"},
  //   {id: 6, title: "Test Task 6", dueDate: '2022-02-15', priority: 1, status: "in-progress"},
  //   {id: 7, title: "Test Task 7", dueDate: '2022-02-18', priority: 4, status: "backlog"},
  //   {id: 8, title: "Test Task 8", dueDate: '2022-02-09', priority: 3, status: "completed"},
  //   {id: 9, title: "Test Task 9", dueDate: '2022-02-11', priority: 1, status: "in-progress"},
  //   {id: 10, title: "Test Task 10", dueDate: '2022-02-12', priority: 4, status: "backlog"},
  //   {id: 11, title: "SHOULD DELETE", dueDate: '2022-02-01', priority: 3, status: "completed"},
  // ]; 

  // const EVENTS = [
  //   {id: 1, title: "Capstone Presentation 🗣", date: '2022-02-17'},
  //   {id: 2, title: "Alie's Birthday 🎂", date: '2022-06-24'},
  //   {id: 3, title: "Start Internship 👩🏻‍💻", date: '2022-02-28'}, 
  //   {id: 4, title: "Ella's Birthday 🎂", date: '2022-02-09'},
  //   {id: 5, title: "Ben's Birthday 🎂", date: '2022-10-23'},
  //   {id: 6, title: "Family Vacation", date: '2022-10-15'},
  //   {id: 7, title: "SHOULD DELETE", date: '2022-1-15'},
  //   {id: 8, title: "Anniversary 🥂 ", date: '2022-8-18'},
  // ];
  //HARDWIRED DATA--TEMP👆🏼
  const [events, setEvents] = useState([]);
  useEffect(()=> {
    async function fetchData () {
    let response = await fetch('https://mydash-backend.herokuapp.com/events');
    response = await response.json()
    setEvents(response)}
    fetchData()
  }, []);

  const [tasks, setTasks] = useState([]);
  useEffect(()=> {
    async function fetchData () {
    let response = await fetch('https://mydash-backend.herokuapp.com/tasks');
    response = await response.json()
    setTasks(response)}
    fetchData()
  }, []);

  return (
    <div>
      <header>
        <h1>myDash</h1>
      </header>
      <h2> “We have a strategic plan. It’s called doing things.” </h2>
      <div className="topline">
        <Countdown importantDates={events}/>
      </div>
      <div className="container">
        <Calendar className="calendar"/>
        <div className="add">    
          <EventForm />          
          <button className="addButton">GO TO EMAIL <br/> 📧 </button>
          <TaskForm />
        </div>
        <Backlog tasks={tasks}/>
        <InProgress tasks={tasks}/>
        <Complete tasks={tasks}/>
      </div>
    </div>
  );
}

export default App;
