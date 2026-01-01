import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';
import { useState } from 'react';
import { Send } from 'lucide-react';

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
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

          {/* LEFT SIDE INFO */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Get In Touch</h2>

            <div className="space-y-6 mb-10">
              <div className="flex items-start gap-4">
                <div className="bg-green-100 p-3 rounded-xl">
                  <MapPin className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Address</h3>
                  <p className="text-gray-600">
                    Bhawra, Sikta, West Champaran, Bihar - 845306
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-blue-100 p-3 rounded-xl">
                  <Phone className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Phone</h3>
                  <p className="text-gray-600">+91 9939055737</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-yellow-100 p-3 rounded-xl">
                  <Mail className="h-6 w-6 text-yellow-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Email</h3>
                  <p className="text-gray-600">mahamahatamyadav@gmail.com</p>
                </div>
              </div>
            </div>

            {/* IF RAME - UPDATED MAP */}
            <div className="rounded-xl overflow-hidden h-64 w-full shadow-md">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6432.302199939593!2d84.649634!3d27.031346!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39935f07372cbfe1%3A0xb9170f0d157fa3a4!2sMother's%20International%20Academy%20Bhawra%2Csikta!5e1!3m2!1sen!2sin!4v1767300864171!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="School Location"
              ></iframe>
            </div>
          </motion.div>

          {/* RIGHT SIDE - FORM */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="bg-white shadow-lg rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Send Us A Message</h3>

              <form onSubmit={handleSubmit} className="space-y-4">

                <input type="text" name="name" value={formData.name} onChange={handleChange}
                  placeholder="Your Name"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500"
                  required
                />

                <input type="email" name="email" value={formData.email} onChange={handleChange}
                  placeholder="Email"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500"
                  required
                />

                <input type="tel" name="phone" value={formData.phone} onChange={handleChange}
                  placeholder="Phone Number"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500"
                  required
                />

                <input type="text" name="subject" value={formData.subject} onChange={handleChange}
                  placeholder="Subject"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500"
                  required
                />

                <textarea name="message" rows={4} value={formData.message} onChange={handleChange}
                  placeholder="Your Message..."
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 resize-none"
                  required
                />

                <button type="submit"
                  className="w-full bg-gradient-to-r from-green-600 to-emerald-600 text-white font-semibold py-3 rounded-lg flex items-center justify-center space-x-2 hover:opacity-90"
                >
                  <span>Send Message</span>
                  <Send className="h-5 w-5" />
                </button>

              </form>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
