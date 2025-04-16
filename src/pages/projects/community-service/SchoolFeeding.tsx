import ProjectDetail from '../../../components/ProjectDetail';
import { Project } from '../../../types';
// import img from '../../../assets/fellowship.jpg'
// pages/projects/community-service/SchoolFeeding.tsx
const SchoolFeeding = () => {
    const projectData: Project = {
      id: "school-feeding",
      category: "Community Service",
      title: "School Feeding Project",
      date: "2008 - Ongoing",
      location: "Fernsai Legasion",
      description: "Providing daily meals for 80 students and building sustainable kitchens/shops. Raised 525,000 ETB.",
      impact: [
        "80 students fed daily",
        "2 shops and 1 kitchen built",
        "5,600 ETB/month rental income"
      ],
      outcomes: [
        { label: "Total Funds Raised", value: "525,000 ETB" },
        { label: "Families Employed", value: "6" }
      ],
      partners: ["Hizbawi Serawit Primary School"],
      relatedProjects: [
        { title: "Sanitary Pad Donation", category: "Community Service" },
        { title: "Yewedekutn Ansu", category: "Community Service" },
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
  export default SchoolFeeding;