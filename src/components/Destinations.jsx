import React, { useContext } from "react";
import { AppContext } from "../App";
import "./Destinations.scss";

const Destinations = () => {
  const [{ locationTitle, flightList }] = useContext(AppContext);
  return (
    <div className='Destinations'>
      <h2>Airports & Cities in {locationTitle}</h2>
      <p>
        Based on customer bookings, these are some of the recent destinations in
        {" " + locationTitle}.
      </p>
      <ul>
        {flightList.slice(0, 3).map((flight) => (
          <li key={flight.from + flight.to}>
            <a href='/'>{flight.to}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Destinations;
