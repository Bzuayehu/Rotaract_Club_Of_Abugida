
import ProjectDetail from '../../../components/ProjectDetail';
import { Project } from '../../../types';
import img from '../../../assets/fellowship.jpg'

// pages/projects/fellowship/Sleepover.tsx
const Sleepover = () => {
    const projectData: Project = {
      id: "sleepover",
      category: "Fellowship",
      title: "Sleepover",
      date: "Post-Major Projects",
      location: "Addis Ababa",
      description: "Overnight bonding events with games, shared meals, and deep conversations. Focuses on trust-building and member integration.",
      impact: [
        "10+ sleepovers organized",
        "100% new member participation",
        "Strengthened team dynamics"
      ],
      outcomes: [
        { label: "Activities/Night", value: "5-7" },
        { label: "Member Retention", value: "85%" }
      ],
      relatedProjects: ["coffee-time", "trips"]
    };
    return <ProjectDetail project={projectData} />;
  };
  export default Sleepover;