
// data/projectsData.ts
import { Project } from "../../../types";

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



import img1 from '../../../assets/School-Painting/scp18_best.jpg';
import img2 from '../../../assets/School-Painting/photo_2025-03-31_18-12-35.jpg';
import img3 from '../../../assets/School-Painting/photo_2025-03-31_18-12-43.jpg';
import img4 from '../../../assets/School-Painting/photo_2025-03-31_18-12-49.jpg';


import trip from "../../../assets/Trip/photo_2025-04-06_14-16-59.jpg";
import trip1 from "../../../assets/Trip/pic1.jpg";
import trip3 from "../../../assets/Trip/photo_2025-04-05_20-12-53.jpg";
import trip4 from "../../../assets/Trip/photo_2025-04-15_21-47-33.jpg";
const projects: Project[] = [

  // communnity service
    {
        id: "addisHolidayLunch",
        category: "Community Service",
        title: "Addis Holiday Lunch",
        date: "Annual",
        location: "Addis Ababa",
        description:
          "Providing holiday meals and clothes for 1,600+ homeless people during Gena. Collaboration with multiple Rotaract clubs.",
        impact: [
          "1,600+ beneficiaries/event",
          "25,000 ETB raised in 2009",
          "3 events/year",
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
          { title: "Yewedekutin Ansu", category: "Community Service" },
          { title: "Blanket Donation", category: "Community Service" },
        ],
      },
      {
        id: "blanketDonation",
        category: "Community Service",
        title: "Blanket Donation",
        date: "Annual (April-June)",
        location: "Addisu Gebeya",
        description: "Donating blankets to Missionary Brothers of Charity residents. Partnership with RC ENTOTO.",
        impact: [
          "100% residents covered",
          "High-quality blankets provided",
          "Winter support"
        ],
        partners: ["Rotary Club ENTOTO", "Missionary Brothers of Charity"],
        relatedProjects: [
          { title: "Sanitary Pad Donation", category: "Community Service" },
          { title: "School Feeding", category: "Community Service" },
          { title: "Blood Donation", category: "Community Service" },
          { title: "Brana Project", category: "Community Service" },
          { title: "Extending Love", category: "Community Service" },
          { title: "Eye Vision", category: "Community Service" },
          { title: "School Painting", category: "Community Service" },
          { title: "Addis Holiday Lunch", category: "Community Service" },
          { title: "Yewedekutin Ansu", category: "Community Service" }
        ],
      },

      {
        id: "bloodDonation",
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
        relatedProjects: [
          { title: "Sanitary Pad Donation", category: "Community Service" },
          { title: "School Feeding", category: "Community Service" },
          { title: "Yewedekutin Ansu", category: "Community Service" },
          { title: "Brana Project", category: "Community Service" },
          { title: "Extending Love", category: "Community Service" },
          { title: "Eye Vision", category: "Community Service" },
          { title: "School Painting", category: "Community Service" },
          { title: "Addis Holiday Lunch", category: "Community Service" },
          { title: "Blanket Donation", category: "Community Service" }
        ],
      },
      {
        id: "branaProject",
        category: "Community Service",
        title: "Brana Project",
        date: "2010 - Ongoing",
        location: "Addis Ababa",
        description: "Providing educational materials and renovating school libraries. Transitioned from exercise books to library support after 2020. Reached 5,000+ students with 630,000 ETB raised.",
        impact: [
          "1,450 students supported annually",
          "5 schools covered",
          "200,000 ETB raised in 2023"
        ],
        outcomes: [
          { label: "Total Funds Raised", value: "630,000 ETB" },
          { label: "Students Helped", value: "5,000+" }
        ],
        partners: ["Local Schools", "Government Education Bureau"],
        relatedProjects: [
          { title: "Sanitary Pad Donation", category: "Community Service" },
          { title: "School Feeding", category: "Community Service" },
          { title: "Blood Donation", category: "Community Service" },
          { title: "Yewedekutin Ansu", category: "Community Service" },
          { title: "Extending Love", category: "Community Service" },
          { title: "Eye Vision", category: "Community Service" },
          { title: "School Painting", category: "Community Service" },
          { title: "Addis Holiday Lunch", category: "Community Service" },
          { title: "Blanket Donation", category: "Community Service" }
        ],
  
      },
      {
        id: "extendingLove",
        category: "Community Service",
        title: "Extending Love Project",
        date: "Ongoing (15+ years)",
        location: "Addis Ababa",
        description: "Supporting mentally challenged residents at Missionary Brothers of Charity. Annual blanket donations and holiday celebrations.",
        impact: [
          "3-4 visits/year",
          "Blankets donated annually",
          "Christmas celebrations"
        ],
        partners: ["Missionary Brothers of Charity"],
        relatedProjects: [
          { title: "Sanitary Pad Donation", category: "Community Service" },
          { title: "School Feeding", category: "Community Service" },
          { title: "Blood Donation", category: "Community Service" },
          { title: "Brana Project", category: "Community Service" },
          { title: "Yewedekutin Ansu", category: "Community Service" },
          { title: "Eye Vision", category: "Community Service" },
          { title: "School Painting", category: "Community Service" },
          { title: "Addis Holiday Lunch", category: "Community Service" },
          { title: "Blanket Donation", category: "Community Service" }
        ],
      },
      {
        id: "eyeVision",
        category: "Community Service",
        title: "Eye Vision Project",
        date: "Ongoing",
        location: "Addis Ababa",
        description: "Providing glasses to school children with vision issues. Partnered with schools like Limante Menech and Repi.",
        impact: [
          "3 schools covered",
          "1.1/10 children supported",
          "WHO-aligned standards"
        ],
        outcomes: [
          { label: "Glasses Provided", value: "500+" },
          { label: "Schools Targeted (2024)", value: "Repi Primary" }
        ],
        partners: ["Local Health Organizations"],
        relatedProjects: [
          { title: "Sanitary Pad Donation", category: "Community Service" },
          { title: "School Feeding", category: "Community Service" },
          { title: "Blood Donation", category: "Community Service" },
          { title: "Brana Project", category: "Community Service" },
          { title: "Extending Love", category: "Community Service" },
          { title: "Yewedekutin Ansu", category: "Community Service" },
          { title: "School Painting", category: "Community Service" },
          { title: "Addis Holiday Lunch", category: "Community Service" },
          { title: "Blanket Donation", category: "Community Service" }
        ],
      },
      {
        id: "sanitaryPadDonation",
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
          { title: "Yewedekutin Ansu", category: "Community Service" },
          { title: "School Feeding", category: "Community Service" },
          { title: "Blood Donation", category: "Community Service" },
          { title: "Brana Project", category: "Community Service" },
          { title: "Extending Love", category: "Community Service" },
          { title: "Eye Vision", category: "Community Service" },
          { title: "School Painting", category: "Community Service" },
          { title: "Addis Holiday Lunch", category: "Community Service" },
          { title: "Blanket Donation", category: "Community Service" }
        ],
      },
      {
        id: "schoolFeeding",
        category: "Community Service",
        title: "School Feeding Project",
        date: "2008 - Ongoing",
        location: "Fernsai Legasion",
        description: "Providing daily meals for 80 students and building sustainable kitchens/shops. Raised 525,000 ETB.",
        impact: [
          "80 students fed daily",
          "2 shops and 1 kitchen built",
          "5,600 ETB/month rental income"
        ],
        outcomes: [
          { label: "Total Funds Raised", value: "525,000 ETB" },
          { label: "Families Employed", value: "6" }
        ],
        partners: ["Hizbawi Serawit Primary School"],
        relatedProjects: [
          { title: "Sanitary Pad Donation", category: "Community Service" },
          { title: "Yewedekutin Ansu", category: "Community Service" },
          { title: "Blood Donation", category: "Community Service" },
          { title: "Brana Project", category: "Community Service" },
          { title: "Extending Love", category: "Community Service" },
          { title: "Eye Vision", category: "Community Service" },
          { title: "School Painting", category: "Community Service" },
          { title: "Addis Holiday Lunch", category: "Community Service" },
          { title: "Blanket Donation", category: "Community Service" }
        ],
      },
      {
        id: "schoolPainting",
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
      },
      {
        id: "yewedekutinAnsu",
        category: "Community Service",
        title: "Yewedekutin Ansu",
        date: "Ongoing",
        location: "Addis Ababa",
        description: "Supporting elderly citizens through shelter, food, and advocacy. Partnered with Ato Sintayehu's association.",
        impact: [
          "3 annual visits to elderlies",
          "Clinic and shelter built",
          "Awareness campaigns"
        ],
        partners: ["Yewedekutin Ansu Association"],
        relatedProjects: [
          { title: "Sanitary Pad Donation", category: "Community Service" },
          { title: "School Feeding", category: "Community Service" },
          { title: "Blood Donation", category: "Community Service" },
          { title: "Brana Project", category: "Community Service" },
          { title: "Extending Love", category: "Community Service" },
          { title: "Eye Vision", category: "Community Service" },
          { title: "School Painting", category: "Community Service" },
          { title: "Addis Holiday Lunch", category: "Community Service" },
          { title: "Blanket Donation", category: "Community Service" }
        ],
      },


      // Fellowship

      {
        id: "buheFellowship",
        category: "Fellowship",
        title: "Buhe Fellowship",
        date: "Annually (August)",
        location: "Addis Ababa",
        description: "Signature non-religious social event celebrating Ethiopian culture. Open to all Rotaract clubs for networking and friendship-building.",
        impact: [
          "200+ attendees/year",
          "Inter-club collaborations",
          "Cultural showcases"
        ],
        outcomes: [
          { label: "New Members Joined", value: "30+/event" },
          { label: "Social Media Reach", value: "5,000+" }
        ],
        partners: ["Ethiopian Rotaract Network"],
        relatedProjects: [
          {
            title: "Trips",
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
      },
      {
        id: "coffeeTime",
        category: "Fellowship",
        title: "Coffee Time",
        date: "Weekly (Wednesdays)",
        location: "Addis Ababa",
        description:
          "Weekly social hour for casual conversations, advice-sharing, and member check-ins. Ethiopian coffee ceremony included.",
        impact: [
          "50+ meetings/year",
          "Conflict resolution platform",
          "Mental health support",
        ],
        outcomes: [
          { label: "Average Attendance", value: "40+" },
          { label: "Ideas Implemented", value: "20+/year" },
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
            title: "Trips",
            category: "Fellowship"
          }
        ]
      },

      {
        id: "iHaveAMessage",
        category: "Fellowship",
        title: "I have a Message",
        date: "Annual",
        location: "Addis Ababa",
        description: "Creative platform for members to express themselves through art, music, poetry, and storytelling. First held in 2018.",
        impact: [
          "50+ performances showcased",
          "Member talent discovery",
          "Emotional bonding experiences"
        ],
        outcomes: [
          { label: "Art Pieces Displayed", value: "100+" },
          { label: "Participant Satisfaction", value: "98%" }
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
            title: "Trips",
            category: "Fellowship"
          },
          {
            title: "Coffee Time",
            category: "Fellowship"
          }
        ]
      },
      {
        id: "sleepover",
        category: "Fellowship",
        title: "Sleepover",
        date: "Post-Major Projects",
        location: "Addis Ababa",
        description: "Overnight bonding events with games, shared meals, and deep conversations. Focuses on trust-building and member integration.",
        impact: [
          "10+ sleepovers organized",
          "100% new member participation",
          "Strengthened team dynamics"
        ],
        outcomes: [
          { label: "Activities/Night", value: "5-7" },
          { label: "Member Retention", value: "85%" }
        ],
        relatedProjects: [
          {
            title: "Buhe Fellowship",
            category: "Fellowship"
          },
          {
            title: "Trips",
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
      },
      {
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
        gallery:[`${trip1}`,`${trip}`,`${trip3}`,`${trip4}`],
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
      },
      
      //Professional Development

      {
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
      },
      {
        id: "fifteenMinuteGuest",
        category: "Professional Development",
        title: "15 Minute with Me Guest Speaker",
        date: "Ongoing",
        location: "Addis Ababa",
        description: "Members share life experiences and develop public speaking skills. Focuses on self-introduction, storytelling, and networking.",
        impact: [
          "100+ member sessions conducted",
          "Improved member confidence in public speaking",
          "Strengthened intra-club connections"
        ],
        outcomes: [
          { label: "Sessions/Year", value: "20+" },
          { label: "Members Participated", value: "150+" }
        ],
        relatedProjects: [
          {
            title: "Activities",
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
      },
      {
        id: "guestSpeakers",
        category: "Professional Development",
        title: "Guest Speakers",
        date: "Ongoing",
        location: "Addis Ababa",
        description: "Inviting entrepreneurs, civil servants, and experts to share career insights. Recent topics include leadership, ethics, and innovation.",
        impact: [
          "50+ guest lectures organized",
          "Diverse fields covered: tech, healthcare, arts",
          "Q&A sessions for personalized guidance"
        ],
        outcomes: [
          { label: "Speakers/Year", value: "10-15" },
          { label: "Average Attendance", value: "80+" }
        ],
        partners: ["Local Entrepreneurs", "Rotary Advisors"],
        relatedProjects: [
          {
            title: "Activities",
            category: "Professional Development"
          },
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
          }
        ]
      },
      {
        id: "trainings",
        category: "Professional Development",
        title: "Trainings",
        date: "Ongoing",
        location: "Addis Ababa",
        description: "Skill-building workshops on leadership, entrepreneurship, and time management. Tailored to member interests and club needs.",
        impact: [
          "200+ training hours delivered",
          "Certified trainers engaged",
          "Post-training mentorship"
        ],
        outcomes: [
          { label: "Workshops/Year", value: "12+" },
          { label: "Participant Satisfaction", value: "95%" }
        ],
        partners: ["Leadership Institutes", "Business Hubs"],
        relatedProjects: [
          {
            title: "Activities",
            category: "Professional Development"
          },
          {
            title: "Fifteen Minute Guest",
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
      },
      {
        id: "visits",
        category: "Professional Development",
        title: "Visits",
        date: "Quarterly",
        location: "Addis Ababa",
        description:
          "Field trips to businesses, NGOs, and member-led enterprises. Recent visits include tech startups and manufacturing plants.",
        impact: [
          "30+ organizations visited",
          "Networking with industry leaders",
          "Hands-on learning experiences",
        ],
        outcomes: [
          { label: "Visits/Year", value: "4" },
          { label: "Participant Feedback", value: "4.8/5" },
        ],
        partners: ["Ethio Tech Hub", "Rotaract Enterprise Members"],
        relatedProjects: [
          {
            title: "Activities",
            category: "Professional Development"
          },
          {
            title: "Fifteen Minute Guest",
            category: "Professional Development"
          },
          {
            title: "Trainings",
            category: "Professional Development"
          },
          {
            title: "Guest Speakers",
            category: "Professional Development"
          }
        ]
      }
];

export default projects;