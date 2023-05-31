import React from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineRestaurantMenu } from 'react-icons/md';

import './NavBar.css';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = React.useState(false);

  return (
    <div className="navbar">
      <GiHamburgerMenu
        className="hamburger-icon"
        color="#fff"
        fontSize={27}
        onClick={() => setToggleMenu(true)}
      />
      {toggleMenu && (
        <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
          <MdOutlineRestaurantMenu
            fontSize={27}
            className="overlay__close"
            onClick={() => setToggleMenu(false)}
          />
          <ul className="app__navbar-smallscreen_links">
            <li>
              <a href="#home" onClick={() => setToggleMenu(false)}>
                Home
              </a>
            </li>
            <li>
              <a href="#about" onClick={() => setToggleMenu(false)}>
                About
              </a>
            </li>
            <li>
              <a href="#menu" onClick={() => setToggleMenu(false)}>
                Menu
              </a>
            </li>
            <li>
              <a href="#awards" onClick={() => setToggleMenu(false)}>
                Awards
              </a>
            </li>
            <li>
              <a href="#contact" onClick={() => setToggleMenu(false)}>
                Contact
              </a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
