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
import banner6 from "../assets/General/photo_46_2025-02-26_10-26-07.jpg";


import rotract_logo from "../assets/RotOnlyLogo.png"; // Corrected typo: rotract_logo

// --- Constants for Configuration ---
const BACKGROUND_TRANSITION_INTERVAL = 5000; // ms
const NUM_PARTICLES = 30; // Increased particle count
const PARALLAX_AMOUNT = 200; // Increased parallax effect

const Header = () => {
  const { t } = useTranslation();
  const backgrounds = [banner1, banner2, banner3, banner4,banner5,banner6];
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
  const buttonVariants = {
    hover: {
      scale: 1.03, // Slightly less pronounced scale
      boxShadow: "0 8px 20px -5px rgba(239, 68, 68, 0.35)", // Adjusted shadow
      transition: { duration: 0.25, ease: "easeOut" },
    },
    tap: {
      scale: 0.98,
    },
    hidden: { opacity: 0, y: 20 }, // Add hidden state for staggering
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

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
      className="relative w-full h-screen flex items-center justify-center overflow-hidden    " // Base background color
    >
      {/* --- Animated Background Images with Parallax --- */}
      <motion.div
        className="absolute inset-0 w-full h-full z-0"
        style={{ y: backgroundY }} // Apply parallax
      >
        <AnimatePresence mode="popLayout">
          <motion.div
            key={backgroundIndex}
            className="absolute inset-0 w-full h-full  bg-center"
            style={{ backgroundImage: `url(${backgrounds[backgroundIndex]})` }}
            initial={{ opacity: 0, scale: 1.05 }} // Start slightly zoomed
            animate={{ opacity: 1, scale: 1 }} // Zoom in effect
            exit={{ opacity: 0 }}
            transition={{ duration: 1.8, ease: [0.6, -0.05, 0.01, 0.99] }} // Slower, smoother transition
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
        className="relative z-10 text-white text-center px-6 max-w-6xl mx-auto"
        variants={contentContainerVariants} // Use container variants for staggering
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        <div className="flex  flex-col-reverse  md:flex-row items-center justify-center gap-10 md:gap-16">
          {" "}
          {/* Increased gap */}
          {/* Text Content Column */}
          <motion.div
            className="flex-1 text-left md:max-w-2xl " // Align text left on larger screens
            // No variants here, children will inherit stagger from parent
          >
            {/* Club Name - More Prominent */}
            <motion.p
              className="text-4xl sm:text-4xl md:text-7xl text-center sm:text-left font-extrabold tracking-tight bg-clip-text  bg-gradient-to-r from-amber-200 via-amber-100 to-amber-300 mb-2" // Adjusted size, gradient, tracking
              variants={textVariants} // Use individual text variants
            >
              {t("club_name")}
            </motion.p>

            {/* Tagline - Clearer */}
            <motion.h1
              className="text-5xl sm:text-2xl font-low text-amber-100/90 mt-3 text-center sm:text-left" // Center on small screens, left-align on larger ones
              variants={textVariants} // Use individual text variants
            >
              {t("tagline")}
            </motion.h1>

            {/* Mission - Readable */}
            <motion.p
              className="text-base sm:text-lg mt-3  text-gray-200/80 text-center sm:text-left leading-relaxed" // Adjusted size, color, leading
              variants={textVariants} // Use individual text variants
            >
              {t("mission")}
            </motion.p>

            {/* Join Button */}
            <motion.div
              className="mt-10 " // Increased margin
              variants={buttonVariants} // Use button variants (includes hidden/visible for stagger)
            >
              {/* <motion.button
                className="px-8 py-3 text-lg font-semibold text-white bg-gradient-to-r from-[#D91A5F] to-red-400 rounded-full shadow-lg hover:shadow-yellow-300/40 transition-shadow duration-300 sm:px-7 sm:py-2.5 sm:px-2.5 sm:text-base" // Adjusted colors, padding, hover effect
                variants={buttonVariants} // Apply hover/tap states
                whileHover="hover"
                whileTap="tap"
                style={{padding:"8px 8px",marginTop:"1rem"}}
              >
                {t("join_movement")}
                <motion.span
                  className="ml-2 inline-block"
                  animate={{ x: [0, 5, 0] }} // Subtle arrow bounce on load/hover potentially
                  transition={{
                    repeat: Infinity,
                    duration: 1.5,
                    ease: "easeInOut",
                  }}
                >
                  →
                </motion.span>
              </motion.button> */}
            </motion.div>
          </motion.div>
          {/* Logo Column */}
          <motion.div
            className="flex-shrink-0 mt-8 md:mt-0 " // Add top margin on small screens
            variants={logoVariants} // Use logo specific variants
            // No initial/animate needed here if parent handles it via variants
          >
            {/* Logo with enhanced glow and subtle float */}
            <motion.div
              className="relative group" // Group for hover effects if needed later
              animate={{ y: [-3, 3, -3] }} // Gentle floating effect
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1,
              }} // Start float after entry
            >
              <img
                src={rotract_logo}
                alt="Rotract Logo"
                height={450}
                width={450}
                // Responsive Logo Size
                className="relative  z-10 drop-shadow-xl w-full h-full sm:w-[150px] sm:h-[150px] md:w-[220px] md:h-[220px]"
              />
              {/* Refined Glow effect - softer, more dynamic */}
              <div className="absolute inset-0 bg-gradient-radial from-pink-500/60 via-red-500/40 to-transparent rounded-full blur-2xl opacity-50 animate-pulse group-hover:opacity-70 transition-opacity duration-300 -z-10 scale-125"></div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* --- Animated Curved Divider - Slightly Enhanced --- */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden z-[5]">
        {" "}
        {/* Ensure curve is above most elements but below scroll indicator */}
        {/* Using a simpler, potentially smoother curve */}
        <svg
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
          className="w-full h-24 md:h-32 block"
        >
          {" "}
          {/* Increased height */}
          <defs>
            {/* Define gradient for the curve fill */}
            <linearGradient
              id="curveGradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="0%"
            >
              {/* Match page theme - e.g., fading from near-white to transparent or a subtle color */}
              <stop
                offset="0%"
                style={{
                  stopColor: "rgba(255, 253, 248, 0.1)",
                  stopOpacity: 1,
                }}
              />{" "}
              {/* Subtle start color */}
              <stop
                offset="50%"
                style={{
                  stopColor: "rgba(255, 253, 248, 0.5)",
                  stopOpacity: 1,
                }}
              />{" "}
              {/* Main color (off-white/amber) */}
              <stop
                offset="100%"
                style={{
                  stopColor: "rgba(255, 253, 248, 0.1)",
                  stopOpacity: 1,
                }}
              />
            </linearGradient>
          </defs>
          {/* Single smooth wave path */}
          <path
            d="M0,64 C240,112,480,112,720,64 S1200,16, 1440,64 L1440,120 L0,120 Z"
            // fill="url(#curveGradient)" // Optional: Use gradient fill
            fill="#eeddb9" // Or use solid color
            // fill="#181819"

            className="text-white" // Or match your page background color below the header
          ></path>
        </svg>
      </div>

      {/* --- Scroll Down Indicator --- */}
      <motion.div
        className="absolute bottom-5 left-1/2 transform -translate-x-1/2 z-20" // Adjusted bottom position
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
