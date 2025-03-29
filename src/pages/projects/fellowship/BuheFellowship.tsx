import ProjectDetail from '../../../components/ProjectDetail';
import { Project } from '../../../types';
// import img from '../../../assets/fellowship.jpg'

// pages/projects/fellowship/BuheFellowship.tsx
const BuheFellowship = () => {
    const projectData: Project = {
      id: "buhe",
      category: "Fellowship",
      title: "Buhe Fellowship",
      date: "Annually (August)",
      location: "Addis Ababa",
      description: "Signature non-religious social event celebrating Ethiopian culture. Open to all Rotaract clubs for networking and friendship-building.",
      impact: [
        "200+ attendees/year",
        "Inter-club collaborations",
        "Cultural showcases"
      ],
      outcomes: [
        { label: "New Members Joined", value: "30+/event" },
        { label: "Social Media Reach", value: "5,000+" }
      ],
      partners: ["Ethiopian Rotaract Network"],
      relatedProjects: ["trips", "coffee-time"]
    };
    return <ProjectDetail project={projectData} />;
  };
  export default BuheFellowship;