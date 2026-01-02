import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from "./components/ScrollToTop";
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Academics from './pages/Academics';
import Facilities from './pages/Facilities';
import Gallery from './pages/Gallery';
import Achievements from './pages/Achievements';
import Notices from './pages/Notices';
import Contact from './pages/Contact';
import Admissions from './pages/Admissions';
import { motion } from 'framer-motion';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <Home />
            </Layout>
          }
        />
        <Route
          path="/about"
          element={
            <Layout>
              <About />
            </Layout>
          }
        />
        <Route
          path="/academics"
          element={
            <Layout>
              <Academics />
            </Layout>
          }
        />
        <Route
          path="/facilities"
          element={
            <Layout>
              <Facilities />
            </Layout>
          }
        />
        <Route
          path="/gallery"
          element={
            <Layout>
              <Gallery />
            </Layout>
          }
        />
        <Route
          path="/achievements"
          element={
            <Layout>
              <Achievements />
            </Layout>
          }
        />
        <Route
          path="/notices"
          element={
            <Layout>
              <Notices />
            </Layout>
          }
        />
        <Route
          path="/contact"
          element={
            <Layout>
                    <section className="bg-gradient-to-br from-primary-600 to-teal-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">Contact Us</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Get in touch with us for any inquiries or assistance
            </p>
          </motion.div> 
        </div>
      </section>
              <Contact />
            </Layout>
          }
        />
        <Route path="/admissions" element={<Admissions />} />
      </Routes>
    </Router>
  );
}

export default App;
