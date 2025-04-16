// components/ProjectDetail.tsx
import { Link } from "react-router-dom";
import { Project } from "../types";
import styles from "./ProjectDetail.module.css";
import { useState } from "react";
import { GalleryHorizontal, GalleryHorizontalEnd } from "lucide-react";

interface ProjectDetailProps {
  project: Project;
}

const ProjectDetail = ({ project }: ProjectDetailProps) => {
  // const [showAllImages, setShowAllImages] = useState(false);
// const imagesToShow = showAllImages ? project.gallery : project.gallery?.slice(0, 3);

const [showAllGallery, setShowAllGallery] = useState(false);
  const toggleGallery = () => setShowAllGallery(!showAllGallery);

  const visibleImages = showAllGallery ? project.gallery : project.gallery?.slice(0, 4);
  return (
    <div className={styles.container}>
      {/* Header Section */}
      <div className={styles.header}>
        <h1 className={styles.title}>{project.title}</h1>
        <span className={styles.category}>{project.category}</span>
      </div>

      {/* Quick Facts */}
      <div className={styles.quickFacts}>
        <p>
          <strong>Date:</strong> {project.date}
        </p>
        <p>
          <strong>Location:</strong> {project.location}
        </p>
        {project.partners && (
          <p>
            <strong>Partners:</strong> {project.partners.join(", ")}
          </p>
        )}
      </div>

      {/* Description & Impact */}
      <div className={styles.section}>
        <h2>About the Project</h2>
        <p>{project.description}</p>
        {project.impact && (
          <>
            <h3 className={styles.impact}>Impact</h3>
            <ul>
              {project.impact.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </>
        )}
      </div>

      {/* Gallery */}
      
      {/* {project.gallery && (
        <div className={styles.gallery}>
          {imagesToShow?.map((img, index) => (
            <img key={index} src={img} alt={`Project activity ${index + 1}`} />
          ))}
          {project.gallery.length > 3 && (
            <button
              className={styles.toggleGalleryButton}
              onClick={() => setShowAllImages(!showAllImages)}
            >
              {showAllImages ? "Show Less" : "See More pictures"}
            </button>
          )}
        </div>
      )} */}

{project.gallery && (
        <div className={styles.gallery}>
          {visibleImages?.map((img, index) => (
            <img key={index} src={img} alt={`Project activity ${index + 1}`} />
          ))}

          {project.gallery.length > 4 && (
            <button onClick={toggleGallery} className={styles.toggleGalleryButton}>
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
      {/* Outcomes */}
      {project.outcomes && (
        <div className={styles.section}>
          <h2>Outcomes</h2>
          <div className={styles.outcomesGrid}>
            {project.outcomes.map((outcome, index) => (
              <div key={index} className={styles.outcomeItem}>
                <div className={styles.outcomeValue}>{outcome.value}</div>
                <div className={styles.outcomeLabel}>{outcome.label}</div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Related Projects */}
      {project.relatedProjects && (
        <div className={styles.section}>
          <h2>Related Projects</h2>
          <ul className={styles.relatedProjects}>
            {project.relatedProjects.map((related, index) => {
              const basePath =
                related.category === "Community Service"
                  ? "/community-service/projectDetail"
                  : related.category === "Professional Development"
                  ? "/professional-development/projectDetail"
                  : "/fellowship/projectDetail";

              // const slug = related.title.toLowerCase().replace(/\s+/g, "-");
              const slug = related.title
  .toLowerCase()
  .replace(/(?:^\w|[A-Z]|\b\w)/g, (word, index) =>
    index === 0 ? word.toLowerCase() : word.toUpperCase()
  )
  .replace(/\s+/g, "");
              return (
                <li key={index} className={styles.relatedProjectItem}>
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
