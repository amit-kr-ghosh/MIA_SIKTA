import { motion } from 'framer-motion';
import { Target, Eye, Heart, Award } from 'lucide-react';

const About = () => {
  return (
    <div>
      <section className="bg-gradient-to-br from-primary-600 to-teal-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">About Us</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Learn about our journey, values, and commitment to educational excellence
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <img
                src="https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="School building"
                className="rounded-2xl shadow-xl"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-lg text-gray-600 mb-4 leading-relaxed">
                Established in 1985, Mothers International Academy has been a beacon
                of educational excellence for over three decades. What started as a
                small initiative has grown into one of the most respected CBSE +2
                schools in the region.
              </p>
              <p className="text-lg text-gray-600 mb-4 leading-relaxed">
                Our journey has been marked by continuous growth, innovation, and an
                unwavering commitment to nurturing young minds. We believe in
                providing not just education, but a holistic learning experience that
                prepares students for life's challenges.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Today, we take pride in our state-of-the-art infrastructure,
                dedicated faculty, and a vibrant community of learners who carry
                forward our legacy of excellence.
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-blue-50 to-teal-50 p-8 rounded-xl"
            >
              <div className="bg-primary-600 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                <Target className="h-7 w-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                To provide quality education that empowers students with knowledge,
                skills, and values necessary to excel in academics and become
                responsible citizens who contribute positively to society.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-gradient-to-br from-teal-50 to-blue-50 p-8 rounded-xl"
            >
              <div className="bg-teal-600 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                <Eye className="h-7 w-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed">
                To be recognized as a leading educational institution that nurtures
                future leaders through innovative teaching methods, character
                development, and a commitment to excellence in all endeavors.
              </p>
            </motion.div>
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
              Principal's Message
            </h2>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-lg p-8 md:p-12"
            >
              <div className="flex flex-col md:flex-row gap-8 items-center mb-8">
                <img
                  src="https://images.pexels.com/photos/5212317/pexels-photo-5212317.jpeg?auto=compress&cs=tinysrgb&w=400"
                  alt="Principal"
                  className="w-32 h-32 rounded-full object-cover shadow-lg"
                />
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-1">
                    Dr. Priya Sharma
                  </h3>
                  <p className="text-gray-600">Principal</p>
                </div>
              </div>
              <p className="text-lg text-gray-600 mb-4 leading-relaxed">
                Dear Parents and Students,
              </p>
              <p className="text-lg text-gray-600 mb-4 leading-relaxed">
                It gives me immense pleasure to welcome you to Mothers International
                Academy. Our school stands as a testament to the belief that
                education is not merely about academic achievement, but about
                nurturing well-rounded individuals.
              </p>
              <p className="text-lg text-gray-600 mb-4 leading-relaxed">
                We are committed to providing an environment where every child can
                discover their potential, develop their talents, and grow into
                confident, compassionate individuals. Our dedicated faculty, modern
                facilities, and proven methodologies ensure that your child receives
                the best education possible.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                I invite you to be part of our journey in shaping the future, one
                student at a time.
              </p>
            </motion.div>
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
              Our Core Values
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Heart,
                title: 'Integrity',
                description: 'Upholding honesty and strong moral principles',
              },
              {
                icon: Award,
                title: 'Excellence',
                description: 'Striving for the highest standards in all we do',
              },
              {
                icon: Target,
                title: 'Innovation',
                description: 'Embracing new ideas and creative thinking',
              },
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-8 bg-gradient-to-br from-blue-50 to-teal-50 rounded-xl"
              >
                <div className="bg-gradient-to-br from-primary-600 to-teal-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;