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
    currencyPostSign: "$",
    mapCircle: { x: 850, y: 520, range: 120 },
    flightList: [
      { from: "Sydney", to: "Melbourne", toCode: "MLB", price: 125 },
      { from: "Sydney", to: "Brisbane", toCode: "BRS", price: 50 },
      { from: "Sydney", to: "Perth", toCode: "PRT", price: 200 },
      { from: "Sydney", to: "Armidale", price: 300 },
      { from: "Sydney", to: "Narrandera", price: 125 },
      { from: "Sydney", to: "Meekathara", price: 100 },
    ],
  },
  {
    location: "uk",
    locationTitle: "the United Kingdom",
    currencyPreSign: "£",
    mapCircle: { x: 450, y: 280, range: 60 },
    flightList: [
      { from: "London", to: "Glasgow", toCode: "GLS", price: 125 },
      { from: "London", to: "Belfast", toCode: "BLF", price: 150 },
      { from: "London", to: "Edinburgh", toCode: "EDN", price: 100 },
      { from: "London", to: "Manchester", toCode: "MNC", price: 70 },
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
    <div className='App'>
      <AppContext.Provider value={[state, toggleState]}>
        <AppHeader />
        <Hero />
        <FlightImageList />
        <CalendarTricks />
        <Destinations />
        <ThingsToKnow />
        <AppFooter />
      </AppContext.Provider>
    </div>
  );
};

export default App;
