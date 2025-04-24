import { useState } from 'react';
import './FAQ.css'; // We'll create this CSS file

const FAQ = () => {
  const [expandedItems, setExpandedItems] = useState<Record<string, boolean>>({});
  const [showAll, setShowAll] = useState(false);

  const faqItems = [
    {
      id: 'rotary-definition',
      question: 'What is rotary?',
      answer: 'Rotary International is a global network of 1.4 million neighbors, friends, leaders, and problem-solvers who unite to take action and create lasting change in communities worldwide.'
    },
    {
      id: 'rotary-activities',
      question: 'What does rotary do?',
      answer: 'Rotary focuses on six areas: promoting peace, fighting disease, providing clean water, saving mothers and children, supporting education, and growing local economies through various service projects.'
    },
    {
      id: 'rotaract-definition',
      question: 'What is rotaract?',
      answer: 'Rotaract is Rotary International\'s service club for young adults ages 18-30. The Rotaract Club of Abugida focuses on community service, leadership development, and professional networking.'
    },
    {
      id: 'interact-definition',
      question: 'What is interact?',
      answer: 'Interact is Rotary\'s service club for youth ages 12-18. Clubs are sponsored by local Rotary clubs and provide opportunities for leadership and community service.'
    },
    {
      id: 'clubs-info',
      question: 'What are clubs and how many are there?',
      answer: 'Rotary has over 46,000 clubs worldwide. Rotaract has over 10,000 clubs, and Interact has over 20,000 clubs globally.'
    },
    {
      id: 'ethiopia-clubs',
      question: 'How many rotaract clubs are there in Ethiopia?',
      answer: 'Ethiopia has a growing network of Rotaract clubs across major cities and universities, with new clubs being established regularly.'
    },
    {
      id: 'join-process',
      question: 'How to join?',
      answer: 'You can join the Rotaract Club of Abugida by attending our meetings, contacting our membership chair, or reaching out through our social media platforms.'
    },
    {
      id: 'abugida-club',
      question: 'What is the Rotaract Club of Abugida?',
      answer: 'Established in 2003, our club brings together young professionals and students to serve the community, develop leadership skills, and create lasting friendships.'
    },
    {
      id: 'projects',
      question: 'What are the rotary and rotaract projects?',
      answer: 'Our projects include blood donation drives, educational support programs, environmental initiatives, and professional development workshops.'
    },
    {
      id: 'induction',
      question: 'What is induction?',
      answer: 'Induction is the formal ceremony where new members are officially welcomed into the Rotaract Club of Abugida.'
    },
    {
      id: 'hierarchy',
      question: 'What is the hierarchy in rotaract?',
      answer: 'Rotaract clubs have a Board of Directors including President, Vice President, Secretary, Treasurer, and various committee chairs.'
    },
    {
      id: 'board-definition',
      question: 'What is board of director?',
      answer: 'The Board of Directors leads the club, consisting of elected officers who oversee operations, projects, and member engagement.'
    },
    {
      id: 'benefits',
      question: 'What is the benefit of joining a rotaract club?',
      answer: 'Benefits include leadership development, community impact, professional networking, friendship, and personal growth opportunities.'
    }
  ];

  const visibleItems = showAll ? faqItems : faqItems.slice(0, 6);

  const toggleItem = (id: string) => {
    setExpandedItems(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  return (
    <section className="faq-container">
      <h2 className="faq-title">Frequently Asked Questions</h2>
      <div className="faq-items">
        {visibleItems.map((item) => (
          <div key={item.id} className="faq-item">
            <div 
              className="faq-question" 
              onClick={() => toggleItem(item.id)}
            >
              <h3>{item.question}</h3>
              <span className={`faq-arrow ${expandedItems[item.id] ? 'expanded' : ''}`}>▼</span>
            </div>
            {expandedItems[item.id] && (
              <div className="faq-answer">
                <p>{item.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
      {!showAll && faqItems.length > 6 && (
        <button 
          className="see-more-btn" 
          onClick={() => setShowAll(true)}
        >
          See More Questions
        </button>
      )}
    </section>
  );
};

export default FAQ;