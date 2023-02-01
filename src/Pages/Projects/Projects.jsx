import React from 'react'
import './Projects.css'
import Footer from '../footer/Footer'



// importing images
import recreational from '../../Assets/recreational.jpeg'
import commercial from '../../Assets/commercial.jpeg'
import industrial from '../../Assets/industrial.png'

const Projects = () => 
{
  

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
            <img src = {recreational} lat = "recreational" />
            <div className = "layer">
              <h3>
                Recreational
              </h3>
            </div>
          </div>
          <div className = "team-col_01">
            <img src = {commercial} alt = "commercial" />
            <div className = "layer">
              <a href = "/"><h3>Commercial</h3></a>
            </div>
          </div>
          <div className = 'team-col_01'>
            <img src = {industrial} alt = "industrial" />
            <div className = "layer">
              <h3>Industrial</h3>
            </div>
          </div>
        </div>
        
      </section>
      <Footer />
    </>
  )
}

export default Projects