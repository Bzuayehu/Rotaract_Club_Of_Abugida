import img from '../assets/Trip/photo_2025-04-05_20-12-53.jpg';
import img2 from '../assets/Trip/photo_2025-04-15_21-47-33.jpg';

const images = {
  images: [
    {
      id: 1,
      src: img,
      largeSrc: img2,
      alt: "Blood donation event",
      title: "Blood Drive",
      description: "Helping save lives with voluntary blood donations.",
      category: "blood",
    },
    {
      id: 2,
      src: img,
      largeSrc: img2,
      alt: "Pad donation drive",
      title: "Sanitary Pad Outreach",
      description: "Monthly sanitary distribution for underprivileged women.",
      category: "sanitary",
    },
    {
      id: 3,
      src: img,
      largeSrc: img2,
      alt: "Book drive",
      title: "Book Collection Campaign",
      description: "Donating books to improve access to education.",
      category: "books",
    },
    {
      id: 4,
      src: img,
      largeSrc: img2,
      alt: "Coffee training",
      title: "Coffee Youth Training",
      description: "Skill-building for local coffee entrepreneurs.",
      category: "coffee",
    },
    {
      id: 1,
      src: img,
      largeSrc: img2,
      alt: "Blood donation event",
      title: "Blood Drive",
      description: "Helping save lives with voluntary blood donations.",
      category: "blood",
    },
    {
      id: 2,
      src: img,
      largeSrc: img2,
      alt: "Pad donation drive",
      title: "Sanitary Pad Outreach",
      description: "Monthly sanitary distribution for underprivileged women.",
      category: "sanitary",
    },
    {
      id: 3,
      src: img,
      largeSrc: img2,
      alt: "Book drive",
      title: "Book Collection Campaign",
      description: "Donating books to improve access to education.",
      category: "books",
    },
    {
      id: 4,
      src: img,
      largeSrc: img2,
      alt: "Coffee training",
      title: "Coffee Youth Training",
      description: "Skill-building for local coffee entrepreneurs.",
      category: "coffee",
    },
    {
      id: 1,
      src: img,
      largeSrc: img2,
      alt: "Blood donation event",
      title: "Blood Drive",
      description: "Helping save lives with voluntary blood donations.",
      category: "blood",
    },
    {
      id: 2,
      src: img,
      largeSrc: img2,
      alt: "Pad donation drive",
      title: "Sanitary Pad Outreach",
      description: "Monthly sanitary distribution for underprivileged women.",
      category: "sanitary",
    },
    {
      id: 3,
      src: img,
      largeSrc: img2,
      alt: "Book drive",
      title: "Book Collection Campaign",
      description: "Donating books to improve access to education.",
      category: "books",
    },
    {
      id: 4,
      src: img,
      largeSrc: img2,
      alt: "Coffee training",
      title: "Coffee Youth Training",
      description: "Skill-building for local coffee entrepreneurs.",
      category: "coffee",
    },
  ]
};

export const fetchGalleryImages = () => {
  return new Promise<typeof images>((resolve) => {
    setTimeout(() => resolve(images), 500);
  });
};


// export const fetchGalleryImages = async (): Promise<{ images: typeof galleryImages }> => {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve({ images: galleryImages });
//     }, 500); // Simulate 500ms network delay
//   });
// };