import React from "react";
import "./Recreational.css";
import Data from "./recreationalData.json";

import Footer from "../../footer/Footer";

const Recreational = () => {
  return (
    <>
      <section className="main-container_03">
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

        <div>
          {Data &&
            Data.map((data) => {
              return (
                <div>
                  <img src={data.icon} />
                  <br />
                  {data.id}
                </div>
              );
            })}
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Recreational;
