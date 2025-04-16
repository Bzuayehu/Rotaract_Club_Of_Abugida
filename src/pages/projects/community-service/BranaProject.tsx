import ProjectDetail from '../../../components/ProjectDetail';
import { Project } from '../../../types';
// import img from '../../../assets/fellowship.jpg'

// pages/projects/community-service/BranaProject.tsx
const BranaProject = () => {
    const projectData: Project = {
      id: "brana-project",
      category: "Community Service",
      title: "Brana Project",
      date: "2010 - Ongoing",
      location: "Addis Ababa",
      description: "Providing educational materials and renovating school libraries. Transitioned from exercise books to library support after 2020. Reached 5,000+ students with 630,000 ETB raised.",
      impact: [
        "1,450 students supported annually",
        "5 schools covered",
        "200,000 ETB raised in 2023"
      ],
      outcomes: [
        { label: "Total Funds Raised", value: "630,000 ETB" },
        { label: "Students Helped", value: "5,000+" }
      ],
      partners: ["Local Schools", "Government Education Bureau"],
      relatedProjects: [
        { title: "Sanitary Pad Donation", category: "Community Service" },
        { title: "School Feeding", category: "Community Service" },
        { title: "Blood Donation", category: "Community Service" },
        { title: "Yewedekutn Ansu", category: "Community Service" },
        { title: "Extending Love", category: "Community Service" },
        { title: "Eye Vision", category: "Community Service" },
        { title: "School Painting", category: "Community Service" },
        { title: "Addis Holiday Lunch", category: "Community Service" },
        { title: "Blanket Donation", category: "Community Service" }
      ],

    };
    return <ProjectDetail project={projectData} />;
  };
  export default BranaProject;