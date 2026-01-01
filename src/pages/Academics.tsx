import { motion } from 'framer-motion';
import { BookOpen, Beaker, Calculator, Globe, Palette, Music } from 'lucide-react';

const Academics = () => {
  const levels = [
    {
      title: 'Primary Section',
      grades: 'Classes I - V',
      description:
        'Foundation years focusing on basic literacy, numeracy, and creative development through interactive learning.',
      color: 'from-blue-500 to-teal-500',
    },
    {
      title: 'Secondary Section',
      grades: 'Classes VI - X',
      description:
        'Comprehensive CBSE curriculum with emphasis on conceptual understanding and skill development across all subjects.',
      color: 'from-teal-500 to-primary-600',
    },
    {
      title: 'Senior Secondary',
      grades: 'Classes XI - XII',
      description:
        'Specialized streams in Science, Commerce, and Humanities to prepare students for higher education and careers.',
      color: 'from-primary-600 to-blue-600',
    },
  ];

  const streams = [
    {
      icon: Beaker,
      title: 'Science Stream',
      subjects: ['Physics', 'Chemistry', 'Biology/Mathematics', 'English', 'Computer Science'],
    },
    {
      icon: Calculator,
      title: 'Commerce Stream',
      subjects: ['Accountancy', 'Business Studies', 'Economics', 'English', 'Mathematics'],
    },
    {
      icon: Globe,
      title: 'Humanities Stream',
      subjects: ['History', 'Political Science', 'Geography', 'English', 'Psychology'],
    },
  ];

  const subjects = [
    { icon: BookOpen, name: 'Languages', color: 'bg-blue-500' },
    { icon: Calculator, name: 'Mathematics', color: 'bg-teal-500' },
    { icon: Beaker, name: 'Sciences', color: 'bg-primary-600' },
    { icon: Globe, name: 'Social Studies', color: 'bg-yellow-500' },
    { icon: Palette, name: 'Arts & Crafts', color: 'bg-pink-500' },
    { icon: Music, name: 'Music & Dance', color: 'bg-purple-500' },
  ];

  return (
    <div>
      <section className="bg-gradient-to-br from-primary-600 to-teal-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">Academics</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              CBSE curriculum designed to nurture intellectual curiosity and academic
              excellence
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Our Academic Structure
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Structured learning pathways from foundation to specialization
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {levels.map((level, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative overflow-hidden rounded-2xl shadow-lg"
              >
                <div className={`bg-gradient-to-br ${level.color} p-8 text-white`}>
                  <h3 className="text-2xl font-bold mb-2">{level.title}</h3>
                  <p className="text-blue-100 font-semibold mb-4">{level.grades}</p>
                  <p className="text-white/90 leading-relaxed">{level.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Senior Secondary Streams
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Choose your path to success in Classes XI and XII
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {streams.map((stream, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow"
              >
                <div className="bg-gradient-to-br from-primary-600 to-teal-500 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                  <stream.icon className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {stream.title}
                </h3>
                <ul className="space-y-2">
                  {stream.subjects.map((subject, idx) => (
                    <li key={idx} className="flex items-center text-gray-600">
                      <span className="w-2 h-2 bg-teal-500 rounded-full mr-3"></span>
                      {subject}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Subject Areas
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive curriculum covering all essential areas of learning
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
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
                <p className="font-semibold text-gray-900">{subject.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-blue-50 to-teal-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Teaching Methodology
              </h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-primary-600 rounded-full flex-shrink-0 mt-1"></div>
                  <p className="text-gray-600 leading-relaxed">
                    Interactive and student-centered learning approaches
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-teal-500 rounded-full flex-shrink-0 mt-1"></div>
                  <p className="text-gray-600 leading-relaxed">
                    Smart classrooms with digital learning resources
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-yellow-500 rounded-full flex-shrink-0 mt-1"></div>
                  <p className="text-gray-600 leading-relaxed">
                    Regular assessments and personalized feedback
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-primary-600 rounded-full flex-shrink-0 mt-1"></div>
                  <p className="text-gray-600 leading-relaxed">
                    Experiential learning through projects and activities
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-teal-500 rounded-full flex-shrink-0 mt-1"></div>
                  <p className="text-gray-600 leading-relaxed">
                    Focus on critical thinking and problem-solving skills
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <img
                src="https://images.pexels.com/photos/5212653/pexels-photo-5212653.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Teaching methodology"
                className="rounded-2xl shadow-xl"
              />
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Academics;