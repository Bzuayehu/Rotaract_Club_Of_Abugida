// pages/projects/community-service/BloodDonation.tsx
import ProjectDetail from '../../../components/ProjectDetail';
import { Project } from '../../../types';
// import img from '../../../assets/fellowship.jpg'

const BloodDonation = () => {
  const projectData: Project = {
    id: "blood-donation",
    category: "Community Service",
    title: "Blood Donation",
    date: "2005 - Ongoing",
    location: "Addis Ababa",
    description: "Addressing blood shortages through volunteer donations. Partnered with National Blood Bank to collect over 8,000 units of blood, helping 24,000+ people. Broke national records with 456 units collected in a single day (2015).",
    impact: [
      "8,000+ units collected since inception",
      "42 campaigns organized over 13 years",
      "Inspired volunteer groups like Ethiopia Coffee Sport Club"
    ],
    outcomes: [
      { label: "Units Collected (2015)", value: "456" },
      { label: "Total Units", value: "8,000+" }
    ],
    partners: ["National Blood Bank", "Ethiopia Coffee Sport Club"],
    relatedProjects: ["school-feeding", "eye-vision"]
  };

  return <ProjectDetail project={projectData} />;
};
export default BloodDonation;