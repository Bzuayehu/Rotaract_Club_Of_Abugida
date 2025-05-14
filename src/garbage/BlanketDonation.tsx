import ProjectDetail from '../pages/projects/ProjectDetail/ProjectDetail';
import { Project } from '../types';
// import img from '../../../assets/fellowship.jpg'

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
      relatedProjects: [
        { title: "Sanitary Pad Donation", category: "Community Service" },
        { title: "School Feeding", category: "Community Service" },
        { title: "Blood Donation", category: "Community Service" },
        { title: "Brana Project", category: "Community Service" },
        { title: "Extending Love", category: "Community Service" },
        { title: "Eye Vision", category: "Community Service" },
        { title: "School Painting", category: "Community Service" },
        { title: "Addis Holiday Lunch", category: "Community Service" },
        { title: "Yewedekutn Ansu", category: "Community Service" }
      ],
    };
    return <ProjectDetail project={projectData} />;
  };
  export default BlanketDonation;