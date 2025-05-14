import ProjectDetail from '../../../components/ProjectDetail';
import { Project } from '../../../types';
// import img from '../../../assets/fellowship.jpg'


// pages/projects/professional-development/GuestSpeakers.tsx
const GuestSpeakers = () => {
  const projectData: Project = {
    id: "guest-speakers",
    category: "Professional Development",
    title: "Guest Speakers",
    date: "Ongoing",
    location: "Addis Ababa",
    description: "Inviting entrepreneurs, civil servants, and experts to share career insights. Recent topics include leadership, ethics, and innovation.",
    impact: [
      "50+ guest lectures organized",
      "Diverse fields covered: tech, healthcare, arts",
      "Q&A sessions for personalized guidance"
    ],
    outcomes: [
      { label: "Speakers/Year", value: "10-15" },
      { label: "Average Attendance", value: "80+" }
    ],
    partners: ["Local Entrepreneurs", "Rotary Advisors"],
    relatedProjects: [
      {
        title: "Activities",
        category: "Professional Development"
      },
      {
        title: "Fifteen Minute Guest",
        category: "Professional Development"
      },
      {
        title: "Trainings",
        category: "Professional Development"
      },
      {
        title: "Visits",
        category: "Professional Development"
      }
    ]
  };
  return <ProjectDetail project={projectData} />;
};
export default GuestSpeakers;