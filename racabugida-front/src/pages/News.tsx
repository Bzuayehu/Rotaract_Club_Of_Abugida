import React from 'react';

const newsList = [
  { title: 'Rotaract Abugida Wins District Award', date: '2024-06-01', summary: 'Our club was recognized for outstanding service.' },
  { title: 'New Member Induction', date: '2024-05-15', summary: 'Welcoming new members to the family.' },
  { title: 'Tree Planting Day', date: '2024-04-20', summary: 'Planted 500+ trees in the community.' },
];

const News: React.FC = () => (
  <div className="max-w-4xl mx-auto py-12 px-4">
    <h2 className="text-3xl font-bold text-primary mb-6">Latest News</h2>
    <div className="space-y-6">
      {newsList.map((news, i) => (
        <div key={i} className="bg-white rounded-xl shadow p-6">
          <div className="text-sm text-secondary font-semibold mb-1">{news.date}</div>
          <h3 className="text-xl font-bold text-primary mb-2">{news.title}</h3>
          <p className="text-dark">{news.summary}</p>
        </div>
      ))}
    </div>
  </div>
);

export default News; 