import ProjectDetail from "../../../components/ProjectDetail";
import { Project } from "../../../types";
import img from "../../../assets/fellowship.jpg";
// pages/projects/professional-development/Visits.tsx
const Visits = () => {
  const projectData: Project = {
    id: "visits",
    category: "Professional Development",
    title: "Visits",
    date: "Quarterly",
    location: "Addis Ababa",
    description:
      "Field trips to businesses, NGOs, and member-led enterprises. Recent visits include tech startups and manufacturing plants.",
    impact: [
      "30+ organizations visited",
      "Networking with industry leaders",
      "Hands-on learning experiences",
    ],
    outcomes: [
      { label: "Visits/Year", value: "4" },
      { label: "Participant Feedback", value: "4.8/5" },
    ],
    partners: ["Ethio Tech Hub", "Rotaract Enterprise Members"],
    relatedProjects: ["guest-speakers", "activities"],
  };
  return <ProjectDetail project={projectData} />;
};
export default Visits;
