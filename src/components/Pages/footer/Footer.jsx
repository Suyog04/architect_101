import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <>
      <section className = "footer">
        <div className = "nav-bar">
          <ul className = "footer-navbar">
            <li className = "footer-navitem">
              <a href="/">Home</a>
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
      </section>
    </>
  )
}

export default Footer