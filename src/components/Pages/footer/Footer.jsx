import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <>
      <section className = "footer">
        <div className = "nav-bar">
          <ul className = "footer-navbar">
            <li className = "footer-navitem">
              <a href="#">Home</a>
            </li>
            <li className = "footer-navitem">
              <a href="/projects">Projects</a>
            </li>
            <li className = "footer-navitem">
              <a href="/aboutus">About Us</a>
            </li>
            <li className = "footer-navitem">
              <a href="/blog" >Blog</a>
            </li>
          </ul>
        </div>
        <br />
        <br />
        <div className = "social-media">
          <div className = "contact">
            <h2>Contact Us</h2>
            <p>Address</p>
            <p>Phone Number</p>
          </div>

          <div clasName = "logo-footer">
            <h1>Logo image</h1>
            <p>quote</p>
          </div>

          <div className='work-hour'>
            <h1>Working Hour</h1>
            <p>Monday-Friday</p>
            <p>8:00 am - 12:00 am</p>
          </div>

        </div>
      </section>
    </>
  )
}

export default Footer