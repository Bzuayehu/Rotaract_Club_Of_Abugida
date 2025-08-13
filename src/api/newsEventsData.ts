// Import images
import img1 from "../assets/Events/Coming Soon.jpg";
import mtt from "../assets/News and Events/mt-5.jpg";
import eu2 from "../assets/News and Events/eu-2.jpg";
import pt2 from "../assets/News and Events/pt-2.jpg";
import ev1 from "../assets/News and Events/ev-1.jpg";
import bkd1 from "../assets/News and Events/bkd-1.jpg";
import newYear from "../assets/News and Events/Newyear.jpg";
import img2 from "../assets/Blood Donation/Screenshot 2025-05-21 at 1.07.45 in the morning.png";

import newYr from "../assets/News and Events/newyr.jpg"; // New Year image
import generalMeeting from "../assets/News and Events/lastmeet3.jpg"; // General Meeting image
import anniversary from "../assets/News and Events/anniversary1.jpg"; // Anniversary image


export type EventItem = {
  id: number;
  title: string;
  date: Date;
  location: string[];
  description: string;
  image: string;
  isUpcoming: boolean;
  category: string;
  gallery?: string[];
};

export type NewsItem = {
  id: number;
  title: string;
  date: Date;
  summary: string;
  image: string;
  category: string;
};

const today = new Date();

// Sample events data
export const eventRaw = [
  {
    id: 1,
    title: "Rac Abugida Art Exhibition",
    date: new Date(2025, 5, 14),
    location: ["Addis Ababa University, Alle School of Fine Arts and Design"],
    description:
      "Join us for our amazing art exhibition showcasing the talents of our members and local artists. Enjoy a day of creativity, inspiration, and community engagement.",
    image: img1,
    category: "fundraising",
    gallery: [img1, mtt, eu2, pt2, ev1, bkd1],
  },
  {
    id: 2,
    title: "Rac Abugida 68th Round Blood Donation",
    date: new Date(2025, 4, 24),
    location: ["Stadium Red Cross Compound", ", Mexico", ", Megenagna"],
    description:
      "Join Rac Abugida's 68th Blood Donation at Stadium, Mexico, and Megenagna. Your donation can save lives—be a hero today!",
    image: img2,
    category: "service",
    gallery: [img2, mtt, eu2, pt2],
  },
];

export const events: EventItem[] = eventRaw.map((event) => ({
  ...event,
  isUpcoming: event.date >= today,
}));

// Sample news data
export const newsData: NewsItem[] = [
  {
    id: 1,
    title: "General Meeting",
    date: new Date(2025, 4, 11),
    summary:
      "Our general meeting was filled with joy, laughter, and reconnection as we welcomed missed members and celebrated Mother's Day with warm tributes.",
    image: mtt,
    category: "updates",
  },
  {
    id: 2,
    title: "EU 2025 Children's Race Fundraising Event",
    date: new Date(2025, 4, 11),
    summary:
      "Our volunteers joined the EU Children's Race, turning energy into impact by raising funds for future community projects!",
    image: eu2,
    category: "achievements",
  },
  {
    id: 3,
    title: "MOU with Eye-Plus for Eye Vision Project",
    date: new Date(2025, 4, 2),
    summary:
      "Rotaract Abugida signed an MOU with Eye-Plus Optometrist Clinic to collaborate on the Eye Vision Project.",
    image: pt2,
    category: "partnerships",
  },
  {
    id: 4,
    title: "Eye Vision Test at Eye-Plus Clinic",
    date: new Date(2025, 3, 30),
    summary:
      "Successful eye consultation was conducted for Wonderad Primary School students as part of our Eye Vision Project.",
    image: ev1,
    category: "achievements",
  },
  {
    id: 5,
    title: "Over 1100 Books Donated to 4 Schools",
    date: new Date(2025, 4, 1),
    summary:
      "With the support of members, donors, and a generous discount from Jaffar Books, we donated over 1100 books to four primary schools—spreading knowledge and joy.",
    image: bkd1,
    category: "achievements",
  },

  {
    id: 6,
    title: "🎉 New year, new vision!",
    date: new Date(2025, 6, 6),
    summary:
      "Introducing our Board of Directors for 2025/26. We are excited to embark on a journey of service, leadership, and community impact. Together, we will make a difference!",
    image: newYear,
    category: "updates",
  },
  {
    id: 7,
    title: "🎉 Happy Rotary New Year!🎉",
    date: new Date(2025, 6, 1),
    summary:
      "Rotaract Club of Abugida wishes you a year full of service, growth, and meaningful impact",
    image: newYr,
    category: "updates",
  },
  
  {
  id: 8,
  title: "🌟 Final General Meeting of the Rotary Year 2024/25",
  date: new Date(2025, 5, 22), // Assuming the meeting happened on June 22, 2025
  summary:
    "We concluded the Rotary year with a powerful general meeting, recognizing our volunteers and reflecting on our journey. Here's to new beginnings!",
  image: generalMeeting, // Replace with your actual image variable
  category: "updates"
},
 {
  id: 9,
  title: "🎉 22 Years Anniversary & Handover Celebration!",
  date: new Date(2025, 5, 28), // June 28, 2025
  summary:
    "What an incredible night! Our 22nd Anniversary and Handover Ceremony was a heartfelt celebration of legacy, joy, and new beginnings. 🎊",
  image: anniversary, // Replace with your actual image variable
  category: "achievements"
}
];

// Helper functions
export const getRecentNews = (count: number = 3) => {
  return newsData
    .sort((a, b) => b.date.getTime() - a.date.getTime())
    .slice(0, count);
};

export const getUpcomingEvents = (count: number = 2) => {
  return events
    .filter(event => event.isUpcoming)
    .sort((a, b) => a.date.getTime() - b.date.getTime())
    .slice(0, count);
};

export const getSortedNews = () => {
  return newsData.sort((a, b) => b.date.getTime() - a.date.getTime());
}; 