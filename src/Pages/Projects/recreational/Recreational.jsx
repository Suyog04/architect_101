import React from 'react'
import './Recreational.css'
import Footer from '../../footer/Footer'
import recreational1 from './image1/recreational1.webp'
import RecreationalData from './RecreationalData'

const Recreational = () => 
{
  const images = [
    { src: {recreational1}, alt: 'Alternative text 1' },
    
  ]
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
        </section>
      <RecreationalData images={images}/>
      <Footer />
    </>
  )
}

export default Recreational