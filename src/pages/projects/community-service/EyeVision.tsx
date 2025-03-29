import ProjectDetail from '../../../components/ProjectDetail';
import { Project } from '../../../types';
// import img from '../../../assets/fellowship.jpg'

// pages/projects/community-service/EyeVision.tsx
const EyeVision = () => {
    const projectData: Project = {
      id: "eye-vision",
      category: "Community Service",
      title: "Eye Vision Project",
      date: "Ongoing",
      location: "Addis Ababa",
      description: "Providing glasses to school children with vision issues. Partnered with schools like Limante Menech and Repi.",
      impact: [
        "3 schools covered",
        "1.1/10 children supported",
        "WHO-aligned standards"
      ],
      outcomes: [
        { label: "Glasses Provided", value: "500+" },
        { label: "Schools Targeted (2024)", value: "Repi Primary" }
      ],
      partners: ["Local Health Organizations"],
      relatedProjects: ["brana-project", "school-painting"]
    };
    return <ProjectDetail project={projectData} />;
  };
  export default EyeVision;