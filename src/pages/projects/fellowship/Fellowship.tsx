// import React from "react";
// import trips from "../assets/images/trips.jpg";
// import buheFellowship from "../assets/images/buhe-fellowship.jpg";
// import coffeeTime from "../assets/images/coffee-time.jpg";
// import sleepover from "../assets/images/sleepover.jpg";
// import message from "../assets/images/message.jpg";
import meeting from "../../../assets/about.jpg"

import "./Fellowship.css";
import { Link } from "react-router-dom";

const clubProjects = [
  {
    id:"trips",
    title: "Trips",
    description: "Organizing group outings to explore new places.",
    image: meeting,
    gallery: [meeting, meeting, meeting], // Replace with actual images
    impact: "10+ trips organized",
    testimonial: "The trips are always so much fun and a great way to bond. - Member",
  },
  {
    id:"buheFellowship",
    title: "Buhe Fellowship",
    description: "Celebrating cultural traditions together.",
    image: meeting,
    gallery: [meeting, meeting, meeting], // Replace with actual images
    impact: "200+ participants",
    testimonial: "Buhe Fellowship is a highlight of the year. - Participant",
  },
  {
    id:"coffeeTime",
    title: "Coffee Time",
    description: "Casual meet-ups over coffee.",
    image: meeting,
    gallery: [meeting, meeting, meeting], // Replace with actual images
    impact: "50+ meet-ups held",
    testimonial: "Coffee Time is a great way to relax and connect. - Member",
  },
  {
    id:"sleepover",
    title: "Sleepover",
    description: "Overnight gatherings for fun and bonding.",
    image: meeting,
    gallery: [meeting, meeting, meeting], // Replace with actual images
    impact: "20+ sleepovers organized",
    testimonial: "The sleepovers are always a blast! - Member",
  },
  {id:"I-have-a-message",
    title: "I've a Message",
    description: "Sharing motivational messages and stories.",
    image: meeting,
    gallery: [meeting, meeting, meeting], // Replace with actual images
    impact: "100+ messages shared",
    testimonial: "The messages are always inspiring and uplifting. - Member",
  },
  // Add more sub-projects here
];

export default function Fellowship() {
  return (
    <section className="club-service">
      <div className="projects-header">
        <h2 className="projects-title">Fellowship (Club Service) Projects</h2>
        <p className="projects-description">We build strong friendships and connections through fun and meaningful activities.</p>
      </div>

      <div className="projects-list">
        {clubProjects.map((project, index) => (
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
            <Link to={`/fellowship/projectDetail/${project.id}`} className="cta-button">
              Learn More
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}