// pages/ProjectPage.tsx
import { useParams } from "react-router-dom";
import projects from "./ProjectData";
import ProjectDetail from "../../components/ProjectDetail"; // Adjust the import path as necessary

const ProjectPage: React.FC = () => {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);

  if (!project) return <div>Project not found</div>;

  return <ProjectDetail project={project} />;
};

export default ProjectPage;