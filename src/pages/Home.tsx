import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Contact from "./Contact.tsx";
import Spotlight from "./Spotlight.tsx";
import {
  BookOpen,
  Award,
  HeartHandshake,
  Leaf,
  Star,
  Sparkles,
  Lightbulb,
  Trophy,
} from "lucide-react";

const Home = () => {
  const features = [
    {
      icon: BookOpen,
      color: "from-pink-400 to-pink-600",
      title: "Academics",
      description: "CBSE curriculum + modern digital learning tools.",
    },
    {
      icon: HeartHandshake,
      color: "from-yellow-400 to-yellow-600",
      title: "Values & Culture",
      description:
        "Spiritual mindset, leadership, global vision & respect for all religions.",
    },
    {
      icon: Award,
      color: "from-purple-400 to-purple-600",
      title: "Excellence",
      description:
        "Leadership development, innovation & lifelong success preparation.",
    },
    {
      icon: Leaf,
      color: "from-green-400 to-green-600",
      title: "Natural Campus",
      description:
        "Pollution-free, lush green, safe environment for growth & learning.",
    },
  ];

  return (
    <div className="overflow-hidden">
      {/* HERO SECTION */}
      <section
        className="
    relative
    min-h-[calc(100svh-100px)]
    sm:min-h-[calc(100vh-80px)]
    flex items-center
    px-4 sm:px-6
    py-4
    bg-gradient-to-b from-[#FFF7E8] via-white to-[#E4FFF6]
    overflow-hidden
    rounded-b-[50px] sm:rounded-b-[100px]
  "
      >
        {/* animated blobs */}
        <motion.div
          animate={{ x: [0, 30, 0], y: [0, -20, 0], scale: [1, 1.05, 1] }}
          transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
          className="absolute top-[12%] right-[8%] w-32 h-32 bg-orange-300/40 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ x: [0, -20, 0], y: [0, 25, 0], scale: [1, 1.1, 1] }}
          transition={{ repeat: Infinity, duration: 7, ease: "easeInOut" }}
          className="absolute bottom-[10%] left-[6%] w-28 h-28 bg-teal-300/40 rounded-full blur-3xl"
        />

        <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-6 items-center">
          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left space-y-3"
          >
            <h1 className="font-black leading-tight text-[clamp(1.7rem,4.5vw,3.75rem)] text-gray-900">
              Let’s Build a Brighter Future at
              <br />
              <span className="bg-gradient-to-r from-orange-500 to-yellow-500 text-transparent bg-clip-text">
                Mother’s International Academy
              </span>
            </h1>

            <p className="text-gray-700 max-w-lg mx-auto lg:mx-0 text-[clamp(0.95rem,2.4vw,1.2rem)]">
              A home for curiosity and courage. Where every child is seen.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
              
<motion.div
  animate={{ scale: [1, 1.06, 1] }}
  transition={{
    duration: 1.8,
    repeat: Infinity,
    ease: "easeInOut",
  }}
  className="relative inline-block"
>
  {/* Rounded glow layer */}
  <span
    className="
      absolute inset-0
      rounded-2xl
      bg-gradient-to-r from-orange-400 to-yellow-400
      blur-xl
      opacity-50
      -z-10
    "
  />

  <motion.div
    whileHover={{ scale: 1.12, y: -2 }}
    whileTap={{ scale: 0.96 }}
  >
    <Link
  to="/admissions"
  className="
    relative
    px-7 py-3
    bg-gradient-to-r from-orange-500 to-yellow-500
    text-white
    rounded-2xl
    font-semibold
    shadow-lg
    text-[clamp(0.95rem,2.5vw,1.05rem)]
    flex items-center justify-center
    text-center
  "
>
  🚀 Apply Now
</Link>

  </motion.div>
</motion.div>
              <Link
                to="/about"
                className="border-2 border-gray-300 px-7 py-3 rounded-2xl font-semibold text-[clamp(0.95rem,2.5vw,1.05rem)]"
              >
                Learn More ✨
              </Link>
            </div>
          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center"
          >
            <img
              src="/images/hero4.gif"
              alt="Happy Students"
              className="
          w-[100%]  sm:w-[100%]
          max-h-[240px] sm:max-h-[520px]
          object-contain
          drop-shadow-2xl
        "
            />
          </motion.div>
        </div>
      </section>

      {/* ⭐ WHY PARENTS CHOOSE US */}
      <section className="py-12 sm:py-20 px-4">
        <h2 className="text-center text-3xl sm:text-4xl font-bold text-gray-900 mb-8 sm:mb-10">
          Why Parents Choose Us
        </h2>

        {/* MOBILE TUNED ONLY */}
        <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8">
          {features.map((f, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="bg-gradient-to-br from-gray-100 to-gray-200 p-4 sm:p-8 rounded-xl sm:rounded-2xl shadow-inner hover:shadow-xl transition text-center border"
            >
              <div
                className={`w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br ${f.color} rounded-lg sm:rounded-xl flex items-center justify-center mx-auto mb-3 sm:mb-4 shadow-md`}
              >
                <f.icon className="text-white" size={22} />
              </div>
              <h3 className="text-sm sm:text-xl font-semibold text-gray-900">
                {f.title}
              </h3>
              <p className="text-xs sm:text-base text-gray-700 mt-1 sm:mt-2 leading-snug sm:leading-relaxed">
                {f.description}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 🌿 CAMPUS LIFE */}
      <section className="py-14 sm:py-20 bg-white px-4">
        <h2 className="text-center text-3xl sm:text-4xl font-extrabold text-gray-900 mb-3 sm:mb-4">
          🌿 Campus Life @ MIA
        </h2>
        <p className="text-center text-sm sm:text-base text-gray-600 mb-8 sm:mb-10 max-w-2xl mx-auto">
          A vibrant campus that nurtures learning, creativity and character.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8 max-w-7xl mx-auto">
          {[
            "https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=800",
            "https://images.pexels.com/photos/5212653/pexels-photo-5212653.jpeg?auto=compress&cs=tinysrgb&w=800",
            "https://images.pexels.com/photos/8087871/pexels-photo-8087871.jpeg?auto=compress&cs=tinysrgb&w=800",
          ].map((img, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="rounded-2xl sm:rounded-3xl overflow-hidden group relative shadow-lg sm:shadow-xl border"
            >
              <img src={img} className="w-full h-40 sm:h-72 object-cover" />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 flex justify-center items-center text-sm sm:text-xl font-bold text-white transition">
                Explore Campus
              </div>
            </motion.div>
          ))}

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="rounded-2xl sm:rounded-3xl overflow-hidden group relative shadow-lg sm:shadow-xl border block lg:hidden"
          >
            <img
              src="https://images.pexels.com/photos/8471799/pexels-photo-8471799.jpeg?auto=compress&cs=tinysrgb&w=800"
              className="w-full h-40 sm:h-72 object-cover"
            />
            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 flex justify-center items-center text-sm sm:text-xl font-bold text-white transition">
              Explore Campus
            </div>
          </motion.div>
        </div>
      </section>

      <Spotlight/>
      {/* 🎓 EDUCATION BEYOND ACADEMICS */}
      <section className="py-20 bg-white text-center px-6">
        <h2 className="text-4xl font-extrabold text-gray-900 mb-6">
          🎓 Education Beyond Academics
        </h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          We don’t just teach for exams — we prepare students for LIFE.
        </p>

        <div className="mt-14 grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {[
            {
              icon: Lightbulb,
              label: "Critical Thinking",
              gradient: "from-yellow-300 to-orange-400",
            },
            {
              icon: Trophy,
              label: "Leadership",
              gradient: "from-blue-400 to-purple-500",
            },
            {
              icon: Star,
              label: "Character Building",
              gradient: "from-pink-400 to-red-400",
            },
            {
              icon: Sparkles,
              label: "Creativity",
              gradient: "from-teal-400 to-green-400",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.07, rotate: -1 }}
              className="relative p-6 bg-white border rounded-3xl shadow-xl flex flex-col items-center text-center gap-3 overflow-hidden"
            >
              <div
                className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${item.gradient} opacity-20 blur-xl`}
              />
              <div
                className={`relative p-4 rounded-2xl bg-gradient-to-br ${item.gradient} shadow-lg`}
              >
                <item.icon size={32} className="text-white" />
              </div>
              <h3 className="relative text-xl font-semibold">{item.label}</h3>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 💬 TESTIMONIALS */}
      <section className="py-20 bg-gradient-to-b from-orange-50 via-white to-yellow-50 px-4">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 text-center mb-4">
          💬 What Parents Say
        </h2>
        <p className="text-gray-600 text-base sm:text-lg mb-12 max-w-2xl mx-auto text-center">
          Their experience. Their trust. Their words.
        </p>

        <div className="flex overflow-x-auto gap-6 pb-6 snap-x snap-mandatory scrollbar-hide max-w-7xl mx-auto">
          {[
            {
              name: "Rohit Sharma",
              message:
                "MIA has been a blessing. My child has grown emotionally, academically and spiritually.",
            },
            {
              name: "Anjali Verma",
              message:
                "The perfect balance of values, discipline and love. Feels like a second home.",
            },
            {
              name: "S. Khanna",
              message:
                "We are grateful for the confidence and leadership qualities built here.",
            },
          ].map((t, i) => (
            <div
              key={i}
              className="
          snap-start min-w-[100%] sm:min-w-[360px]
          rounded-3xl p-[2px]
          bg-gradient-to-br from-orange-400 via-pink-400 to-yellow-400
          shadow-lg hover:shadow-2xl transition-all duration-300
        "
            >
              <div className="bg-white rounded-3xl p-6 h-full">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-11 h-11 rounded-full bg-gradient-to-r from-orange-500 to-pink-500 flex items-center justify-center text-white font-bold text-lg shadow-md">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">{t.name}</h3>
                    <span className="text-yellow-500 text-sm tracking-wide">
                      ★★★★★
                    </span>
                  </div>
                </div>

                <p className="text-gray-700 text-[16px] leading-relaxed italic">
                  “{t.message}”
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-8 gap-2">
          <div className="w-3 h-3 bg-orange-500 rounded-full" />
          <div className="w-3 h-3 bg-orange-300 rounded-full" />
          <div className="w-3 h-3 bg-orange-200 rounded-full" />
        </div>
      </section>

      {/* FOOTER SEPARATOR */}
      <div className="w-full">
        <svg viewBox="0 0 1440 90" className="w-full -mb-2">
          <path
            fill="#ffffff"
            d="M0,32L48,48C96,64,192,96,288,112C384,128,480,128,576,117.3C672,107,768,85,864,85.3C960,85,1056,107,1152,117.3C1248,128,1344,128,1392,128H1440V0H0Z"
          />
        </svg>
      </div>

      {/* 🚀 ADMISSIONS CTA */}
      <section className="relative py-20 sm:py-28 lg:py-32 bg-gray-900 text-white text-center overflow-hidden px-4">
        {/* Glow background */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,215,0,0.3),transparent_70%)]"
        />

        {/* Heading */}
        <motion.h2
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          className="
      text-3xl sm:text-4xl lg:text-5xl
      font-extrabold
      mb-4 sm:mb-6
      leading-tight
    "
        >
          🚀 Admissions Open 2025-26
        </motion.h2>

        {/* Sub text */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="
      text-base sm:text-lg lg:text-xl
      mb-8 sm:mb-10
      opacity-90
      max-w-xl mx-auto
    "
        >
          Join a school where learning becomes leadership.
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ scale: 0.8 }}
          whileHover={{ scale: 1.07 }}
          className="inline-block"
        >
          <Link
            to="/admissions"
            className="
        inline-block
        bg-gradient-to-r from-yellow-400 to-orange-500
        text-gray-900
        px-8 sm:px-12 lg:px-14
        py-4 sm:py-5
        rounded-2xl
        text-lg sm:text-xl
        font-bold
        shadow-2xl
      "
          >
            Begin Admission →
          </Link>
        </motion.div>

        {/* Floating note */}
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 3 }}
          className="
      w-full text-center
      mt-6 sm:mt-8
      text-yellow-400
      text-sm sm:text-base lg:text-lg
      font-semibold
    "
        >
          🌟 Limited Seats • Early Applications Get Priority
        </motion.div>
      </section>

      {/* 📞 CONTACT SECTION */}
      <div className="px-4 sm:px-6 lg:px-0">
        <Contact />
      </div>
    </div>
  );
};

export default Home;
