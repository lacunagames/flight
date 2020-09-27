import React, { useContext } from "react";
import logo from "../assets/logo.svg";
import { AppContext } from "../App";
import "./AppHeader.scss";

const AppHeader = () => {
  const [, toggleAppState] = useContext(AppContext);
  return (
    <div className='AppHeader'>
      <header className='content'>
        <a
          className='logo'
          href='/'
          onClick={(e) => {
            e.preventDefault();
            toggleAppState();
          }}
        >
          <h2>
            <img src={logo} alt='Alternative Airlines' />
          </h2>
        </a>
        <a href='/' className='burger hide-gt-m'>
          <span className='access'>Toggle navigation menu</span>
        </a>
        <ul className='hide-lt-l'>
          <li>
            <a href='/' className='caret'>
              Book flights
            </a>
          </li>
          <li>
            <a href='/' className='caret'>
              Information
            </a>
          </li>
          <li>
            <a href='/' className='caret'>
              Help
            </a>
          </li>
          <li>
            <a href='/'>Travel Agents</a>
          </li>
          <li>
            <a href='/' className='login'>
              Sign up/Login
            </a>
          </li>
          <li>
            <a href='/' className='caret'>
              <span className='flag gbp'></span> GBP
            </a>
          </li>
        </ul>
      </header>
    </div>
  );
};

export default AppHeader;
