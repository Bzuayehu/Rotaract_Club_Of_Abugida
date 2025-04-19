import communityService from "../assets/communityservice.jpg";
import professionalDevelopment from "../assets/professional.webp";
import fellowship from "../assets/Buhe-Fellowship/buhe_1.jpg";
import "./Projects.css"; // Import the CSS file
import { useTranslation } from "react-i18next";
import Modal from "./Modal"; // Import the modal component
import { useState } from "react";
import { Link } from "react-router-dom";

interface Project {
  title: string;
  description: string;
  image: string;
  path: string;
}

export default function Projects() {
  const { t } = useTranslation();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      title: t("projects.0.title"),
      description: t("projects.0.description"),
      image: communityService,
      path: "community-service",
    },
    {
      title: t("projects.1.title"),
      description: t("projects.1.description"),
      image: professionalDevelopment,
      path: "professional-development",
    },
    {
      title: t("projects.2.title"),
      description: t("projects.2.description"),
      image: fellowship,
      path: "fellowship",
    },
  ];

  const openModal = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  return (
    <section id="services" className="projects-section">
      <div className="projects-header">
        <h2 className="projects-title">{t("projects_title")}</h2>
        <p className="projects-description">{t("projects_description")}</p>
      </div>

      <div className="projects-list">
        {projects.map((project, index) => (
          <div
            className="projects-project-card"
            key={index}
            onClick={() => openModal(project)}
          >
            <img
              src={project.image}
              alt={project.title}
              className="project-image"
              onClick={() => openModal(project)}
            />
            <h3 className="project-title" onClick={() => openModal(project)}>
              {project.title}
            </h3>
            <Link to={`/${project.path}`} key={index}>
              <p className="project-text">{project.description} ...see more</p>{" "}
            </Link>
          </div>
        ))}
      </div>

      {selectedProject && (
        <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
          <img src={selectedProject.image} alt={selectedProject.title} className="project-image" />
          <h2 className="project-title">{selectedProject.title}</h2>
          <p className="project-text">{selectedProject.description}</p>
        </Modal>
      )}
    </section>
  );
}
