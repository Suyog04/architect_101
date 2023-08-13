import React, { useEffect, useRef } from "react";
import "./Projects.scss";

import useWindowSize from "../../hooks/useWindowSize";

import images from "./images/images";

function App() {

  const size = useWindowSize();

  const headingRef = useRef();
  const main = useRef();
  const scrollContainer = useRef();

 
  const data = {
    ease: 0.07,
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
          {images.map((image, index) => (
            <>
              <div key={index} className="img-container">
                <img src={image} alt={`people ${index}`} />
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

export default App;