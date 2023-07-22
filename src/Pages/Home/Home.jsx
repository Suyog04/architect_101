import logo from "../../Assets/logo.png";
import vid from "../../Assets/VID.mp4";

import "./Home.css";
import NavBar from "../../Components/NavBar/NavBar";
import Footer from "../../Components/footer/Footer";

const Home = () => {
  const team = [
    {
      id: 1,
      image: require("../../Assets/images.jpeg"),
      name: "Ayush Bista",
      position: "architect",
      description:
        "Michael has a wealth of knowledge when it comes to design. With a BA (Hons) degree in Architecture and 6 years in the bespokeKitchen design Industry he is able to combine the two in order tovisualise space and bring your requirements to life.",
    },
    {
      id: 1,
      image: require("../../Assets/images.jpeg"),
      name: "Ayush Bista",
      position: "architect",
      description:
        "Michael has a wealth of knowledge when it comes to design. With a BA (Hons) degree in Architecture and 6 years in the bespokeKitchen design Industry he is able to combine the two in order tovisualise space and bring your requirements to life.",
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
              <h3 className="profile-name">{member.name}</h3>
              <p className="profile-position">{member.position}</p>
              <p className="profile-description">{member.description}</p>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Home;
