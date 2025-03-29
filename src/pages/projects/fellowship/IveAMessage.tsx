import ProjectDetail from '../../../components/ProjectDetail';
import { Project } from '../../../types';
// import img from '../../../assets/fellowship.jpg'

// pages/projects/fellowship/IveAMessage.tsx
const IveAMessage = () => {
    const projectData: Project = {
      id: "ive-a-message",
      category: "Fellowship",
      title: "I’ve a Message",
      date: "Annual",
      location: "Addis Ababa",
      description: "Creative platform for members to express themselves through art, music, poetry, and storytelling. First held in 2018.",
      impact: [
        "50+ performances showcased",
        "Member talent discovery",
        "Emotional bonding experiences"
      ],
      outcomes: [
        { label: "Art Pieces Displayed", value: "100+" },
        { label: "Participant Satisfaction", value: "98%" }
      ],
      relatedProjects: ["buhe", "sleepover"]
    };
    return <ProjectDetail project={projectData} />;
  };
  export default IveAMessage;