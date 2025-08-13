import { useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import { useInView } from "react-intersection-observer";
import banner1 from "../assets/Blood Donation/65th_3.jpg";
import banner2 from "../assets/Buhe-Fellowship/buhe_6.jpg";
import banner3 from "../assets/Book Donation/bookdonation.jpg";
import banner4 from "../assets/Buhe-Fellowship/buhe_7.jpg";
import banner5 from "../assets/General/Grand-palace-TRF.jpg";


import rotract_logo1 from "../assets/Abugida-RI24-25-Lockup co-2.png"

// --- Constants for Configuration ---
const BACKGROUND_TRANSITION_INTERVAL = 5000; // ms
const NUM_PARTICLES = 30; // Increased particle count
const PARALLAX_AMOUNT = 200; // Increased parallax effect

const Header = () => {

  const scrollToSection = () => {
    const section = document.getElementById("aboutus"); // Adjust to your target section ID
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  const { t } = useTranslation();
  const backgrounds = [banner1, banner2, banner3, banner4,banner5];
  const [backgroundIndex, setBackgroundIndex] = useState(0);
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // --- Enhanced Parallax Effect ---
  // Apply parallax to background images
  const backgroundY = useTransform(
    scrollYProgress,
    [0, 1],
    [0, PARALLAX_AMOUNT * 0.6]
  ); // Slower parallax for background
  // Apply slightly different parallax to overlay/particles for depth
  const overlayY = useTransform(
    scrollYProgress,
    [0, 1],
    [0, PARALLAX_AMOUNT * 0.3]
  );

  const [ref, inView] = useInView({ threshold: 0.3, triggerOnce: true }); // Trigger animation once when 30% visible

  // --- Animation Variants ---

  // Container for staggering text animations
  const contentContainerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15, // Stagger animation of children
        delayChildren: 0.2, // Wait slightly before starting children
      },
    },
  };

  // Refined Text animation variants (subtle slide-up + fade)
  const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  // Button animation variants (Subtler hover, kept tap)
  // const buttonVariants = {
  //   hover: {
  //     scale: 1.03, // Slightly less pronounced scale
  //     boxShadow: "0 8px 20px -5px rgba(239, 68, 68, 0.35)", // Adjusted shadow
  //     transition: { duration: 0.25, ease: "easeOut" },
  //   },
  //   tap: {
  //     scale: 0.98,
  //   },
  //   hidden: { opacity: 0, y: 20 }, // Add hidden state for staggering
  //   visible: {
  //     opacity: 1,
  //     y: 0,
  //     transition: { duration: 0.7, ease: "easeOut" },
  //   },
  // };

  // Logo Animation Variants (More dynamic entry)
  const logoVariants = {
    hidden: { opacity: 0, scale: 0.5, rotate: -15 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 12,
        delay: 0.5, // Delay logo slightly after text starts appearing
      },
    },
  };

  // --- Background Transition Effect ---
  useEffect(() => {
    const intervalId = setInterval(() => {
      setBackgroundIndex((prevIndex) => (prevIndex + 1) % backgrounds.length);
    }, BACKGROUND_TRANSITION_INTERVAL);

    return () => clearInterval(intervalId);
  }, [backgrounds.length]); // Dependency array is correct

  return (
    <header
      ref={containerRef}
      className="relative w-full h-screen flex items-center justify-center overflow-hidden" // Base background color
    >
      {/* --- Animated Background Images with Parallax --- */}
      <motion.div
        className="absolute inset-0 w-full h-full z-0"
        style={{ y: backgroundY }} // Apply parallax
      >
        <AnimatePresence mode="popLayout">
  <motion.div
    key={backgroundIndex}
    className="absolute inset-0 w-full h-full bg-center sm:bg-contain bg-cover object-cover" // Using bg-cover for better fit
    style={{
      backgroundImage: `url(${backgrounds[backgroundIndex]})`,
      // Add media queries within the style prop to make it responsive
      // Removed invalid @media query. Use Tailwind CSS classes or external CSS for responsiveness.
    }}
    initial={{ opacity: 0, scale: 1.1 }}  // Slight zoom for more dramatic entrance
    animate={{ opacity: 1, scale: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 1.5, ease: [0.4, 0, 0.2, 1] }} // More natural ease function
  />
</AnimatePresence>


        {/* --- Enhanced Gradient Overlay --- */}
        {/* Added slight radial gradient for a vignette effect */}
        <div className="absolute inset-0 bg-black/65 "></div>
      </motion.div>

      {/* --- Enhanced Floating Particles / Stars Effect --- */}
      {/* Apply slight parallax to particles */}
      <motion.div
        className="absolute inset-0 overflow-hidden z-[1]"
        style={{ y: overlayY }}
      >
        {[...Array(NUM_PARTICLES)].map((_, i) => {
          const size = Math.random() * 6 + 2; // Star sizes (2px to 8px)
          const duration = Math.random() * 15 + 10; // Duration (10s to 25s)
          const delay = Math.random() * 5; // Stagger start times

          // Add more variation: some pulse, some just drift
          const animatesOpacity = Math.random() > 0.3; // 70% will pulse opacity
          const initialOpacity = Math.random() * 0.3 + 0.1; // Base opacity (0.1 to 0.4)
          const finalOpacity = initialOpacity + Math.random() * 0.4; // Pulse up to (0.5 to 0.8)

          return (
            <motion.div
              key={`particle-${i}`}
              className="absolute rounded-full"
              style={{
                width: `${size}px`,
                height: `${size}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                // Vary colors - more white/yellowish for stars
                backgroundColor: `rgba(255, 237, 188, ${initialOpacity})`, // Amber/Goldish tint
                boxShadow: `0 0 ${size * 1.5}px rgba(255, 237, 188, 0.5)`, // Soft glow
              }}
              animate={{
                y: [0, (Math.random() - 0.5) * 150], // Increased vertical drift
                x: [0, (Math.random() - 0.5) * 100], // Increased horizontal drift
                scale: [1, Math.random() * 0.5 + 0.8, 1], // Subtle scale pulse
                opacity: animatesOpacity
                  ? [initialOpacity, finalOpacity, initialOpacity]
                  : initialOpacity, // Opacity pulse or static
              }}
              transition={{
                duration: duration,
                repeat: Infinity,
                repeatType: "mirror", // Use mirror for smoother looping
                ease: "easeInOut",
                delay: delay,
              }}
            />
          );
        })}
      </motion.div>

      {/* --- Main Content Area --- */}
      <motion.div
        ref={ref}
        className="relative z-10 text-white px-6 max-w-7xl mx-auto w-full"
        variants={contentContainerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        <div className="flex flex-col-reverse md:flex-row items-end md:items-center justify-between gap-8 md:gap-4 min-h-[70vh]">
          {/* Text Content Column */}
          <motion.div
            className="flex-1 md:max-w-2xl space-y-6"
            variants={contentContainerVariants}
          >
            {/* Club Name - Enhanced Gradient */}
            <motion.h1
              className="text-5xl sm:text-6xl md:text-7xl font-black leading-[1.1] bg-clip-text bg-gradient-to-r from-amber-300 via-amber-100 to-yellow-200 text-center sm:text-left"
              variants={textVariants}
              style={{
                textShadow: '0 4px 12px rgba(0,0,0,0.3)',
                lineHeight: '1.2'
              }}
            >
              {t("club_name")}
            </motion.h1>

            {/* Tagline - Bold and Spaced */}
            <motion.p
              className="text-xl md:text-2xl font-semibold tracking-wide text-amber-100/90 uppercase letter-spacing-[0.1em] text-center sm:text-left"
              variants={textVariants}
              style={{
                fontWeight: 600,
                letterSpacing: '0.08em'
              }}
            >
              {t("tagline")}
            </motion.p>

            {/* Mission - Improved Readability */}
            <motion.p
              className="text-lg md:text-xl text-gray-200/90 leading-relaxed max-w-3xl text-center sm:text-left"
              variants={textVariants}
              style={{
                fontWeight: 300,
                lineHeight: '1.7'
              }}
            >
              {t("mission")}
            </motion.p>
          </motion.div>

          {/* Logo Column - Enhanced Spacing */}
          <motion.div
            className="relative flex justify-center md:justify-end w-full md:w-1/2"
            variants={logoVariants}
            style={{
              marginLeft: 'auto',
              transformOrigin: 'center'
            }}
          >
            <motion.div
              className="relative group"
              animate={{ 
                y: [-3, 3, -3],
                rotate: [0, 2, -2, 0] 
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <img
                src={rotract_logo1}
                alt="Rotract Logo"
                className="relative z-10 drop-shadow-2xl w-[200px] h-[200px] sm:w-[280px] sm:h-[280px] md:w-[320px] md:h-[320px] transition-transform duration-500 group-hover:scale-105"
              />
              {/* Enhanced Glow Effect */}
              <div className="absolute inset-0 bg-gradient-radial from-amber-400/50 via-transparent to-transparent rounded-full blur-3xl opacity-70 animate-pulse -z-10 scale-125" />
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* ... (keep curved divider and scroll indicator the same) */}

      <motion.div
        className="absolute bottom-5 left-1/2 transform -translate-x-1/2 z-20" // Adjusted bottom position
        onClick={scrollToSection}
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 0.8, 0.8, 0], y: [0, 10, 10, 10] }} // Fade in, stay, fade out slightly higher
        transition={{
          duration: 2.5,
          times: [0, 0.2, 0.8, 1], // Control timing of fade/move
          repeat: Infinity,
          ease: "easeInOut",
          delay: 3, // Delay appearance slightly
        }}
      >
        <div className="w-6 h-10 border-2 border-amber-200/80 rounded-full flex justify-center items-start pt-1">
          {" "}
          {/* Adjusted border, padding */}
          <motion.div
            className="w-1.5 h-3 bg-red-700 rounded-full" // Slightly larger inner dot
            animate={{ y: [0, 12, 12], opacity: [1, 1, 0] }} // Move down and fade
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeIn", // Accelerate downwards
            }}
          />
        </div>
      </motion.div>
    </header>
  );
};

export default Header;