import { useState } from "react";
import { useTranslation } from "react-i18next";
import Modal from "./Modal"; // Import Modal component
import blooddonation from "../assets/blooddonation.jpg";
import sleepover from "../assets/sleepover.jpg";
import communityServc from "../assets/community_Servc-removebg-preview.png";
import clubservc from "../assets/club_Servc-removebg-preview.png";
import "./NoticeBoard.css"; // Import CSS file

interface Notice {
  title: string;
  description: string;
  image: string;
}

export default function NoticeBoard() {
  const { t } = useTranslation();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedNotice, setSelectedNotice] = useState<Notice | null>(null);

  const notices: Notice[] = [
    {
      title: "Blood Donation",
      description: `✨✨✨✨ ITS TIME✨✨✨

We are getting ready for our blood donation. 

We are doing a second round card sorting come JOIN US!!! Register on the link below 👇🏾 

🔗https://shorturl.at/2wGAN

📅 Jan 29- Feb 2

⏰ 9:00 am - 6:00 pm 

📍Stadium red cross compound, blood bank 

📞 Mercy: 0944305982 
📞 Eyosi: 0909612288

💪🏾💪🏾💪🏾Working together for a better outcome 💪🏾💪🏾💪🏾`,
      image: blooddonation,
    },
    {
      title: "Sleepover Fellowship",
      description: `🎉 Join Us for the SLEEPOVER FELLOWSHIP! 🎉

Get ready for an unforgettable night filled with fun, laughter, and adventure! 🌟

📅 Date: December 28, 2024  
🕒 Time: 9:30 LT (Dont be late)
📍 Location: Piassa, in front of St. George Church  

Price: 250 ETB  
Bank Accounts:
- Tensae / Solomon  
  - BOA: 197804645  
  - CBE: 1000649057889  

📝 Register Here: https://forms.gle/iXg6PJev1AdqQbvF9

       Activities:
✨ Delicious Dinner
🎲 Exciting Games and Activities 
🏞️ Morning Hiking Adventure  
🔥 Cozy Campfire
📷 Capturing memories

Don't Forget to Bring:
🧺 A mini blanket  
🧥 A warm jacket  
👟 Appropriate shoes for hiking 

📞 Contact Us:
     Alex: 0941229771  
    Tensae: 0912911344  

We can't wait to see you there for a night of memories and fun!! ✨`,
      image: sleepover,
    },{
      title: "Sleepover Fellowship",
      description: `🎉 Join Us for the SLEEPOVER FELLOWSHIP! 🎉

Get ready for an unforgettable night filled with fun, laughter, and adventure! 🌟

📅 Date: December 28, 2024  
🕒 Time: 9:30 LT (Dont be late)
📍 Location: Piassa, in front of St. George Church  

Price: 250 ETB  
Bank Accounts:
- Tensae / Solomon  
  - BOA: 197804645  
  - CBE: 1000649057889  

📝 Register Here: https://forms.gle/iXg6PJev1AdqQbvF9

       Activities:
✨ Delicious Dinner
🎲 Exciting Games and Activities 
🏞️ Morning Hiking Adventure  
🔥 Cozy Campfire
📷 Capturing memories

Don't Forget to Bring:
🧺 A mini blanket  
🧥 A warm jacket  
👟 Appropriate shoes for hiking 

📞 Contact Us:
     Alex: 0941229771  
    Tensae: 0912911344  

We can't wait to see you there for a night of memories and fun!! ✨`,
      image: sleepover,
    },{
      title: "Sleepover Fellowship",
      description: `🎉 Join Us for the SLEEPOVER FELLOWSHIP! 🎉

Get ready for an unforgettable night filled with fun, laughter, and adventure! 🌟

📅 Date: December 28, 2024  
🕒 Time: 9:30 LT (Dont be late)
📍 Location: Piassa, in front of St. George Church  

Price: 250 ETB  
Bank Accounts:
- Tensae / Solomon  
  - BOA: 197804645  
  - CBE: 1000649057889  

📝 Register Here: https://forms.gle/iXg6PJev1AdqQbvF9

       Activities:
✨ Delicious Dinner
🎲 Exciting Games and Activities 
🏞️ Morning Hiking Adventure  
🔥 Cozy Campfire
📷 Capturing memories

Don't Forget to Bring:
🧺 A mini blanket  
🧥 A warm jacket  
👟 Appropriate shoes for hiking 

📞 Contact Us:
     Alex: 0941229771  
    Tensae: 0912911344  

We can't wait to see you there for a night of memories and fun!! ✨`,
      image: sleepover,
    },{
      title: "Sleepover Fellowship",
      description: `🎉 Join Us for the SLEEPOVER FELLOWSHIP! 🎉

Get ready for an unforgettable night filled with fun, laughter, and adventure! 🌟

📅 Date: December 28, 2024  
🕒 Time: 9:30 LT (Dont be late)
📍 Location: Piassa, in front of St. George Church  

Price: 250 ETB  
Bank Accounts:
- Tensae / Solomon  
  - BOA: 197804645  
  - CBE: 1000649057889  

📝 Register Here: https://forms.gle/iXg6PJev1AdqQbvF9

       Activities:
✨ Delicious Dinner
🎲 Exciting Games and Activities 
🏞️ Morning Hiking Adventure  
🔥 Cozy Campfire
📷 Capturing memories

Don't Forget to Bring:
🧺 A mini blanket  
🧥 A warm jacket  
👟 Appropriate shoes for hiking 

📞 Contact Us:
     Alex: 0941229771  
    Tensae: 0912911344  

We can't wait to see you there for a night of memories and fun!! ✨`,
      image: sleepover,
    },{
      title: "Sleepover Fellowship",
      description: `🎉 Join Us for the SLEEPOVER FELLOWSHIP! 🎉

Get ready for an unforgettable night filled with fun, laughter, and adventure! 🌟

📅 Date: December 28, 2024  
🕒 Time: 9:30 LT (Dont be late)
📍 Location: Piassa, in front of St. George Church  

Price: 250 ETB  
Bank Accounts:
- Tensae / Solomon  
  - BOA: 197804645  
  - CBE: 1000649057889  

📝 Register Here: https://forms.gle/iXg6PJev1AdqQbvF9

       Activities:
✨ Delicious Dinner
🎲 Exciting Games and Activities 
🏞️ Morning Hiking Adventure  
🔥 Cozy Campfire
📷 Capturing memories

Don't Forget to Bring:
🧺 A mini blanket  
🧥 A warm jacket  
👟 Appropriate shoes for hiking 

📞 Contact Us:
     Alex: 0941229771  
    Tensae: 0912911344  

We can't wait to see you there for a night of memories and fun!! ✨`,
      image: sleepover,
    },
  ];

  const openModal = (notice: Notice) => {
    setSelectedNotice(notice);
    setIsModalOpen(true);
  };

  return (
    <section id="services" className="projects-section">
      <div className="projects-header">
        <h2 className="projects-title">{t("news_and_events")}</h2>
        <p className="projects-description">{t("news_and_events_description")}</p>
      </div>


      <div className="projects-list">
        {notices.map((notice, index) => (
          <div key={index} className="project-card" onClick={() => openModal(notice)}>
            <img src={notice.image} alt={notice.title} className="project-image" />
            <h3 className="project-sub-title">{notice.title}</h3>
            <p className="project-text">
              {notice.description.length > 30
                ? `${notice.description.substring(0, 30)}... `
                : notice.description}
              {notice.description.length > 30 && (
                <span className="see-more">See more</span>
              )}
            </p>
          </div>
        ))}
      </div>

      {selectedNotice && (
        <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
          <img src={selectedNotice.image} alt={selectedNotice.title} className="project-modal-image" />
          <h2 className="project-title">{selectedNotice.title}</h2>
          <p className="project-text">{selectedNotice.description}</p>
        </Modal>
      )}
    </section>
  );
}
