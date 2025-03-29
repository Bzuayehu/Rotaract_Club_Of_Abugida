import ProjectDetail from '../../../components/ProjectDetail';
import { Project } from '../../../types';
import img from '../../../assets/fellowship.jpg'

// pages/projects/professional-development/Trainings.tsx
const Trainings = () => {
    const projectData: Project = {
      id: "trainings",
      category: "Professional Development",
      title: "Trainings",
      date: "Ongoing",
      location: "Addis Ababa",
      description: "Skill-building workshops on leadership, entrepreneurship, and time management. Tailored to member interests and club needs.",
      impact: [
        "200+ training hours delivered",
        "Certified trainers engaged",
        "Post-training mentorship"
      ],
      outcomes: [
        { label: "Workshops/Year", value: "12+" },
        { label: "Participant Satisfaction", value: "95%" }
      ],
      partners: ["Leadership Institutes", "Business Hubs"],
      relatedProjects: ["activities", "15-minute-guest"]
    };
    return <ProjectDetail project={projectData} />;
  };
  export default Trainings;