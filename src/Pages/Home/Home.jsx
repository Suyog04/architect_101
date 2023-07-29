import logo from "../../Assets/logo.png";
import vid from "../../Assets/VID.mp4";

import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

import "./Home.css";
import NavBar from "../../Components/NavBar/NavBar";
import Footer from "../../Components/footer/Footer";

const Home = () => {
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

  return (
    <>
      <section className="hero">
        <NavBar />
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="heading">
          <h1>Best architecture in Nepal.</h1>
          <h2>Team of talented people.</h2>
        </div>
      </section>

      <section className="video">
        <div className="video-container">
          <video src={vid} autoPlay muted loop />
        </div>
      </section>

      <section className="teams">
        <h1>Our Teams</h1>
        <div className="team-container">
          {team.map((member) => (
            <div className="profile-card" key={member.id}>
              <img
                src={member.image}
                alt={member.name}
                className="profile-image"
              />
              <div className="profile-details">
                <h3 className="profile-name">{member.name}</h3>
                <p className="profile-position">{member.position}</p>
                <p className ="profile-description">{member.description}</p>
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
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Home;
