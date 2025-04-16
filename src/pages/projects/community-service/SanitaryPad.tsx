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
      relatedProjects: [
        { title: "Yewedekutn Ansu", category: "Community Service" },
        { title: "School Feeding", category: "Community Service" },
        { title: "Blood Donation", category: "Community Service" },
        { title: "Brana Project", category: "Community Service" },
        { title: "Extending Love", category: "Community Service" },
        { title: "Eye Vision", category: "Community Service" },
        { title: "School Painting", category: "Community Service" },
        { title: "Addis Holiday Lunch", category: "Community Service" },
        { title: "Blanket Donation", category: "Community Service" }
      ],
    };
    return <ProjectDetail project={projectData} />;
  };
  export default SanitaryPad;