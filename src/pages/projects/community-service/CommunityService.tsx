import React from "react";
import { Link } from "react-router-dom";
import meeting from "../../../assets/professional.webp";
import "./CommunityService.css";

const communityProjects = [
  {
    id: "bloodDonation", // Unique ID for routing
    title: "Blood Donation",
    description: "Organizing blood donation drives to support local hospitals and save lives.",
    image: meeting,
    gallery: [meeting, meeting, meeting], // Replace with actual images
    impact: "500+ lives saved",
    testimonial: "The blood donation drive was a lifesaver for many in our community. - Participant",
  },
  {
    id: "branaProject", // Unique ID for routing
    title: "Brana Project",
    description: "A community development initiative focused on improving local infrastructure.",
    image: meeting,
    gallery: [meeting, meeting, meeting], // Replace with actual images
    impact: "10+ infrastructure projects completed",
    testimonial: "The Brana Project has transformed our neighborhood. - Local Resident",
  },
  {
    id: "sanitaryPadDonation", // Unique ID for routing
    title: "Sanitary Pad Donation",
    description: "Providing sanitary pads to underprivileged girls to promote menstrual hygiene.",
    image: meeting,
    gallery: [meeting, meeting, meeting], // Replace with actual images
    impact: "1,000+ girls supported",
    testimonial: "This initiative has made a huge difference in our lives. - Beneficiary",
  },
  {
    id: "schoolFeeding", // Unique ID for routing
    title: "School Feeding Project",
    description: "Offering nutritious meals to students in need.",
    image: meeting,
    gallery: [meeting, meeting, meeting], // Replace with actual images
    impact: "5,000+ meals served",
    testimonial: "The school feeding program has improved attendance and health. - Teacher",
  },
  {
    id: "yewedekutinAnsu", // Unique ID for routing
    title: "Yewedekutin Ansu",
    description: "A project aimed at supporting elderly community members.",
    image: meeting,
    gallery: [meeting, meeting, meeting], // Replace with actual images
    impact: "200+ elderly supported",
    testimonial: "This project has brought joy to our lives. - Elderly Beneficiary",
  },
  {
    id: "extendingLove", // Unique ID for routing
    title: "Extending Love Project",
    description: "Spreading kindness and support to vulnerable groups.",
    image: meeting,
    gallery: [meeting, meeting, meeting], // Replace with actual images
    impact: "1,000+ lives touched",
    testimonial: "The Extending Love Project has shown us the power of kindness. - Volunteer",
  },
  {
    id: "schoolPainting", // Unique ID for routing
    title: "School Painting",
    description: "Beautifying school environments through painting and renovation.",
    image: meeting,
    gallery: [meeting, meeting, meeting], // Replace with actual images
    impact: "10+ schools renovated",
    testimonial: "The school painting project has created a better learning environment. - Teacher",
  },
  {
    id: "addisHolidayLunch", // Unique ID for routing
    title: "Addis Holiday Lunch",
    description: "Hosting holiday meals for those in need.",
    image: meeting,
    gallery: [meeting, meeting, meeting], // Replace with actual images
    impact: "500+ meals served",
    testimonial: "The holiday lunch brought joy to many families. - Participant",
  },
  {
    id: "blanketDonation", // Unique ID for routing
    title: "Blanket Donation",
    description: "Distributing blankets to keep people warm during colder months.",
    image: meeting,
    gallery: [meeting, meeting, meeting], // Replace with actual images
    impact: "1,000+ blankets donated",
    testimonial: "The blanket donation has kept us warm during the winter. - Beneficiary",
  },
  {
    id: "eyeVision", // Unique ID for routing
    title: "Eye Vision Project",
    description: "Offering free eye check-ups and glasses to those in need.",
    image: meeting,
    gallery: [meeting, meeting, meeting], // Replace with actual images
    impact: "200+ people helped",
    testimonial: "The Eye Vision Project has improved my quality of life. - Beneficiary",
  },
];

export default function CommunityService() {
  return (
    <section className="community-service">
      <div className="projects-header">
        <h2 className="projects-title">Community Service Projects</h2>
        <p className="projects-description">We are committed to making a difference in our community through impactful initiatives.</p>
      </div>

      <div className="projects-list">
        {communityProjects.map((project, index) => (
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
            <Link to={`/community-service/projectDetail/${project.id}`} className="cta-button">
              Learn More
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}