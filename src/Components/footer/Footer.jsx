import React from 'react';
import './Footer.css';
import { FiFacebook, FiMail, FiInstagram } from "react-icons/fi";
import logo from '../../Assets/logo.png';

const Footer = () => {
  return (
    <section className="footer">
      <div className="nav-bar">
        <ul className="footer-navbar">
          <li className="footer-navitem">
            <a href="/">Home</a>
          </li>
          <li className="footer-navitem">
            <a href="/projects">Projects</a>
          </li>
          <li className="footer-navitem">
            <a href="/aboutus">About Us</a>
          </li>
          <li className="footer-navitem">
            <a href="/blog">Blog</a>
          </li>
        </ul>
      </div>

      <div className="social-media">
        <div className="contact">
          <h2>Contact Us</h2>
          <a href="https://goo.gl/maps/zSbcF1p4okhpQGuy8">Kupondole</a>
          <p>+977-985-1279621</p>
        </div>

        <div className="logo-footer">
          <div className="logo">
            <a href="/"> <img src={logo} alt="logo" /></a>
          </div>
          <div className="link">
            <a href="https://www.facebook.com/brickarchitectsandengineers"><FiFacebook /></a>
            <a href="mailto: brickane@gmail.com"><FiMail /></a>
            <a href="https://www.instagram.com/brickarchitects_engineers/?igshid=YmMyMTA2M2Y%3D"><FiInstagram /></a>
          </div>
        </div>

        <div className='work-hour'>
          <h1>Working Hour</h1>
          <p>Monday-Friday</p>
          <p>8:00 am - 12:00 am</p>
        </div>
      </div>

      <div className='copy-right'>
        <p>2023 Brick Architecture. All Rights reserved.</p>
      </div>
    </section>
  );
}

export default Footer;
