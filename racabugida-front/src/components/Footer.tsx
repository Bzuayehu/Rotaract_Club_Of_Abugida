import React from 'react';
import { FaFacebook, FaInstagram, FaTelegram, FaTiktok, FaLinkedin } from 'react-icons/fa';

const socials = [
  { href: 'https://www.facebook.com/RACAbugida?mibextid=b06tZ0', icon: <FaFacebook />, label: 'Facebook' },
  { href: 'https://www.instagram.com/rac_abugida', icon: <FaInstagram />, label: 'Instagram' },
  { href: 'https://t.me/racabugida', icon: <FaTelegram />, label: 'Telegram' },
  { href: 'http://www.tiktok.com/@racabugida1', icon: <FaTiktok />, label: 'Tiktok' },
  { href: 'https://www.linkedin.com/company/racabugida/', icon: <FaLinkedin />, label: 'Linkedin' },
];

const Footer: React.FC = () => (
  <footer className="bg-dark text-light py-8 mt-12">
    <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
      <div className="text-lg font-bold">Rotaract Club of Abugida</div>
      <div className="flex gap-4 text-xl">
        {socials.map(s => (
          <a key={s.href} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label} className="hover:text-primary transition">
            {s.icon}
          </a>
        ))}
      </div>
      <div className="text-sm">&copy; {new Date().getFullYear()} RAC Abugida. All rights reserved.</div>
    </div>
  </footer>
);

export default Footer; 