import blooddonation from "../assets/blooddonation.jpg";
import sleepover from "../assets/sleepover.jpg";
import "./NoticeBoard.css"; // Import the CSS file
import { useTranslation } from 'react-i18next';


const notices = [
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
📞Eyosi: 0909612288

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

We can't wait to see you there for a night of memories and fun!! ✨
`,
    image: sleepover,
  }
];

export default function Projects() {
  const { t } = useTranslation();

  return (
    <section id="services" className="notice-section">
      <div className="notice-header">
        <h2 className="notice-title">{t('news_title')}</h2>
        <p className="notice-description">{t('news_description')}</p>
      </div>

      <div className="notice-list">
        {notices.map((notice, index) => (
          <div key={index} className="notice-card">
            <img src={notice.image} alt={notice.title} className="notice-image" />
            <h3 className="notice-sub-title">{notice.title}</h3>
            <p className="notice-text">
                <pre style={{ whiteSpace: "pre-wrap" }}>{notice.description}</pre>
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
