import { useState, useEffect } from 'react';
import './NewsEventsPage.css';
import img from '../assets/Coffee-time/best-pic.jpg';
import { Link } from 'react-router-dom';

type EventItem = {
  id: number;
  title: string;
  date: Date;
  location: string;
  description: string;
  image: string;
  isUpcoming: boolean;
  category: string;
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
  const [activeEventFilter, setActiveEventFilter] = useState<'upcoming' | 'past'>('upcoming');
  const [activeNewsCategory, setActiveNewsCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  
  // Sample data
  const events: EventItem[] = [
    {
      id: 1,
      title: 'Annual Charity Gala',
      date: new Date(2025, 5, 23),
      location: 'Abugida Convention Center',
      description: 'Join us for our flagship fundraising event with live music and auctions',
      image: img,
      isUpcoming: true,
      category: 'fundraiser'
    },
    {
      id: 2,
      title: 'Community Clean-Up',
      date: new Date(2025, 4, 15),
      location: 'Central Park',
      description: 'City-wide clean-up initiative with 100+ volunteers',
      image: img,
      isUpcoming: false,
      category: 'service'
    },
    {
      id: 3,
      title: 'Youth Leadership Workshop',
      date: new Date(2025, 6, 10),
      location: 'City Library',
      description: 'Empowering young leaders with practical skills',
      image: img,
      isUpcoming: true,
      category: 'education'
    },
    {
        id: 4,
        title: 'Annual Charity Gala',
        date: new Date(2025, 5, 23),
        location: 'Abugida Convention Center',
        description: 'Join us for our flagship fundraising event with live music and auctions',
        image: img,
        isUpcoming: true,
        category: 'fundraiser'
      },
      {
        id: 5,
        title: 'Community Clean-Up',
        date: new Date(2025, 4, 15),
        location: 'Central Park',
        description: 'City-wide clean-up initiative with 100+ volunteers',
        image: img,
        isUpcoming: false,
        category: 'service'
      },
      {
        id: 6,
        title: 'Youth Leadership Workshop',
        date: new Date(2025, 6, 10),
        location: 'City Library',
        description: 'Empowering young leaders with practical skills',
        image: img,
        isUpcoming: true,
        category: 'education'
      }
  ];

  const news: NewsItem[] = [
    {
      id: 1,
      title: 'Rotaract Wins Community Award',
      date: new Date(2025, 3, 10),
      summary: 'Recognized for outstanding service during the flood relief campaign',
      image: img,
      category: 'achievements'
    },
    {
      id: 2,
      title: 'New Partnership with Local NGO',
      date: new Date(2025, 4, 5),
      summary: 'Collaborating on education initiatives for underprivileged children',
      image: img,
      category: 'partnerships'
    },
    {
      id: 3,
      title: 'Blood Donation Camp Success',
      date: new Date(2025, 4, 20),
      summary: 'Collected 150+ units of blood with community participation',
      image: img,
      category: 'achievements'
    },
    {
        id: 4,
        title: 'Rotaract Wins Community Award',
        date: new Date(2025, 3, 10),
        summary: 'Recognized for outstanding service during the flood relief campaign',
        image: img,
        category: 'achievements'
      },
      {
        id: 5,
        title: 'New Partnership with Local NGO',
        date: new Date(2025, 4, 5),
        summary: 'Collaborating on education initiatives for underprivileged children',
        image: img,
        category: 'partnerships'
      },
      {
        id: 6,
        title: 'Blood Donation Camp Success',
        date: new Date(2025, 4, 20),
        summary: 'Collected 150+ units of blood with community participation',
        image: img,
        category: 'achievements'
      }
  ];

  const newsCategories = ['all', 'achievements', 'partnerships', 'updates'];
//   const eventCategories = ['all', 'fundraiser', 'service', 'education'];

  const [filteredEvents, setFilteredEvents] = useState<EventItem[]>([]);
  const [filteredNews, setFilteredNews] = useState<NewsItem[]>([]);

  useEffect(() => {
    // Filter events
    let tempEvents = events.filter(event => 
      activeEventFilter === 'upcoming' ? event.isUpcoming : !event.isUpcoming
    );

    // Apply search to events
    if (searchQuery) {
      tempEvents = tempEvents.filter(event =>
        event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        event.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    setFilteredEvents(tempEvents);

    // Filter news
    let tempNews = [...news];
    if (activeNewsCategory !== 'all') {
      tempNews = tempNews.filter(item => item.category === activeNewsCategory);
    }

    // Apply search to news
    if (searchQuery) {
      tempNews = tempNews.filter(item =>
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.summary.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    setFilteredNews(tempNews);
  }, [activeEventFilter, activeNewsCategory, searchQuery]);

  return (
    <div className="news-events-container">
      {/* Hero Banner */}
      <div className="hero-banner">
        <h1>Stay Updated</h1>
        <p>Latest news and upcoming events from Rotaract club of Abugida</p>
      </div>

      {/* Search Bar */}
      <div className="search-container">
        <i className="fas fa-search"></i>
        <input
          type="text"
          placeholder="Search news and events..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      {/* News Section */}
      <section className="news-section">
        <div className="news-events-section-header">
          <h2>Club News</h2>
          <div className="news-categories">
            {newsCategories.map(category => (
              <button
                key={category}
                className={activeNewsCategory === category ? 'active' : ''}
                onClick={() => setActiveNewsCategory(category)}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>
        </div>
        
        {filteredNews.length > 0 ? (
          <div className="cards-grid">
            {filteredNews.map(item => (
              <div key={item.id} className="card">
                <div className="card-image-container">
                  <img src={item.image} alt={item.title} />
                  <span className="card-category">
                    {item.category.charAt(0).toUpperCase() + item.category.slice(1)}
                  </span>
                </div>
                <div className="card-content">
                  <h3>{item.title}</h3>
                  <p className="card-date">
                    <i className="far fa-calendar-alt"></i> {item.date.toLocaleDateString()}
                  </p>
                  <p className="card-summary">{item.summary}</p>
                  <Link to={`/news/${item.id}`}><button className="card-button">
                    Read More <i className="fas fa-arrow-right"></i>
                  </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="no-results">
            <p>No news found matching your criteria</p>
          </div>
        )}
      </section>

      {/* Events Section */}
      <section className="events-section">
        <div className="news-events-section-header">
          <h2>Club Events</h2>
          <div className="event-filters">
            <button 
              className={activeEventFilter === 'upcoming' ? 'active' : ''}
              onClick={() => setActiveEventFilter('upcoming')}
            >
              Upcoming Events
            </button>
            <button 
              className={activeEventFilter === 'past' ? 'active' : ''}
              onClick={() => setActiveEventFilter('past')}
            >
              Past Events
            </button>
          </div>
        </div>

        {filteredEvents.length > 0 ? (
          <div className="cards-grid">
            {filteredEvents.map(event => (
              <div key={event.id} className="card">
                <Link to={`/events/${event.id}`} className='card-link'>
                  {/* <button className="card-button">
                    View Details <i className="fas fa-arrow-right"></i>
                  </button> */}
                <div className="card-image-container">
                  <img src={event.image} alt={event.title} />
                  <span className="card-category">
                    {event.isUpcoming ? 'Upcoming' : 'Past Event'}
                  </span>
                </div>
                <div className="card-content">
                  <h3>{event.title}</h3>
                  <p className="card-date">
                    <i className="far fa-calendar-alt"></i> {event.date.toLocaleDateString()}
                  </p>
                  <p className="card-location">
                    <i className="fas fa-map-marker-alt"></i> {event.location}
                  </p>
                  <p className="card-summary">{event.description}</p>
                  <div className="card-buttons">
                    <button className="primary-button">
                      {event.isUpcoming ? 'Register Now' : 'View Gallery'}
                    </button>
                    <button className="secondary-button">
                      <i className="far fa-calendar-plus"></i> Add to Calendar
                    </button>
                  </div>
                </div>
                </Link>
              </div>
            ))}
          </div>
        ) : (
          <div className="no-results">
            <p>No events found matching your criteria</p>
          </div>
        )}
      </section>

      {/* Newsletter CTA */}
      <section className="newsletter-cta">
        <h3>Never Miss an Update</h3>
        <p>Subscribe to our monthly newsletter</p>
        <div className="newsletter-form">
          <input type="email" placeholder="Your email address" />
          <button>Subscribe</button>
        </div>
      </section>
    </div>
  );
};

export default NewsEventsPage;