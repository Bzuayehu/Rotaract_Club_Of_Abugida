// components/ProjectDetail.tsx
import { Project } from "../types";
import styles from "./ProjectDetail.module.css";

interface ProjectDetailProps {
  project: Project;
}

const ProjectDetail = ({ project }: ProjectDetailProps) => {
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
            <h3>Impact</h3>
            <ul>
              {project.impact.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </>
        )}
      </div>

      {/* Gallery */}
      {project.gallery && (
        <div className={styles.gallery}>
          {project.gallery.map((img, index) => (
            <img key={index} src={img} alt={`Project activity ${index + 1}`} />
          ))}
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
          <div className={styles.relatedProjects}>
            {/* Add links to other projects here */}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectDetail;
