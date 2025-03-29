import ProjectDetail from '../../../components/ProjectDetail';
import { Project } from '../../../types';
import img from '../../../assets/fellowship.jpg'

// pages/projects/community-service/SchoolPainting.tsx
const SchoolPainting = () => {
    const projectData: Project = {
      id: "school-painting",
      category: "Community Service",
      title: "School Painting",
      date: "2018",
      location: "Mexico (Senga Tera)",
      description: "Renovated Addis Fre Primary School with RC ENTOTO. Painted 8 classrooms and 50 desks.",
      impact: [
        "8 classrooms painted",
        "50 desks refurbished",
        "Tree-planting plan initiated"
      ],
      partners: ["Rotary Club ENTOTO"],
      relatedProjects: ["brana-project", "eye-vision"]
    };
    return <ProjectDetail project={projectData} />;
  };
  export default SchoolPainting;