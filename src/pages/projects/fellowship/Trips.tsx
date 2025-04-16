// pages/projects/fellowship/Trips.tsx
import ProjectDetail from '../../../components/ProjectDetail';
import { Project } from '../../../types';
// import img from '../../../assets/fellowship.jpg'

import trip from "../../../assets/Trip/photo_2025-04-06_14-16-59.jpg";
import trip1 from "../../../assets/Trip/pic1.jpg";
import trip2 from '../../../assets/Trip/abc_3247.png'
import trip3 from "../../../assets/Trip/photo_2025-04-05_20-12-53.jpg";
import trip4 from "../../../assets/Trip/photo_2025-04-15_21-47-33.jpg";
import trip5 from "../../../assets/Trip/abc_3249.png";
import trip6 from "../../../assets/Trip/abc_3250.png";
import trip7 from "../../../assets/Trip/abc_3258.png";

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
    gallery:[`${trip1}`,`${trip}`,`${trip2}`,`${trip3}`,`${trip4}`,`${trip5}`,`${trip6}`,`${trip7}`],
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