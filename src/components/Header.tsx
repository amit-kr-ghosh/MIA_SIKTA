import { Link, useLocation } from "react-router-dom";
import { Menu, X, GraduationCap } from "lucide-react";
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
    <header className="backdrop-blur-xl bg-white/70 shadow-[0_4px_30px_rgba(0,0,0,0.08)] sticky top-0 z-50 border-b border-white/20">
      <div className="max-w-7xl mx-auto px-4 lg:px-5">
        <div className="flex items-center justify-between h-20">

         
          <Link to="/" className="flex items-center space-x-3">
           
              <img className="h-20 w-20 object-contain" src="images/logo1.png" alt="MIA Logo" />
            
            <div>
              <h1 className="text-xl font-extrabold tracking-wide bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
                Mothers International Academy
              </h1>
              <p className="text-xs text-gray-600 font-medium tracking-wide">CBSE +2 School</p>
            </div>
          </Link>

          {/* NAV LINKS */}
          <nav className="hidden lg:flex items-center space-x-2">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300 hover:shadow-md ${
                  isActive(link.path)
                    ? "bg-gradient-to-r from-violet-600 to-indigo-500 text-white shadow-lg scale-105"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                {link.name}
              </Link>
            ))}

            {/* ⭐ Upgraded Apply Now Button */}
           <Link
  to="/admissions"
  className="ml-4 px-6 py-2 font-bold rounded-xl relative overflow-hidden
  bg-gradient-to-br from-amber-400 via-amber-500 to-amber-600 text-gray-900
  shadow-[0_0_20px_rgba(255,200,0,0.6)]
  border-2 border-amber-300 animate-[pulse_2s_infinite]
  before:absolute before:inset-0 before:bg-amber-300/40 before:blur-xl before:animate-[glow_2s_infinite]
  hover:scale-110 hover:shadow-[0_0_35px_rgba(255,200,0,0.8)]
  transition-all duration-300"
>
  Apply Now !
</Link>

          </nav>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition"
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
            transition={{ duration: 0.4 }}
            className="lg:hidden bg-white/90 backdrop-blur-xl border-t border-gray-200 shadow-xl"
          >
            <nav className="px-6 py-6 space-y-3 text-center">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block py-3 text-base font-semibold rounded-lg transition-all duration-300 ${
                    isActive(link.path)
                      ? "bg-gradient-to-r from-violet-600 to-indigo-500 text-white shadow-md"
                      : "text-gray-700 bg-gray-50 hover:bg-gray-100"
                  }`}
                >
                  {link.name}
                </Link>
              ))}

              {/* ⭐ Creative Apply Now on Mobile */}
              <Link
  to="/admissions"
  onClick={() => setIsMenuOpen(false)}
  className="block px-4 py-3 text-lg font-extrabold rounded-xl relative overflow-hidden
  bg-gradient-to-br from-amber-400 to-amber-600 text-gray-900
  shadow-[0_0_18px_rgba(255,200,0,0.5)] border border-amber-300
  animate-[pulse_2s_infinite]
  before:absolute before:inset-0 before:bg-amber-200/30 before:blur-xl before:animate-[glow_2s_infinite]
  hover:scale-105 transition-all duration-300"
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
