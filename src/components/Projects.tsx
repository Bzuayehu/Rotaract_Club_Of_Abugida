import communityService from "../assets/community.jpg";
import professionalDevelopment from "../assets/professional.jpg";
import fellowship from "../assets/fellowship.jpg";
import "./Projects.css"; // Import the CSS file

const projects = [
  {
    title: "Community Service",
    description: "We undertake impactful projects to improve society and support those in need.",
    image: communityService,
  },
  {
    title: "Professional Development",
    description: "Workshops and training sessions to help members grow in their careers.",
    image: professionalDevelopment,
  },
  {
    title: "Fellowship Activities",
    description: "Networking events and gatherings to build strong friendships and connections.",
    image: fellowship,
  },
];

export default function Projects() {
  return (
    <section id="services" className="projects-section">
      <div className="projects-header">
        <h2 className="projects-title">Our Projects</h2>
        <p className="projects-description">We are committed to making a difference through various impactful initiatives.</p>
      </div>

      <div className="projects-list">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <img src={project.image} alt={project.title} className="project-image" />
            <h3 className="project-title">{project.title}</h3>
            <p className="project-text">{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
