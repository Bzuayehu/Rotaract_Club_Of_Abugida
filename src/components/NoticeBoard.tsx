import { useState } from "react";
import { useTranslation } from "react-i18next";
import Modal from "./Modal"; // Import Modal component
import blooddonation from "../assets/blooddonation.jpg";
// import sleepover from "../assets/sleepover.jpg";
import sleepover from "../assets/News and Events/call out forArtists.png";

// import communityServc from "../assets/community_Servc-removebg-preview.png";
// import clubservc from "../assets/club_Servc-removebg-preview.png";
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
    },{  title: "Artists Call Out",
      description: `📣✨ Calling All Artists! 🎨 Unleash Your Creativity and Make a Difference! ✨
    
    Are you an artist with a passion for creating and a desire to make a positive impact? 💖 The Rotaract Club of Abugida is hosting a fundraising art exhibition 🖼 to support The Rotary Foundation, and we're looking for talented individuals like you to showcase their work! 🌟
    
    Here's what you'll get from the exhibition:
    • Showcase your art & reach a wider audience. 📣
    • Give back & support impactful projects. 🙌
    • Connect with fellow artists & share your passion. 🤝
    
    ➡️ Register here🔗 (https://forms.gle/VdxK2v58dMcMaAf46)  before the deadline! ⏳
    
    • Deadline for registration: April 17 🗓
    
    • Contact information:
      📞 +251 96 906 3839 (Bizuayehu)
      📱 +251 91 291 1344 (Tensae)
    
    Spread the word and share this call with your fellow artists! 🗣 Let's make this exhibition a success! 🎉`,
      image: sleepover, // Replace this with your actual image reference
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
            <img src={notice.image} alt={notice.title} className="project-image1" />
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
