import { motion } from 'framer-motion';
import { Target, Eye, Heart, Award, Quote } from 'lucide-react';

const About = () => {
  return (
    <div className="overflow-x-hidden bg-white">

      {/* ================= HERO ================= */}
      <section className="bg-gradient-to-br from-indigo-900 via-indigo-800 to-teal-800 text-white py-14 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="text-yellow-400 font-semibold tracking-wide">
              Mother’s International Academy
            </span>
            <h1 className="text-3xl sm:text-5xl font-bold mt-2 mb-4">
              About Our School
            </h1>
            <p className="text-indigo-100 max-w-3xl mx-auto text-base sm:text-xl">
              Shaping minds, nurturing values, and preparing leaders for life
            </p>
          </motion.div>
        </div>
      </section>

      {/* ================= OUR STORY ================= */}
      <section className="py-14 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.img
            whileInView={{ opacity: 1, scale: 1 }}
            initial={{ opacity: 0, scale: 0.95 }}
            viewport={{ once: true }}
            src="images/gallery/school_building.png"
            alt="School Campus"
            className="rounded-2xl shadow-xl"
          />

          <motion.div whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: 20 }}>
            <h2 className="text-2xl sm:text-3xl font-bold text-indigo-900 mb-4">
              Our Journey
            </h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Established in 2012, Mother’s International Academy was founded to
              meet the need for quality and value-based education in West
              Champaran, Bihar.
            </p>
            <p className="text-gray-700 mb-4 leading-relaxed">
              We believe education is not only about academics, but about
              developing character, leadership, creativity, and a global
              outlook.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Located in the green surroundings of Bhawra near Army Cantonment
              Sikta, our campus offers a safe, peaceful, and pollution-free
              environment for holistic learning.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ================= MISSION & VISION ================= */}
      <section className="py-14 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-2xl p-7 shadow-md border-l-4 border-indigo-700">
            <Target className="text-indigo-700 w-8 h-8 mb-3" />
            <h3 className="text-xl font-bold mb-2">Our Mission</h3>
            <p className="text-gray-600 leading-relaxed">
              To provide a strong intellectual, emotional, and moral foundation
              through innovative teaching, smart technology, and value-based
              education.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-7 shadow-md border-l-4 border-teal-600">
            <Eye className="text-teal-600 w-8 h-8 mb-3" />
            <h3 className="text-xl font-bold mb-2">Our Vision</h3>
            <p className="text-gray-600 leading-relaxed">
              To nurture confident, joyful, and responsible learners who become
              leaders, peace builders, and contributors to society.
            </p>
          </div>
        </div>
      </section>

{/* ================= DIRECTORS MESSAGE ================= */}
<section className="py-16 sm:py-20">
  <div className="max-w-5xl mx-auto px-4 sm:px-6">
    <h2 className="text-2xl sm:text-4xl font-bold text-center text-indigo-900 mb-12">
      From the Director’s Desk
    </h2>

   <div className="bg-white rounded-3xl shadow-2xl shadow-black/40 p-6 sm:p-10 relative">

      <Quote className="absolute -top-5 left-6 w-10 h-10 text-yellow-400" />

      <div className="flex flex-col sm:flex-row items-center gap-6 mb-6">
        <img
          src="images/logo/logo.png"
          alt="Directors"
          className="w-28 h-28 rounded-full object-cover border-4 border-indigo-800 shadow-md"
        />

        <div className="text-center sm:text-left">
          <h3 className="text-xl font-bold text-indigo-900">
            Director
          </h3>
          <p className="text-gray-600">
            Mother’s International Academy
          </p>
        </div>
      </div>

      <p className="text-gray-700 mb-4 leading-relaxed">
        At Mother’s International Academy, we believe that education is a
        partnership between the school and the family. Together, we shape
        not only academic success but strong character and values.
      </p>

      <p className="text-gray-700 mb-4 leading-relaxed">
        Our goal is to help every child discover their potential, develop
        confidence, and grow into a responsible, compassionate, and
        capable citizen of the world.
      </p>

      <p className="text-indigo-900 font-semibold mt-6">
        “Education with a difference — to make a difference.”
      </p>
    </div>
  </div>
</section>


      {/* ================= CORE VALUES ================= */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-4xl font-bold text-center text-indigo-900 mb-12">
            Our Core Values
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {[
              {
                icon: Heart,
                title: 'Integrity & Care',
                desc: 'Honesty, compassion, equality, and respect for all',
                bg: 'from-pink-500 to-rose-500',
              },
              {
                icon: Award,
                title: 'Excellence',
                desc: 'Commitment to academic, personal, and moral excellence',
                bg: 'from-yellow-400 to-orange-500',
              },
              {
                icon: Target,
                title: 'Leadership & Innovation',
                desc: 'Responsibility, creativity, teamwork, and initiative',
                bg: 'from-indigo-600 to-teal-600',
              },
            ].map((v, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -6 }}
                className="bg-white rounded-3xl shadow-lg p-7 text-center transition"
              >
                <div
                  className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br ${v.bg} flex items-center justify-center shadow-md`}
                >
                  <v.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-bold text-lg text-indigo-900 mb-2">
                  {v.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {v.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default About;
