// components/ProjectDetail.tsx
import { Link, useLocation } from "react-router-dom";
import { Project } from "../../../types";
import styles from "./ProjectDetail.module.css";
import { useState, useEffect } from "react";
import { GalleryHorizontal, GalleryHorizontalEnd } from "lucide-react";
import ImageModal from "../../../Modals/ImageModal";
import AOS from "aos";
import "aos/dist/aos.css";

interface ProjectDetailProps {
  project: Project;
}
const ProjectDetail = ({ project }: ProjectDetailProps) => {
  const location = useLocation();
  const stateProject = location.state?.project as Project | undefined;

  // Use props project first, fallback to state if needed
  const finalProject = project || stateProject;

  if (!finalProject) {
    return <div className="error-container">Project data not available</div>;
  }
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [showAllGallery, setShowAllGallery] = useState(false);
  const toggleGallery = () => setShowAllGallery(!showAllGallery);

  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  const visibleImages = showAllGallery
    ? project.gallery
    : project.gallery?.slice(0, 4);

  const visibleImagesall = project.gallery;

  return (
    <div className={styles.container} data-aos="fade-up">
      {/* Header Section */}
      <div className={styles.header} data-aos="fade-down">
        <h1 className={styles.title} data-aos="fade-right">
          {project.title}
        </h1>
        <span className={styles.category} data-aos="fade-left">
          {project.category}
        </span>
      </div>

      {/* Main Image Section */}
      {/* <div className={styles.mainImageContainer} data-aos="zoom-in">
        <img 
          src={project.image} 
          alt={project.title} 
          className={styles.mainImage}
        />
      </div> */}

      {/* Quick Facts */}
      <div className={styles.quickFacts} data-aos="fade-up">
        <p data-aos="fade-up">
          <strong>Date:</strong> {project.date}
        </p>
        <p data-aos="fade-up" data-aos-delay="100">
          <strong>Location:</strong> {project.location}
        </p>
        {project.partners && (
          <p data-aos="fade-up" data-aos-delay="200">
            <strong>Partners:</strong> {project.partners.join(", ")}
          </p>
        )}
      </div>

      {/* Description & Impact */}
      <div className={styles.section} data-aos="fade-up">
        <h2 data-aos="fade-right">About the Project</h2>
        <p data-aos="fade-up">{project.description}</p>
        {project.impact && (
          <>
            <h3 className={styles.impact} data-aos="fade-right">
              Impact
            </h3>
            <ul>
              {project.impact.map((item, index) => (
                <li key={index} data-aos="fade-up" data-aos-delay={index * 100}>
                  {item}
                </li>
              ))}
            </ul>
          </>
        )}
      </div>

      {/* Gallery */}
      {project.gallery && (
        <div className={styles.gallery} data-aos="fade-up">
          {visibleImages?.map((img, index) => (
            <img
              key={index}
              src={img}
              onClick={() => setSelectedIndex(index)}
              alt={`Project activity ${index + 1}`}
              data-aos="zoom-in"
              data-aos-delay={index * 100}
            />
          ))}

          {project.gallery.length > 4 && (
            <button
              onClick={toggleGallery}
              className={styles.toggleGalleryButton}
              data-aos="fade-up"
            >
              {showAllGallery ? (
                <>
                  <GalleryHorizontalEnd size={20} />
                  Show Less
                </>
              ) : (
                <>
                  <GalleryHorizontal size={20} />
                  See More
                </>
              )}
            </button>
          )}
        </div>
      )}

      {selectedIndex !== null && (
        <ImageModal
          images={visibleImagesall?.map((img) => img) || []}
          currentIndex={selectedIndex}
          onClose={() => setSelectedIndex(null)}
          onNavigate={(newIndex) => setSelectedIndex(newIndex)}
        />
      )}

      {/* Outcomes */}
      {project.outcomes && (
        <div className={styles.section} data-aos="fade-up">
          <h2 data-aos="fade-right">Outcomes</h2>
          <div className={styles.outcomesGrid}>
            {project.outcomes.map((outcome, index) => (
              <div
                key={index}
                className={styles.outcomeItem}
                data-aos="zoom-in"
                data-aos-delay={index * 100}
              >
                <div className={styles.outcomeValue}>{outcome.value}</div>
                <div className={styles.outcomeLabel}>{outcome.label}</div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Related Projects */}
      {project.relatedProjects && (
        <div className={styles.section} data-aos="fade-up">
          <h2 data-aos="fade-right">Related Projects</h2>
          <ul className={styles.relatedProjects}>
            {project.relatedProjects.map((related, index) => {
              const basePath =
                related.category === "Community Service"
                  ? "/community-service/projectDetail"
                  : related.category === "Professional Development"
                  ? "/professional-development/projectDetail"
                  : "/fellowship/projectDetail";

              const slug = related.title
                .toLowerCase()
                .replace(/(?:^\w|[A-Z]|\b\w)/g, (word, index) =>
                  index === 0 ? word.toLowerCase() : word.toUpperCase()
                )
                .replace(/\s+/g, "");

              return (
                <li
                  key={index}
                  className={styles.relatedProjectItem}
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <Link to={`${basePath}/${slug}`}>{related.title}</Link>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
};

export default ProjectDetail;
