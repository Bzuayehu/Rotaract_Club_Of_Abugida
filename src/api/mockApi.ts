import img from '../assets/Trip/photo_2025-04-05_20-12-53.jpg';
import img2 from '../assets/Trip/photo_2025-04-15_21-47-33.jpg';

const newsItems = [
    {
      id: '1',
      title: 'Rotaract Wins Community Award',
      date: '2025-03-10',
      content: '<p>Recognized for outstanding service during the flood relief campaign...</p>',
      image: img,
      category: 'achievements',
      type: 'news',
      gallery: [img, img2]

    },
    {
        id: '2',
        title: 'Rotaract Wins Community Award',
        date: '2025-03-10',
        content: '<p>Recognized for outstanding service during the flood relief campaign...</p>',
        image: img,
        category: 'achievements',
        type: 'news',
        gallery: [img, img2]

      },
      {
        id: '3',
        title: 'Rotaract Wins Community Award',
        date: '2025-03-10',
        content: '<p>Recognized for outstanding service during the flood relief campaign...</p>',
        image: img,
        category: 'achievements',
        type: 'news',
        gallery: [img, img2]
      },
    // ... more news items
  ];
  
  const eventItems = [
    {
      id: '1',
      title: 'Annual Charity Gala',
      date: '2025-06-23',
      location: 'Abugida Convention Center',
      content: '<p>Join us for our flagship fundraising event...</p>',
      image: img2,
      category: 'fundraiser',
      type: 'event',
      gallery: [img, img2]

    },
    {
        id: '2',
        title: 'Annual Charity Gala',
        date: '2025-06-23',
        location: 'Abugida Convention Center',
        content: '<p>Join us for our flagship fundraising event...</p>',
        image: img2,
        category: 'fundraiser',
        type: 'event',
        gallery: [img, img2]
      },
      {
        id: '3',
        title: 'Annual Charity Gala',
        date: '2025-06-23',
        location: 'Abugida Convention Center',
        content: '<p>Join us for our flagship fundraising event...</p>',
        image: img2,
        category: 'fundraiser',
        type: 'event',
        gallery: [img, img2]

      },
    // ... more event items
  ];
  
  export const fetchItem = async (type: 'news' | 'event', id: string) => {
    const items = type === 'news' ? newsItems : eventItems;
    const item = items.find(item => item.id === id);
    
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (item) {
          resolve(item);
        } else {
          reject(new Error('Item not found'));
        }
      }, 500); // Simulate network delay
    });
  };