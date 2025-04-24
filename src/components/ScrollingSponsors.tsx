import { motion, AnimatePresence } from "framer-motion";
import { useState, useRef, useEffect } from "react";

interface Sponsor {
  id: number;
  logo: string;
  name: string;
}

interface ScrollingSponsorsProps {
  sponsors: Sponsor[];
}

export default function ScrollingSponsors({ sponsors }: ScrollingSponsorsProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [visibleCount, setVisibleCount] = useState(6); // Default fallback
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState<"left" | "right">("right");

  // Calculate how many sponsors are visible based on container width
  useEffect(() => {
    const calculateVisibleCount = () => {
      if (containerRef.current) {
        const containerWidth = containerRef.current.offsetWidth;
        const itemWidth = 150; // Approximate width of each sponsor item
        const count = Math.floor(containerWidth / itemWidth);
        setVisibleCount(Math.max(1, count)); // Ensure at least 1 is visible
      }
    };

    calculateVisibleCount();
    window.addEventListener("resize", calculateVisibleCount);
    return () => window.removeEventListener("resize", calculateVisibleCount);
  }, []);

  const goToIndex = (newIndex: number) => {
    setDirection(newIndex > activeIndex ? "right" : "left");
    setActiveIndex(newIndex);
  };

  const goToNext = () => {
    if (activeIndex < sponsors.length - 1) {
      goToIndex(activeIndex + 1);
    }
  };

  const goToPrev = () => {
    if (activeIndex > 0) {
      goToIndex(activeIndex - 1);
    }
  };

  // Get the currently visible sponsors centered around activeIndex
  const getVisibleSponsors = () => {
    const halfVisible = Math.floor(visibleCount / 2);
    let start = activeIndex - halfVisible;
    let end = activeIndex + halfVisible + (visibleCount % 2);

    // Adjust if we're near the start or end
    if (start < 0) {
      start = 0;
      end = visibleCount;
    } else if (end > sponsors.length) {
      end = sponsors.length;
      start = Math.max(0, end - visibleCount);
    }

    return sponsors.slice(start, end);
  };

  return (
    <div className="flex flex-col items-center w-full">
      {/* Navigation and Sponsor Display */}
      <div className="flex items-center justify-center w-full gap-4">
        <button
          onClick={goToPrev}
          disabled={activeIndex === 0}
          className={`p-2 text-2xl ${
            activeIndex === 0 ? "text-gray-400" : "text-pink-500 hover:text-pink-700"
          }`}
          aria-label="Previous sponsor"
        >
          {/* &lt; */}
        </button>

        <div 
          ref={containerRef}
          className="w-full overflow-hidden"
        >
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={activeIndex}
              custom={direction}
              // initial={{ opacity: 0, x: direction === "right" ? 100 : -100 }}
              // animate={{ opacity: 1, x: 0 }}
              // exit={{ opacity: 0, x: direction === "right" ? -100 : 100 }}
              // transition={{ duration: 0.4 }}
              className="grid grid-flow-col auto-cols-fr gap-8 justify-items-center items-center"
            >
              {getVisibleSponsors().map((sponsor) => {
                const absoluteIndex = sponsors.indexOf(sponsor);
                const isActive = absoluteIndex === activeIndex;
                return (
                  <motion.div
                    key={sponsor.id}
                    whileHover={{ scale: isActive ? 1 : 1.05 }}
                    className={`flex justify-center ${isActive ? "scale-110" : "scale-100"}`}
                  >
                    <img
                      src={sponsor.logo}
                      alt={sponsor.name}
                      className={`h-24 w-auto object-contain max-w-[150px] transition-all ${
                        isActive ? "opacity-100" : "opacity-70"
                      }`}
                      onClick={() => goToIndex(absoluteIndex)}
                    />
                  </motion.div>
                );
              })}
            </motion.div>
          </AnimatePresence>
        </div>

        <button
          onClick={goToNext}
          disabled={activeIndex === sponsors.length - 1}
          className={`p-2 text-2xl ${
            activeIndex === sponsors.length - 1 ? "text-gray-400" : "text-pink-500 hover:text-pink-700"
          }`}
          aria-label="Next sponsor"
        >
          {/* &gt; */}
        </button>
      </div>

      {/* Individual Pagination Dots */}
      <div className="flex justify-center mt-4 gap-2 flex-wrap max-w-full px-4">
        {sponsors.map((sponsor, index) => (
          <button
            key={sponsor.id}
            onClick={() => goToIndex(index)}
            className={`h-3 w-3 rounded-full transition-all ${
              index === activeIndex ? "bg-pink-500" : "bg-pink-200"
            }`}
            aria-label={`Go to ${sponsor.name}`}
          />
        ))}
      </div>
    </div>
  );
}