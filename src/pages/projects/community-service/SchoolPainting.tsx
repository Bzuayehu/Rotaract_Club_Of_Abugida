import ProjectDetail from '../../../components/ProjectDetail';
import { Project } from '../../../types';
import img1 from '../../../assets/School_Painting/scp18_best.jpg';
import img2 from '../../../assets/School_Painting/photo_2025-03-31_18-12-35.jpg';
import img3 from '../../../assets/School_Painting/photo_2025-03-31_18-12-43.jpg';
import img4 from '../../../assets/School_Painting/photo_2025-03-31_18-12-49.jpg';




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
      gallery:[img1,img2,img3,img4],
      partners: ["Rotary Club ENTOTO"],
      relatedProjects: [
        { title: "Sanitary Pad Donation", category: "Community Service" },
        { title: "Yewedekutin Ansu", category: "Community Service" },
        { title: "School Feeding", category: "Community Service" },
        { title: "Blood Donation", category: "Community Service" },
        { title: "Brana Project", category: "Community Service" },
        { title: "Extending Love", category: "Community Service" },
        { title: "Eye Vision", category: "Community Service" },
        { title: "Addis Holiday Lunch", category: "Community Service" },
        { title: "Blanket Donation", category: "Community Service" }
      ],
    };
    return <ProjectDetail project={projectData} />;
  };
  export default SchoolPainting;