import { useState, useEffect } from "react";
import { useSpring, animated } from "react-spring";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

import NavBar from "../../Components/NavBar/NavBar";
import Footer from "../../Components/footer/Footer";

import logo from "../../Assets/logo.png";
import vid from "../../Assets/VID.mp4";

import PreLoader from "../../Components/PreLoader/PreLoader";

import project from '../../Assets/recreational/recreational_09.jpeg'

import "./Home.css";

const Home = () => {
  const [scrollOffset, setScrollOffset] = useState(0);
  const navigate = useNavigate();

  const handleClick = (e) =>
  {
    e.preventDefault()
    navigate('/projects', { replace: true, preventScroll: true });
  }

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
      position: "Architect",
      facebook: "https://www.facebook.com/profile.php?id=100003140337479",
      twitter: "https://www.twitter.com/ayushbista",
      instagram: "https://www.instagram.com/ayushbista",
    },
    {
      id: 2,
      image: require("../../Assets/teams/Utsav.jpg"),
      name: "Utshav Adhikari",
      position: "Architect",
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
    <PreLoader />
    <animated.section className="video" style={videoSpring}>
      <NavBar />
      <div className="logo">
          <img src={logo} alt="logo" />
      </div>
        <div className="video-container">
          <video src={vid} autoPlay muted loop />
        </div>
      </animated.section>
      <div className="hero-container">
      <animated.section className="hero" style={heroSpring}>
        
        <div className="heading">
          <h1>Best architecture in Nepal.</h1>
          <h2>Team of talented people</h2>
        </div>
      </animated.section>
      </div>

      <section className="home-project">
  <div className="project-heading">
    <h1>Our Project</h1>
  </div>
  <div className="project-content">
    <div className="project-image">
      <img src={project} alt="Project Image" />
    </div>
    <div className="project-details">
      <h2>Designing with balance and care</h2>
      <p>We approach architectural design as a process of managing competing interests: finding balance between program and cost, performance and appearance, feasibility and schedule, ambition and pragmatism.</p>
      <div id = "container">
          <button className="project-button" onClick = {handleClick}>
            <span className="circle" aria-hidden="true">
              <span className="icon arrow"></span>
            </span>
            <span className="button-text">View More</span>
          </button>
        </div>
      </div>
    </div>

</section>


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
