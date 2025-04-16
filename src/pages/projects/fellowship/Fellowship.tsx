// import React from "react";
// import trips from "../assets/images/trips.jpg";
// import buheFellowship from "../assets/images/buhe-fellowship.jpg";
// import coffeeTime from "../assets/images/coffee-time.jpg";
// import sleepover from "../assets/images/sleepover.jpg";
// import message from "../assets/images/message.jpg";
// import meeting from "../../../assets/about.jpg"


//Buhe Fellowship
import buheFellowship from "../../../assets/Buhe_Fellowship/buhe_13_withGuest.jpg";
import buheFellowship1 from "../../../assets/Buhe_Fellowship/buhe_7.jpg";
import buheFellowship2 from "../../../assets/Buhe_Fellowship/buhe_12.jpg";
import buheFellowship3 from "../../../assets/Buhe_Fellowship/buhe_2.jpg";
// import buheFellowship4 from "../../../assets/Buhe Fellowship/buhe_9.jpg";
// import buheFellowship5 from "../../../assets/Buhe Fellowship/buhe_10.jpg";
// import buheFellowship6 from "../../../assets/Buhe Fellowship/buhe_11.jpg";

//Coffee Time
import coffeeTime from "../../../assets/Coffee_Time/best-pic.jpg";
import coffeeTime1 from "../../../assets/Coffee_Time/february-birthcake.jpg";
import coffeeTime2 from "../../../assets/Coffee_Time/photo_2025-02-28_21-04-58.jpg";
import coffeeTime3 from "../../../assets/Coffee_Time/photo_2025-03-28_20-40-02.jpg";
// import coffeeTime4 from "../../../assets/Coffee Time/photo_2025-03-28_20-40-35.jpg";
// import coffeeTime5 from "../../../assets/Coffee Time/photo_2025-03-28_20-40-42.jpg";
// import coffeeTime6 from "../../../assets/Coffee Time/photo_2025-03-28_20-40-10.jpg";

//Sleepover
import sleepover from "../../../assets/Sleep_Over/IMG_20250403_103904_043.jpg";
import sleepover1 from "../../../assets/Sleep_Over/IMG_20250403_103930_280.jpg";
import sleepover2 from "../../../assets/Sleep_Over/IMG_20250403_103937_375.jpg";
import sleepover3 from "../../../assets/Sleep_Over/IMG_20250403_110129_718.jpg";
// import sleepover4 from "../../../assets/Sleep Over/IMG_20250403_110445_794.jpg";


//I've a Message
import message from "../../../assets/I've a Message/photo_17_2025-02-26_10-26-07.jpg";
import message1 from "../../../assets/I've a Message/photo_22_2025-02-26_10-26-07.jpg";


//Trips
import trips from "../../../assets/Trip/photo_2025-04-06_14-16-59.jpg";
import trips1 from "../../../assets/Trip/pic1.jpg";
import trips2 from "../../../assets/Trip/photo_2025-04-05_20-12-53.jpg";
import trips3 from "../../../assets/Trip/photo_2025-04-15_21-47-33.jpg";
import trips4 from "../../../assets/Trip/abc_2926.png";
import trips5 from "../../../assets/Trip/abc_3247.png";
import trips6 from "../../../assets/Trip/abc_3250.png";
import trips7 from "../../../assets/Trip/abc_3258.png";


// import trips1 from "../../../assets/Trips/trips_1.jpg";
// import trips2 from "../../../assets/Trips/trips_2.jpg";
// import trips3 from "../../../assets/Trips/trips_3.jpg";
// import trips4 from "../../../assets/Trips/trips_4.jpg";



import "./Fellowship.css";
import { Link } from "react-router-dom";

const clubProjects = [
  {
    id:"trips",
    title: "Trips",
    description: "Organizing group outings to explore new places.",
    image: trips1,
    gallery: [trips5, trips, trips2,trips3, trips5, trips6,trips7,trips4], // Replace with actual images
    impact: "10+ trips organized",
    testimonial: "The trips are always so much fun and a great way to bond. - Member",
  },
  {
    id:"buheFellowship",
    title: "Buhe Fellowship",
    description: "Celebrating cultural traditions together.",
    image: buheFellowship1,
    gallery: [buheFellowship, buheFellowship2, buheFellowship3], // Replace with actual images
    impact: "200+ participants",
    testimonial: "Buhe Fellowship is a highlight of the year. - Participant",
  },
  {
    id:"coffeeTime",
    title: "Coffee Time",
    description: "Casual meet-ups over coffee.",
    image: coffeeTime,
    gallery: [coffeeTime1, coffeeTime2, coffeeTime3], // Replace with actual images
    impact: "50+ meet-ups held",
    testimonial: "Coffee Time is a great way to relax and connect. - Member",
  },
  {
    id:"sleepover",
    title: "Sleepover",
    description: "Overnight gatherings for fun and bonding.",
    image: sleepover,
    gallery: [sleepover1, sleepover2, sleepover3], // Replace with actual images
    impact: "20+ sleepovers organized",
    testimonial: "The sleepovers are always a blast! - Member",
  },
  {id:"iHaveAMessage",
    title: "I have a Message",
    description: "Sharing motivational messages and stories.",
    image: message,
    gallery: [message1, message1, message1], // Replace with actual images
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