import React from "react";
import "./CalendarTricks.scss";
import calendar from "../assets/calendar2x.png";

const CalendarTricks = () => {
  return (
    <div className='CalendarTricks content'>
      <div className='wrap'>
        <h2>Calendar tricks</h2>
        <h3>Save Money</h3>
        <p>
          When searching for dates to fly be sure to use the calendar. Some
          dates might have a green indication to let you know these are some of
          the cheapest flights.
        </p>
      </div>
      <img
        src={calendar}
        alt='Smartphone showing the Calendar with Search flight'
      />
    </div>
  );
};

export default CalendarTricks;
