import ProjectDetail from '../../../components/ProjectDetail';
import { Project } from '../../../types';
import img from '../../../assets/fellowship.jpg'

// pages/projects/community-service/BlanketDonation.tsx
const BlanketDonation = () => {
    const projectData: Project = {
      id: "blanket-donation",
      category: "Community Service",
      title: "Blanket Donation",
      date: "Annual (April-June)",
      location: "Addisu Gebeya",
      description: "Donating blankets to Missionary Brothers of Charity residents. Partnership with RC ENTOTO.",
      impact: [
        "100% residents covered",
        "High-quality blankets provided",
        "Winter support"
      ],
      partners: ["Rotary Club ENTOTO", "Missionary Brothers of Charity"],
      relatedProjects: ["extending-love", "yewedekutin-ansu"]
    };
    return <ProjectDetail project={projectData} />;
  };
  export default BlanketDonation;