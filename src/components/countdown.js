import React from 'react';
import ImportantDay from './importantDay.js';
import './countdown.css';


const Countdown = ({importantDates}) => {
  const today = new Date().getTime();
  
  const pendingEvents = importantDates.filter(importantDate => new Date(importantDate.date) > today);

  const sortEvents = pendingEvents.sort((a,b) => {
    return new Date(a.date) - new Date(b.date);
  });

  const eventsList = sortEvents.map(importantDate => <ImportantDay importantDate = {importantDate}/>);


  return (
    <div className="countdown">{eventsList}
    </div>
  )
};

export default Countdown;