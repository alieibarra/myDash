import React, { useState, useEffect } from 'react';
import './event.css';

const ImportantDay = ({importantDate}) => {
  const [timerDays, setTimerDays] = useState();

  let interval;

  const startTimer = () => {
      interval = setInterval(() => {
        const bigDay = (new Date(importantDate.date).getTime())
        const today = new Date().getTime();
        const daysUntil = bigDay - today;
        const days = Math.floor(daysUntil/(24*60*60*1000));

        if (daysUntil < 0) {
          clearInterval(interval.current);
        } else {
          setTimerDays(days);
        }
      });
    };
    useEffect(()=> {
      startTimer();
    });
    return (
    <div key = {importantDate.id} className="event">
      <p className="event"> {timerDays} day(s) until <br/> {importantDate.title}</p>
    </div>  
  );       
};

export default ImportantDay;
