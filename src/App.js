import './App.css';
import axios from 'axios';
import React from 'react';
import Calendar from './components/calendar.js'
import TaskForm from './components/taskForm';
import Backlog from './components/backlog.js';
import InProgress from './components/inProgress.js';
import Complete from './components/complete.js';
import Countdown from './components/countdown';
import EventForm from './components/eventForm';


const tasksUrl = '/tasks'
const eventsUrl = '/events'

const App = () => {
  
  const [tasks, setTasks] = React.useState([]);
  React.useEffect(() => {
    
    const axios = require('axios');
    
    axios.get(tasksUrl)
      .then((tasks)=> {
        setTasks(tasks.data);
      });
    }, []);
    
  const [events, setEvents] = React.useState([]);
  
  React.useEffect(() => {
    axios.get(eventsUrl)
    .then((events)=> {
        setEvents(events.data);
      });
    }, []);
  
    
  return (
    <div>
      <header>
        <h1>👩🏻‍💻 myDash 👩🏻‍💻</h1>
      </header>
      <p className="quote"> “We have a strategic plan. It’s called doing things.” </p>
      <section className="countContainer">
        <Countdown events={events}/>
      </section>
      <div className="container">
        <Calendar className="calendar"/>
        <div className="add">    
          <EventForm />
          <a href= 'https://calendar.google.com/calendar/embed?height=1000&wkst=1&bgcolor=%23ffffff&ctz=America%2FLos_Angeles&showTitle=0&showPrint=0&mode=AGENDA&showCalendars=1&src=YWxpZWliYXJyYUBnbWFpbC5jb20&src=djdhc3JsbDdhczB2cHBzdGJsMWRmNjY5YzhAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&src=NG5ycjhjZWQzZ2UwNW5qMTI3bm9ycm5scGtAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&src=Y19rZ3VxbDZ1MXVqcjB0Z3I4c2Q0b2I1Nmc4c0Bncm91cC5jYWxlbmRhci5nb29nbGUuY29t&color=%2333ae06&color=%23F6BF26&color=%23C0CA33&color=%23039BE5' target='_blank' rel="noopener noreferrer" className="email"> 📧 </a>          
          <TaskForm />
        </div>
        <Backlog tasks={tasks}/>
        <InProgress tasks={tasks}/>
        <Complete tasks={tasks}/>
      </div>
    </div>
  );
};



export default App;
