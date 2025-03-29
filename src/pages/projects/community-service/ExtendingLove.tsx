import ProjectDetail from '../../../components/ProjectDetail';
import { Project } from '../../../types';
// import img from '../../../assets/fellowship.jpg'
// pages/projects/community-service/ExtendingLove.tsx
const ExtendingLove = () => {
    const projectData: Project = {
      id: "extending-love",
      category: "Community Service",
      title: "Extending Love Project",
      date: "Ongoing (15+ years)",
      location: "Addis Ababa",
      description: "Supporting mentally challenged residents at Missionary Brothers of Charity. Annual blanket donations and holiday celebrations.",
      impact: [
        "3-4 visits/year",
        "Blankets donated annually",
        "Christmas celebrations"
      ],
      partners: ["Missionary Brothers of Charity"],
      relatedProjects: ["blanket-donation", "yewedekutin-ansu"]
    };
    return <ProjectDetail project={projectData} />;
  };
  export default ExtendingLove;