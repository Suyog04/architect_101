import React,{ useRef } from 'react'
import './Projects.css'

import Footer from '../../Components/footer/Footer'
import Navbar from '../../Components/NavBar/NavBar';

import { useNavigate } from "react-router-dom";

// importing images
import recreational from '../../Assets/recreational/recreational.jpeg'
import commercial from '../../Assets/commercial.jpeg'
import industrial from '../../Assets/industrial.png'
import interior from '../../Assets/interior/interior.webp'

const Projects = () => 
{
  const navigate = useNavigate();

  const topRef = useRef(null);

  const handleClick = () => {
    if (topRef.current) {
      window.scrollTo({ top: topRef.current.offsetTop, behavior: 'smooth' });
    }
  }
  
  
  return (
    <>
      <section className = "main-container_03" ref={topRef}>
          <Navbar />
        <div className = "home-heading_03">
          <h1>
            Our Projects
          </h1>
        </div>
          <div className='row_01'>
          <div className='team-col_01 top-cols'>
            <img src = {recreational} alt = "recreational" />
            <div onClick = {() => navigate("/recreational")} className = "layer">
              <h3>
                Recreational
              </h3>
            </div>
          </div>
          <div className = "team-col_01 top-cols">
            <img src = {commercial} alt = "commercial" />
            <div onClick ={() => navigate("/commercial")} className = "layer">
              <h3>Commercial</h3>
            </div>
          </div>
          <div className = 'team-col_01 bottom-cols'>
            <img src = {industrial} alt = "industrial" />
            <div onClick = {() => navigate("/industrial")} className = "layer">
              <h3>Industrial</h3>
            </div>
          </div>
          <div className = "team-col_01 bottom-cols">
            <img src = {interior} alt = "interior_image" />
            <div onClick = {() => navigate("/interior")} className = "layer" >
              <h3>Interior</h3>
            </div>
          </div>
        </div>
        
      </section>
      <Footer />
    </>
  )
}

export default Projects