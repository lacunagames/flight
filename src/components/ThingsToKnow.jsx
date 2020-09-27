import React, { useContext } from "react";
import "./ThingsToKnow.scss";
import { AppContext } from "../App";
import WorldMapCircle from "./WorldMapCircle";

const ThingsToKnow = () => {
  const [{ locationTitle }] = useContext(AppContext);

  return (
    <div className='ThingsToKnow content'>
      <div className='wrap'>
        <div>
          <h2 className='h1'>Things you should know</h2>
          <p>
            Based on customer bookings, these are some of the recent
            destinations in {locationTitle}. Based on customer bookings, these
            are some of the recent destinations in {locationTitle}.Based on
            customer bookings, these are some of the recent destinations in
            {locationTitle}. Based on customer bookings, these are some of the
            recent destinations in {locationTitle}. Based on customer bookings,
            these are some of the recent destinations in {locationTitle}.
          </p>
          <a href='/' className='button'>
            Search flights
          </a>
        </div>
        <WorldMapCircle />
      </div>
      <div className='cards'>
        <div className='card'>
          <h3>Bucket list</h3>
          <p className='cap-first'>
            {locationTitle} is host to many of the worlds wonders from the Blue
            Mountains to the Great Barrier Reef.
          </p>
        </div>
        <div className='card'>
          <h3>Entry Requirements</h3>
          <p>
            You must have a valid Passport and Visa or approved Electronic
            Travel Authority (ETA) to enter {locationTitle}. Depending on where
            you are flying from this may vary. Maximum stay with a tourist
            holiday Visa is 90days.
          </p>
        </div>
        <div className='card'>
          <h3>Language</h3>
          <p>
            English is the official language of {locationTitle}. Mandarin is the
            second most common language spoken in {locationTitle}.
          </p>
        </div>
        <div className='card'>
          <h3>Currency</h3>
          <p className='cap-first'>
            {locationTitle} official currency is the {locationTitle} Dollar AUD.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ThingsToKnow;
