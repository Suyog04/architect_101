import { useState, useEffect, useCallback } from "react";
import { useSpring, animated } from "react-spring";
import "./AboutUs.css";

import Footer from "../../Components/footer/Footer";
import Navbar from "../../Components/NavBar/NavBar";

import logo from "../../Assets/logo.png";
import contentImage1 from "../../Assets/about-content.jpeg";
import contentImage2 from "../../Assets/about_01.png";

const AboutUs = () => {
  const [scrollOffset, setScrollOffset] = useState(0);

  const handleScroll = useCallback(() => {
    setScrollOffset(window.scrollY);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  const parallaxTranslateY = (speed, yOffset) => `translateY(${yOffset * speed}px)`;

  // Define the spring animation for the parallax effect on the image
  const imageSpring = useSpring({
    to: { transform: parallaxTranslateY(-0.02, scrollOffset) },
  });

  const aboutus_content = [
    {
      id: 1,
      p: "Every kitchen we design, manufacture and install is handmade by expert cabinet makers and installed by artisan joiners with a real passion for their craft. We are a small team. We are driven and determined, with many years’ combined experience in the kitchen industry.",
      image: contentImage1,
    },
    {
      id: 2,
      p: "We keep you in the loop, informed, involved and up-to-date.We make it easy. Everything is designed around you and your home.We don’t have a showroom or a sales team. We simply bring everything to you. Presentations can be done in your home to suit you.",
      image: contentImage2,
    },
  ];

  return (
    <>
      <section className="about-us">
        <Navbar />
        <div className="logo-aboutus">
          <img src={logo} alt="logo" />
        </div>
        <div className="hero-heading">
          <h1>We are proud in creating your bespoke, design.</h1>
        </div>
      </section>

      <section className="about-description">
        <div className="aboutus-content">
          {aboutus_content.map((content) => (
            <div
              className={`content-description ${
                content.id % 2 === 0 ? "even" : "odd"
              }`}
              key={content.id}
            >
              <animated.img
                src={content.image}
                alt=""
                style={{
                  transform: imageSpring.transform,
                }}
              />
              <p>{content.p}</p>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </>
  );
};

export default AboutUs;
