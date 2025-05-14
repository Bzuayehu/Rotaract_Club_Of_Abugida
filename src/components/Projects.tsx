import communityService from "../assets/communityservice.jpg";
import professionalDevelopment from "../assets/professional.webp";
import fellowship from "../assets/Buhe-Fellowship/buhe_1.jpg";
import "./Projects.css"; // Import the CSS file
import { useTranslation } from "react-i18next";
import Modal from "../Modals/Modal"; // Import the modal component
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

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

  // Initialize AOS
  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  return (
    <section id="services" className="projects-section" data-aos="fade-up">
      <div className="projects-header" data-aos="fade-up">
        <h2 className="projects-title" data-aos="fade-right">{t("projects_title")}</h2>
        <p className="projects-description"data-aos="fade-up">{t("projects_description")}</p>
      </div>

      <div className="projects-list" data-aos="fade-up">
        {projects.map((project, index) => (
          <div
            className="projects-project-card"
            key={index}
            onClick={() => openModal(project)}
            data-aos="zoom-in"
            data-aos-delay={`${index * 100}`}
          >
            <img
              src={project.image}
              alt={project.title}
              className="project-image"
              onClick={() => openModal(project)}
              data-aos="zoom-in"
              data-aos-delay={`${index * 100}`}
            />
            <h3 className="project-title" onClick={() => openModal(project)} data-aos="fade-up" data-aos-delay={`${index * 100}`}>
              {project.title}
            </h3>
            <Link to={`/${project.path}`} key={index}>
              <p className="project-text" data-aos="fade-up" data-aos-delay={`${index * 100}`}>{project.description} ...see more</p>{" "}
            </Link>
          </div>
        ))}
      </div>

      {selectedProject && (
        <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
          <img src={selectedProject.image} alt={selectedProject.title} className="project-image" data-aos="zoom-in" />
          <h2 className="project-title" data-aos="fade-up">{selectedProject.title}</h2>
          <p className="project-text" data-aos="fade-up">{selectedProject.description}</p>
        </Modal>
      )}
    </section>
  );
}