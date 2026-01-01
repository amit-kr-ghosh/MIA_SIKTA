import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Contact from "./Contact.tsx";
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

{/* 🌈🔥 HERO SECTION */}
<section className="relative min-h-[100vh] flex items-center px-6 py-10 sm:py-16 bg-gradient-to-b from-[#FFF7E8] via-white to-[#E4FFF6] overflow-visible rounded-b-[60px] sm:rounded-b-[100px]">
  <motion.div
    animate={{ x: [0, 30, 0], y: [0, -20, 0], scale: [1, 1.05, 1] }}
    transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
    className="absolute top-24 right-24 w-40 h-40 bg-orange-300/40 rounded-full blur-3xl"
  />
  <motion.div
    animate={{ x: [0, -20, 0], y: [0, 25, 0], scale: [1, 1.1, 1] }}
    transition={{ repeat: Infinity, duration: 7, ease: "easeInOut" }}
    className="absolute bottom-12 left-10 w-32 h-32 bg-teal-300/40 rounded-full blur-3xl"
  />

  <div className="pointer-events-none absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.08]"></div>

  <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-10 items-center">

    <div className="text-center lg:text-left space-y-6">
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl sm:text-6xl font-black text-gray-900 leading-tight"
      >
        Let’s Build a Brighter Future at
        <br />
        <span className="bg-gradient-to-r from-orange-500 to-yellow-500 text-transparent bg-clip-text">
          Mother’s International Academy
        </span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="text-lg sm:text-xl text-gray-700 max-w-lg mx-auto lg:mx-0 leading-relaxed"
      >
        A home for curiosity and courage. Where every child is seen,
        every voice is valued, and every dream feels possible.
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
      >
        <Link
          to="/admissions"
          className="px-10 py-4 bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-white rounded-2xl text-lg font-semibold shadow-lg shadow-orange-300/40 hover:shadow-xl transition-all duration-300"
        >
          🚀 Apply Now
        </Link>
        <Link
          to="/about"
          className="border-2 border-gray-300 px-10 py-4 rounded-2xl text-lg font-semibold hover:bg-gray-50 transition relative overflow-hidden"
        >
          Learn More ✨
        </Link>
      </motion.div>
    </div>
<motion.div
  initial={{ opacity: 0, x: 40 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.8 }}
  className="relative flex justify-center"
>
 <img
  src="/images/hero.png"
  alt="Happy Students"
  className="
    w-full sm:w-[90%] 
    h-auto sm:h-[520px] 
    object-contain
    mx-auto
    drop-shadow-2xl
    pointer-events-none
  "
/>

</motion.div>




  </div>
</section>



{/* ⭐ WHY PARENTS CHOOSE US */}
<section className="py-16 sm:py-20  px-4">
  <h2 className="text-center text-3xl sm:text-4xl font-bold text-gray-900 mb-10">
    Why Parents Choose Us
  </h2>
  <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
    {features.map((f, index) => (
      <motion.div
        key={index}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        whileHover={{ scale: 1.05 }}
        className="bg-gradient-to-br from-gray-100 to-gray-200 p-8 rounded-2xl shadow-inner hover:shadow-xl transition text-center border"
      >
        <div
          className={`w-16 h-16 bg-gradient-to-br ${f.color} rounded-xl flex items-center justify-center mx-auto mb-4 shadow-md`}
        >
          <f.icon className="text-white" size={28} />
        </div>
        <h3 className="text-xl font-semibold text-gray-900">{f.title}</h3>
        <p className="text-gray-700 mt-2">{f.description}</p>
      </motion.div>
    ))}
  </div>
</section>



{/* 🌿 CAMPUS LIFE — UPDATED */}
<section className="py-20 bg-white px-4">
  <h2 className="text-center text-4xl font-extrabold text-gray-900 mb-4">
    🌿 Campus Life @ MIA
  </h2>
  <p className="text-center text-gray-600 mb-10 max-w-2xl mx-auto">
    A vibrant campus that nurtures learning, creativity and character.
  </p>

  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
    {[
      'https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=800',
     'https://images.pexels.com/photos/5212653/pexels-photo-5212653.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/8087871/pexels-photo-8087871.jpeg?auto=compress&cs=tinysrgb&w=800',
    ].map((img, i) => (
      <motion.div
        key={i}
        whileHover={{ scale: 1.05 }}
        className="rounded-3xl overflow-hidden group relative shadow-xl border"
      >
        <img src={img} className="w-full h-56 sm:h-72 object-cover" />
        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 flex justify-center items-center text-xl font-bold text-white transition">
          Explore Campus
        </div>
      </motion.div>
    ))}
  </div>
</section>



{/* 🎓 EDUCATION BEYOND ACADEMICS */}
<section className="py-20 bg-white text-center px-6">
  <h2 className="text-4xl font-extrabold text-gray-900 mb-6">
    🎓 Education Beyond Academics
  </h2>
  <p className="text-lg text-gray-600 max-w-3xl mx-auto">
    We don’t just teach for exams — we prepare students for LIFE.
  </p>

  <div className="mt-14 grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
    {[{ icon: Lightbulb, label: "Critical Thinking", gradient: "from-yellow-300 to-orange-400" },
      { icon: Trophy, label: "Leadership", gradient: "from-blue-400 to-purple-500" },
      { icon: Star, label: "Character Building", gradient: "from-pink-400 to-red-400" },
      { icon: Sparkles, label: "Creativity", gradient: "from-teal-400 to-green-400" }].map((item, i) => (
      <motion.div
        key={i}
        whileHover={{ scale: 1.07, rotate: -1 }}
        className="relative p-6 bg-white border rounded-3xl shadow-xl flex flex-col items-center text-center gap-3 overflow-hidden"
      >
        <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${item.gradient} opacity-20 blur-xl`} />
        <div className={`relative p-4 rounded-2xl bg-gradient-to-br ${item.gradient} shadow-lg`}>
          <item.icon size={32} className="text-white" />
        </div>
        <h3 className="relative text-xl font-semibold">{item.label}</h3>
      </motion.div>
    ))}
  </div>
</section>

{/* 💬 TESTIMONIALS — CLEAN & MOBILE FIRST */}
<section className="py-20 bg-gray-50 px-4">
  <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 text-center mb-4">
    💬 What Parents Say
  </h2>
  <p className="text-gray-600 text-base sm:text-lg mb-12 max-w-2xl mx-auto text-center">
    Their experience. Their trust. Their words.
  </p>

  {/* Cards */}
  <div className="flex overflow-x-auto gap-5 pb-4 snap-x snap-mandatory scrollbar-hide max-w-7xl mx-auto">
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
        className="snap-start min-w-[80%] sm:min-w-[350px] bg-white border border-gray-200 rounded-2xl p-6 shadow-md transition-all hover:shadow-lg"
      >
        {/* Header */}
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-full bg-gradient-to-r from-orange-400 to-yellow-500 flex items-center justify-center text-white font-bold text-lg">
            {t.name.charAt(0)}
          </div>
          <div>
            <h3 className="font-bold text-gray-900">{t.name}</h3>
            <span className="text-yellow-500 text-sm">★★★★★</span>
          </div>
        </div>

        {/* Message */}
        <p className="text-gray-700 text-[16px] leading-relaxed">
          “{t.message}”
        </p>
      </div>
    ))}
  </div>

  {/* Pagination dots */}
  <div className="flex justify-center mt-8 gap-1.5">
    <div className="w-2.5 h-2.5 bg-orange-500 rounded-full"></div>
    <div className="w-2.5 h-2.5 bg-gray-300 rounded-full"></div>
    <div className="w-2.5 h-2.5 bg-gray-300 rounded-full"></div>
  </div>
</section>






{/* FOOTER SEPARATOR */}
<div className="w-full">
  <svg viewBox="0 0 1440 90" className="w-full -mb-2">
    <path
      fill="#ffffff"
      d="M0,32L48,48C96,64,192,96,288,112C384,128,480,128,576,117.3C672,107,768,85,864,85.3C960,85,1056,107,1152,117.3C1248,128,1344,128,1392,128H1440V0H1392C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0H0Z"
    />
  </svg>
</div>



{/* 🚀 ADMISSIONS CTA — LIMITED SEATS CENTERED */}
<section className="relative py-32 bg-gray-900 text-white text-center overflow-hidden">
  <motion.div
    initial={{ scale: 0.9, opacity: 0 }}
    whileInView={{ scale: 1, opacity: 1 }}
    className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,215,0,0.3),transparent_70%)]"
  />
  <motion.h2
    initial={{ y: 40, opacity: 0 }}
    whileInView={{ y: 0, opacity: 1 }}
    className="text-5xl font-extrabold mb-6"
  >
    🚀 Admissions Open 2025-26
  </motion.h2>
  <motion.p
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    className="text-xl mb-10 opacity-90"
  >
    Join a school where learning becomes leadership.
  </motion.p>

  <motion.div
    initial={{ scale: 0.8 }}
    whileHover={{ scale: 1.07 }}
    className="inline-block"
  >
    <Link
      to="/admissions"
      className="bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 px-14 py-5 rounded-2xl text-xl font-bold shadow-2xl"
    >
      Begin Admission →
    </Link>
  </motion.div>

  {/* 🔥 FIXED: Full width centered text */}
  <motion.div
    animate={{ y: [0, -10, 0] }}
    transition={{ repeat: Infinity, duration: 3 }}
    className="w-full text-center mt-8 text-yellow-400 text-lg font-semibold"
  >
    🌟 Limited Seats • Early Applications Get Priority
  </motion.div>
</section>
<Contact />


    </div>
  );
};

export default Home;
