import { motion } from 'framer-motion';
import { BookOpen, Beaker, Calculator, Globe, Palette, Music } from 'lucide-react';

const Academics = () => {
  const levels = [
    {
      title: 'Primary Section',
      grades: 'Classes I – V',
      description:
        'Strong foundation in literacy, numeracy, creativity, and values through joyful and activity-based learning.',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      title: 'Middle Section',
      grades: 'Classes VI – VIII',
      description:
        'Conceptual learning with emphasis on critical thinking, curiosity, and skill development across subjects.',
      color: 'from-teal-500 to-emerald-500',
    },
    {
      title: 'Secondary Section',
      grades: 'Classes IX – X',
      description:
        'CBSE-oriented academic preparation focusing on conceptual clarity, confidence building, and board readiness.',
      color: 'from-indigo-600 to-purple-600',
    },
  ];

  const subjects = [
    { icon: BookOpen, name: 'Languages', color: 'bg-blue-500' },
    { icon: Calculator, name: 'Mathematics', color: 'bg-teal-500' },
    { icon: Beaker, name: 'Science', color: 'bg-indigo-600' },
    { icon: Globe, name: 'Social Science', color: 'bg-yellow-500' },
    { icon: Palette, name: 'Art & Craft', color: 'bg-pink-500' },
    { icon: Music, name: 'Music & Dance', color: 'bg-purple-500' },
  ];

  return (
    <div className="overflow-x-hidden bg-white">

      {/* ================= HERO ================= */}
      <section className="bg-gradient-to-br from-indigo-900 via-indigo-800 to-teal-800 text-white py-14 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-3xl sm:text-5xl font-bold mb-4">
              Academics
            </h1>
            <p className="text-indigo-100 text-base sm:text-xl max-w-3xl mx-auto">
              A balanced CBSE-aligned curriculum focused on knowledge, values, and lifelong learning
            </p>
          </motion.div>
        </div>
      </section>

      {/* ================= ACADEMIC STRUCTURE ================= */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-4xl font-bold text-indigo-900 mb-4">
              Academic Structure
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Structured learning journey from foundational years to board preparation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {levels.map((level, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="rounded-3xl shadow-xl overflow-hidden"
              >
                <div className={`bg-gradient-to-br ${level.color} p-8 text-white`}>
                  <h3 className="text-2xl font-bold mb-1">{level.title}</h3>
                  <p className="font-semibold mb-3 text-white/90">
                    {level.grades}
                  </p>
                  <p className="leading-relaxed text-white/95">
                    {level.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= SUBJECT AREAS ================= */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-4xl font-bold text-indigo-900 mb-4">
              Subject Areas
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              A well-rounded curriculum that nurtures academic and creative excellence
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
            {subjects.map((subject, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="text-center"
              >
                <div
                  className={`${subject.color} w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-3 shadow-lg`}
                >
                  <subject.icon className="h-10 w-10 text-white" />
                </div>
                <p className="font-semibold text-gray-800">
                  {subject.name}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

  {/* ================= TEACHING METHODOLOGY ================= */}
<section className="py-16 sm:py-20 bg-gradient-to-br from-indigo-50 via-white to-teal-50">
  <div className="max-w-6xl mx-auto px-4 sm:px-6">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-center mb-14"
    >
      <h2 className="text-2xl sm:text-4xl font-bold text-indigo-900 mb-4">
        Our Teaching Approach
      </h2>
      <p className="text-gray-600 max-w-2xl mx-auto">
        A thoughtful blend of innovation, values, and student-centered learning
      </p>
    </motion.div>

    {/* FLOW CARDS */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

      {/* Card 1 */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-white rounded-3xl shadow-xl p-7 relative overflow-hidden"
      >
        <div className="absolute -top-10 -right-10 w-32 h-32 bg-indigo-100 rounded-full"></div>
        <div className="relative">
          <span className="text-sm font-semibold text-indigo-600">
            Learn by Doing
          </span>
          <h3 className="text-xl font-bold text-gray-900 mt-2 mb-3">
            Activity-Based Learning
          </h3>
          <p className="text-gray-600 leading-relaxed">
            Students actively participate in discussions, experiments, projects,
            and real-life activities that make learning meaningful and joyful.
          </p>
        </div>
      </motion.div>

      {/* Card 2 */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="bg-white rounded-3xl shadow-xl p-7 relative overflow-hidden"
      >
        <div className="absolute -top-10 -right-10 w-32 h-32 bg-teal-100 rounded-full"></div>
        <div className="relative">
          <span className="text-sm font-semibold text-teal-600">
            Smart & Digital
          </span>
          <h3 className="text-xl font-bold text-gray-900 mt-2 mb-3">
            Technology-Enabled Classrooms
          </h3>
          <p className="text-gray-600 leading-relaxed">
            Smart boards, digital content, and visual tools enhance understanding
            and help students grasp concepts more effectively.
          </p>
        </div>
      </motion.div>

      {/* Card 3 */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="bg-white rounded-3xl shadow-xl p-7 relative overflow-hidden"
      >
        <div className="absolute -top-10 -right-10 w-32 h-32 bg-pink-100 rounded-full"></div>
        <div className="relative">
          <span className="text-sm font-semibold text-pink-600">
            Think & Explore
          </span>
          <h3 className="text-xl font-bold text-gray-900 mt-2 mb-3">
            Conceptual & Critical Thinking
          </h3>
          <p className="text-gray-600 leading-relaxed">
            Emphasis is placed on understanding concepts deeply, asking
            questions, and developing problem-solving and reasoning skills.
          </p>
        </div>
      </motion.div>

      {/* Card 4 */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-white rounded-3xl shadow-xl p-7 relative overflow-hidden"
      >
        <div className="absolute -top-10 -right-10 w-32 h-32 bg-yellow-100 rounded-full"></div>
        <div className="relative">
          <span className="text-sm font-semibold text-yellow-600">
            Assess & Improve
          </span>
          <h3 className="text-xl font-bold text-gray-900 mt-2 mb-3">
            Continuous Assessment
          </h3>
          <p className="text-gray-600 leading-relaxed">
            Regular evaluations, feedback, and guidance help students track
            progress and improve confidently without academic pressure.
          </p>
        </div>
      </motion.div>

      {/* Card 5 */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="bg-white rounded-3xl shadow-xl p-7 relative overflow-hidden"
      >
        <div className="absolute -top-10 -right-10 w-32 h-32 bg-purple-100 rounded-full"></div>
        <div className="relative">
          <span className="text-sm font-semibold text-purple-600">
            Values First
          </span>
          <h3 className="text-xl font-bold text-gray-900 mt-2 mb-3">
            Character & Discipline
          </h3>
          <p className="text-gray-600 leading-relaxed">
            Equal focus is given to discipline, moral values, responsibility,
            and respect to build strong character along with academics.
          </p>
        </div>
      </motion.div>

      {/* Card 6 */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="bg-white rounded-3xl shadow-xl p-7 relative overflow-hidden"
      >
        <div className="absolute -top-10 -right-10 w-32 h-32 bg-indigo-100 rounded-full"></div>
        <div className="relative">
          <span className="text-sm font-semibold text-indigo-600">
            Learn Together
          </span>
          <h3 className="text-xl font-bold text-gray-900 mt-2 mb-3">
            Collaborative Learning
          </h3>
          <p className="text-gray-600 leading-relaxed">
            Group activities, projects, and discussions promote teamwork,
            communication skills, and mutual respect among students.
          </p>
        </div>
      </motion.div>

    </div>
  </div>
</section>


    </div>
  );
};

export default Academics;
