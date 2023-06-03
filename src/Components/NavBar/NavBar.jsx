import React from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { ImCross } from 'react-icons/im';

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
          <ImCross
            color="#fff"
            fontSize={27}
            className="overlay__close"
            onClick={() => setToggleMenu(false)}
          />
          <ul className="app__navbar-smallscreen_links">
            <li>
              <a href="/" onClick={() => setToggleMenu(false)}>
                Home
              </a>
            </li>
            <li>
              <a href="/aboutus" onClick={() => setToggleMenu(false)}>
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
