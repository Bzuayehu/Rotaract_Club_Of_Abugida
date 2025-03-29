import ProjectDetail from '../../../components/ProjectDetail';
import { Project } from '../../../types';
// import img from '../../../assets/fellowship.jpg'
// pages/projects/community-service/YewedekutinAnsu.tsx
const YewedekutinAnsu = () => {
    const projectData: Project = {
      id: "yewedekutin-ansu",
      category: "Community Service",
      title: "Yewedekutin Ansu",
      date: "Ongoing",
      location: "Addis Ababa",
      description: "Supporting elderly citizens through shelter, food, and advocacy. Partnered with Ato Sintayehu's association.",
      impact: [
        "3 annual visits to elderlies",
        "Clinic and shelter built",
        "Awareness campaigns"
      ],
      partners: ["Yewedekutin Ansu Association"],
      relatedProjects: ["addis-holiday", "blanket-donation"]
    };
    return <ProjectDetail project={projectData} />;
  };
  export default YewedekutinAnsu;