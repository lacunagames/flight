import React, { useContext } from "react";
import { AppContext } from "../App";
import "./FlightImageList.scss";

const FlightImageList = () => {
  const imageUrl = require.context("../assets", true);
  const [{ currencySign, flightList }] = useContext(AppContext);
  // let img = images('./' + props.imageName);
  // <img src={img} alt="" />
  return (
    <ul className='FlightImageList'>
      {flightList.map((flight) => (
        <li key={flight.from + flight.to}>
          <a
            href='/'
            style={{
              backgroundImage: `url(${imageUrl(
                "./city" + flight.to + ".png"
              )})`,
            }}
          >
            <span className='access'>Fly from</span>
            {" " + flight.from}
            <span className='access'>to</span>
            {" " + flight.to}
            <span className='price'>
              {" "}
              From
              <span>
                {" " + flight.price}
                {currencySign}
              </span>
            </span>
          </a>
        </li>
      ))}
    </ul>
  );
};

export default FlightImageList;
