import React from 'react';
import { Link } from 'react-router-dom';

const NotFound: React.FC = () => (
  <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
    <h1 className="text-6xl font-extrabold text-primary mb-4">404</h1>
    <p className="text-xl text-dark mb-6">Page Not Found</p>
    <Link to="/" className="px-6 py-2 bg-primary text-white rounded-full font-semibold hover:bg-secondary transition">
      Go Home
    </Link>
  </div>
);

export default NotFound; 