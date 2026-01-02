import React, { useState, useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import LightRays from "../components/LightRays/LightRays";

const styleIcons = [
  {
    id: 1,
    name: "Aarav Sharma",
    role: "National Science Olympiad – Gold Medalist",
    description:
      "Aarav has consistently ranked at the top in national-level science competitions, representing the school with excellence.",
    image:
      "https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?auto=format&fit=crop&w=800&q=80",
    achievementTitle: "Academic Excellence Award",
    gradient: "from-emerald-500 to-teal-500",
  },
  {
    id: 2,
    name: "Meera Iyer",
    role: "International Classical Dance Champion",
    description:
      "Meera has won multiple international awards in Bharatanatyam, showcasing discipline, grace, and dedication.",
    image:
      "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?auto=format&fit=crop&w=800&q=80",
    achievementTitle: "Cultural Excellence Award",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    id: 3,
    name: "Rohan Verma",
    role: "State-Level Cricket Captain",
    description:
      "Leading with strategy and sportsmanship, Rohan captained the state team to multiple championship victories.",
    image:
      "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=800&q=80",
    achievementTitle: "Sports Leadership Award",
    gradient: "from-orange-500 to-red-500",
  },
];

const Spotlight: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const total = styleIcons.length;

  useEffect(() => {
    const check = () => setIsSmallScreen(window.innerWidth < 640);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const prevSlide = () =>
    setCurrentIndex((p) => (p === 0 ? total - 1 : p - 1));
  const nextSlide = () =>
    setCurrentIndex((p) => (p === total - 1 ? 0 : p + 1));

  const getCardStyle = (index: number) => {
    const pos = index - currentIndex;

    if (pos === 0)
      return {
        opacity: 1,
        scale: 1,
        x: 0,
        rotateY: 0,
        zIndex: 30,
        pointerEvents: "auto",
      };

    if (pos === -1 || (pos === total - 1 && currentIndex === 0))
      return {
        opacity: 0.6,
        scale: 0.85,
        x: -130,
        rotateY: 40,
        zIndex: 10,
        pointerEvents: "none",
      };

    if (pos === 1 || (pos === -(total - 1) && currentIndex === total - 1))
      return {
        opacity: 0.6,
        scale: 0.85,
        x: 130,
        rotateY: -40,
        zIndex: 10,
        pointerEvents: "none",
      };

    return {
      opacity: 0,
      scale: 0.5,
      x: 0,
      rotateY: 0,
      zIndex: 0,
      pointerEvents: "none",
    };
  };

  return (
    <section
      id="spotlight"
      className="relative bg-black overflow-hidden px-4 sm:px-6 md:px-16 py-16 sm:py-20"
    >
      {/* Light Rays */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <LightRays
          raysOrigin="top-center"
          raysColor="#ffffff"
          raysSpeed={isSmallScreen ? 0.6 : 1.6}
          lightSpread={isSmallScreen ? 0.25 : 0.45}
          rayLength={isSmallScreen ? 1.4 : 2.5}
          followMouse={!isSmallScreen}
          mouseInfluence={isSmallScreen ? 0 : 0.08}
          noiseAmount={0.3}
          distortion={0.03}
          className={`w-full h-full mix-blend-screen ${
            isSmallScreen ? "opacity-40" : "opacity-80"
          }`}
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white">
            Student Spotlight
          </h2>
          <p className="text-gray-400 mt-3 text-sm sm:text-base">
            Celebrating Excellence & Achievement
          </p>
        </div>

        {/* Carousel */}
        <div className="relative flex items-center justify-center">
          <button
            onClick={prevSlide}
            className="absolute left-0 sm:left-2 z-40 p-2 rounded-full bg-white/10 hover:bg-white/20 transition"
          >
            <ChevronLeft className="text-white w-5 h-5" />
          </button>

          <motion.div
            ref={containerRef}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.3}
            onDragEnd={(e, info) => {
              if (info.offset.x < -50) nextSlide();
              if (info.offset.x > 50) prevSlide();
            }}
            className="relative w-full max-w-4xl h-[380px] sm:h-[420px] flex items-center justify-center"
          >
            {styleIcons.map((icon, i) => {
              const style = getCardStyle(i);
              return (
                <motion.div
                  key={icon.id}
                  animate={style}
                  transition={{ type: "spring", stiffness: 260, damping: 26 }}
                  className="absolute w-64 sm:w-72 lg:w-80 rounded-2xl bg-neutral-900 border border-neutral-800 shadow-lg overflow-hidden"
                  style={{ perspective: 1200, zIndex: style.zIndex }}
                  onClick={() => setCurrentIndex(i)}
                >
                  {/* Image */}
                  <div className="relative h-52 sm:h-56 overflow-hidden">
                    <img
                      src={icon.image}
                      alt={icon.name}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  </div>

                  {/* Content */}
                  <div className="p-4 space-y-3">
                    <div>
                      <h3 className="text-lg font-semibold text-white">
                        {icon.name}
                      </h3>
                      <p className="text-xs text-gray-400">{icon.role}</p>
                    </div>

                    <p className="text-sm text-gray-300 line-clamp-3">
                      {icon.description}
                    </p>

                    {/* Achievement label */}
                    <div
                      className={`mt-2 px-3 py-2 rounded-lg bg-gradient-to-r ${icon.gradient} text-white text-sm font-semibold text-center`}
                    >
                      {icon.achievementTitle}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          <button
            onClick={nextSlide}
            className="absolute right-0 sm:right-2 z-40 p-2 rounded-full bg-white/10 hover:bg-white/20 transition"
          >
            <ChevronRight className="text-white w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Spotlight;
