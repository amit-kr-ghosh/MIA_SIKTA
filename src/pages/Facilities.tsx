import { motion } from 'framer-motion';
import {
  BookOpen,
  Beaker,
  Dumbbell,
  Bus,
  Monitor,
  Shield,
  Music,
  Utensils,
} from 'lucide-react';

const Facilities = () => {
  const facilities = [
    {
      icon: BookOpen,
      title: 'Library',
      description:
        'Well-stocked library with over 10,000 books, digital resources, and quiet reading areas for students.',
      image: 'https://images.pexels.com/photos/2041540/pexels-photo-2041540.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      icon: Beaker,
      title: 'Science Laboratories',
      description:
        'Modern labs for Physics, Chemistry, and Biology with latest equipment for hands-on learning.',
      image: 'https://images.pexels.com/photos/2280571/pexels-photo-2280571.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      icon: Monitor,
      title: 'Computer Lab',
      description:
        'State-of-the-art computer lab with high-speed internet and latest software for digital literacy.',
      image: 'https://images.pexels.com/photos/3184325/pexels-photo-3184325.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      icon: Dumbbell,
      title: 'Sports Complex',
      description:
        'Indoor and outdoor sports facilities including basketball, badminton, cricket, and athletics.',
      image: 'https://images.pexels.com/photos/461049/pexels-photo-461049.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      icon: Music,
      title: 'Arts & Music Room',
      description:
        'Dedicated spaces for music, dance, and arts with instruments and materials for creative expression.',
      image: 'https://images.pexels.com/photos/8192069/pexels-photo-8192069.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      icon: Bus,
      title: 'Transportation',
      description:
        'Safe and reliable school bus service covering all major routes with GPS tracking and attendants.',
      image: 'https://images.pexels.com/photos/5905713/pexels-photo-5905713.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      icon: Shield,
      title: 'Safety & Security',
      description:
        '24/7 CCTV surveillance, trained security personnel, and fire safety systems throughout the campus.',
      image: 'https://images.pexels.com/photos/430208/pexels-photo-430208.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      icon: Utensils,
      title: 'Cafeteria',
      description:
        'Hygienic cafeteria serving nutritious meals and snacks prepared with quality ingredients.',
      image: 'https://images.pexels.com/photos/2159065/pexels-photo-2159065.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
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
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">Facilities</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              World-class infrastructure designed to enhance the learning experience
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {facilities.map((facility, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={facility.image}
                    alt={facility.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <div className="bg-white w-12 h-12 rounded-lg flex items-center justify-center">
                      <facility.icon className="h-6 w-6 text-primary-600" />
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    {facility.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {facility.description}
                  </p>
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
              Smart Classrooms
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Technology-enabled learning environments
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <img
                src="https://images.pexels.com/photos/8923166/pexels-photo-8923166.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Smart classroom"
                className="rounded-2xl shadow-xl"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="bg-primary-600 w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white font-bold text-sm">1</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      Interactive Displays
                    </h3>
                    <p className="text-gray-600">
                      Large touchscreen displays for engaging multimedia lessons
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-teal-600 w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white font-bold text-sm">2</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      Digital Content
                    </h3>
                    <p className="text-gray-600">
                      Access to rich educational content and online resources
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-yellow-500 w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white font-bold text-sm">3</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      Comfortable Seating
                    </h3>
                    <p className="text-gray-600">
                      Ergonomic furniture designed for optimal learning comfort
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-primary-600 w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white font-bold text-sm">4</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      Climate Control
                    </h3>
                    <p className="text-gray-600">
                      Air-conditioned classrooms for comfortable learning year-round
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Facilities;