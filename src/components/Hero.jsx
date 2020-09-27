import React, { useContext } from "react";
import { AppContext } from "../App";
import WorldMapCircle from "./WorldMapCircle";
import "./Hero.scss";

const Hero = () => {
  const [{ locationTitle }] = useContext(AppContext);

  return (
    <div className='Hero'>
      <header className='content'>
        <div className='wrap'>
          <h1>Fly to {locationTitle}</h1>
          <p>
            Search and book one-way, round-trip and multi-stop international
            flights to and from {locationTitle}. Discover the airlines that fly
            to
            {" " + locationTitle}, complete with check-in and baggage
            information. Plus, whether you’re flying to the capital Canberra or
            a different destination, find a list of routes and cities within{" "}
            {locationTitle}.
          </p>
        </div>
        <WorldMapCircle />
      </header>
    </div>
  );
};

export default Hero;
