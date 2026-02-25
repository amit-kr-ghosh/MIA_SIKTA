import { useState } from "react";
import { motion } from "framer-motion";

const VideoSection: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  return (
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      className="relative flex justify-center"
    >
      {/* Glow */}
      <div className="absolute -inset-3 bg-gradient-to-r from-orange-400 to-yellow-400 blur-2xl opacity-30 rounded-3xl" />

      <div className="relative w-full rounded-3xl overflow-hidden border border-white/60 shadow-2xl bg-white">
        
        {/* Preview Image */}
        <img
          src="/images/gallery/school_building.png"
          alt="Preview"
          className={`w-full h-[220px] sm:h-[340px] lg:h-[420px] object-cover 
          transition-opacity duration-700
          ${isLoaded ? "opacity-0 absolute inset-0" : "opacity-100"}`}
        />

        {/* Video */}
        <video
          className={`w-full h-[220px] sm:h-[340px] lg:h-[420px] object-cover
          transition-opacity duration-700
          ${isLoaded ? "opacity-100" : "opacity-0 absolute inset-0"}`}
          autoPlay
          muted
          playsInline
          preload="auto"
          onLoadedData={() => setIsLoaded(true)}
        >
          <source src="/videos/intro.mp4" type="video/mp4" />
        </video>

      </div>

    </motion.div>
  );
};

export default VideoSection;