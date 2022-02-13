import React from 'react';
import ImportantDay from './importantDay.js';
import './countdown.css';


const Countdown = ({events}) => {
  const today = new Date().getTime();
  
  const pendingEvents = events.filter(importantDate => new Date(importantDate.date) > today);

  const sortEvents = pendingEvents.sort((a,b) => {
    return new Date(a.date) - new Date(b.date);
  });

  const eventsList = sortEvents.map(importantDate => <ImportantDay key={importantDate.id} importantDate = {importantDate}/>);

  return (
    <div>
      <ul className="countdown">{eventsList}</ul>
    </div>
  )
};

export default Countdown;