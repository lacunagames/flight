import React from "react";
import logo from "../assets/logo.svg";
import badge from "../assets/badge-techtrack.svg";
import "./AppFooter.scss";

const AppFooter = () => {
  return (
    <div className='AppFooter content'>
      <footer>
        <div className='wrap'>
          <div className='social-section'>
            <div>
              <a href='/' className='logo'>
                <h2>
                  <img
                    src={logo}
                    alt='Alternative Airlines Contacts and Site'
                  />
                </h2>
              </a>
            </div>
            <ul>
              <li>
                <a href='/' className='linkedin'>
                  <span className='access'>Contact us on LinkedIn</span>
                </a>
              </li>
              <li>
                <a href='/' className='twitter'>
                  <span className='access'>Contact us on Twitter</span>
                </a>
              </li>
              <li>
                <a href='/' className='insta'>
                  <span className='access'>Contact us on Instagram</span>
                </a>
              </li>
              <li>
                <a href='/' className='face'>
                  <span className='access'>Contact us on Facebook</span>
                </a>
              </li>
              <li>
                <a href='/' className='whatsapp'>
                  <span className='access'>Contact us on Whatsapp</span>
                </a>
              </li>
              <li>
                <a href='/' className='google'>
                  <span className='access'>Contact us on Google chat</span>
                </a>
              </li>
            </ul>
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
              </li>
              <li>
                <a href='/'>Search & Book</a>
              </li>
              <li>
                <a href='/'>Multi search</a>
              </li>
              <li>
                <a href='/'>Currencies</a>
              </li>
              <li>
                <a href='/'>Ways to pay</a>
              </li>
              <li>
                <a href='/'>Online check-in</a>
              </li>
            </ul>
          </div>
          <div>
            <h3>About</h3>
            <ul>
              <li>
                <a href='/'>Blog</a>
              </li>
              <li>
                <a href='/'>About us</a>
              </li>
              <li>
                <a href='/'>Airlines we ticket</a>
              </li>
              <li>
                <a href='/'>Reviews</a>
              </li>
              <li>
                <a href='/'>Work with us</a>
              </li>
              <li>
                <a href='/'>Sitemap</a>
              </li>
              <li>
                <a href='/'>Media Centre</a>
              </li>
            </ul>
          </div>
          <div>
            <h3>Help</h3>
            <ul>
              <li>
                <a href='/'>FAQs</a>
              </li>
              <li>
                <a href='/'>Contact us</a>
              </li>
              <li>
                <a href='/'>Privact</a>
              </li>
              <li>
                <a href='/'>T&Cs</a>
              </li>
            </ul>
          </div>
          <div className='badge'>
            <img src={badge} alt='The Monday Times TechTrack Logo' />
            <p className='side'>
              We are the fastest growing travel agency in the UK
            </p>
          </div>
        </div>
        <div className='bottom'>
          <a href='/'>
            Change language: <strong>España - Español</strong>
          </a>
        </div>
      </footer>
    </div>
  );
};

export default AppFooter;
