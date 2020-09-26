import React, { useState } from "react";
import "./styles/core.scss";
import AppHeader from "./components/AppHeader";
import Hero from "./components/Hero";
import FlightImageList from "./components/FlightImageList";
import CalendarTricks from "./components/CalendarTricks";
import Destinations from "./components/Destinations";
import ThingsToKnow from "./components/ThingsToKnow";
import AppFooter from "./components/AppFooter";

export const AppContext = React.createContext();
const places = [
  {
    location: "australia",
    locationTitle: "Australia",
    currencySign: "$",
    flightList: [
      { from: "Sydney", to: "Melbourne", price: 125 },
      { from: "Sydney", to: "Brisbane", price: 50 },
      { from: "Sydney", to: "Perth", price: 200 },
      { from: "Sydney", to: "Armidale", price: 300 },
      { from: "Sydney", to: "Narrandera", price: 125 },
      { from: "Sydney", to: "Meekathara", price: 100 },
    ],
  },
  {
    location: "uk",
    locationTitle: "the United Kingdom",
    currencySign: "£",
    flightList: [
      { from: "London", to: "Glasgow", price: 125 },
      { from: "London", to: "Belfast", price: 150 },
      { from: "London", to: "Edinburgh", price: 100 },
      { from: "London", to: "Manchester", price: 70 },
    ],
  },
];

const App = () => {
  const [state, setState] = useState(places[0]);
  const toggleState = () => {
    state.location === places[0].location
      ? setState(places[1])
      : setState(places[0]);
  };
  return (
    <AppContext.Provider value={[state, toggleState]}>
      <div className='App'>
        <AppHeader />
        <Hero />
        <FlightImageList />
        <CalendarTricks />
        <Destinations />
        <ThingsToKnow />
        <AppFooter />
      </div>
    </AppContext.Provider>
  );
};

export default App;
