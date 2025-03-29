import ProjectDetail from '../../../components/ProjectDetail';
import { Project } from '../../../types';
// import img from '../../../assets/fellowship.jpg'

// pages/projects/community-service/SanitaryPad.tsx
const SanitaryPad = () => {
    const projectData: Project = {
      id: "sanitary-pad",
      category: "Community Service",
      title: "Sanitary Pad Donation",
      date: "2013 - Ongoing",
      location: "Addis Ababa",
      description: "Providing reusable sanitary pads and SRH training to girls in 4 schools. Partnered with WISE for sustainable production.",
      impact: [
        "900+ girls supported",
        "4 schools covered",
        "Partnership with Rotary Club of Addis Abeba ARADA"
      ],
      outcomes: [
        { label: "Reusable Pads Provided", value: "2,000+" },
        { label: "Training Sessions", value: "20+" }
      ],
      partners: ["WISE Organization", "Rotary Club of Addis Abeba ARADA"],
      relatedProjects: ["brana-project", "school-feeding"]
    };
    return <ProjectDetail project={projectData} />;
  };
  export default SanitaryPad;