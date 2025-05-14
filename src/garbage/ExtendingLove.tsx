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
      relatedProjects: [
        { title: "Sanitary Pad Donation", category: "Community Service" },
        { title: "School Feeding", category: "Community Service" },
        { title: "Blood Donation", category: "Community Service" },
        { title: "Brana Project", category: "Community Service" },
        { title: "Yewedekutn Ansu", category: "Community Service" },
        { title: "Eye Vision", category: "Community Service" },
        { title: "School Painting", category: "Community Service" },
        { title: "Addis Holiday Lunch", category: "Community Service" },
        { title: "Blanket Donation", category: "Community Service" }
      ],
    };
    return <ProjectDetail project={projectData} />;
  };
  export default ExtendingLove;