import React from 'react';
//import PropTypes from 'prop-types';
import './calendar.css';

const Calendar = () => {
  return ([
  <div key={0}>
  <iframe 
    className="calendar"
    title="google calendar" 
    src= 'https://calendar.google.com/calendar/embed?height=1000&wkst=1&bgcolor=%23ffffff&ctz=America%2FLos_Angeles&showTitle=0&showPrint=0&mode=AGENDA&showCalendars=1&src=YWxpZWliYXJyYUBnbWFpbC5jb20&src=djdhc3JsbDdhczB2cHBzdGJsMWRmNjY5YzhAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&src=NG5ycjhjZWQzZ2UwNW5qMTI3bm9ycm5scGtAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&src=Y19rZ3VxbDZ1MXVqcjB0Z3I4c2Q0b2I1Nmc4c0Bncm91cC5jYWxlbmRhci5nb29nbGUuY29t&color=%2333ae06&color=%23F6BF26&color=%23C0CA33&color=%23039BE5'
    width="450" 
    height="600" 
    frameBorder="0" 
    scrolling="no"
    />
    </div>
  ]);
};

export default Calendar;