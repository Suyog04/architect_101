import React from 'react'

import './Home.css'

const Home = () => {
  return (
    <>
        <section className = "main-container">
          <ul className="nav justify-content-end">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/home">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/projects">Projects</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/aboutus">About Us</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/blog" >Blog</a>
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