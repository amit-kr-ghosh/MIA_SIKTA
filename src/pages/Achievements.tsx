import { motion } from "framer-motion";
import { Trophy, Award, Medal, Star } from "lucide-react";

const Achievements = () => {
  const achievements = [
    {
      year: "2024",
      title: "National Science Olympiad",
      description: "Gold Medal - Aarav Sharma, Class X",
      icon: Trophy,
      color: "from-yellow-400 to-yellow-500",
    },
    {
      year: "2024",
      title: "Inter-School Debate Championship",
      description: "First Prize - Priya Patel, Class XII",
      icon: Award,
      color: "from-indigo-500 to-teal-500",
    },
    {
      year: "2023",
      title: "State Level Mathematics Competition",
      description: "Silver Medal - Rohan Verma, Class IX",
      icon: Medal,
      color: "from-gray-300 to-gray-400",
    },
    {
      year: "2023",
      title: "All India Painting Contest",
      description: "First Prize - Ananya Singh, Class VII",
      icon: Star,
      color: "from-pink-400 to-rose-500",
    },
    {
      year: "2023",
      title: "District Cricket Championship",
      description: "Winners - School Cricket Team",
      icon: Trophy,
      color: "from-teal-400 to-teal-500",
    },
    {
      year: "2022",
      title: "CBSE Academic Excellence",
      description: "100% Pass Rate in Class XII Boards",
      icon: Award,
      color: "from-indigo-500 to-blue-600",
    },
    {
      year: "2022",
      title: "International Robotics Challenge",
      description: "Bronze Medal - Robotics Club Team",
      icon: Medal,
      color: "from-orange-400 to-orange-500",
    },
    {
      year: "2022",
      title: "State Dance Competition",
      description: "Best Performance - School Dance Troupe",
      icon: Star,
      color: "from-yellow-400 to-amber-500",
    },
  ];

  const stats = [
    { number: "100%", label: "Board Exam Pass Rate", color: "bg-indigo-600" },
    { number: "250+", label: "Awards Won", color: "bg-teal-600" },
    {
      number: "50+",
      label: "National Level Participants",
      color: "bg-yellow-600",
    },
    { number: "15+", label: "Years of Excellence", color: "bg-rose-600" },
  ];

  return (
    <div className="bg-white">
      {/* ================= HERO ================= */}
      <section className="bg-gradient-to-br from-indigo-800 via-indigo-700 to-teal-600 text-white py-14 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-3xl sm:text-5xl font-bold mb-4">
              Achievements
            </h1>
            <p className="text-indigo-100 text-base sm:text-xl max-w-3xl mx-auto">
              Celebrating excellence, dedication, and success
            </p>
          </motion.div>
        </div>
      </section>

      {/* ================= STATS ================= */}
      <section className="py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-12 sm:mb-16">
            {stats.map((stat, index) => (
              <div
                key={index}
                className={`${stat.color} text-white rounded-2xl p-4 sm:p-6 text-center shadow-md`}
              >
                <div className="text-2xl sm:text-4xl font-bold mb-1">
                  {stat.number}
                </div>
                <div className="text-xs sm:text-base opacity-90">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* ================= RECENT ================= */}
          <div className="text-center mb-10 sm:mb-12">
            <h2 className="text-2xl sm:text-4xl font-bold text-gray-900 mb-3">
              Recent Achievements
            </h2>
            <p className="text-sm sm:text-lg text-gray-600 max-w-2xl mx-auto">
              Our students continue to shine in academics, sports, and
              co-curricular activities
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition p-4 sm:p-6"
              >
                <div className="flex items-start gap-4">
                  <div
                    className={`bg-gradient-to-br ${achievement.color} w-12 h-12 sm:w-14 sm:h-14 rounded-lg flex items-center justify-center`}
                  >
                    <achievement.icon className="h-6 w-6 sm:h-7 sm:w-7 text-white" />
                  </div>

                  <div>
                    <span className="text-xs sm:text-sm font-semibold text-gray-500 block mb-1">
                      {achievement.year}
                    </span>
                    <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-1">
                      {achievement.title}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {achievement.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= BUILDING CHAMPIONS ================= */}
      <section className="py-14 sm:py-20 bg-gradient-to-br from-indigo-50 via-sky-50 to-teal-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-12 items-center">
            <img
              loading="lazy"
              src="https://images.pexels.com/photos/14363874/pexels-photo-14363874.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Award ceremony"
              className="rounded-3xl shadow-lg w-full max-h-[320px] sm:max-h-[420px] object-cover"
            />

            <div className="text-center lg:text-left">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                Building Champions
              </h2>
              <p className="text-sm sm:text-lg text-gray-600 mb-4 leading-relaxed">
                At Mother's International Academy, we nurture talent and help
                students achieve excellence beyond academics.
              </p>
              <p className="text-sm sm:text-lg text-gray-600 mb-6 leading-relaxed">
                With expert mentoring, modern facilities, and continuous
                encouragement, our students thrive at every level.
              </p>

              <div className="space-y-3 text-sm sm:text-base">
                {[
                  "Expert guidance and mentorship",
                  "Regular competitions and exhibitions",
                  "Recognition and awards ceremonies",
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-center lg:justify-start gap-3"
                  >
                    <div className="w-2 h-2 bg-indigo-600 rounded-full" />
                    <p className="text-gray-700">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Achievements;
