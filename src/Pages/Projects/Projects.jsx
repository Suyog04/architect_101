import React, {useState, useEffect, useRef } from "react";
import "./Projects.scss";

import useWindowSize from "../../hooks/useWindowSize";

import images from "./images/images";



function Projects() {
  const [filter, setFilter] = useState('all'); 
  const uniqueTitles = [...new Set(images.map(image => image.title))];

  const handleFilterChange = (title) => {
    console.log('Clicked:', title)
    setFilter(title); // Update the filter state when a button is clicked
  };
  
  const filteredImages = filter === 'all' 
    ? images
    : images.filter(image => image.title === filter); // Filter images based on the selected category


  const size = useWindowSize();

  const headingRef = useRef();
  const main = useRef();
  const scrollContainer = useRef();

 
  const data = {
    ease: 0.06,
    current: 0,
    previous: 0,
    rounded: 0
  };


  useEffect(() => {
    requestAnimationFrame(() => skewScrolling());
  });


  useEffect(() => {
    setBodyHeight();
  }, [size.height]);

  const setBodyHeight = () => {
    document.body.style.height = `${
      scrollContainer.current.getBoundingClientRect().height
    }px`;
  };

  

  const skewScrolling = () => {

    data.current = window.scrollY;
 
    data.previous += (data.current - data.previous) * data.ease;

    data.rounded = Math.round(data.previous * 100) / 100;


    const difference = data.current - data.rounded;
    const acceleration = difference / size.width;
    const velocity = +acceleration;
    const skew = velocity * 7.5;

   
    scrollContainer.current.style.transform = `translate3d(0, -${data.rounded}px, 0) skewY(${skew}deg)`;
    headingRef.current.style.transform = `translateY(-${data.rounded * 0.3}px)`;

    requestAnimationFrame(() => skewScrolling());
  };

  return (
    <>
      <h1 ref = {headingRef} className = "project-heading1">Our Projects</h1>
        
          <div ref={main} className="project-main">
            <div ref={scrollContainer} className="scroll">
            <div className="button-container"> 
            <button className = "projects-button" onClick={() => handleFilterChange('all')}>All</button>
            {uniqueTitles.map(title => (
        <button className = "projects-button" key={title} onClick={() => handleFilterChange(title)}>{title}</button>
      ))}
          </div>
          
            {filteredImages.map((image, i) => (
              <>
              <div key={i} className = "img-container">
                <img src={image.img} alt={image.title} />
              </div>
              <h2 className = "content-heading2">
                    Project <span className="outline">Number</span>
              </h2>

              </>
            ))}
      
            </div>
          </div>
        
    </>
  );
}

export default Projects;