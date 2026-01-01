import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-white text-lg font-bold mb-4">
              Mothers International Academy
            </h3>
            <p className="text-sm mb-4">
              Empowering young minds with quality education and values for a
              brighter future.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-primary-400 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-primary-400 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-primary-400 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-primary-400 transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/about" className="hover:text-primary-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/academics" className="hover:text-primary-400 transition-colors">
                  Academics
                </Link>
              </li>
              <li>
                <Link to="/admissions" className="hover:text-primary-400 transition-colors">
                  Admissions
                </Link>
              </li>
              <li>
                <Link to="/facilities" className="hover:text-primary-400 transition-colors">
                  Facilities
                </Link>
              </li>
              <li>
                <Link to="/achievements" className="hover:text-primary-400 transition-colors">
                  Achievements
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white text-lg font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/gallery" className="hover:text-primary-400 transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <Link to="/notices" className="hover:text-primary-400 transition-colors">
                  Notices
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-primary-400 transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white text-lg font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-primary-400 flex-shrink-0 mt-0.5" />
                <span>123 Education Street, New Delhi, India</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-primary-400 flex-shrink-0" />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-primary-400 flex-shrink-0" />
                <span>info@mothersinternational.edu</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm">
          <p>
            &copy; {new Date().getFullYear()} Mothers International Academy. All
            rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;