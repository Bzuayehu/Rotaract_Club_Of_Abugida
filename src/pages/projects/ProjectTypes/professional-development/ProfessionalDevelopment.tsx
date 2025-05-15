// import React from "react";
// import guestSpeaker from "../assets/images/guest-speaker.jpg";
// import training from "../assets/images/training.jpg";
// import workshop from "../assets/images/workshop.jpg";
import meeting from "../../../../assets/blooddonation.jpg";

import "./ProfessionalDevelopment.css";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

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
import training from "../../../../assets/Proffessional-Development/photo_2_2025-02-26_10-38-21.jpg";
import training1 from "../../../../assets/Proffessional-Development/photo_11_2025-02-26_10-38-21.jpg";
import training2 from "../../../../assets/Proffessional-Development/photo_8_2025-02-26_10-38-21.jpg";
import training3 from "../../../../assets/Proffessional-Development/photo_3_2025-02-26_10-38-21.jpg";
import { useEffect } from "react";

//visits
// import visits from "../../../assets/Visits/visits.jpg";
// import visits1 from "../../../assets/Visits/visits1.jpg";
// import visits2 from "../../../assets/Visits/visits2.jpg";
// import visits3 from "../../../assets/Visits/visits3.jpg";
const professionalProjects = [
  {
    id: "fifteenMinuteGuest",
    title: "15 Minutes with Me: Guest Speaker",
    description: "Short, impactful sessions with industry experts.",
    image: meeting,
    gallery: [meeting, meeting, meeting], // Replace with actual images
    impact: "50+ sessions conducted",
    testimonial:
      "The guest speaker sessions were incredibly inspiring. - Attendee",
  },
  {
    id: "guestSpeakers",
    title: "Guest Speakers",
    description:
      "Inviting accomplished individuals to share their experiences.",
    image: meeting,
    gallery: [meeting, meeting, meeting], // Replace with actual images
    impact: "20+ speakers hosted",
    testimonial: "I learned so much from the guest speakers. - Member",
  },
  {
    id: "trainings",
    title: "Trainings",
    description: "Workshops and skill-building sessions.",
    image: training,
    gallery: [training1, training2, training3], // Replace with actual images
    impact: "100+ members trained",
    testimonial:
      "The training sessions have boosted my confidence. - Participant",
  },
  {
    id: "visits",
    title: "Visits",
    description: "Hands-on sessions to develop practical skills.",
    image: meeting,
    gallery: [meeting, meeting, meeting], // Replace with actual images
    impact: "30+ workshops conducted",
    testimonial:
      "The workshops were very engaging and informative. - Participant",
  },
  {
    id: "activities",
    title: "Activities",
    description: "Engaging activities to enhance learning.",
    image: meeting,
    gallery: [meeting, meeting, meeting], // Replace with actual images
    impact: "50+ activities organized",
    testimonial: "The activities were fun and educational. - Member",
  },
];

export default function professionalDevelopment() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);
  return (
    <section className="professional-development" data-aos="fade-up">
      <div className="projects-header" data-aos="fade-down">
        <h2
          className="projects-title"
          data-aos="fade-right"
          data-aos-delay="100"
        >
          Professional Development Projects
        </h2>
        <p
          className="projects-description"
          data-aos="fade-left"
          data-aos-delay="200"
        >
          We help our members grow professionally through workshops and training
          sessions.
        </p>
      </div>

      <div className="projects-list-pd">
        {professionalProjects.map((project, index) => (
          <div key={index} className="project-card" data-aos="zoom-in-up">
            <img
              src={project.image}
              alt={project.title}
              className="project-image"
              data-aos="fade-in"
              data-aos-delay="300"
            />
            <h3
              className="project-title"
              data-aos="fade-right"
              data-aos-delay="400"
            >
              {project.title}
            </h3>
            <p
              className="project-text"
              data-aos="fade-left"
              data-aos-delay="500"
            >
              {project.description}
            </p>

            {/* Impact Metrics */}
            {/* <div
              className="impact-metrics"
              data-aos="flip-up"
              data-aos-delay="600"
            >
              <p>Impact: {project.impact}</p>
            </div> */}

            {/* Testimonial */}
            <div
              className="testimonial"
              data-aos="zoom-in"
              data-aos-delay="650"
            >
              <p>"{project.testimonial}"</p>
            </div>

            {/* Gallery for each sub-project */}
            {/* <div className="gallery">
              <h4>Gallery</h4>
              <div className="gallery-images">
                {project.gallery.map((image, idx) => (
                  <img
                    key={idx}
                    src={image}
                    alt={`${project.title} ${idx + 1}`}
                    className="gallery-image"
                    data-aos="zoom-in"
                    data-aos-delay={`${750 + idx * 50}`}
                  />
                ))}
              </div>
            </div> */}

            {/* Call-to-Detail Button */}
            <Link
              to={`/professional-development/projectDetail/${project.id}`}
              className="cta-button"
              data-aos="fade-up"
              data-aos-delay="900"
            >
              Learn More
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
