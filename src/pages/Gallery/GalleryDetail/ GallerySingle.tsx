import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./gallerySingle.css";


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

interface ImageItem {
  id?: number;
  src: string;
  title: string;
  description?: string;
  category: string;
}

const allImages: ImageItem[] = [
    {
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

const GallerySingle: React.FC = () => {
  const { imageId } = useParams<{ imageId: string }>();
  const navigate = useNavigate();
  const selectedImage = allImages.find((img) => img.id === Number(imageId));

  if (!selectedImage) {
    return <div>Image not found.</div>;
  }

  const similarImages = allImages.filter(
    (img) => img.category === selectedImage.category && img.id !== selectedImage.id
  );

  return (
    <div className="gallery-single-container">
      <div className="gallery-single-hero">
        <h1>{selectedImage.title}</h1>
        <p>{selectedImage.description || "No description available."}</p>
        <button onClick={() => alert("Hiring not implemented yet!")}>
          AVAILABLE FOR HIRE
        </button>
      </div>

      <div className="breadcrumb">
        <span onClick={() => navigate("/")}>Home</span> /{" "}
        <strong>{selectedImage.title}</strong>
      </div>

      <div className="main-image-section">
        <img src={selectedImage.src} alt={selectedImage.title} className="main-image" />
      </div>

      <h2 className="section-title">Similar in {selectedImage.category}</h2>

      <div className="gallery-grid">
        {similarImages.map((img) => (
          <div className="gallery-item" key={img.id}>
            <img
              src={img.src}
              alt={img.title}
              onClick={() => navigate(`/gallery/${img.id}`)}
            />
            <p>{img.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GallerySingle;