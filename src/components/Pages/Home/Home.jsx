import React from 'react'

import './Home.css'

const Home = () => {
  return (
    <>
      <section className = "main-container">
          <ul className="nav1">
            <li className="navitem">
              <a className="navlink" href="/">Home</a>
            </li>
            <li className="navitem">
              <a className="navlink" href="/projects">Projects</a>
            </li>
            <li className="navitem">
              <a className="navlink" href="/aboutus">About Us</a>
            </li>
            <li className="navitem">
              <a className="navlink" href="/blog" >Blog</a>
            </li>
          </ul>
        <div className = "home-heading">
          <h1>
            Best architecture in Nepal.
          </h1>
          <h2>Team of talented people.</h2>
        </div>
      </section>
    </>
  )
}

export default Home