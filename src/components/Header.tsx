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

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-white/70 border-b border-white/20 shadow-[0_4px_30px_rgba(0,0,0,0.08)]">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-5">
        <div className="flex items-center justify-between h-[72px] sm:h-20">

          {/* LOGO + TITLE */}
          <Link
            to="/"
            className="flex items-center gap-2 sm:gap-3 min-w-0 max-w-[85%]"
          >
            <img
              src="/images/logo1.png"
              alt="MIA Logo"
              className="h-12 w-12 sm:h-14 sm:w-14 lg:h-18 lg:w-18 object-contain flex-shrink-0"
            />

            <div className="min-w-0 leading-tight">
              <h1
                className="
                  font-extrabold tracking-wide
                  bg-gradient-to-r from-gray-900 to-gray-600
                  bg-clip-text text-transparent
                  text-[14px] sm:text-[16px] lg:text-[18px]
                  leading-snug
                  break-words
                  line-clamp-2
                "
              >
                Mothers International Academy
              </h1>
              <p className="text-[10px] sm:text-xs text-gray-600 font-medium tracking-wide">
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
                className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300 hover:shadow-md ${
                  isActive(link.path)
                    ? "bg-gradient-to-r from-black to-violet-900 text-white shadow-lg scale-105"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                {link.name}
              </Link>
            ))}

            {/* APPLY NOW (DESKTOP) */}
            <Link
              to="/admissions"
              className="
                ml-4 px-6 py-2 font-bold rounded-xl relative overflow-hidden
                bg-gradient-to-br from-amber-400 via-amber-500 to-amber-600 text-gray-900
                shadow-[0_0_20px_rgba(255,200,0,0.6)]
                border-2 border-amber-300
                animate-[pulse_2s_infinite]
                before:absolute before:inset-0 before:bg-amber-300/40 before:blur-xl
                hover:scale-110 hover:shadow-[0_0_35px_rgba(255,200,0,0.8)]
                transition-all duration-300
              "
            >
              Apply Now !
            </Link>
          </nav>

          {/* MOBILE MENU BUTTON */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition flex-shrink-0"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35 }}
            className="lg:hidden bg-white/95 backdrop-blur-xl border-t border-gray-200 shadow-xl"
          >
            <nav className="px-5 py-6 space-y-3 text-center">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block py-3 text-base font-semibold rounded-lg transition-all duration-300 ${
                    isActive(link.path)
                      ? "bg-gradient-to-r from-black to-violet-900 text-white shadow-md"
                      : "text-gray-700 bg-gray-50 hover:bg-gray-100"
                  }`}
                >
                  {link.name}
                </Link>
              ))}

              {/* APPLY NOW (MOBILE) */}
              <Link
                to="/admissions"
                onClick={() => setIsMenuOpen(false)}
                className="
                  block mt-4 px-4 py-3 text-lg font-extrabold rounded-xl relative overflow-hidden
                  bg-gradient-to-br from-amber-400 to-amber-600 text-gray-900
                  shadow-[0_0_18px_rgba(255,200,0,0.5)]
                  border border-amber-300
                  animate-[pulse_2s_infinite]
                  hover:scale-105 transition-all duration-300
                "
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
