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
          Rotaract Club of Abugida was established in June 2002 and chartered on June 23, 2003. Since 
          its establishment the club is participating in different community, professional and fellowship 
          projects to contribute its part in the community. The club believes that it has been successful in 
          the projects it has undertaken so far and they have brought a significant impact in the society 
          and among the members too. Rotaract Club of Abugida has 150 registered and 50 to 80 active 
          members. These members are very dedicated and responsible in each project the club has.        
          </p>
          <p className="description">
          The general assemblies are held every two weeks at National Blood Bank (Red Cross) around 
          Addis Ababa stadium at 10:00 LT on Sunday, toasting to Ethiopia at the beginning and to 
          Rotary International at the end. It has its own impact on the members to always remind them
          that they are responsible for and contributing to their country through Rotary.
          Our Club manages more than 8 different community service projects and there are also different 
          professional service activities and fellowships. Below are the brief descriptions of the projects 
          and events that the club has accomplished.          
          </p>
          <p className="description">
            We participate in impactful projects that contribute to society and help our members grow professionally and personally.
          </p>
        </div>
      </div>
    </section>
  );
}
