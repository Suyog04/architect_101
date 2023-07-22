import React, { useState } from "react";
import "./Blog.css";
import Footer from "../footer/Footer";
import data from "./data";
import List from "./List";

const Blog = () => {
  const [people, setPeople] = useState(data);
  return (
    <>
      <section className="main-container_02">
        <ul className="nav1_02">
          <li className="navitem_02">
            <a className="navlink_02" href="/">
              Home
            </a>
          </li>
          <li className="navitem_02">
            <a className="navlink_02" href="/projects">
              Projects
            </a>
          </li>
          <li className="navitem_02">
            <a className="navlink_02" href="/aboutus">
              About Us
            </a>
          </li>
          <li className="navitem_02">
            <a className="navlink_02" href="/blog">
              Blog
            </a>
          </li>
        </ul>
        <div className="home-heading_02">
          <h1>Our Blog</h1>
          <div className="person_01">
            <List people={people} />
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Blog;
