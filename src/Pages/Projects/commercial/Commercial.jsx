import React from "react";

import "./Commercial.css";
import Footer from "../../footer/Footer";

const Commercial = () => {
  return (
    <>
      <section className="main-container_04">
        <ul className="nav1_03">
          <li className="navitem_03">
            <a className="navlink_03" href="/">
              Home
            </a>
          </li>
          <li className="navitem_03">
            <a className="navlink_03" href="/projects">
              Projects
            </a>
          </li>
          <li className="navitem_03">
            <a className="navlink_03" href="/aboutus">
              About Us
            </a>
          </li>
          <li className="navitem_03">
            <a className="navlink_03" href="/blog">
              Blog
            </a>
          </li>
        </ul>
        <h1>Commercial</h1>
      </section>
      <Footer />
    </>
  );
};

export default Commercial;
