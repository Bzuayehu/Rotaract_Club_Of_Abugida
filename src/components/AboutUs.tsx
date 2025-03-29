import aboutImage from "../assets/about.jpg";
import "./AboutUs.css";

export default function AboutUs() {
  return (
    <section id="aboutus" className="about-section">
      <div className="about_container">
        {/* Image Section */}
        <div className="image-container">
          <img src={aboutImage} alt="About Rotaract Club" className="about-image" />
        </div>
        
        {/* Text Section */}
        <div className="text-container">
          <h2 className="title">About Rotaract Club of Abugida</h2>
          <p className="description">
            Established in June 2002 and chartered on June 23, 2003, our club is dedicated to community service, leadership development, and building lifelong friendships.
          </p>
          <p className="description">
            We participate in impactful projects that contribute to society and help our members grow professionally and personally.
          </p>
        </div>
      </div>
    </section>
  );
}
