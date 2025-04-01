// pages/projects/community-service/BloodDonation.tsx
import ProjectDetail from '../../../components/ProjectDetail';
import { Project } from '../../../types';
import bd1 from '../../../assets/Blood Donation/65th_1.jpg';
import bd2 from '../../../assets/Blood Donation/65th_2.jpg';
import bd3 from '../../../assets/Blood Donation/65th_3.jpg';
import bd4 from '../../../assets/Blood Donation/65th_4.jpg';
import bd5 from '../../../assets/Blood Donation/65th_5.jpg';
import bd6 from '../../../assets/Blood Donation/65th_6.jpg';
import bd8 from '../../../assets/Blood Donation/65th_8.jpg';
import bd9 from '../../../assets/Blood Donation/65th_9.jpg';
import bd10 from '../../../assets/Blood Donation/65th_10.jpg';
import bd11 from '../../../assets/Blood Donation/65th_11.jpg';

const BloodDonation = () => {
  const projectData: Project = {
    id: "blood-donation",
    category: "Community Service",
    title: "Blood Donation",
    date: "2005 - Ongoing",
    location: "Addis Ababa",
    description: "Addressing blood shortages through volunteer donations. Partnered with National Blood Bank to collect over 8,000 units of blood, helping 24,000+ people. Broke national records with 456 units collected in a single day (2015).",
    gallery: [
      bd11,bd1, bd5, bd6, bd8, bd9, bd10,bd2, bd3, bd4, 
    ],
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
    relatedProjects: ["Sanitary Pad Donaton","yewedekutin ansu", "school feeding", "Brana Project", "Extending Love", "Eye Vision", "School Painting", "Addis Holiday", "Blanket Donation"],
  };

  return <ProjectDetail project={projectData} />;
};
export default BloodDonation;