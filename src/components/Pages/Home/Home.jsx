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

      
      <section className = "team">
        <h1>Process Team Work </h1>
        <p>This is how our team works.</p>
        <div className='row'>
          <div className='team-col'>
            <h1>Perfect design.</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia tempore at similique ratione, qui
                asperiores omnis numquam ea ut nulla voluptate, aliquid magni recusandae! Eum id ex officiis optio
                autem</p>
          </div>
          <div className = "team-col">
            <h1>Carefully Planned.</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia tempore at similique ratione, qui
                asperiores omnis numquam ea ut nulla voluptate, aliquid magni recusandae! Eum id ex officiis optio
                autem</p>
          </div>
          <div className = 'team-col'>
            <h1>Smartly executed</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia tempore at similique ratione, qui
                asperiores omnis numquam ea ut nulla voluptate, aliquid magni recusandae! Eum id ex officiis optio
                autem</p>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home