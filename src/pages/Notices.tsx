import { motion } from 'framer-motion';
import { useState } from 'react';
import {
  Calendar,
  FileText,
  AlertCircle,
  Bell,
  ChevronDown,
} from 'lucide-react';

const Notices = () => {
  const [expanded, setExpanded] = useState<number | null>(null);

  const notices = [
    {
      date: '2025-01-10',
      title: 'Admissions Open for Session 2025–2026',
      description:
        'Admissions are now open for all classes. Parents are requested to complete the online application form at the earliest to secure admission.',
      type: 'important',
      icon: AlertCircle,
    },
    {
      date: '2025-01-08',
      title: 'Annual Sports Day',
      description:
        'Annual Sports Day will be held on January 25, 2025. All students are required to participate and be present in proper sports uniform.',
      type: 'event',
      icon: Calendar,
    },
    {
      date: '2025-01-05',
      title: 'Parent-Teacher Meeting',
      description:
        'PTM scheduled for January 20, 2025. Parents are requested to meet class teachers to discuss academic progress and overall development.',
      type: 'meeting',
      icon: Bell,
    },
    {
      date: '2025-01-03',
      title: 'Winter Break Schedule',
      description:
        'School will remain closed from January 15–22 for winter break. Classes will resume on January 23 as per the regular timetable.',
      type: 'holiday',
      icon: FileText,
    },
  ];

  const stylesByType = (type: string) => {
    switch (type) {
      case 'important':
        return {
          bg: 'bg-rose-50',
          accent: 'from-rose-500 to-red-600',
          badge: 'bg-rose-600',
        };
      case 'event':
        return {
          bg: 'bg-indigo-50',
          accent: 'from-indigo-500 to-teal-500',
          badge: 'bg-indigo-600',
        };
      case 'meeting':
        return {
          bg: 'bg-amber-50',
          accent: 'from-amber-400 to-yellow-500',
          badge: 'bg-amber-500',
        };
      case 'holiday':
        return {
          bg: 'bg-teal-50',
          accent: 'from-teal-500 to-emerald-500',
          badge: 'bg-teal-600',
        };
      default:
        return {
          bg: 'bg-gray-50',
          accent: 'from-gray-400 to-gray-500',
          badge: 'bg-gray-500',
        };
    }
  };

  const formatDate = (date: string) =>
    new Date(date).toLocaleDateString('en-IN', {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
    });

  return (
    <div className="bg-white">

      {/* HERO */}
      <section className="bg-gradient-to-br from-indigo-900 via-indigo-800 to-teal-700 text-white py-14 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-3xl sm:text-5xl font-extrabold mb-3">
            Notice Board
          </h1>
          <p className="text-sm sm:text-xl text-indigo-100 max-w-3xl mx-auto">
            Important updates, events & announcements
          </p>
        </div>
      </section>

      {/* NOTICES */}
      <section className="py-10 sm:py-16">
        <div className="max-w-4xl mx-auto px-4 space-y-4 sm:space-y-6">
          {notices.map((notice, index) => {
            const styles = stylesByType(notice.type);
            const isOpen = expanded === index;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="relative"
              >
                {/* Accent bar */}
                <div
                  className={`absolute left-0 top-0 h-full w-1.5 rounded-l-2xl bg-gradient-to-b ${styles.accent}`}
                />

                {/* Card */}
                <div
                  className={`
                    ${styles.bg}
                    ml-1.5
                    rounded-2xl
                    p-4 sm:p-6
                    shadow-sm hover:shadow-md
                    transition
                    flex flex-col
                    min-h-[145px] sm:min-h-[175px]
                  `}
                >
                  <div className="flex items-start gap-4">
                    {/* Icon */}
                    <div
                      className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br ${styles.accent} flex items-center justify-center flex-shrink-0`}
                    >
                      <notice.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-2 mb-1">
                        <span className="text-xs text-gray-500 flex items-center">
                          <Calendar className="w-4 h-4 mr-1" />
                          {formatDate(notice.date)}
                        </span>
                        <span
                          className={`px-2.5 py-0.5 rounded-full text-[10px] sm:text-xs font-semibold text-white ${styles.badge}`}
                        >
                          {notice.type}
                        </span>
                      </div>

                      <h3 className="text-sm sm:text-lg font-bold text-gray-900 mb-1">
                        {notice.title}
                      </h3>

                      <p
                        className={`text-sm text-gray-700 leading-relaxed ${
                          isOpen ? '' : 'line-clamp-2'
                        }`}
                      >
                        {notice.description}
                      </p>

                      {/* Read more */}
                      <button
                        onClick={() =>
                          setExpanded(isOpen ? null : index)
                        }
                        className="mt-2 text-indigo-600 text-xs sm:text-sm font-semibold flex items-center gap-1 hover:underline"
                      >
                        {isOpen ? 'Read less' : 'Read more'}
                        <ChevronDown
                          className={`w-4 h-4 transition-transform ${
                            isOpen ? 'rotate-180' : ''
                          }`}
                        />
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* SUBSCRIBE */}
      <section className="py-14 sm:py-20 bg-gradient-to-br from-indigo-50 to-teal-50">
        <div className="max-w-xl mx-auto px-4 text-center">
          <div className="bg-white rounded-3xl shadow-lg p-6 sm:p-8">
            <Bell className="w-10 h-10 text-indigo-600 mx-auto mb-4" />
            <h2 className="text-lg sm:text-2xl font-bold mb-2">
              Stay Connected
            </h2>
            <p className="text-sm sm:text-base text-gray-600 mb-5">
              Subscribe to receive important notices directly.
            </p>
            <button className="px-6 py-3 bg-gradient-to-r from-indigo-600 to-teal-600 text-white rounded-xl font-semibold hover:shadow-lg transition">
              Subscribe
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Notices;
