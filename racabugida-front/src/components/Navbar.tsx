import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/projects', label: 'Projects' },
  { to: '/news', label: 'News' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/contact', label: 'Contact' },
];

const Navbar: React.FC = () => {
  const [open, setOpen] = useState(false);
  return (
    <nav className="bg-white shadow sticky top-0 z-20">
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between h-16">
        <Link to="/" className="text-2xl font-extrabold text-primary">RAC Abugida</Link>
        <div className="hidden md:flex gap-6">
          {navLinks.map(link => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `font-semibold transition ${isActive ? 'text-primary' : 'text-dark hover:text-primary'}`
              }
              end={link.to === '/'}
            >
              {link.label}
            </NavLink>
          ))}
        </div>
        <button className="md:hidden text-primary text-2xl" onClick={() => setOpen(o => !o)}>
          <FaBars />
        </button>
      </div>
      {open && (
        <div className="md:hidden bg-white shadow px-4 pb-4 flex flex-col gap-3">
          {navLinks.map(link => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `font-semibold transition ${isActive ? 'text-primary' : 'text-dark hover:text-primary'}`
              }
              end={link.to === '/'}
              onClick={() => setOpen(false)}
            >
              {link.label}
            </NavLink>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar; 