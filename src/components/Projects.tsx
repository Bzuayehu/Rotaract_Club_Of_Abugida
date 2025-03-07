import communityService from "../assets/communityservice.jpg";
import professionalDevelopment from "../assets/professional.webp";
import fellowship from "../assets/fellowship.jpg";
import "./Projects.css"; // Import the CSS file
import { useTranslation } from 'react-i18next';


export default function Projects() {
  const { t } = useTranslation();

  const projects = [
    {
      title: t("projects.0.title"),
      description: t("projects.0.description"),
      image: communityService,
    },
    {
      title: t("projects.1.title"),
      description: t("projects.1.description"),
      image: professionalDevelopment,
    },
    {
      title: t("projects.2.title"),
      description: t("projects.2.description"),
      image: fellowship,
    }
  ];

  return (
    <section id="services" className="projects-section">
      <div className="projects-header">
        <h2 className="projects-title">{t("projects_title")}</h2>
        <p className="projects-description">{t("projects_description")}</p>
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
