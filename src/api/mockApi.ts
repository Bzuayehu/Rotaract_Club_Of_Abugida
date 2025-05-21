// import img from "../assets/Trip/photo_2025-04-05_20-12-53.jpg";
// import img2 from "../assets/Trip/photo_2025-04-15_21-47-33.jpg";

import img1 from "../assets/Events/Coming Soon.jpg";
import img3 from "../assets/Blood Donation/Screenshot 2025-05-21 at 1.07.45 in the morning.png";

import mt1 from "../assets/News and Events/mt-5.jpg";
import mt2 from "../assets/News and Events/photo_2025-05-21_01-56-54.jpg";
import mt3 from "../assets/News and Events/mt-2.jpg";
import mt4 from "../assets/News and Events/mt-4.jpg";

import eu2 from "../assets/News and Events/eu-2.jpg";
import eu3 from "../assets/News and Events/eu-3.jpg";
import eu1 from "../assets/News and Events/eu-1.jpg";
import eu4 from "../assets/News and Events/eu-4.jpg";

import pt2 from "../assets/News and Events/pt-2.jpg";
import pt3 from "../assets/News and Events/pt-3.jpg";
import pt1 from "../assets/News and Events/pt-1.jpg";
import pt4 from "../assets/News and Events/pt-4.jpg";
import pt5 from "../assets/News and Events/pt-5.jpg";

import ev1 from "../assets/News and Events/ev-1.jpg";
import ev2 from "../assets/News and Events/ev-2.jpg";
import ev3 from "../assets/News and Events/ev-3.jpg";
import ev4 from "../assets/News and Events/ev-4.jpg";
import ev5 from "../assets/News and Events/ev-5.jpg";
import ev6 from "../assets/News and Events/ev-6.jpg";

import bkd1 from "../assets/News and Events/bkd-1.jpg";
import bkd2 from "../assets/News and Events/bkd-2.jpg";
import bkd3 from "../assets/News and Events/bkd-3.jpg";
import bkd4 from "../assets/News and Events/bkd-4.jpg";
import bkd5 from "../assets/News and Events/bkd-5.jpg";

const newsItems = [
  {
    id: "1",
    title: "Heartfelt Moments at Our General Meeting",
    date: "2025-05-11",
    content: `<p>At our general meeting, we experienced a heartwarming blend of connection and celebration. Members gathered to share joyful games, meaningful conversations, and plenty of laughter.</p>
  <p>Our special <strong>‘We Miss You’</strong> segment warmly welcomed back members we hadn’t seen in a while, reigniting bonds and club spirit. We also paid tribute to mothers with a touching celebration, enjoying coffee, tea, and delicious bread together in their honor.</p>
  <p>It was a day filled with love, unity, and unforgettable memories. Thank you to everyone who joined and helped make the day so special.</p>`,
    image: mt1, // replace with your actual image reference
    category: "updates",
    type: "news",
    gallery: [mt2, mt3, mt4], // add your real image imports or variables
  },
  {
    id: "2",
    title: "EU 2025 Children’s Race Fundraising Event",
    date: "2025-05-11",
    content: `<p><strong>Turning Steps into Service!</strong></p>
    <p>Rotaractors of Abugida proudly participated in the <strong>EU 2025 Children’s Race</strong>—not just to cheer on young athletes, but to actively raise funds that will power our club’s future community service initiatives.</p>
    <p>We extend heartfelt thanks to our dedicated volunteers, whose enthusiasm and commitment ensured a joyful and safe experience for all the children and families involved.</p>
    <p>Through this meaningful participation, we didn’t just support an event—we contributed to a cause, created memories, and reinforced our club’s mission of service above self.</p>
    <p>Thank you for helping us build a better tomorrow, one step at a time. Stay tuned for the impact your support will create!</p>`,
    image: eu2, // replace with actual image reference
    category: "achievements",
    type: "news",
    gallery: [eu1, eu3, eu4], // add more actual images if available
  },

  {
    id: "3",
    title: "MOU with Eye-Plus for Eye Vision Project",
    date: "2025-05-02",
    content: `<p><strong>✒️ Building Partnerships for Vision ✒️</strong></p>
    <p>We are thrilled to announce the signing of an official <strong>Memorandum of Understanding (MOU)</strong> between the <strong>Rotaract Club of Abugida</strong> and <strong>Eye-Plus Medium Optometrist Clinic</strong>, paving the way for a powerful collaboration on the <em>Eye Vision Project</em>.</p>
    <p>The MOU was signed at the Eye-Plus Clinic, located in <strong>Figa Mebrat, Yohana Building, 3rd Floor</strong>, with both the President of Rotaract Abugida and the Owner of Eye-Plus in attendance.</p>
    <p>This partnership will empower us to extend vital eye care services to communities in need, combining our passion for service with professional expertise.</p>
    <p>We express our deepest appreciation to the incredible team at Eye-Plus for their warm welcome and shared commitment to impact.</p>
    <p><strong>📍 Eye-Plus Location:</strong> Figa Mebrat, Yohana Building, 3rd Floor</p>
    <p>✨ Together, we are building partnerships and shaping a brighter, clearer future! ✨</p>`,
    image: pt2, // Replace with actual image reference
    category: "partnerships",
    type: "news",
    gallery: [pt1, pt3, pt4, pt5], // Add more images from the MOU event if available
  },
  {
    id: "4",
    title: "Eye Vision Test at Eye-Plus Clinic",
    date: "2025-04-30",
    content: `<p><strong>👁️👃👁️ Eye Vision Test Completed at Eye-Plus Medium Optometrist Clinic 👁️👃👁️</strong></p>
    <p>As part of our ongoing <strong>Eye Vision Project</strong>, students from <strong>Wonderad Primary School</strong> received professional eye consultations at Eye-Plus Medium Optometrist Clinic on <strong>April 30</strong> and <strong>May 2</strong>, 2025.</p>
    <p>We extend our heartfelt gratitude to <strong>Dr. Leul</strong> and the dedicated team at <strong>Eye-Plus</strong> for their incredible support, expertise, and warm hospitality.</p>
    <p>These consultations are a vital step toward ensuring better vision and academic success for young learners in our community.</p>
    <p><em>✨ Clean Vision, Brighter Future ✨</em></p>`,
    image: ev1, // Replace with the actual image reference
    category: "achievements",
    type: "news",
    gallery: [ev2, ev3, ev4, ev5, ev6], // Add additional photos if available
  },
  {
    id: "5",
    title: "Over 1100 Books Donated to 4 Schools",
    date: "2025-05-01",
    content: `
    <h2>Over 1100 Books Donated!</h2>
    <p>With the incredible help of our members, team, and generous donors, the Rotaract Club of Abugida has successfully donated 📚 over 1100 supplementary books to four government primary schools:</p>
    <ul>
      <li>🏫 Addis Fre Primary School</li>
      <li>🏫 Heddase Primary School</li>
      <li>🏫 Gara Furi Primary School</li>
      <li>🏫 Hezbawi Serawit Primary School</li>
    </ul>
    <p>✨ A special thanks to <strong>JAFFAR BOOKS</strong> for supporting our mission by offering a 25% discount, making this initiative even more impactful.</p>
    <p>🙌🏼 We thank you all from the bottom of our hearts. Your support helped turn this vision into reality and empowered students with the gift of knowledge.</p>
    <p> <strong>Successfully shared the gift of knowledge</strong> </p>
  `,
    image: bkd1,
    category: "achievements",
    type: "news",
    gallery: [bkd2, bkd3, bkd4, bkd5], // Add more images from the donation event if available
  },
];

const eventItems = [
  {
    id: "1",
    title: "Rac Abugida Art Exhibition",
    date: "2025-06-14",
    location: "Addis Ababa University, Alle School of Fine Arts and Design",
    content:
      "<p>join us for our amaizing art exhibition showcasing the talents of our members and local artists. Enjoy a day of creativity, inspiration, and community engagement.</p>",
    image: img1,
    category: "fundraising",
    type: "event",
  },
  {
    id: "2",
    title: "Rac Abugida 68th Round Blood Donation",
    date: "2025-05-24",
    location: "Stadium Red Cross Compound, Mexico, Megenagna",
    content:
      "<p>Be a hero in just a few minutes! Join us for the 68th Round Blood Donation campaign organized by Rac Abugida. Taking place across three key locations—Stadium Red Cross Compound, Mexico, and Megenagna—this life-saving initiative brings together compassionate citizens for a noble cause. Your donation can save lives and bring hope to those in urgent need. Let's make a difference together!</p>",
    image: img3,
    category: "service",
    type: "event",
  },

  // ... more event items
];

export const fetchItem = async (type: "news" | "event", id: string) => {
  const items = type === "news" ? newsItems : eventItems;
  const item = items.find((item) => item.id === id);

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (item) {
        resolve(item);
      } else {
        reject(new Error("Item not found"));
      }
    }, 500); // Simulate network delay
  });
};
