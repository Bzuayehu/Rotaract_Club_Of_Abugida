import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import Modal from "../Modals/Modal";
import "./NoticeBoard.css";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { EventItem, NewsItem, getRecentNews, getUpcomingEvents } from "../api/newsEventsData";

export default function NoticeBoard() {
  const { t } = useTranslation();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<EventItem | NewsItem | null>(null);
  const [modalType, setModalType] = useState<'event' | 'news'>('event');

  // Get upcoming events and recent news
  const upcomingEvents = getUpcomingEvents(10); // Get more to have options
  const recentNews = getRecentNews(10); // Get more to have options

  // Combine and prioritize: upcoming events first, then recent news
  // Sort upcoming events by closest date first
  const sortedUpcomingEvents = upcomingEvents.sort((a, b) => 
    a.date.getTime() - b.date.getTime()
  );

  // Take up to 4 items, prioritizing upcoming events
  const displayItems: (EventItem | NewsItem)[] = [];
  const itemTypes: ('event' | 'news')[] = [];

  // Add upcoming events first (up to 4)
  sortedUpcomingEvents.forEach(event => {
    if (displayItems.length < 3) {
      displayItems.push(event);
      itemTypes.push('event');
    }
  });

  // Fill remaining slots with recent news
  recentNews.forEach(news => {
    if (displayItems.length < 3) {
      displayItems.push(news);
      itemTypes.push('news');
    }
  });

  const openModal = (item: EventItem | NewsItem, type: 'event' | 'news') => {
    setSelectedItem(item);
    setModalType(type);
    setIsModalOpen(true);
  };

  // Initialize AOS
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section id="services" className="projects-section-board" data-aos="fade-up">
      <div className="projects-header" data-aos="fade-up">
        <h2 className="projects-title">{t("news_and_events")}</h2>
        <p className="projects-description">{t("news_and_events_description")}</p>
      </div>

      <div className="projects-list" data-aos="fade-up">
        {displayItems.map((item, index) => {
          const type = itemTypes[index];
          const isEvent = type === 'event';
          const event = isEvent ? item as EventItem : null;
          const news = !isEvent ? item as NewsItem : null;

          return (
            <div
              key={`${type}-${item.id}`}
              className="project-card-board"
              onClick={() => openModal(item, type)}
              data-aos="zoom-in"
              data-aos-delay={`${index * 100}`}
            >
              <img
                src={item.image}
                alt={item.title}
                className="project-image1"
                data-aos="zoom-in"
                data-aos-delay={`${index * 100}`}
              />
              <div className={`card-category-badge ${isEvent ? 'upcoming' : ''}`}>
                {isEvent 
                  ? 'Upcoming Event'
                  : news!.category.charAt(0).toUpperCase() + news!.category.slice(1)
                }
              </div>
              <h3 className="project-sub-title" data-aos="fade-up" data-aos-delay={`${index * 100}`}>
                {item.title}
              </h3>
              <p className="card-date" data-aos="fade-up" data-aos-delay={`${index * 100}`}>
                <i className="far fa-calendar-alt"></i> {item.date.toLocaleDateString()}
              </p>
              {isEvent && (
                <p className="card-location" data-aos="fade-up" data-aos-delay={`${index * 100}`}>
                  <i className="fas fa-map-marker-alt"></i> {event!.location.join(', ')}
                </p>
              )}
              <p className="project-text" data-aos="fade-up" data-aos-delay={`${index * 100}`}>
                {(isEvent ? event!.description : news!.summary).length > 80
                  ? `${(isEvent ? event!.description : news!.summary).substring(0, 80)}... `
                  : (isEvent ? event!.description : news!.summary)}
                {(isEvent ? event!.description : news!.summary).length > 80 && (
                  <span className="see-more">Read more</span>
                )}
              </p>
            </div>
          );
        })}
      </div>

      {/* View All Button */}
      <div className="view-all-container" data-aos="fade-up">
        <Link to="/news">
          <button className="view-all-button">
            View All News & Events <i className="fas fa-arrow-right"></i>
          </button>
        </Link>
      </div>

      {/* Modal */}
      {selectedItem && (
        <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
          <img
            src={selectedItem.image}
            alt={selectedItem.title}
            className="project-modal-image"
            data-aos="zoom-in"
          />
          <div className="card-category-badge modal-badge">
            {modalType === 'event' 
              ? (selectedItem as EventItem).isUpcoming ? 'Upcoming Event' : 'Past Event'
              : (selectedItem as NewsItem).category.charAt(0).toUpperCase() + (selectedItem as NewsItem).category.slice(1)
            }
          </div>
          <h2 className="project-title" data-aos="fade-up">
            {selectedItem.title}
          </h2>
          <p className="card-date" data-aos="fade-up">
            <i className="far fa-calendar-alt"></i> {selectedItem.date.toLocaleDateString()}
          </p>
          {modalType === 'event' && (
            <p className="card-location" data-aos="fade-up">
              <i className="fas fa-map-marker-alt"></i> {(selectedItem as EventItem).location.join(', ')}
            </p>
          )}
          <p className="project-text" data-aos="fade-up">
            {modalType === 'event' 
              ? (selectedItem as EventItem).description
              : (selectedItem as NewsItem).summary
            }
          </p>
        </Modal>
      )}
    </section>
  );
}