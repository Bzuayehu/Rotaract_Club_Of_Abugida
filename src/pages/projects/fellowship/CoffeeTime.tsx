import ProjectDetail from "../../../components/ProjectDetail";
import { Project } from "../../../types";
import img from "../../../assets/fellowship.jpg";

// pages/projects/fellowship/CoffeeTime.tsx
const CoffeeTime = () => {
  const projectData: Project = {
    id: "coffee-time",
    category: "Fellowship",
    title: "Coffee Time",
    date: "Weekly (Wednesdays)",
    location: "Addis Ababa",
    description:
      "Weekly social hour for casual conversations, advice-sharing, and member check-ins. Ethiopian coffee ceremony included.",
    impact: [
      "50+ meetings/year",
      "Conflict resolution platform",
      "Mental health support",
    ],
    outcomes: [
      { label: "Average Attendance", value: "40+" },
      { label: "Ideas Implemented", value: "20+/year" },
    ],
    relatedProjects: ["buhe", "ive-a-message"],
  };
  return <ProjectDetail project={projectData} />;
};
export default CoffeeTime;
