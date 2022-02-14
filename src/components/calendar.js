import React from 'react';
//import PropTypes from 'prop-types';
import './calendar.css';

const Calendar = () => {
  return ([
  <div key={0}>
  <iframe 
    className="calendar"
    title="google calendar" 
    src= {process.env.REACT_APP_MYDASH_CALENDAR}
    width="450" 
    height="600" 
    frameBorder="0" 
    scrolling="no"
    />
    </div>
  ]);
};

export default Calendar;