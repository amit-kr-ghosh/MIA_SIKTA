import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import ScrollToTop from "./components/ScrollToTop";
import Layout from "./components/Layout";

import Home from "./pages/Home";
import About from "./pages/About";
import Academics from "./pages/Academics";
import Facilities from "./pages/Facilities";
import Gallery from "./pages/Gallery";
import Achievements from "./pages/Achievements";
import Notices from "./pages/Notices";
import Contact from "./pages/Contact";
import Admissions from "./pages/Admissions";

/* ---------------- LOADING SCREEN ---------------- */
const LoadingScreen = ({ loading }: { loading: boolean }) => (
  <AnimatePresence>
    {loading && (
      <motion.div
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        className="
          fixed inset-0 z-[9999]
          flex flex-col items-center justify-center
          bg-gradient-to-br from-amber-100 via-white to-indigo-100
        "
      >
        <motion.img
          src="/images/logo/logo1.png"
          alt="Loading"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="h-20 w-20 mb-6"
        />

        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-lg font-bold text-gray-800 tracking-wide"
        >
          Mothers International Academy
        </motion.h2>

        <div className="mt-6 w-56 h-2 bg-gray-200 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-amber-400 to-amber-600"
            initial={{ x: "-100%" }}
            animate={{ x: "100%" }}
            transition={{
              repeat: Infinity,
              duration: 1.2,
              ease: "linear",
            }}
          />
        </div>
      </motion.div>
    )}
  </AnimatePresence>
);
/* ------------------------------------------------ */

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const onLoad = () => {
      setTimeout(() => setLoading(false), 400); // smooth exit
    };

    if (document.readyState === "complete") {
      onLoad();
    } else {
      window.addEventListener("load", onLoad);
    }

    return () => window.removeEventListener("load", onLoad);
  }, []);

  return (
    <Router>
      <LoadingScreen loading={loading} />

      {!loading && (
        <>
          <ScrollToTop />

          <Routes>
            <Route path="/" element={<Layout><Home /></Layout>} />
            <Route path="/about" element={<Layout><About /></Layout>} />
            <Route path="/academics" element={<Layout><Academics /></Layout>} />
            <Route path="/facilities" element={<Layout><Facilities /></Layout>} />
            <Route path="/gallery" element={<Layout><Gallery /></Layout>} />
            <Route path="/achievements" element={<Layout><Achievements /></Layout>} />
            <Route path="/notices" element={<Layout><Notices /></Layout>} />

            <Route
              path="/contact"
              element={
                <Layout>
                  {/* ================= HERO ================= */}
                        <section className="bg-gradient-to-br from-indigo-900 via-indigo-800 to-teal-700 text-white py-14 sm:py-20">
                          <div className="max-w-7xl mx-auto px-4 text-center">
                            <h1 className="text-3xl sm:text-5xl font-extrabold mb-3">
                              Contact Us
                            </h1>
                            <p className="text-sm sm:text-xl text-indigo-100 max-w-3xl mx-auto">
                              We’re here to help. Reach out to us anytime.
                            </p>
                          </div>
                        </section>
                  <Contact />
                </Layout>
              }
            />

            <Route path="/admissions" element={<Admissions />} />
          </Routes>
        </>
      )}
    </Router>
  );
}

export default App;
