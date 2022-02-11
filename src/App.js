import './App.css';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
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
        <h1>myDash</h1>
      </header>
      <h2> “We have a strategic plan. It’s called doing things.” </h2>
      <div className="topline">
        <Countdown events={events}/>
      </div>
      <div className="container">
        <Calendar className="calendar"/>
        <div className="add">    
          <EventForm />          
          <button className="addButton">GO TO EMAIL <br/> 📧 </button>
          <TaskForm />
        </div>
        <Backlog key={tasks.id} tasks={tasks}/>
        <InProgress tasks={tasks}/>
        <Complete tasks={tasks}/>
      </div>
    </div>
  );
};



export default App;
