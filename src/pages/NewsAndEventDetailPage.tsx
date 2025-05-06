import { useParams, Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import styles from './NewsAndEvntDetailPage.module.css';
import { fetchItem } from '../api/mockApi';
import ImageModal from '../components/ImageModal';

type ContentItem = {
  id: string;
  title: string;
  date: string;
  location?: string;
  content: string;
  image: string;
  category: string;
  type: 'news' | 'event';
  gallery?: string[];
};

const NewsAndEventDetailPage = ({ type }: { type: 'news' | 'event' }) => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [item, setItem] = useState<ContentItem | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchItemData = async () => {
      try {
        setLoading(true);
        const data = await fetchItem(type, id!);
        setItem(data as ContentItem);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An unknown error occurred');
        navigate('/not-found');
      } finally {
        setLoading(false);
      }
    };

    fetchItemData();
  }, [id, type, navigate]);

  if (loading) return <div className={styles.loading}>Loading...</div>;
  if (error) return <div className={styles.error}>{error}</div>;
  if (!item) return <div className={styles.error}>Item not found</div>;

  const formattedDate = new Date(item.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    weekday: 'long'
  });

  return (
    <div className={styles.detailContainer}>
      {/* Back Button */}
      <div className={styles.backButton}>
        <button onClick={() => navigate(-1)} className={styles.backLink}>
          <i className="fas fa-arrow-left"></i> Back to {item.type === 'news' ? 'News' : 'Events'}
        </button>
      </div>

      {/* Header Section */}
      <header className={styles.header}>
        <span className={styles.categoryBadge}>{item.category}</span>
        <h1 className={styles.title}>{item.title}</h1>
        
        <div className={styles.metaInfo}>
          <span className={styles.metaItem}>
            <i className="far fa-calendar-alt"></i>
            {formattedDate}
          </span>
          
          {item.location && (
            <span className={styles.metaItem}>
              <i className="fas fa-map-marker-alt"></i>
              {item.location}
            </span>
          )}
        </div>
      </header>

      {/* Featured Image */}
      <div className={styles.featuredImage}>
        <img src={item.image} alt={item.title} />
      </div>

      {/* Content */}
      <div 
        className={styles.content}
        dangerouslySetInnerHTML={{ __html: item.content }}
      />

      {/* Gallery */}
      {item.gallery && item.gallery.length > 0 && (
        <section className={styles.gallerySection}>
          <h2 className={styles.sectionTitle}>Gallery</h2>
          <div className={styles.galleryGrid}>
            {item.gallery.map((image, index) => (
              <div key={index} className={styles.galleryItem}>
                <img src={image} alt={`${item.title} - ${index + 1}`} onClick={() => setSelectedIndex(index)} />
              </div>
            ))}
          </div>
        </section>
      )}

{selectedIndex !== null && (
        <ImageModal
          images={item.gallery?.map((image) => image) || []}
          // titles={visibleImages?.map((img) => img)}
          currentIndex={selectedIndex}
          onClose={() => setSelectedIndex(null)}
          onNavigate={(newIndex) => setSelectedIndex(newIndex)}
        />
      )}

      {/* Call to Action */}
      <div className={styles.ctaSection}>
        {item.type === 'event' ? (
          <button className={styles.primaryButton}>
            <i className="fas fa-ticket-alt"></i> Register Now
          </button>
        ) : (
          <Link to={`/${item.type}`} className={styles.primaryButton}>
            <i className="fas fa-arrow-left"></i> Back to {item.type === 'news' ? 'News' : 'Events'}
          </Link>
        )}
        
        <div className={styles.socialShare}>
          <span>Share:</span>
          <button className={styles.socialButton}>
            <i className="fab fa-facebook-f"></i>
          </button>
          <button className={styles.socialButton}>
            <i className="fab fa-twitter"></i>
          </button>
          <button className={styles.socialButton}>
            <i className="fab fa-linkedin-in"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewsAndEventDetailPage;