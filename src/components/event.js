import React, { useState, useEffect } from 'react';
import './event.css';

const ImportantDay = ({importantDate}) => {
  const [timerDays, setTimerDays] = useState();

  let interval;
  const bigDay = (new Date(importantDate.date).getDate() -1);

  const startTimer = () => {
      interval = setInterval(() => {
        const bigDay = (new Date(importantDate.date).getDate())
        const today = new Date().getDate();
        const daysUntil = bigDay - today;
        const days = Math.floor(daysUntil/(24*60*60*1000));

        if (daysUntil < 0) {
          clearInterval(interval.current);
        } else {
          setTimerDays(days)
        }
      });
    };
    useEffect(()=> {
      startTimer();
    });
  if (bigDay >= 0 ) {
    return (
    <div className="event">
      <p className="event"> {startTimer} <small>days</small><br/> until <br/> {importantDate.title}</p>
    </div>  
  );       
}};

export default ImportantDay;
