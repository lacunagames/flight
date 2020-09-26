import React from "react";
import logo from "../assets/logo.svg";
import badge from "../assets/badge-techtrack.svg";
import "./AppFooter.scss";

const AppFooter = () => {
  return (
    <div className='AppFooter'>
      <footer>
        <div>
          <div>
            <a href='/'>
              <h2>
                <img
                  src={logo}
                  className='logo'
                  alt='Alternative Airlines Contacts and Site'
                />
              </h2>
            </a>
            <div className='social-section'></div>
            <h3>Support</h3>
            <p>
              <a href='tel:01293 874 920'>01293 874 920</a>
            </p>
            <h3>Office hours</h3>
            <p>8am - 12pm (GMT)</p>
          </div>
          <div>
            <h3>Book</h3>
            <ul>
              <li>
                <a href='/'>Best Fare Finder</a>
                <a href='/'>Search & Book</a>
                <a href='/'>Multi search</a>
                <a href='/'>Currencies</a>
                <a href='/'>Ways to pay</a>
                <a href='/'>Online check-in</a>
              </li>
            </ul>
          </div>
          <div>
            <h3>Blog</h3>
            <ul>
              <li>
                <a href='/'>Blog</a>
                <a href='/'>About us</a>
                <a href='/'>Airlines we ticket</a>
                <a href='/'>Reviews</a>
                <a href='/'>Work with us</a>
                <a href='/'>Sitemap</a>
                <a href='/'>Media Centre</a>
              </li>
            </ul>
          </div>
          <div>
            <h3>Help</h3>
            <ul>
              <li>
                <a href='/'>FAQs</a>
                <a href='/'>Contact us</a>
                <a href='/'>Privact</a>
                <a href='/'>T&Cs</a>
              </li>
            </ul>
          </div>
          <div>
            <img src={badge} alt='The Monday Times TechTrack Logo' />
            <p>We are the fastest growing travel agency in the UK</p>
          </div>
        </div>
        <div>
          <a href='/'>Change language: España - Español</a>
        </div>
      </footer>
    </div>
  );
};

export default AppFooter;
