import { useParams, Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import styles from "./NewsAndEvntDetailPage.module.css";
import { fetchItem } from "../../../api/mockApi";
import ImageModal from "../../../Modals/ImageModal";
import AOS from "aos";
import "aos/dist/aos.css";

type ContentItem = {
  id: string;
  title: string;
  date: string;
  location?: string;
  content: string;
  image: string;
  category: string;
  type: "news" | "event";
  gallery?: string[];
};

const NewsAndEventDetailPage = ({ type }: { type: "news" | "event" }) => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [showAllImages, setShowAllImages] = useState(false);

  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [item, setItem] = useState<ContentItem | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  useEffect(() => {
    const fetchItemData = async () => {
      try {
        setLoading(true);
        const data = await fetchItem(type, id!);
        setItem(data as ContentItem);
      } catch (err) {
        setError(
          err instanceof Error ? err.message : "An unknown error occurred"
        );
        navigate("/not-found");
      } finally {
        setLoading(false);
      }
    };

    fetchItemData();
  }, [id, type, navigate]);

  if (loading) return <div className={styles.loading}>Loading...</div>;
  if (error) return <div className={styles.error}>{error}</div>;
  if (!item) return <div className={styles.error}>Item not found</div>;

  const formattedDate = new Date(item.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    weekday: "long",
  });

  return (
    <div className={styles.detailContainer}>
      <div className={styles.backButton}>
        <button onClick={() => navigate(-1)} className={styles.backLink}>
          <i className="fas fa-arrow-left"></i> Back to{" "}
          {item.type === "news" ? "News" : "Events"}
        </button>
      </div>

      <header className={styles.header} data-aos="fade-up">
        <span className={styles.categoryBadge}>{item.category}</span>
        <h1 className={styles.title}>{item.title}</h1>

        <div className={styles.metaInfo} data-aos="fade-up">
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

      <div className={styles.featuredImage} data-aos="zoom-in">
        <img src={item.image} alt={item.title} />
      </div>

      <div
        className={styles.content}
        data-aos="fade-up"
        dangerouslySetInnerHTML={{ __html: item.content }}
      />

      {item.gallery && item.gallery.length > 0 && (
        <section className={styles.gallerySection} data-aos="fade-up">
          <h2 className={styles.sectionTitle}>Gallery</h2>
          <div className={styles.galleryGrid}>
            {(showAllImages ? item.gallery : item.gallery.slice(0, 4)).map((image, index) => (
              <div key={index} className={styles.galleryItem} data-aos="zoom-in-up">
                <img
                  src={image}
                  alt={`${item.title} - ${index + 1}`}
                  onClick={() => setSelectedIndex(index)}
                />
              </div>
            ))}
          </div>
          {!showAllImages && item.gallery.length > 4 && (
            <button
              className={styles.primaryButton}
              style={{ marginTop: "1rem" }}
              onClick={() => setShowAllImages(true)}
            >
              See more images
            </button>
          )}
        </section>
      )}

      {selectedIndex !== null && (
        <ImageModal
          images={item.gallery?.map((image) => image) || []}
          currentIndex={selectedIndex}
          onClose={() => setSelectedIndex(null)}
          onNavigate={(newIndex) => setSelectedIndex(newIndex)}
        />
      )}

      <div className={styles.ctaSection} data-aos="fade-right">
        {item.type === "event" ? (
          <button className={styles.primaryButton}>
            <i className="fas fa-ticket-alt"></i> Register Now
          </button>
        ) : (
          <Link to={`/${item.type}`} className={styles.primaryButton}>
            <i className="fas fa-arrow-left"></i> Back to{" "}
            {item.type === "news" ? "News" : "Events"}
          </Link>
        )}

        <div className={styles.socialShare} data-aos="fade-left">
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