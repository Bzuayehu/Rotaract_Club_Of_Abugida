// import React from "react";
// import guestSpeaker from "../assets/images/guest-speaker.jpg";
// import training from "../assets/images/training.jpg";
// import workshop from "../assets/images/workshop.jpg";
import meeting from "../../../assets/blooddonation.jpg"

import "./ProfessionalDevelopment.css";
import { Link } from "react-router-dom";


//fiftteen minute guest
// import fifteenMinuteGuest from "../../../assets/15MinutesWithMe/15minuteswithme.jpg";
// import fifteenMinuteGuest from "../../../assets/15MinutesWithMe/15minuteswithme.jpg";
// import fifteenMinuteGuest1 from "../../../assets/15MinutesWithMe/15minuteswithme1.jpg";
// import fifteenMinuteGuest2 from "../../../assets/15MinutesWithMe/15minuteswithme2.jpg";


//guest speaker
// import guestSpeaker from "../../../assets/Guest Speaker/guestSpeaker.jpg";
// import guestSpeaker1 from "../../../assets/Guest Speaker/guestSpeaker1.jpg";
// import guestSpeaker2 from "../../../assets/Guest Speaker/guestSpeaker2.jpg";
// import guestSpeaker3 from "../../../assets/Guest Speaker/guestSpeaker3.jpg";
// import guestSpeaker4 from "../../../assets/Guest Speaker/guestSpeaker4.jpg";

//training
import training from "../../../assets/Proffessional_Development/photo_2_2025-02-26_10-38-21.jpg";
import training1 from "../../../assets/Proffessional_Development/photo_11_2025-02-26_10-38-21.jpg";
import training2 from "../../../assets/Proffessional_Development/photo_8_2025-02-26_10-38-21.jpg";
import training3 from "../../../assets/Proffessional_Development/photo_3_2025-02-26_10-38-21.jpg";



//visits
// import visits from "../../../assets/Visits/visits.jpg";
// import visits1 from "../../../assets/Visits/visits1.jpg";
// import visits2 from "../../../assets/Visits/visits2.jpg";
// import visits3 from "../../../assets/Visits/visits3.jpg";
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
    image: training,
    gallery: [training1, training2, training3], // Replace with actual images
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