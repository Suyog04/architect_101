import React from 'react'
import './AboutUs.css'
import Footer from '../footer/Footer'

import aboutcontent from '../../Assets/about-content.jpeg'

const AboutUs = () => {
  return (
    <>
      <section className = "main-container_01">
          <ul className="nav1_01">
            <li className="navitem_01">
              <a className="navlink_01" href="/">Home</a>
            </li>
            <li className="navitem_01">
              <a className="navlink_01" href="/projects">Projects</a>
            </li>
            <li className="navitem_01">
              <a className="navlink_01" href="/aboutus">About Us</a>
            </li>
            <li className="navitem_01">
              <a className="navlink_01" href="/blog" >Blog</a>
            </li>
          </ul>
        <div className = "home-heading_01">
          <h1>
            We are proud in creating your bespoke, design.
          </h1>
        </div>
      </section>

      <section className = "about">
        <div className ="about-content">
          <h1>
            About Us
          </h1>
          <p>
            Every kitchen we design, manufacture and install is handmade by expert cabinet makers and installed by artisan joiners with a real passion for their craft.

            We are a small team. We are driven and determined, with many years’ combined experience in the kitchen industry.

            Working with you, we combine original, inventive, innovative and individual designs with meticulous craftsmanship, exceptional quality and attention to detail.
          </p>
        </div>
        <div className = "about-content">
          <img src = {aboutcontent} alt= "aboutimage" />
        </div>
      </section>

      <Footer />
    </>
  )
}

export default AboutUs