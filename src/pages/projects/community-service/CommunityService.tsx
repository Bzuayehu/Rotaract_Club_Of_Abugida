// import React from "react";
import { Link } from "react-router-dom";
import meeting from "../../../assets/Blood Donation/65th_1.jpg";
// import bd from "../../../assets/Blood Donation/65th_1.jpg";
import bloodDonation1 from "../../../assets/Blood Donation/65th_1.jpg";
import bloodDonation2 from "../../../assets/Blood Donation/65th_11.jpg";
import bloodDonation3 from "../../../assets/Blood Donation/65th_8.jpg";

//brana project
import bp from "../../../assets/Book Donation/bookdonation.jpg";
import bp1 from "../../../assets/Book Donation/bookdonation2.jpg";
import bp2 from "../../../assets/Book Donation/bookdonation6.jpg";
import bp3 from "../../../assets/Book Donation/bookdonation4.jpg";

//sanitary pad
import sp from "../../../assets/Sanitary Pad/photo_10_2025-02-26_10-26-07.jpg";
import sp1 from "../../../assets/Sanitary Pad/photo_11_2025-02-26_10-26-07.jpg";
import sp2 from "../../../assets/Sanitary Pad/photo_12_2025-02-26_10-26-07.jpg";
import sp3 from "../../../assets/Sanitary Pad/photo_3_2025-02-26_10-26-07.jpg";  
import sp4 from "../../../assets/Sanitary Pad/photo_4_2025-02-26_10-26-07.jpg";
import sp5 from "../../../assets/Sanitary Pad/photo_9_2025-02-26_10-26-07.jpg";

//school feeding
// import sf from "../../../assets/Blood Donation/65th_8.jpg";
// import sf1 from "../../../assets/Blood Donation/65th_8.jpg";
// import sf2 from "../../../assets/Blood Donation/65th_8.jpg";
// import sf3 from "../../../assets/Blood Donation/65th_8.jpg";

//yewedekutn Ansu
// import ya from "../../../assets/Blood Donation/65th_8.jpg";
// import ya1 from "../../../assets/Blood Donation/65th_8.jpg";
// import ya2 from "../../../assets/Blood Donation/65th_8.jpg";
// import ya3 from "../../../assets/Blood Donation/65th_8.jpg";

//Extending Love
import el from "../../../assets/Extending Love /IMG_20250403_101502_944.jpg";
import el1 from "../../../assets/Extending Love /IMG_20250403_101649_402.jpg";
import el2 from "../../../assets/Extending Love /IMG_20250403_101719_009.jpg"
import el3 from "../../../assets/Extending Love /IMG_20250403_101920_179.jpg";
import el4 from "../../../assets/Extending Love /photo_2025-02-26_10-34-23.jpg";
import el5 from "../../../assets/Extending Love /photo_91_2025-02-26_10-26-07.jpg";



//School painting
import scp from "../../../assets/School Painting/scp_best.jpg";
import scp1 from "../../../assets/School Painting/scp18_best.jpg";
import scp2 from "../../../assets/School Painting/photo_2025-03-31_18-12-43.jpg";
import scp3 from "../../../assets/School Painting/photo_2025-03-31_18-13-05.jpg";
import scp4 from "../../../assets/School Painting/photo_2025-03-31_18-12-55.jpg";
import scp5 from "../../../assets/School Painting/photo_2025-03-31_18-13-10.jpg";




//Addis Holiday Lunch
// import ahl from "../../../assets/Blood Donation/65th_8.jpg";
// import ahl1 from "../../../assets/Blood Donation/65th_8.jpg";
// import ahl2 from "../../../assets/Blood Donation/65th_8.jpg";
// import ahl3 from "../../../assets/Blood Donation/65th_8.jpg";

//Blanket Donation
// import bld from "../../../assets/Blood Donation/65th_8.jpg";
// import bld1 from "../../../assets/Blood Donation/65th_8.jpg";
// import bld2 from "../../../assets/Blood Donation/65th_8.jpg";
// import bld3 from "../../../assets/Blood Donation/65th_8.jpg";

//eye vision
// import ev from "../../../assets/Blood Donation/65th_8.jpg";
// import ev1 from "../../../assets/Blood Donation/65th_8.jpg";
// import ev2 from "../../../assets/Blood Donation/65th_8.jpg";
// import ev3 from "../../../assets/Blood Donation/65th_8.jpg";

import "./CommunityService.css";

const communityProjects = [
  {
    id: "bloodDonation", // Unique ID for routing
    title: "Blood Donation",
    description: "Organizing blood donation drives to support local hospitals and save lives.",
    image: meeting,
    gallery: [bloodDonation1, bloodDonation2, bloodDonation3], // Replace with actual images
    impact: "500+ lives saved",
    testimonial: "The blood donation drive was a lifesaver for many in our community. - Participant",
  },
  {
    id: "branaProject", // Unique ID for routing
    title: "Brana Project",
    description: "A community development initiative focused on improving local infrastructure.",
    image: bp,
    gallery: [bp1, bp2, bp3], // Replace with actual images
    impact: "10+ infrastructure projects completed",
    testimonial: "The Brana Project has transformed our neighborhood. - Local Resident",
  },
  {
    id: "sanitaryPadDonation", // Unique ID for routing
    title: "Sanitary Pad Donation",
    description: "Providing sanitary pads to underprivileged girls to promote menstrual hygiene.",
    image: sp,
    gallery: [sp1, sp2, sp3, sp4,sp5], // Replace with actual images
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
    image: el5,
    gallery: [el1, el, el2, el3,el4], // Replace with actual images
    impact: "1,000+ lives touched",
    testimonial: "The Extending Love Project has shown us the power of kindness. - Volunteer",
  },
  {
    id: "schoolPainting", // Unique ID for routing
    title: "School Painting",
    description: "Beautifying school environments through painting and renovation.",
    image: scp,
    gallery: [scp1, scp2, scp3, scp4, scp5], // Replace with actual images
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