import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Academics", path: "/academics" },
    { name: "Facilities", path: "/facilities" },
    { name: "Gallery", path: "/gallery" },
    { name: "Achievements", path: "/achievements" },
    { name: "Notices", path: "/notices" },
    { name: "Contact", path: "/contact" },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-white/70 border-b border-white/20 shadow-[0_4px_30px_rgba(0,0,0,0.08)]">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-5">
        <div className="flex items-center justify-between h-[72px] sm:h-20">

          {/* LOGO */}
          <Link to="/" className="flex items-center gap-3 min-w-0">
            <img
              src="/images/logo/logo1.png"
              alt="MIA Logo"
              className="h-12 w-12 sm:h-14 sm:w-14 object-contain"
            />
            <div className="leading-tight">
              <h1 className="font-extrabold text-sm sm:text-base lg:text-lg bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
                Mothers International Academy
              </h1>
              <p className="text-xs text-gray-600 font-medium">
                CBSE +2 School
              </p>
            </div>
          </Link>

          {/* DESKTOP NAV */}
          <nav className="hidden lg:flex items-center space-x-2">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300 ${
                  isActive(link.path)
                    ? "bg-gradient-to-r from-violet-600 to-indigo-500 text-white shadow-lg"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                {link.name}
              </Link>
            ))}

            <Link
              to="/admissions"
              className="ml-4 px-6 py-2 font-bold rounded-xl bg-gradient-to-br from-amber-400 to-amber-600 shadow-lg animate-pulse"
            >
              Apply Now !
            </Link>
          </nav>

          {/* MOBILE BUTTON */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition"
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* ================= MOBILE MENU ================= */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 22,
            }}
            className="lg:hidden bg-white/95 backdrop-blur-xl border-t shadow-xl"
          >
            <nav className="px-5 py-6 space-y-3 text-center">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.path}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.04 }}
                >
                  <Link
                    to={link.path}
                    onClick={() => setIsMenuOpen(false)}
                    className={`block py-3 rounded-lg font-semibold ${
                      isActive(link.path)
                        ? "bg-gradient-to-r from-violet-600 to-indigo-500 text-white"
                        : "bg-gray-50 text-gray-700"
                    }`}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}

              <Link
                to="/admissions"
                onClick={() => setIsMenuOpen(false)}
                className="block mt-4 py-3 rounded-xl font-extrabold bg-gradient-to-br from-amber-400 to-amber-600 shadow-md"
              >
                Apply Now !
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
