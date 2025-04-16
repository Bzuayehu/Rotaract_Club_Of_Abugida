import ProjectDetail from '../../../components/ProjectDetail';
import { Project } from '../../../types';
// import img from '../../../assets/fellowship.jpg'

// pages/projects/community-service/AddisHoliday.tsx
const AddisHoliday = () => {
    const projectData: Project = {
      id: "addis-holiday",
      category: "Community Service",
      title: "Addis Holiday Lunch",
      date: "Annual",
      location: "Addis Ababa",
      description: "Providing holiday meals and clothes for 1,600+ homeless people during Gena. Collaboration with multiple Rotaract clubs.",
      impact: [
        "1,600+ beneficiaries/event",
        "25,000 ETB raised in 2009",
        "3 events/year"
      ],
      partners: ["Rotaract Clubs of Ethiopia"],
      relatedProjects: [
        { title: "Sanitary Pad Donation", category: "Community Service" },
        { title: "School Feeding", category: "Community Service" },
        { title: "Blood Donation", category: "Community Service" },
        { title: "Brana Project", category: "Community Service" },
        { title: "Extending Love", category: "Community Service" },
        { title: "Eye Vision", category: "Community Service" },
        { title: "School Painting", category: "Community Service" },
        { title: "Yewedekutn Ansu", category: "Community Service" },
        { title: "Blanket Donation", category: "Community Service" }
      ],
    };
    return <ProjectDetail project={projectData} />;
  };
  export default AddisHoliday;