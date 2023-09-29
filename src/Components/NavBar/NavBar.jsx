import React, { useState } from 'react';
import { Sling as Hamburger } from 'hamburger-react';
import './NavBar.css'

import image_01 from '../../Assets/architecture.jpeg'
import image_02 from '../../Assets/about_01.png'




const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
const handleToggle = () => {
  setIsOpen(prevState => !prevState);
};
  const handleMouseMove = (e) => {
    const hoverTitle = document.querySelector('.hover-title');
    const hoverImage = document.querySelector('.hover-image');

    if (hoverTitle && hoverImage) {
      const mouseX = e.clientX;
      const mouseY = e.clientY;
      const titleRect = hoverTitle.getBoundingClientRect();

      const moveX = mouseX - titleRect.left - titleRect.width -50;
      const moveY = mouseY - titleRect.top - titleRect.height - 70;

      hoverImage.style.transform = `translate(${moveX}px, ${moveY}px)`;
    }
  };

  const handleMouseLeave = () => {

    const hoverImage = document.querySelector('.hover-image');

    if (hoverImage) {
      hoverImage.style.transform = 'translate(0, 0)';
    }
  };

  
  return (
    <div>
      <div className="menu-icon" onClick={toggleMenu}>
        <Hamburger
  size={32}
  toggled={isOpen}
  onToggle={handleToggle}
  style={{
    color: isOpen ? 'black' : 'white'
  }}
/>
      </div>

      {isOpen && (
        <div className="overlay" onClick={toggleMenu}>
          <div className="overlay-content">
            <div className="hover-title" onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}><a href="/">Home</a></div>
            <div className="hover-image" onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}><img src={image_01} alt="Architecture" /></div>
            <div className="hover-title" onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}><a href="/projects">Projects</a></div>
            <div className="hover-image" onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}><img src={image_02} alt="Industrial" /></div>
            <div className="hover-title" onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}><a href="/aboutus">About Us</a></div>
            <div className="hover-title" onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}><a href="/Blog">Blog</a></div>
          </div>
        </div>
      )}
    </div>
  );
};


export default App;

