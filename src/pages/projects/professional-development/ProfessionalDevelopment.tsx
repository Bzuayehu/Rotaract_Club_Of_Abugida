import React from "react";
// import guestSpeaker from "../assets/images/guest-speaker.jpg";
// import training from "../assets/images/training.jpg";
// import workshop from "../assets/images/workshop.jpg";
import meeting from "../../../assets/blooddonation.jpg"

import "./ProfessionalDevelopment.css";
import { Link } from "react-router-dom";

const professionalProjects = [
  {
    id:"fifteenMinuteGuest",
    title: "15 Minutes with Me: Guest Speaker",
    description: "Short, impactful sessions with industry experts.",
    image: meeting,
    gallery: [meeting, meeting, meeting], // Replace with actual images
    impact: "50+ sessions conducted",
    testimonial: "The guest speaker sessions were incredibly inspiring. - Attendee",
  },
  {
    id:"guestSpeakers",
    title: "Guest Speakers",
    description: "Inviting accomplished individuals to share their experiences.",
    image: meeting,
    gallery: [meeting, meeting, meeting], // Replace with actual images
    impact: "20+ speakers hosted",
    testimonial: "I learned so much from the guest speakers. - Member",
  },
  {
    id:"trainings",
    title: "Trainings",
    description: "Workshops and skill-building sessions.",
    image: meeting,
    gallery: [meeting, meeting, meeting], // Replace with actual images
    impact: "100+ members trained",
    testimonial: "The training sessions have boosted my confidence. - Participant",
  },
  {
    id:"visits",
    title: "Visits",
    description: "Hands-on sessions to develop practical skills.",
    image: meeting,
    gallery: [meeting, meeting, meeting], // Replace with actual images
    impact: "30+ workshops conducted",
    testimonial: "The workshops were very engaging and informative. - Participant",
  },
  // Add more sub-projects here
];

export default function professionalDevelopment() {
  return (
    <section className="professional-development">
      <div className="projects-header">
        <h2 className="projects-title">Professional Development Projects</h2>
        <p className="projects-description">We help our members grow professionally through workshops and training sessions.</p>
      </div>

      <div className="projects-list">
        {professionalProjects.map((project, index) => (
          <div key={index} className="project-card">
            <img src={project.image} alt={project.title} className="project-image" />
            <h3 className="project-title">{project.title}</h3>
            <p className="project-text">{project.description}</p>

            {/* Impact Metrics */}
            <div className="impact-metrics">
              <p>Impact: {project.impact}</p>
            </div>

            {/* Testimonial */}
            <div className="testimonial">
              <p>"{project.testimonial}"</p>
            </div>

            {/* Gallery for each sub-project */}
            <div className="gallery">
              <h4>Gallery</h4>
              <div className="gallery-images">
                {project.gallery.map((image, idx) => (
                  <img key={idx} src={image} alt={`${project.title} ${idx + 1}`} className="gallery-image" />
                ))}
              </div>
            </div>

            {/* Call-to-Detail Button */}
            <Link to={`/professional-development/projectDetail/${project.id}`} className="cta-button">
              Learn More
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}