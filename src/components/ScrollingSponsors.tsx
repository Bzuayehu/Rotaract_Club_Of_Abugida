import { motion } from "framer-motion";
// import { useTranslation } from 'react-i18next';

interface Sponsor {
  id: number;
  logo: string;
  name: string;
}

interface ScrollingSponsorsProps {
  sponsors: Sponsor[];
}
export default function ScrollingSponsors({ sponsors }: ScrollingSponsorsProps) {
    return (
      <div style={{ overflow: "hidden", whiteSpace: "nowrap", width: "100%", display: "flex" }}>
      <motion.div
        style={{ display: "flex", minWidth: "250%" }} // Ensures seamless scrolling
        animate={{ x: "-100%" }}
        transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
      >
        {/* Duplicate sponsors to create a continuous loop */}
        {[...sponsors, ...sponsors].map((sponsor) => (
          <img
            key={sponsor.id}
            src={sponsor.logo}
            alt={sponsor.name}
            className="sponsor-item"
            style={{ maxWidth: "100%", height: "100px", marginRight: "20px"}} // Adjust size as needed
          />
        ))}
        {[...sponsors, ...sponsors].map((sponsor) => (
          <img
            key={sponsor.id}
            src={sponsor.logo}
            alt={sponsor.name}
            className="sponsor-item"
            style={{ maxWidth: "100%", height: "100px"}} // Adjust size as needed
          />
        ))}
        
      </motion.div>
    </div>
    );
  }