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
        'Well-stocked library with over 10,000 books, digital resources, and calm reading zones.',
      image:
        'https://images.pexels.com/photos/2041540/pexels-photo-2041540.jpeg?auto=compress&cs=tinysrgb&w=1200',
      gradient: 'from-indigo-500 to-purple-500',
    },
    {
      icon: Beaker,
      title: 'Science Labs',
      description:
        'Advanced Physics, Chemistry, and Biology labs for hands-on experimentation.',
      image:
        'https://images.pexels.com/photos/2280571/pexels-photo-2280571.jpeg?auto=compress&cs=tinysrgb&w=1200',
      gradient: 'from-teal-500 to-emerald-500',
    },
    {
      icon: Monitor,
      title: 'Computer Lab',
      description:
        'High-speed internet, modern systems, and the latest educational software.',
      image:
        'https://images.pexels.com/photos/3184325/pexels-photo-3184325.jpeg?auto=compress&cs=tinysrgb&w=1200',
      gradient: 'from-sky-500 to-blue-600',
    },
    {
      icon: Dumbbell,
      title: 'Sports Complex',
      description:
        'Indoor & outdoor sports facilities supporting fitness and teamwork.',
      image:
        'https://images.pexels.com/photos/461049/pexels-photo-461049.jpeg?auto=compress&cs=tinysrgb&w=1200',
      gradient: 'from-orange-500 to-amber-500',
    },
    {
      icon: Music,
      title: 'Arts & Music',
      description:
        'Creative spaces for music, dance, and visual arts development.',
      image:
        'https://images.pexels.com/photos/8382271/pexels-photo-8382271.jpeg?auto=compress&cs=tinysrgb&w=1200',
      gradient: 'from-pink-500 to-rose-500',
    },
    {
      icon: Bus,
      title: 'Transportation',
      description:
        'GPS-enabled buses with trained staff ensuring student safety.',
      image:
        'https://images.pexels.com/photos/5896476/pexels-photo-5896476.jpeg?auto=compress&cs=tinysrgb&w=1200',
      gradient: 'from-lime-500 to-green-600',
    },
    {
      icon: Shield,
      title: 'Safety & Security',
      description:
        '24/7 CCTV surveillance and trained security personnel.',
      image:
        'https://images.pexels.com/photos/430208/pexels-photo-430208.jpeg?auto=compress&cs=tinysrgb&w=1200',
      gradient: 'from-red-500 to-rose-600',
    },
    {
      icon: Utensils,
      title: 'Cafeteria',
      description:
        'Nutritious, hygienic meals prepared with quality ingredients.',
      image:
        'https://images.pexels.com/photos/2159065/pexels-photo-2159065.jpeg?auto=compress&cs=tinysrgb&w=1200',
      gradient: 'from-yellow-400 to-orange-500',
    },
  ];

  return (
    <div className="bg-white">

      {/* HERO */}
       <section className="bg-gradient-to-br from-indigo-800 via-indigo-700 to-teal-600 text-white py-14 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-3xl sm:text-5xl font-bold mb-4">
              Our World-Class Facilities
            </h1>
            <p className="text-indigo-100 text-base sm:text-xl max-w-3xl mx-auto">
             Designed to inspire curiosity, creativity, and confidence
            </p>
          </motion.div>
        </div>
      </section>


      {/* FACILITIES GRID */}
      <section className="py-12 sm:py-20">
        <div className="max-w-7xl mx-auto px-4">

          <div
            className="
              grid
              gap-5 sm:gap-10
              grid-cols-1
              sm:grid-cols-2
              lg:grid-cols-3
              xl:grid-cols-4

              max-sm:grid-flow-col
              max-sm:auto-cols-[80%]
              max-sm:overflow-x-auto
              max-sm:snap-x
              max-sm:snap-mandatory
              max-sm:pb-3
            "
          >
            {facilities.map((f, i) => (
              <div
                key={i}
                className="snap-center bg-white rounded-3xl overflow-hidden shadow-md flex flex-col"
              >
                {/* Image */}
                <div className="relative aspect-[16/9] sm:aspect-[4/3] overflow-hidden">
                  <img
                    src={f.image}
                    alt={f.title}
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/25 to-transparent" />
                </div>

                {/* Content */}
                <div className="p-4 sm:p-6 min-h-[150px] sm:min-h-[220px] flex flex-col justify-between">
                  <div
                    className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br ${f.gradient} flex items-center justify-center mb-3 sm:mb-4`}
                  >
                    <f.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>

                  <div>
                    <h3 className="text-base sm:text-xl font-bold text-gray-900 mb-1 sm:mb-2">
                      {f.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                      {f.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <p className="mt-4 text-center text-xs text-gray-400 sm:hidden">
            Swipe to explore →
          </p>
        </div>
      </section>

      {/* SMART CLASSROOMS */}
      <section className="py-14 sm:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-8 sm:mb-14">
            <h2 className="text-2xl sm:text-4xl font-extrabold text-gray-900 mb-3">
              Smart Classrooms
            </h2>
            <p className="text-sm sm:text-lg text-gray-600 max-w-2xl mx-auto">
              Modern learning spaces designed for engagement and comfort
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            <img
              loading="lazy"
              src="https://images.pexels.com/photos/7743255/pexels-photo-7743255.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Smart classroom"
              className="rounded-3xl shadow-lg w-full max-h-[320px] sm:max-h-[420px] object-cover"
            />

            <div className="space-y-4 sm:space-y-6 text-center lg:text-left">
              {[
                'Interactive digital smart boards',
                'High-quality audio-visual learning aids',
                'Comfortable ergonomic seating',
                'Fully air-conditioned classrooms',
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-start lg:items-center gap-3 sm:gap-4 justify-center lg:justify-start"
                >
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-indigo-600 text-white flex items-center justify-center font-bold">
                    {idx + 1}
                  </div>
                  <p className="text-sm sm:text-lg text-gray-700">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Facilities;
