import ProjectDetail from '../../../components/ProjectDetail';
import { Project } from '../../../types';
// import img from '../../../assets/fellowship.jpg'

// pages/projects/professional-development/FifteenMinuteGuest.tsx


const FifteenMinuteGuest = () => {
  const projectData: Project = {
    id: "15-minute-guest",
    category: "Professional Development",
    title: "15 Minute with Me Guest Speaker",
    date: "Ongoing",
    location: "Addis Ababa",
    description: "Members share life experiences and develop public speaking skills. Focuses on self-introduction, storytelling, and networking.",
    impact: [
      "100+ member sessions conducted",
      "Improved member confidence in public speaking",
      "Strengthened intra-club connections"
    ],
    outcomes: [
      { label: "Sessions/Year", value: "20+" },
      { label: "Members Participated", value: "150+" }
    ],
    relatedProjects: [
      {
        title: "Activities",
        category: "Professional Development"
      },
      {
        title: "Trainings",
        category: "Professional Development"
      },
      {
        title: "Visits",
        category: "Professional Development"
      },
      {
        title: "Guest Speakers",
        category: "Professional Development"
      }
    ]
  };
  return <ProjectDetail project={projectData} />;
};
export default FifteenMinuteGuest;