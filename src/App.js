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


const tasksUrl = process.env.REACT_APP_MYDASH_BACKEND_TASKS
const eventsUrl = process.env.REACT_APP_MYDASH_BACKEND_EVENTS
const emailLink = process.env.REACT_APP_MYDASH_EMAIL

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
          <a href= {emailLink} target='_blank' rel="noopener noreferrer" className="email"> 📧 </a>          
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
