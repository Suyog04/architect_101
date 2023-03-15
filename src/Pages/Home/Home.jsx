import React from "react";
import blueprint from "../../Assets/blueprint.jpeg";
import Footer from "../footer/Footer";
import "./Home.css";
import logo from "../../Assets/logo.png";
import image from "../../Assets/images.jpeg";

const Home = () => {
  return (
    <>
      <section className="main-container">
        <ul className="nav1">
          <li className="navitem">
            <a className="navlink" href="/">
              Home
            </a>
          </li>
          <li className="navitem">
            <a className="navlink" href="/projects">
              Projects
            </a>
          </li>
          <li className="navitem">
            <a className="navlink" href="/aboutus">
              About Us
            </a>
          </li>
          <li className="navitem">
            <a className="navlink" href="/blog">
              Blog
            </a>
          </li>
        </ul>
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="home-heading">
          <h1>Best architecture in Nepal.</h1>
          <h2>Team of talented people.</h2>
        </div>
      </section>

      <section className="team">
        <h1>Our Team</h1>
        <br />
        <br />
        <div className="row">
          <img src={image} alt="person" />
          <h2>Ayush Bista</h2>
          <p>
            Michael has a wealth of knowledge when it comes to design. With a BA
            (Hons) degree in Architecture and 6 years in the bespoke Kitchen
            design Industry he is able to combine the two in order to visualise
            space and bring your requirements to life. He is also trained in
            Interior Design and currently studying a part time MA in Interior
            Design, With this in mind, he is able to utilise all these skills in
            order to ensure each and every design created will be unique and
            tailored directly to you.
          </p>
        </div>
      </section>

      <section className="define-product">
        <div className="product-heading">
          <h1>Crafting with cure.</h1>
          <br />
          <h2>Creative. Innovation. Balanced.</h2>
          <br />
          <p>
            The unique architect with ideas from outside the world. The new
            level of evolution.
          </p>
        </div>
        <div className="product-design">
          <img src={blueprint} alt="blueprint" />
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Home;
