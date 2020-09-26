import React from "react";
import "./ThingsToKnow.scss";

const ThingsToKnow = () => {
  return (
    <div className='ThingsToKnow'>
      <h2>Things you should know</h2>
      <p>
        Based on customer bookings, these are some of the recent destinations in
        Australia. Based on customer bookings, these are some of the recent
        destinations in Australia.Based on customer bookings, these are some of
        the recent destinations in Australia.Based on customer bookings, these
        are some of the recent destinations in Australia.Based on customer
        bookings, these are some of the recent destinations in Australia.
      </p>
      <a href='/' className='button'>
        Search flights
      </a>
      <ul>
        <li>
          <span>Bucket list</span>
          <span>
            Australia is host to many of the worlds wonders from the Blue
            Mountains to the Great Barrier Reef.
          </span>
        </li>
        <li>
          <span>Entry Requirements</span>
          <span>
            You must have a valid Passport and Visa or approved Electronic
            Travel Authority (ETA) to enter Australia. Depending on where you
            are flying from this may vary. Maximum stay with a tourist holiday
            Visa is 90days.
          </span>
        </li>
        <li>
          <span>Language</span>
          <span>
            English is the official language of Australia. Mandarin is the
            second most common language spoken in Australia.
          </span>
        </li>
        <li>
          <span>Currency</span>
          <span>
            Australian official currency is the Australian Dollar AUD.
          </span>
        </li>
      </ul>
    </div>
  );
};

export default ThingsToKnow;
