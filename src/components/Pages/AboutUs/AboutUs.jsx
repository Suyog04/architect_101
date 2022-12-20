import React from 'react'
import './AboutUs.css'

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
            About us
          </h1>
        </div>
      </section>
    </>
  )
}

export default AboutUs