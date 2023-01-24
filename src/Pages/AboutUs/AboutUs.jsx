import React from 'react'
import './AboutUs.css'
import Footer from '../footer/Footer'

import aboutcontent from '../../Assets/about-content.jpeg'
import aboutcontent_01 from '../../Assets/about_01.png'

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
        <div className ="about-content_01">
          <img src = {aboutcontent} alt= "aboutimage" align="left" />
          <h1>
            About Us
          </h1>
          <br/>
          <p>
            Every kitchen we design, manufacture and install is handmade by expert cabinet makers and installed by artisan joiners with a real passion for their craft.
          </p>
          <br/>
          <p>
            We are a small team. We are driven and determined, with many years’ combined experience in the kitchen industry.
          </p>
          <br/>
          <p>
            Working with you, we combine original, inventive, innovative and individual designs with meticulous craftsmanship, exceptional quality and attention to detail.
          </p>
        </div>
        <br />
        <div className = "about-content_02">
          <img src = {aboutcontent_01} alt = 'about_01' align = "left" />
          <br />
          <br />
          <br />
          <br />
          <br />
          <p>
            We keep you in the loop, informed, involved and up-to-date.
          </p>
          <br />
          <p>
            We make it easy. Everything is designed around you and your home.
          </p>
          <br />
          <p>
            We don’t have a showroom or a sales team. We simply bring everything to you. Presentations can be done in your home to suit you. We plan everything to suit your availability.
          </p>
          <br />
          <p>
            Our approach is collaborative and hands-on, we listen and love to create a kitchen that truly reflects your life and lifestyle.
          </p>
        </div>
        
          
      
      </section>

      <Footer />
    </>
  )
}

export default AboutUs