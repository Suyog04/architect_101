import './AboutUs.css'

import Footer from '../../Components/footer/Footer'
import Navbar from '../../Components/NavBar/NavBar'


const AboutUs = () => {
  const aboutus_content = [
    {
      'id': 1,
      'p': 'Every kitchen we design, manufacture and install is handmade by expert cabinet makers and installed by artisan joiners with a real passion for their craft. We are a small team. We are driven and determined, with many years’ combined experience in the kitchen industry. Working with you, we combine original, inventive, innovative and individual designs with meticulous craftsmanship, exceptional quality and attention to detail.',
      'image': require('../../Assets/about-content.jpeg')
    },
    {
      "id": "2",
      "p": "We keep you in the loop, informed, involved and up-to-date.\n\nWe make it easy. Everything is designed around you and your home.\n\nWe don’t have a showroom or a sales team. We simply bring everything to you. Presentations can be done in your home to suit you. We plan everything to suit your availability.\n\nOur approach is collaborative and hands-on, we listen and love to create a kitchen that truly reflects your life and lifestyle.",
      "image": require('../../Assets/about_01.png')
    }
    
  ]
  return (
    <>
      <section className = "about-us">
        <Navbar />
        <div className = "hero-heading">
          <h1>
            We are proud in creating your bespoke, design.
          </h1>
        </div>
      </section>

      <section className="about-description">
  <h1>About us</h1>
  <div className="aboutus-content">
    {aboutus_content.map((content) => (
      <div className="content-description_1" key={content.id}>
        {content.id === "1" && (
          <>
            <img src={content.image} alt="" />
            <p>{content.p}</p>
          </>
        )}
        <div className = "content-description_2" key = {content.id}>
        {content.id === "2" && (
          <>
            <p>{content.p}</p>
            <img src={content.image} alt="" />
          </>
        )}
        </div>
      </div>
    ))}
  </div>
</section>


      <Footer />
    </>
  )
}

export default AboutUs