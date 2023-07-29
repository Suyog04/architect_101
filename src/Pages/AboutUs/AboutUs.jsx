import "./AboutUs.css";

import Footer from "../../Components/footer/Footer";
import Navbar from "../../Components/NavBar/NavBar";

const AboutUs = () => {
  const aboutus_content = [
    {
      id: 1,
      p: "Every kitchen we design, manufacture and install is handmade by expert cabinet makers and installed by artisan joiners with a real passion for their craft. We are a small team. We are driven and determined, with many years’ combined experience in the kitchen industry.",
      image: require("../../Assets/about-content.jpeg"),
    },
    {
      id: 2,
      p: "We keep you in the loop, informed, involved and up-to-date.We make it easy. Everything is designed around you and your home.We don’t have a showroom or a sales team. We simply bring everything to you. Presentations can be done in your home to suit you.",
      image: require("../../Assets/about_01.png"),
    },
  ];
  return (
    <>
      <section className="about-us">
        <Navbar />
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
              <img src={content.image} alt="" />
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

