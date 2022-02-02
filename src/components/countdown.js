import React from 'react';
import ImportantDay from './event.js';
import './countdown.css';

const Countdown = ({importantDates}) => {
  const sortEvents = importantDates.sort((a,b) => {return new Date(a.date) - new Date(b.date);});

  const eventsList = sortEvents.map((importantDate)=> <ImportantDay importantDate = {importantDate}/>)

  return (
    <div>
      <p className="countdown">{eventsList}</p>
    </div>
  )
};

export default Countdown;