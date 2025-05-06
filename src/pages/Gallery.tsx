
import ImageModal from "../components/ImageModal"; // Adjust the import path as necessary
import "./Gallery.css";
import img1 from "../assets/Coffee-time/photo_2025-03-28_20-45-21.jpg";
import img2 from "../assets/Coffee-time/photo_2025-02-28_21-04-58.jpg";
import img3 from "../assets/Coffee-time/photo_81_2025-02-26_10-26-07.jpg";
import img4 from "../assets/Coffee-time/best-pic.jpg";
import img5 from "../assets/Extending Love /EL-19.jpg";
import img6 from "../assets/Extending Love /EL-20.jpg";
import img7 from "../assets/Extending Love /EL-21.jpg";
import img8 from "../assets/Extending Love /EL-22.jpg";
import img9 from "../assets/Extending Love /EL-23.jpg";
import img10 from "../assets/Extending Love /EL-24.jpg";

import img11 from "../assets/Blood Donation/65th_1.jpg";
import img12 from "../assets/Blood Donation/65th_2.jpg";
import img13 from "../assets/Blood Donation/65th_3.jpg";
import img14 from "../assets/Blood Donation/65th_4.jpg";
import img15 from "../assets/Blood Donation/65th_5.jpg";
import img16 from "../assets/Blood Donation/65th_6.jpg";
import img17 from "../assets/Blood Donation/65th_8.jpg";
import img18 from "../assets/Blood Donation/65th_9.jpg";
import img19 from "../assets/Blood Donation/65th_10.jpg";

import img20 from "../assets/Trip/ABC_2926.JPG";
import img21 from "../assets/Trip/ABC_3247.JPG";
import img22 from "../assets/Trip/ABC_3249.JPG";
import img23 from "../assets/Trip/ABC_3250.JPG";
import img24 from "../assets/Trip/ABC_3258.JPG";
import img25 from "../assets/Trip/ABC_3266.JPG";
import img26 from "../assets/Trip/pic1.jpg";


import img27 from "../assets/Proffessional-Development/photo_2_2025-02-26_10-38-21.jpg";
import img28 from "../assets/Proffessional-Development/photo_3_2025-02-26_10-38-21.jpg";

import { useNavigate } from "react-router-dom";
import { useState } from "react";

type ImageItem = {
  id?: number;
  src: string;
  title: string;
  category: string;
};

const images: ImageItem[] = [
  {
    id: 1,
    src: img1,
    title: "Coffee time",
    category: "Fellowship",
  },
  {
    src: img11,
    title: "Blood Donation",
    category: "Community Service",
  },
  {
    src: img26,
    title: "Trip",
    category: "Fellowship",
  },
  {
    src: img2,
    title: "Coffee time",
    category: "Fellowship",
  },
  {
    src: img12,
    title: "Blood Donation",
    category: "Community Service",
  },
  {
    src: img3,
    title: "Coffee time",
    category: "Fellowship",
  },
  {
    src: img5,
    title: "Extending Love",
    category: "Community Service",
  },
  {
    src: img13,
    title: "Blood Donation",
    category: "Community Service",
  },
  {
    src: img7,
    title: "Extending Love",
    category: "Community Service",
  },
  {
    src: img14,
    title: "Blood Donation",
    category: "Community Service",
  },
  {
    src: img10,
    title: "Extending Love",
    category: "Community Service",
  },
  {
    src: img23,
    title: "Trip",
    category: "Fellowship",
  },
  {
    src: img24,
    title: "Trip",
    category: "Fellowship",
  },
  {
    src: img18,
    title: "Blood Donation",
    category: "Community Service",
  },
  {
    src: img15,
    title: "Blood Donation",
    category: "Community Service",
  },
  {
    src: img6,
    title: "Extending Love",
    category: "Community Service",
  },
  {
    src: img16,
    title: "Blood Donation",
    category: "Community Service",
  },
  {
    src: img17,
    title: "Blood Donation",
    category: "Community Service",
  },
  {
    src: img4,
    title: "Coffee time",
    category: "Fellowship",
  },
  {
    src: img22,
    title: "Trip",
    category: "Fellowship",
  },
  {
    src: img8,
    title: "Extending Love",
    category: "Community Service",
  },
  {
    src: img9,
    title: "Extending Love",
    category: "Community Service",
  },
  {
    src: img19,
    title: "Blood Donation",
    category: "Community Service",
  },

  {
    src: img20,
    title: "Trip",
    category: "Fellowship",
  },
  {
    src: img21,
    title: "Trip",
    category: "Fellowship",
  },
  {
    src: img28,
    title: "Training",
    category: "Professional Development",
  },
  {
    src: img22,
    title: "Trip",
    category: "Fellowship",
  },
  
  {
    src: img25,
    title: "Trip",
    category: "Fellowship",
  },

  {
    src: img27,
    title: "Training",
    category: "Professional Development",
  },
  
  
];

const categories = [
  "All",
  "Community Service",
  "Professional Development",
  "Fellowship",
  "Meetings",
];

export default function Gallery() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  // const [modalImage, setModalImage] = useState<string | null>(null);
// const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
//   const [filteredImagess, setFilteredImagess] = useState<ImageItem[]>([]);
const openModal = (url: number) => {
  // setModalImage(url);
  setSelectedIndex(url)
};

const closeModal = () => {
  // setModalImage(null);
  setSelectedIndex(null)
};




// const handleImageClick = (image: ImageItem) => {
//   const categoryImages = images.filter((img) => img.category === image.category);
//   const index = categoryImages.findIndex((img) => img.src === image.src);

//   setFilteredImagess(categoryImages);
//   setSelectedCategory(image.category);
//   setSelectedIndex(index);
// };



const navigate = useNavigate(); // from react-router
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredImages = images.filter((img) => {
    const matchesCategory =
      activeCategory === "All" || img.category === activeCategory;
    const matchesSearch = img.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="gallery-container">
      <div className="gallery-header">
        <input
          type="text"
          placeholder="Search images..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="gallery-search"
        />
        <div className="gallery-tabs">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`gallery-tab ${
                activeCategory === cat ? "active" : ""
              }`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>
      <div className="gallery-grid">
        {filteredImages.map((img, index) => (
          <div className="gallery-item" key={index}>
            <img className="imgg" src={img.src} alt={img.title} />
            <p>{img.title}</p>

            <div className="gallery-hover-overlay">
              <button
                onClick={() => openModal(index)} 
                className="gallery-icon zoom"
              >
                🔍
              </button>
              <button
                onClick={() => navigate(`/gallery/${img.id}`)}
                className="gallery-icon link"
              >
                🔗
              </button>
            </div>
          </div>
        ))}
      </div>{/* Modal for image preview */}
      
      {selectedIndex !== null && (
        <ImageModal
          images={activeCategory=="All"?images.map((img) => img.src):filteredImages.map((img) => img.src)}
          titles={activeCategory=="All"?images.map((img) => img.title):filteredImages.map((img) => img.title)}
          currentIndex={selectedIndex}
          onClose={() => closeModal()}
          onNavigate={(newIndex) => setSelectedIndex(newIndex)}
        />
      )} 
      
    </div>
  );
}
