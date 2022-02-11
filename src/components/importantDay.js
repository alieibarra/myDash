import React, { useState, useEffect } from 'react';
import './importantDay.css';

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
    return (
    <div className="event">
      <li key={importantDate.id}> {timerDays} day(s) <br/> until <br/> {importantDate.title}</li>
    </div>  
  );       
};

export default ImportantDay;
