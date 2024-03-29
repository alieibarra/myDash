import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './importantDay.css';

const eventsUrl = 'https://mydash-backend.herokuapp.com/events'

const ImportantDay = ({importantDate}) => {
  const [timerDays, setTimerDays] = useState();

  let interval;

  const startTimer = () => {
      interval = setInterval(() => {
        const bigDay = (new Date(importantDate.date).getTime())
        const today = new Date().getTime();
        const daysUntil = bigDay - today;
        const days = Math.ceil(daysUntil/(24*60*60*1000));

        if (daysUntil < 0) {
          clearInterval(interval.current);
        } else {
          setTimerDays(days);
        }
      });
    };
    useEffect(()=> {
      startTimer();
      }
    );

    const handleDelete = () => {
      axios.delete(eventsUrl+"/"+ importantDate.id)
      .then(() => {
        console.log("Deleted");
        window.location.reload();
        })
      };

    return (
    <div key={importantDate.id} className="events">
      <li className="eventDetails"> {timerDays} day(s) <br/> until <br/> {importantDate.title}</li>
      <button className="deleteEvent" onClick={handleDelete}>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-trash" viewBox="0 0 16 16">
          <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
          <path fillRule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
        </svg>
      </button>
    </div>  
  );       
};

export default ImportantDay;
