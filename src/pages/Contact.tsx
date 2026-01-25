import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
    });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="bg-white">

      

      {/* ================= CONTENT ================= */}
      <section className="py-12 sm:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-14">

            {/* LEFT: INFO + MAP */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
                  Get In Touch
                </h2>

                <div className="space-y-5">
                  {/* Address */}
                  <div className="flex items-start gap-4 bg-white p-4 rounded-2xl shadow-sm">
                    <div className="bg-emerald-100 p-3 rounded-xl">
                      <MapPin className="h-6 w-6 text-emerald-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Address</h3>
                      <p className="text-sm sm:text-base text-gray-600">
                        Bhawra, Sikta, West Champaran, Bihar – 845306
                      </p>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-start gap-4 bg-white p-4 rounded-2xl shadow-sm">
                    <div className="bg-indigo-100 p-3 rounded-xl">
                      <Phone className="h-6 w-6 text-indigo-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Phone</h3>
                      <p className="text-sm sm:text-base text-gray-600">
                        +91 99390 55737
                      </p>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start gap-4 bg-white p-4 rounded-2xl shadow-sm">
                    <div className="bg-amber-100 p-3 rounded-xl">
                      <Mail className="h-6 w-6 text-amber-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Email</h3>
                      <p className="text-sm sm:text-base text-gray-600 break-all">
                        mahamahatamyadav@gmail.com
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* MAP */}
              <div className="rounded-2xl overflow-hidden h-56 sm:h-64 w-full shadow-md">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6432.302199939593!2d84.649634!3d27.031346!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39935f07372cbfe1%3A0xb9170f0d157fa3a4!2sMother's%20International%20Academy%20Bhawra%2Csikta!5e1!3m2!1sen!2sin!4v1767300864171!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="School Location"
                />
              </div>
            </motion.div>

            {/* RIGHT: FORM */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="bg-white shadow-lg rounded-3xl p-6 sm:p-8">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">
                  Send Us a Message
                </h3>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-indigo-500 outline-none"
                    required
                  />

                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email Address"
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-indigo-500 outline-none"
                    required
                  />

                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Phone Number"
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-indigo-500 outline-none"
                    required
                  />

                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Subject"
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-indigo-500 outline-none"
                    required
                  />

                  <textarea
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your Message..."
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-indigo-500 outline-none resize-none"
                    required
                  />

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-indigo-600 to-teal-600 text-white font-semibold py-3 rounded-xl flex items-center justify-center gap-2 hover:shadow-lg transition"
                  >
                    <Send className="h-5 w-5" />
                    <span>Send Message</span>
                  </button>
                </form>
              </div>
            </motion.div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
