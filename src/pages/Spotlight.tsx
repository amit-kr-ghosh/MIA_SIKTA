import React, { useState, useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import LightRays from "../components/LightRays/LightRays";

const styleIcons = [
  {
    id: 1,
    name: "Ankit",
    role: "District Topper – Hindustan Olympiad",
    description:
      "Ankit secured the top rank in the Hindustan Olympiad at the district level, demonstrating exceptional academic excellence and dedication.",
    image: "/images/home/achieve1.png",
    achievementTitle: "Hindustan Olympiad – District Topper",
    gradient: "from-emerald-500 to-teal-500",
  },
  {
    id: 2,
    name: "Priya",
    role: "Class X – 88.4%",
    description:
      "Priya achieved an impressive 88.4% in Class X board examinations, reflecting consistent hard work and strong academic performance.",
    image: "/images/home/achieve2.png",
    achievementTitle: "Board Examination Excellence",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    id: 3,
    name: "Yashraj",
    role: "Class X – 92%",
    description:
      "Yashraj scored an outstanding 92% in Class X board examinations, showcasing dedication, discipline, and academic brilliance.",
    image: "/images/home/achieve3.png",
    achievementTitle: "Academic Excellence Award",
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

  const prevSlide = () => setCurrentIndex((p) => (p === 0 ? total - 1 : p - 1));
  const nextSlide = () => setCurrentIndex((p) => (p === total - 1 ? 0 : p + 1));

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
      className={`relative overflow-hidden px-4 sm:px-6 md:px-16 py-16 sm:py-20
        ${
          isSmallScreen
            ? "bg-[url('/images/home/bg-black.jpeg')] bg-cover bg-center"
            : "bg-neutral-950"
        }
      `}
    >
      {!isSmallScreen && (
        <div className="absolute inset-0 z-0 pointer-events-none">
          <LightRays
            raysOrigin="top-center"
            raysColor="#ffffff"
            raysSpeed={1.4}
            lightSpread={0.65}
            rayLength={4}
            followMouse={false}
            mouseInfluence={0}
            noiseAmount={0.35}
            distortion={0.04}
            className="w-full h-full opacity-80 mix-blend-screen"
          />
        </div>
      )}

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Heading */}
        <div className="relative text-center mb-14">
          <div className="absolute inset-0 -z-10 flex justify-center">
            <div className="w-[90%] sm:w-[70%] h-full bg-black/40 blur-2xl rounded-full" />
          </div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight drop-shadow-[0_4px_20px_rgba(0,0,0,0.8)]">
            Student Spotlight
          </h2>

          <p className="mt-4 text-sm sm:text-base text-gray-300 tracking-wide drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)]">
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
                  <div className="relative h-64 sm:h-72 overflow-hidden bg-black">
                    <img
                      src={icon.image}
                      alt={icon.name}
                      className="w-full h-full object-contain transition-transform duration-500 hover:scale-105"
                    />
                  </div>

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
