import React, { useContext } from "react";
import { AppContext } from "../App";
import "./FlightImageList.scss";

const FlightImageList = () => {
  const imageUrl = require.context("../assets", true);
  const [{ currencyPostSign, currencyPreSign, flightList }] = useContext(
    AppContext
  );
  // let img = images('./' + props.imageName);
  // <img src={img} alt="" />
  return (
    <ul className='FlightImageList content'>
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
            <span className='text-wrap'>
              <span className='access'>Fly from</span>
              <span className='from'> {flight.from}</span>
              <span className='access'>to</span>
              <span className='to'> {flight.to}</span>
              <span className='price'>
                <span className='pre'> From</span>
                <span>
                  {" "}
                  {currencyPreSign}
                  {flight.price}
                  {currencyPostSign}
                </span>
              </span>
            </span>
          </a>
        </li>
      ))}
    </ul>
  );
};

export default FlightImageList;
