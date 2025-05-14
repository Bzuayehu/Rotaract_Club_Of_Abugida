import ProjectDetail from '../../../components/ProjectDetail';
import { Project } from '../../../types';
// import img from '../../../assets/fellowship.jpg'


// pages/projects/professional-development/Activities.tsx
const Activities = () => {
    const projectData: Project = {
      id: "activities",
      category: "Professional Development",
      title: "Activities",
      date: "Biweekly",
      location: "Addis Ababa",
      description: "Interactive sessions including debates, puzzles, and coffee discussions. Encourages creative problem-solving and teamwork.",
      impact: [
        "40+ events/year",
        "Cross-functional collaboration",
        "Real-world case studies"
      ],
      outcomes: [
        { label: "Ideas Generated", value: "100+" },
        { label: "Member Engagement", value: "90%" }
      ],
      relatedProjects: [
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
        },
        {
          title: "Guest Speakers",
          category: "Professional Development"
        }
      ]
    };
    return <ProjectDetail project={projectData} />;
  };
  export default Activities;