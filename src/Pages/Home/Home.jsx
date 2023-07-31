import { useState, useEffect } from "react";
import { useSpring, animated } from "react-spring";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

import NavBar from "../../Components/NavBar/NavBar";
import Footer from "../../Components/footer/Footer";

import logo from "../../Assets/logo.png";
import vid from "../../Assets/VID.mp4";

import "./Home.css";

const Home = () => {
  const [scrollOffset, setScrollOffset] = useState(0);

  // Event listener to update scroll offset on scroll
  const handleScroll = () => {
    setScrollOffset(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Calculate the translateY value for the parallax effect
  const parallaxTranslateY = (speed, yOffset) => `translateY(${yOffset * speed}px)`;
  const team = [
    {
      id: 1,
      image: require("../../Assets/teams/ayush.jpeg"),
      name: "Ayush Bista",
      position: "architect",
      facebook: "https://www.facebook.com/profile.php?id=100003140337479",
      twitter: "https://www.twitter.com/ayushbista",
      instagram: "https://www.instagram.com/ayushbista",
    },
    {
      id: 2,
      image: require("../../Assets/teams/ayush.jpeg"),
      name: "Bruno Thapa",
      position: "designer",
      facebook: "https://www.facebook.com/ayush.bista",
      twitter: "https://www.twitter.com/ayushbista",
      instagram: "https://www.instagram.com/ayushbista",
    },
  ];
  const calcParallax = (speed) => (yOffset) => `translateY(${yOffset * speed}px)`;

  const heroSpring = useSpring({
    to: { transform: calcParallax(0.5) },
    config: { tension: 150, friction: 26 },
  });

  const videoSpring = useSpring({
    to: { transform: calcParallax(0.3) },
    config: { tension: 150, friction: 26 },
  });

  return (
    <>
      <animated.section className="hero" style={heroSpring}>
        <NavBar />
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="heading">
          <h1>Best architecture in Nepal.</h1>
          <h2>Team of talented people</h2>
        </div>
      </animated.section>

      <animated.section className="video" style={videoSpring}>
        <div className="video-container">
          <video src={vid} autoPlay muted loop />
        </div>
      </animated.section>

      <animated.section className="teams">
        <h1>Our Teams</h1>
        <div className="team-container">
          {team.map((member) => (
            <animated.div
            className="profile-card parallax-layer"
            key={member.id}
            style={{ transform: parallaxTranslateY(0.03, -scrollOffset) }}
          >
              <img
                src={member.image}
                alt={member.name}
                className="profile-image"
              />
              <div className="profile-details">
                <h3 className="profile-name">{member.name}</h3>
                <p className="profile-position">{member.position}</p>
                <div className="profile-social-links">
                  {member.facebook && (
                    <a href={member.facebook} target="_blank" rel="noopener noreferrer">
                    <FaFacebook size={24} />
                    </a>
                  )}
                  {member.twitter && (
                    <a href={member.twitter} target="_blank" rel="noopener noreferrer">
                    <FaTwitter size={24} />
                    </a>
                  )}
                  {member.instagram && (
                    <a href={member.instagram} target="_blank" rel="noopener noreferrer">
                      <FaInstagram size={24} />
                      </a>
                    )}
                </div>
              </div>
            </animated.div>
          ))}
        </div>
      </animated.section>

      <Footer />
    </>
  );
};

export default Home;
