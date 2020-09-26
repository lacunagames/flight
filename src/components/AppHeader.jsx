import React, { useContext } from "react";
import logo from "../assets/logo.svg";
import { AppContext } from "../App";
import "./AppHeader.scss";

const AppHeader = () => {
  const [, toggleAppState] = useContext(AppContext);
  return (
    <div className='AppHeader'>
      <header>
        <a
          href='/'
          onClick={(e) => {
            e.preventDefault();
            toggleAppState();
          }}
        >
          <h2>
            <img src={logo} className='logo' alt='Alternative Airlines' />
          </h2>
        </a>
      </header>
    </div>
  );
};

export default AppHeader;
