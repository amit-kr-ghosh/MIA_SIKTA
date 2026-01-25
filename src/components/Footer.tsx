import { Link } from "react-router-dom";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Youtube,
} from "lucide-react";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-b from-gray-900 via-gray-900 to-black text-gray-300 overflow-hidden">
      {/* subtle glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,180,0,0.12),transparent_60%)]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
        {/* TOP GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 text-center sm:text-left">
          
          {/* BRAND */}
          <div className="space-y-4 flex flex-col items-center sm:items-start">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-2xl bg-white shadow-lg">
                <img
                  src="/images/logo/logo.png"
                  alt="MIA Logo"
                  className="h-12 w-12 object-contain"
                />
              </div>
              <h3 className="text-white text-lg sm:text-xl font-extrabold leading-tight">
                Mothers <br className="sm:hidden" />
                International Academy
              </h3>
            </div>

            <p className="text-sm leading-relaxed text-gray-400 max-w-xs">
              Empowering young minds with excellence, values, leadership and
              lifelong learning.
            </p>

            <div className="flex gap-3 pt-2 justify-center sm:justify-start">
              {[Facebook, Twitter, Instagram, Youtube].map((Icon, i) => (
                <motion.a
                  key={i}
                  whileHover={{ scale: 1.15, y: -2 }}
                  href="#"
                  className="p-2 rounded-lg bg-white/10 hover:bg-gradient-to-br hover:from-orange-400 hover:to-yellow-400 hover:text-gray-900 transition"
                >
                  <Icon className="h-5 w-5" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h4 className="text-white text-lg font-bold mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm">
              {[
                { name: "About Us", path: "/about" },
                { name: "Academics", path: "/academics" },
                { name: "Admissions", path: "/admissions" },
                { name: "Facilities", path: "/facilities" },
                { name: "Achievements", path: "/achievements" },
              ].map((l) => (
                <li key={l.path}>
                  <Link
                    to={l.path}
                    className="hover:text-orange-400 transition"
                  >
                    {l.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* RESOURCES */}
          <div>
            <h4 className="text-white text-lg font-bold mb-4">
              Resources
            </h4>
            <ul className="space-y-2 text-sm">
              {[
                { name: "Gallery", path: "/gallery" },
                { name: "Notices", path: "/notices" },
                { name: "Contact Us", path: "/contact" },
              ].map((l) => (
                <li key={l.path}>
                  <Link
                    to={l.path}
                    className="hover:text-orange-400 transition"
                  >
                    {l.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CONTACT */}
          <div className="flex flex-col items-center sm:items-start">
            <h4 className="text-white text-lg font-bold mb-4">
              Contact Info
            </h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-orange-400 mt-0.5" />
                <span>
                  Bhawra, Sikta, West Champaran,<br /> Bihar - 845306
            
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-orange-400" />
                <span>+91 99390 55737</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-orange-400" />
                <span>mahamahatamyadav@gmail.com</span>
              </li>
            </ul>

            {/* CTA */}
            <Link
              to="/admissions"
              className="
                inline-block mt-6
                px-6 py-3
                rounded-xl font-bold
                text-gray-900
                bg-gradient-to-r from-yellow-400 to-orange-500
                shadow-[0_0_20px_rgba(255,180,0,0.6)]
                hover:scale-105 transition
              "
            >
              Apply for Admission →
            </Link>
          </div>
        </div>

        {/* DIVIDER */}
        <div className="border-t border-white/10 mt-12 pt-6 text-center text-xs sm:text-sm text-gray-400">
          <p>
            © {new Date().getFullYear()} Mothers International Academy. All rights
            reserved.
          </p>
          <p className="mt-1 text-gray-500">
            Designed with ❤️ for modern education
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
