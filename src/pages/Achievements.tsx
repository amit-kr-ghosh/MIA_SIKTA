import { motion } from 'framer-motion';
import { Trophy, Award, Medal, Star } from 'lucide-react';

const Achievements = () => {
  const achievements = [
    {
      year: '2024',
      title: 'National Science Olympiad',
      description: 'Gold Medal - Aarav Sharma, Class X',
      icon: Trophy,
      color: 'from-yellow-500 to-yellow-600',
    },
    {
      year: '2024',
      title: 'Inter-School Debate Championship',
      description: 'First Prize - Priya Patel, Class XII',
      icon: Award,
      color: 'from-primary-600 to-teal-600',
    },
    {
      year: '2023',
      title: 'State Level Mathematics Competition',
      description: 'Silver Medal - Rohan Verma, Class IX',
      icon: Medal,
      color: 'from-gray-400 to-gray-500',
    },
    {
      year: '2023',
      title: 'All India Painting Contest',
      description: 'First Prize - Ananya Singh, Class VII',
      icon: Star,
      color: 'from-pink-500 to-purple-600',
    },
    {
      year: '2023',
      title: 'District Cricket Championship',
      description: 'Winners - School Cricket Team',
      icon: Trophy,
      color: 'from-teal-500 to-teal-600',
    },
    {
      year: '2022',
      title: 'CBSE Academic Excellence',
      description: '100% Pass Rate in Class XII Boards',
      icon: Award,
      color: 'from-primary-600 to-blue-700',
    },
    {
      year: '2022',
      title: 'International Robotics Challenge',
      description: 'Bronze Medal - Robotics Club Team',
      icon: Medal,
      color: 'from-orange-600 to-red-600',
    },
    {
      year: '2022',
      title: 'State Dance Competition',
      description: 'Best Performance - School Dance Troupe',
      icon: Star,
      color: 'from-yellow-500 to-yellow-600',
    },
  ];

  const stats = [
    { number: '100%', label: 'Board Exam Pass Rate', color: 'bg-primary-600' },
    { number: '250+', label: 'Awards Won', color: 'bg-teal-600' },
    { number: '50+', label: 'National Level Participants', color: 'bg-yellow-500' },
    { number: '15+', label: 'Years of Excellence', color: 'bg-pink-600' },
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
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">Achievements</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Celebrating our students' success and excellence
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`${stat.color} text-white rounded-2xl p-6 text-center shadow-lg`}
              >
                <div className="text-3xl sm:text-4xl font-bold mb-2">
                  {stat.number}
                </div>
                <div className="text-sm sm:text-base opacity-90">{stat.label}</div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Recent Achievements
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our students continue to excel in academics, sports, and co-curricular
              activities
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow border border-gray-100"
              >
                <div className="flex items-start space-x-4">
                  <div
                    className={`bg-gradient-to-br ${achievement.color} w-14 h-14 rounded-lg flex items-center justify-center flex-shrink-0`}
                  >
                    <achievement.icon className="h-7 w-7 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-semibold text-gray-500">
                        {achievement.year}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      {achievement.title}
                    </h3>
                    <p className="text-gray-600">{achievement.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-blue-50 to-teal-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <img
                src="https://images.pexels.com/photos/5905713/pexels-photo-5905713.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Award ceremony"
                className="rounded-2xl shadow-xl"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Building Champions
              </h2>
              <p className="text-lg text-gray-600 mb-4 leading-relaxed">
                At Mothers International Academy, we believe in nurturing talent and
                encouraging students to reach their full potential. Our comprehensive
                approach to education goes beyond textbooks.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Through dedicated coaching, modern facilities, and continuous support,
                we help our students excel in academics, sports, arts, and various
                competitions at local, state, national, and international levels.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary-600 rounded-full"></div>
                  <p className="text-gray-700">Expert guidance and mentorship</p>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-teal-600 rounded-full"></div>
                  <p className="text-gray-700">Regular competitions and exhibitions</p>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                  <p className="text-gray-700">Recognition and awards ceremonies</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Achievements;