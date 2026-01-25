import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useState } from "react";
import { supabase } from "../lib/supabaseClient";

/* ---------------- TYPES ---------------- */
type ContactFormData = {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
};

type InfoProps = {
  icon: React.ReactNode;
  title: string;
  value: string;
  bg: string;
};
/* -------------------------------------- */

const Contact = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const { error } = await supabase.from("contact_messages").insert([
      {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        subject: formData.subject,
        message: formData.message,
      },
    ]);

    setLoading(false);

    if (error) {
      alert("Something went wrong. Please try again.");
      return;
    }

    alert("Thank you for your message! We will get back to you soon.");

    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
  };

  return (
    <div className="bg-white">
      <section className="py-12 sm:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-14">
            {/* LEFT */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold mb-6">
                  Get In Touch
                </h2>

                <div className="space-y-5">
                  <Info
                    icon={<MapPin className="h-6 w-6 text-emerald-600" />}
                    title="Address"
                    value="Bhawra, Sikta, West Champaran, Bihar – 845306"
                    bg="bg-emerald-100"
                  />
                  <Info
                    icon={<Phone className="h-6 w-6 text-indigo-600" />}
                    title="Phone"
                    value="+91 99390 55737"
                    bg="bg-indigo-100"
                  />
                  <Info
                    icon={<Mail className="h-6 w-6 text-amber-600" />}
                    title="Email"
                    value="mahamahatamyadav@gmail.com"
                    bg="bg-amber-100"
                  />
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
            {/* RIGHT */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="bg-white shadow-lg rounded-3xl p-6 sm:p-8">
                <h3 className="text-xl sm:text-2xl font-bold mb-6">
                  Send Us a Message
                </h3>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    className="w-full px-4 py-3 rounded-xl border focus:ring-2 focus:ring-indigo-500 outline-none"
                    required
                  />

                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email Address"
                    className="w-full px-4 py-3 rounded-xl border focus:ring-2 focus:ring-indigo-500 outline-none"
                    required
                  />

                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Phone Number"
                    className="w-full px-4 py-3 rounded-xl border focus:ring-2 focus:ring-indigo-500 outline-none"
                    required
                  />

                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Subject"
                    className="w-full px-4 py-3 rounded-xl border focus:ring-2 focus:ring-indigo-500 outline-none"
                    required
                  />

                  <textarea
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your Message..."
                    className="w-full px-4 py-3 rounded-xl border focus:ring-2 focus:ring-indigo-500 outline-none resize-none"
                    required
                  />

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-gradient-to-r from-indigo-600 to-teal-600 text-white font-semibold py-3 rounded-xl flex items-center justify-center gap-2 disabled:opacity-70"
                  >
                    <Send className="h-5 w-5" />
                    {loading ? "Sending..." : "Send Message"}
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

/* ---------------- INFO CARD ---------------- */
const Info = ({ icon, title, value, bg }: InfoProps) => (
  <div className="flex items-start gap-4 bg-white p-4 rounded-2xl shadow-sm">
    <div className={`${bg} p-3 rounded-xl`}>{icon}</div>
    <div>
      <h3 className="font-semibold text-gray-900">{title}</h3>
      <p className="text-sm text-gray-600">{value}</p>
    </div>
  </div>
);
/* ------------------------------------------ */

export default Contact;
