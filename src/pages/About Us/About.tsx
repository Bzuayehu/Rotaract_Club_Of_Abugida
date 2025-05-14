import { useEffect, useState } from "react";
import "./About.css";
import AOS from "aos";
import "aos/dist/aos.css";

export default function About() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);
  const [expandedSections, setExpandedSections] = useState<
    Record<string, boolean>
  >({
    mission: false,
    history: false,
    values: false,
    impact: false,
    meetings: false,
    join: false,
    testimonials: false,
    contact: false,
  });

  const toggleSection = (section: string) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  return (
    <div className="about-container">
      {/* Hero Section */}
      <section className="about-hero" data-aos="fade-down">
        <div className="about-hero-overlay">
          <div className="about-hero-content">
            <h1 data-aos="fade-right">About Rotaract Club of Abugida</h1>
            <p data-aos="fade-left">
              Empowering young leaders to create positive change through
              community service, leadership, and innovation.
            </p>
          </div>
        </div>
      </section>

      {/* Expandable Sections */}
      <div className="expandable-sections" data-aos="fade-up">
        {/* Mission Section */}
        <div className="mission expandable-section" data-aos="fade-up">
          <div
            className="section-header"
            onClick={() => toggleSection("mission")}
          >
            <h2>Our Mission</h2>
            <span
              className={`arrow ${expandedSections.mission ? "expanded" : ""}`}
            >
              ▼
            </span>
          </div>
          {expandedSections.mission && (
            <div className="section-content">
              <p>
                Our mission is to develop young professionals into proactive
                leaders by engaging in meaningful community service projects,
                fostering professional growth, and building strong networks of
                friendship and collaboration.
              </p>
            </div>
          )}
        </div>

        {/* History Section */}
        <div className="history expandable-section" data-aos="fade-up">
          <div
            className="section-header"
            onClick={() => toggleSection("history")}
          >
            <h2>Our History</h2>
            <span
              className={`arrow ${expandedSections.history ? "expanded" : ""}`}
            >
              ▼
            </span>
          </div>
          {expandedSections.history && (
            <div className="section-content">
              <p>
                Rotaract Club of Abugida was established in June 2002 and
                officially chartered on June 23, 2003. Since then, we have been
                actively involved in numerous projects, impacting lives and
                strengthening our community. With over 150 registered members
                and a dedicated group of 50-80 active participants, we continue
                to grow and expand our reach.
              </p>
            </div>
          )}
        </div>

        {/* Values Section */}
        <div className="values expandable-section" data-aos="fade-up">
          <div
            className="section-header"
            onClick={() => toggleSection("values")}
          >
            <h2>Our Values</h2>
            <span
              className={`arrow ${expandedSections.values ? "expanded" : ""}`}
            >
              ▼
            </span>
          </div>
          {expandedSections.values && (
            <div className="section-content">
              <ul>
                <li>
                  <strong>Service:</strong> We believe in making a difference in
                  our communities through impactful projects.
                </li>
                <li>
                  <strong>Leadership:</strong> We cultivate the next generation
                  of leaders who drive meaningful change.
                </li>
                <li>
                  <strong>Fellowship:</strong> We foster lifelong friendships
                  and professional networks.
                </li>
                <li>
                  <strong>Innovation:</strong> We embrace new ideas and creative
                  solutions to address social challenges.
                </li>
              </ul>
            </div>
          )}
        </div>

        {/* Impact Section */}
        <div className="impact expandable-section" data-aos="fade-up">
          <div
            className="section-header"
            onClick={() => toggleSection("impact")}
          >
            <h2>Our Impact</h2>
            <span
              className={`arrow ${expandedSections.impact ? "expanded" : ""}`}
            >
              ▼
            </span>
          </div>
          {expandedSections.impact && (
            <div className="section-content">
              <p>
                Over the years, our club has successfully executed numerous
                projects, including:
              </p>
              <ul>
                <li>🔹 Blood donation drives, saving hundreds of lives.</li>
                <li>
                  🔹 Educational programs to support underprivileged students.
                </li>
                <li>
                  🔹 Environmental sustainability initiatives, including tree
                  planting and waste management.
                </li>
                <li>
                  🔹 Professional development workshops to equip young leaders
                  with essential skills.
                </li>
              </ul>
            </div>
          )}
        </div>

        {/* Meetings Section */}
        <div className="meetings expandable-section" data-aos="fade-up">
          <div
            className="section-header"
            onClick={() => toggleSection("meetings")}
          >
            <h2>Our Meetings</h2>
            <span
              className={`arrow ${expandedSections.meetings ? "expanded" : ""}`}
            >
              ▼
            </span>
          </div>
          {expandedSections.meetings && (
            <div className="section-content">
              <p>
                Our general assemblies are held every two weeks at the National
                Blood Bank (Red Cross) near Addis Ababa stadium on Sundays at
                9:00 LT.
              </p>
            </div>
          )}
        </div>

        {/* Join Section */}
        <div className="join expandable-section" data-aos="fade-up">
          <div className="section-header" onClick={() => toggleSection("join")}>
            <h2>How to Join</h2>
            <span
              className={`arrow ${expandedSections.join ? "expanded" : ""}`}
            >
              ▼
            </span>
          </div>
          {expandedSections.join && (
            <div className="section-content">
              <p>
                If you're passionate about making a difference, we invite you to
                join us! Whether you're interested in community service,
                leadership development, or networking opportunities, the
                Rotaract Club of Abugida provides a platform to grow and
                contribute.
              </p>
              <p>
                <strong>
                  <a href="page.html#joinus">
                    Join us and be part of the change!
                  </a>
                </strong>
              </p>
            </div>
          )}
        </div>

        {/* Testimonials Section */}
        <div className="testimonials expandable-section" data-aos="fade-up">
          <div
            className="section-header"
            onClick={() => toggleSection("testimonials")}
          >
            <h2>What Our Members Say</h2>
            <span
              className={`arrow ${
                expandedSections.testimonials ? "expanded" : ""
              }`}
            >
              ▼
            </span>
          </div>
          {expandedSections.testimonials && (
            <div className="section-content">
              <blockquote>
                "Being part of Rotaract Club of Abugida has transformed my
                leadership skills and given me the opportunity to serve my
                community in ways I never imagined." - <strong>Member A</strong>
              </blockquote>
              <blockquote>
                "I have made lifelong friends and connections that have helped
                me grow personally and professionally." -{" "}
                <strong>Member B</strong>
              </blockquote>
            </div>
          )}
        </div>

        {/* Contact Section */}
        <div className="contact expandable-section" data-aos="fade-up">
          <div
            className="section-header"
            onClick={() => toggleSection("contact")}
          >
            <h2>Get in Touch</h2>
            <span
              className={`arrow ${expandedSections.contact ? "expanded" : ""}`}
            >
              ▼
            </span>
          </div>
          {expandedSections.contact && (
            <div className="section-content">
              <p>Have questions? Want to collaborate or join us? Reach out!</p>
              <p>
                <strong>Email:</strong> info@rotaractabugida.org
              </p>
              <p>
                <strong>Phone:</strong> +251 911126955
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
