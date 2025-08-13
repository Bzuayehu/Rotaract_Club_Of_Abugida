import { useState, useEffect } from "react";
import "./NewsEventsPage.css";
// import img from "../../assets/Coffee-time/best-pic.jpg";
import img1 from "../../assets/Events/Coming Soon.jpg";
import mtt from "../../assets/News and Events/mt-5.jpg";
import eu2 from "../../assets/News and Events/eu-2.jpg";

import pt2 from "../../assets/News and Events/pt-2.jpg";

import ev1 from "../../assets/News and Events/ev-1.jpg";

import bkd1 from "../../assets/News and Events/bkd-1.jpg";
import newYear from "../../assets/News and Events/Newyear.jpg";
import newYr from "../../assets/News and Events/newyr.jpg";
import generalMeeting from "../../assets/News and Events/lastmeet3.jpg"; // General Meeting image
import anniversary from "../../assets/News and Events/anniversary1.jpg"; // Anniversary image



import img2 from "../../assets/Blood Donation/Screenshot 2025-05-21 at 1.07.45 in the morning.png";
// import { EventItem, NewsItem, getRecentNews, getUpcomingEvents } from "../../api/newsEventsData";

import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import EventRegistrationModal from "../../Modals/EventRegistrationModal";
import EventGalleryModal from "../../Modals/EventGalleryModal";
import { showCalendarOptions } from "../../utils/calendarUtils";

type EventItem = {
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

type NewsItem = {
  id: number;
  title: string;
  date: Date;
  summary: string;
  image: string;
  category: string;
};

const NewsEventsPage = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);
  const [activeEventFilter, setActiveEventFilter] = useState<
    "upcoming" | "past"
  >("upcoming");
  const [activeNewsCategory, setActiveNewsCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [visibleNewsCount, setVisibleNewsCount] = useState(4);
  const [visibleEventsCount, setVisibleEventsCount] = useState(4);

  // Modal states
  const [registrationModal, setRegistrationModal] = useState<{
    isOpen: boolean;
    event: EventItem | null;
  }>({ isOpen: false, event: null });

  const [galleryModal, setGalleryModal] = useState<{
    isOpen: boolean;
    event: EventItem | null;
  }>({ isOpen: false, event: null });

  // Track events added to calendar
  const [eventsAddedToCalendar, setEventsAddedToCalendar] = useState<Set<number>>(new Set());

  // Toast notification state
  const [toastMessage, setToastMessage] = useState<string>('');
  const [showToast, setShowToast] = useState<boolean>(false);

  const today = new Date();

  // Sample data with gallery images for past events
  const eventRaw = [
    {
      id: 1,
      title: "Rac Abugida Art Exhibition",
      date: new Date(2025, 5, 14),
      location: ["Addis Ababa University, Alle School of Fine Arts and Design"],
      description:
        "join us for our amaizing art exhibition showcasing the talents of our members and local artists. Enjoy a day of creativity, inspiration, and community engagement.",
      image: img1,
      category: "fundraising",
      gallery: [
        img1,
        mtt,
        eu2,
        pt2,
        ev1,
        bkd1,
      ],
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
      gallery: [
        img2,
        mtt,
        eu2,
        pt2,
      ],
    },
  ];
  const events: EventItem[] = eventRaw.map((event) => ({
    ...event,
    isUpcoming: event.date >= today,
  }));

  const newsData: NewsItem[] = [
    {
      id: 1,
      title: "General Meeting",
      date: new Date(2025, 4, 11), // May is month 4 in JavaScript Date (0-indexed)
      summary:
        "Our general meeting was filled with joy, laughter, and reconnection as we welcomed missed members and celebrated Mother's Day with warm tributes.",
      image: mtt, // replace with your actual image reference
      category: "updates",
    },
    {
      id: 2,
      title: "EU 2025 Children's Race Fundraising Event",
      date: new Date(2025, 4, 11), // May 11, 2025
      summary:
        "Our volunteers joined the EU Children's Race, turning energy into impact by raising funds for future community projects!",
      image: eu2, // replace with actual image import
      category: "achievements",
    },
    {
      id: 3,
      title: "MOU with Eye-Plus for Eye Vision Project",
      date: new Date(2025, 4, 2), //
      summary:
        "Rotaract Abugida signed an MOU with Eye-Plus Optometrist Clinic to collaborate on the Eye Vision Project.",
      image: pt2, // Replace with actual image import
      category: "partnerships",
    },
    {
      id: 4,
      title: "Eye Vision Test at Eye-Plus Clinic",
      date: new Date(2025, 3, 30), // May 2, 2025
      summary:
        "Successful eye consultation was conducted for Wonderad Primary School students as part of our Eye Vision Project.",
      image: ev1, // Replace with the actual image used
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
  category: "updates",
  },
  {
  id: 9,
  title: "🎉 22 Years Anniversary & Handover Celebration!",
  date: new Date(2025, 5, 28), // June 28, 2025
  summary:
    "What an incredible night! Our 22nd Anniversary and Handover Ceremony was a heartfelt celebration of legacy, joy, and new beginnings. 🎊",
  image: anniversary, // Replace with your actual image variable
  category: "celebrations"
}
  ];

  const sortedFeaturedNewsAll = newsData.sort(
    (a, b) => b.date.getTime() - a.date.getTime()
  );
  const newsCategories = ["all", "achievements", "partnerships", "updates"];

  const [filteredEvents, setFilteredEvents] = useState<EventItem[]>([]);
  const [filteredNews, setFilteredNews] = useState<NewsItem[]>([]);

  useEffect(() => {
    // Filter events
    let tempEvents = events.filter((event) =>
      activeEventFilter === "upcoming" ? event.isUpcoming : !event.isUpcoming
    );

    // Apply search to events
    if (searchQuery) {
      tempEvents = tempEvents.filter(
        (event) =>
          event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          event.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    setFilteredEvents(tempEvents);

    // Filter news
    let tempNews = [...sortedFeaturedNewsAll];
    if (activeNewsCategory !== "all") {
      tempNews = tempNews.filter(
        (item) => item.category === activeNewsCategory
      );
    }

    // Apply search to news
    if (searchQuery) {
      tempNews = tempNews.filter(
        (item) =>
          item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.summary.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    setFilteredNews(tempNews);
  }, [activeEventFilter, activeNewsCategory, searchQuery]);

  // Event handlers
  const handleRegisterNow = (event: EventItem) => {
    setRegistrationModal({ isOpen: true, event });
  };

  const handleViewGallery = (event: EventItem) => {
    setGalleryModal({ isOpen: true, event });
  };

  const handleAddToCalendar = (event: EventItem) => {
    const onCalendarSuccess = () => {
      // Add event to the set of events added to calendar
      setEventsAddedToCalendar(prev => new Set(prev).add(event.id));
      
      // Show success toast
      setToastMessage(`"${event.title}" has been added to your calendar!`);
      setShowToast(true);
      
      // Hide toast after 3 seconds
      setTimeout(() => {
        setShowToast(false);
      }, 3000);
    };

    showCalendarOptions({
      title: event.title,
      description: event.description,
      location: event.location.join(', '),
      startDate: event.date,
    }, onCalendarSuccess);
  };

  const closeRegistrationModal = () => {
    setRegistrationModal({ isOpen: false, event: null });
  };

  const closeGalleryModal = () => {
    setGalleryModal({ isOpen: false, event: null });
  };

  return (
    <div className="news-events-container">
      <div className="hero-banner" data-aos="fade-down">
        <h1>Stay Updated</h1>
        <p>Latest news and upcoming events from Rotaract club of Abugida</p>
      </div>

      <div className="search-container" data-aos="fade-up">
        <i className="fas fa-search"></i>
        <input
          type="text"
          placeholder="Search news and events..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      <section className="news-section">
        <div className="news-events-section-header" data-aos="fade-right">
          <h2>Club News</h2>
          <div className="news-categories">
            {newsCategories.map((category) => (
              <button
                key={category}
                className={activeNewsCategory === category ? "active" : ""}
                onClick={() => setActiveNewsCategory(category)}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {filteredNews.length > 0 ? (
          <div className="cards-grid">
            {filteredNews.slice(0, visibleNewsCount).map((item) => (
              <div key={item.id} className="card" data-aos="zoom-in">
                <div className="card-image-container">
                  <img src={item.image} alt={item.title} />
                  <span className="card-category">
                    {item.category.charAt(0).toUpperCase() +
                      item.category.slice(1)}
                  </span>
                </div>
                <div className="card-content">
                  <h3 data-aos="fade-up">{item.title}</h3>
                  <p className="card-date" data-aos="fade-up">
                    <i className="far fa-calendar-alt"></i>{" "}
                    {item.date.toLocaleDateString()}
                  </p>
                  <p
                    className="card-summary"
                    data-aos="fade-up"
                    // data-aos-delay="100"
                  >
                    {item.summary}
                  </p>
                  <Link to={`/news/${item.id}`}>
                    <button
                      className="card-button"
                      data-aos="fade-up"
                      // data-aos-delay="200"
                    >
                      Read More <i className="fas fa-arrow-right"></i>
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="no-results" data-aos="fade-up">
            <p>No news found matching your criteria</p>
          </div>
        )}
      </section>

      {visibleNewsCount < filteredNews.length && (
        <div className="see-more-container-newsEvents" data-aos="fade-up">
          <button
            className="see-more-button-newsEvents"
            onClick={() => setVisibleNewsCount((prev) => prev + 3)}
          >
            See More News
          </button>
        </div>
      )}

      <section className="events-section">
        <div className="news-events-section-header" data-aos="fade-left">
          <h2>Club Events</h2>
          <div className="event-filters">
            <button
              className={activeEventFilter === "upcoming" ? "active" : ""}
              onClick={() => setActiveEventFilter("upcoming")}
            >
              Upcoming Events
            </button>
            <button
              className={activeEventFilter === "past" ? "active" : ""}
              onClick={() => setActiveEventFilter("past")}
            >
              Past Events
            </button>
          </div>
        </div>

        {filteredEvents.length > 0 ? (
          <div className="cards-grid">
            {filteredEvents.slice(0, visibleEventsCount).map((event) => (
              <div key={event.id} className="card" data-aos="zoom-in-up">
                <div className="card-image-container">
                  <img src={event.image} alt={event.title} />
                  <span className="card-category">
                    {event.isUpcoming ? "Upcoming" : "Past Event"}
                  </span>
                </div>
                <div className="card-content">
                  <h3 data-aos="fade-right">{event.title}</h3>
                  <p className="card-date" data-aos="fade-up">
                    <i className="far fa-calendar-alt"></i>{" "}
                    {event.date.toLocaleDateString()}
                  </p>
                  <p className="card-location" data-aos="fade-up">
                    <i className="fas fa-map-marker-alt"></i> {event.location}
                  </p>
                  <p
                    className="card-summary"
                    data-aos="fade-up"
                    // data-aos-delay="100"
                  >
                    {event.description}
                  </p>
                  <div
                    className="card-buttons"
                    data-aos="fade-up"
                    // data-aos-delay="200"
                  >
                    <button 
                      className="primary-button"
                      onClick={() => event.isUpcoming ? handleRegisterNow(event) : handleViewGallery(event)}
                    >
                      {event.isUpcoming ? "Register Now" : "View Gallery"}
                    </button>
                    {event.isUpcoming && (
                      <button 
                        className={`secondary-button ${eventsAddedToCalendar.has(event.id) ? 'added-to-calendar' : ''}`}
                        onClick={() => handleAddToCalendar(event)}
                        disabled={eventsAddedToCalendar.has(event.id)}
                      >
                        {eventsAddedToCalendar.has(event.id) ? (
                          <>
                            <i className="fas fa-check"></i> Added
                          </>
                        ) : (
                          <>
                            <i className="far fa-calendar-plus"></i> Add to Calendar
                          </>
                        )}
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="no-results" data-aos="fade-up">
            <p>No events found matching your criteria</p>
          </div>
        )}
      </section>
      {visibleEventsCount < filteredEvents.length && (
        <div className="see-more-container-newsEvents" data-aos="fade-up">
          <button
            className="see-more-button-newsEvents"
            onClick={() => setVisibleEventsCount((prev) => prev + 3)}
          >
            See More Events
          </button>
        </div>
      )}

      <section className="newsletter-cta" data-aos="fade-right">
        <h3 data-aos="fade-up">Never Miss an Update</h3>
        <p data-aos="fade-up">Subscribe to our monthly newsletter</p>
        <div className="newsletter-form" data-aos="fade-left">
          <input type="email" placeholder="Your email address" />
          <button>Subscribe</button>
        </div>
      </section>

      {/* Registration Modal */}
      {registrationModal.isOpen && registrationModal.event && (
        <EventRegistrationModal
          isOpen={registrationModal.isOpen}
          onClose={closeRegistrationModal}
          event={registrationModal.event}
        />
      )}

      {/* Gallery Modal */}
      {galleryModal.isOpen && galleryModal.event && galleryModal.event.gallery && (
        <EventGalleryModal
          isOpen={galleryModal.isOpen}
          onClose={closeGalleryModal}
          event={galleryModal.event}
          images={galleryModal.event.gallery}
        />
      )}

      {/* Toast Notification */}
      {showToast && (
        <div className="toast-notification">
          <div className="toast-content">
            <i className="fas fa-check-circle"></i>
            <span>{toastMessage}</span>
            <button 
              className="toast-close"
              onClick={() => setShowToast(false)}
            >
              <i className="fas fa-times"></i>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default NewsEventsPage;
