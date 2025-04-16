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
      relatedProjects: [
        { title: "Sanitary Pad Donation", category: "Community Service" },
        { title: "School Feeding", category: "Community Service" },
        { title: "Blood Donation", category: "Community Service" },
        { title: "Brana Project", category: "Community Service" },
        { title: "Extending Love", category: "Community Service" },
        { title: "Eye Vision", category: "Community Service" },
        { title: "School Painting", category: "Community Service" },
        { title: "Addis Holiday Lunch", category: "Community Service" },
        { title: "Blanket Donation", category: "Community Service" }
      ],
    };
    return <ProjectDetail project={projectData} />;
  };
  export default YewedekutinAnsu;