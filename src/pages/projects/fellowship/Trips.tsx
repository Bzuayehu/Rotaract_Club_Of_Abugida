// pages/projects/fellowship/Trips.tsx
import ProjectDetail from '../../../components/ProjectDetail';
import { Project } from '../../../types';
import img from '../../../assets/fellowship.jpg'

const Trips = () => {
  const projectData: Project = {
    id: "trips",
    category: "Fellowship",
    title: "Trips",
    date: "Bi-Annual",
    location: "Ethiopia",
    description: "Mid-year and handing-over trips to strengthen member bonds. Features adventures, team-building activities, and leadership transitions.",
    impact: [
      "2 major trips/year",
      "100% member participation rate",
      "Memorable team experiences"
    ],
    gallery:[`${img}`,`${img}`,`${img}`,`${img}`,`${img}`,`${img}`],
    outcomes: [
      { label: "Destinations Visited", value: "15+" },
      { label: "New Leaders Trained", value: "20+/year" }
    ],
    relatedProjects: [
      {
        title: "Buhe Fellowship",
        category: "Fellowship"
      },
      {
        title: "sleepover",
        category: "Fellowship"
      },
      {
        title: "I Have a Message",
        category: "Fellowship"
      },
      {
        title: "Coffee Time",
        category: "Fellowship"
      }
    ]
  };
  return <ProjectDetail project={projectData} />;
};
export default Trips;