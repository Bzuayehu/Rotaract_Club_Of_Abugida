import React from 'react';
import { motion } from 'framer-motion';

const stats = [
  { label: 'Members', value: 120 },
  { label: 'Projects', value: 35 },
  { label: 'Events', value: 50 },
  { label: 'Awards', value: 8 },
];

const Home: React.FC = () => {
  return (
    <div className="bg-gradient-to-b from-primary/10 to-light py-12">
      {/* Color Test Section */}
      <div className="max-w-4xl mx-auto px-4 mb-8">
        <h2 className="text-2xl font-bold mb-4">Color Test</h2>
        <div className="flex gap-4 flex-wrap">
          <div className="w-20 h-20 bg-primary rounded"></div>
          <div className="w-20 h-20 bg-secondary rounded"></div>
          <div className="w-20 h-20 bg-accent rounded"></div>
          <div className="w-20 h-20 bg-dark rounded"></div>
          <div className="w-20 h-20 bg-light rounded border"></div>
        </div>
      </div>
      
      <section className="max-w-5xl mx-auto px-4 text-center">
        <motion.h1
          className="text-4xl md:text-6xl font-extrabold text-primary mb-4"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          Rotaract Club of Abugida
        </motion.h1>
        <motion.p
          className="text-lg md:text-2xl text-dark mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7 }}
        >
          Empowering youth, serving the community, and building a better future together.
        </motion.p>
        <motion.a
          href="/about"
          className="inline-block px-8 py-3 bg-primary text-white rounded-full font-semibold shadow-lg hover:bg-secondary transition"
          whileHover={{ scale: 1.05 }}
        >
          Learn More
        </motion.a>
      </section>
      <section className="max-w-4xl mx-auto mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            className="bg-white rounded-xl shadow p-6 text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 + i * 0.2, duration: 0.6 }}
          >
            <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
              {stat.value}
            </div>
            <div className="text-dark text-lg font-medium">{stat.label}</div>
          </motion.div>
        ))}
      </section>
    </div>
  );
};

export default Home; 