import React from 'react'
import './Projects.css'
import  Footer from '../footer/Footer'

// importing images
import recreational from '../../Assets/recreational.jpeg'

const Projects = () => {
  return (
    <>
      <section className = "main-container_03">
          <ul className="nav1_03">
            <li className="navitem_03">
              <a className="navlink_03" href="/">Home</a>
            </li>
            <li className="navitem_03">
              <a className="navlink_03" href="/projects">Projects</a>
            </li>
            <li className="navitem_03">
              <a className="navlink_03" href="/aboutus">About Us</a>
            </li>
            <li className="navitem_03">
              <a className="navlink_03" href="/blog" >Blog</a>
            </li>
          </ul>
        <div className = "home-heading_03">
          <h1>
            Our Projects
          </h1>
        </div>
          <div className='row_01'>
          <div className='team-col_01'>
            <h1>Category 1</h1>
            <img src = {recreational} lat = "recreational" />
          </div>
          <div className = "team-col_01">
            <h1>Category 2</h1>
            
          </div>
          <div className = 'team-col_01'>
            <h1>Category 3</h1>
            
          </div>
        </div>
        
      </section>
      <Footer />
    </>
  )
}

export default Projects