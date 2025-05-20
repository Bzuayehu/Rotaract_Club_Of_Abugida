// // pages/ProjectPage.tsx
// import { useParams } from "react-router-dom";
// import projects from "../ProjectData/ProjectData";
// import ProjectDetail from "./ProjectDetail"; // Adjust the import path as necessary

// const ProjectPage: React.FC = () => {
//   const { id } = useParams();
//   const project = projects.find((p) => p.id === id);

//   if (!project) return <div>Project not found</div>;

//   return <ProjectDetail project={project} />;
// };

// export default ProjectPage;

import { useParams } from "react-router-dom";
import ProjectDetail from "./ProjectDetail";
// import { Project } from "../../../types"; // Import your project type
import projects from "../ProjectData/ProjectData";

// Import all projects (adjust path as needed)

const ProjectPage = () => {
  const { id } = useParams<{ id: string }>();
  
  // Find the project with matching ID
  const project = projects.find(p => p.id === id);

  if (!project) {
    return <div className="error-container">Project not found</div>;
  }

  return <ProjectDetail project={project} />;
};

export default ProjectPage;