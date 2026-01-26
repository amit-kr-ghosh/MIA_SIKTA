import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import {
  Calendar,
  FileText,
  AlertCircle,
  Bell,
  ChevronDown,
} from 'lucide-react';
import { supabase } from '../lib/supabaseClient';

/* ---------------- TYPES ---------------- */
type Notice = {
  id: number;
  title: string;
  description: string;
  type: 'important' | 'event' | 'meeting' | 'holiday';
  notice_date: string; // ✅ correct DB column
};
/* --------------------------------------- */

const iconByType = {
  important: AlertCircle,
  event: Calendar,
  meeting: Bell,
  holiday: FileText,
};

const Notices = () => {
  const [expanded, setExpanded] = useState<number | null>(null);
  const [notices, setNotices] = useState<Notice[]>([]);
  const [loading, setLoading] = useState(true);

  /* ---------------- FETCH NOTICES ---------------- */
  useEffect(() => {
    const fetchNotices = async () => {
      const { data, error } = await supabase
        .from('notices')
        .select('*')
        .order('notice_date', { ascending: false });

      if (error) {
        console.error('Failed to fetch notices:', error);
      } else {
        setNotices(data || []);
      }

      setLoading(false);
    };

    fetchNotices();
  }, []);
  /* ------------------------------------------------ */

  const stylesByType = (type: Notice['type']) => {
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
      <section className="bg-gradient-to-br from-indigo-800 via-indigo-700 to-teal-600 text-white py-14 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-3xl sm:text-5xl font-bold mb-4">
              Notice Board
            </h1>
            <p className="text-indigo-100 text-base sm:text-xl max-w-3xl mx-auto">
              Important updates, events & announcements
            </p>
          </motion.div>
        </div>
      </section>

      {/* NOTICES */}
      <section className="py-10 sm:py-16">
        <div className="max-w-4xl mx-auto px-4 space-y-4 sm:space-y-6">

          {loading && (
            <p className="text-center text-gray-500">
              Loading notices...
            </p>
          )}

          {!loading && notices.length === 0 && (
            <p className="text-center text-gray-500">
              No notices available.
            </p>
          )}

          {notices.map((notice, index) => {
            const styles = stylesByType(notice.type);
            const isOpen = expanded === index;
            const Icon = iconByType[notice.type];

            return (
              <motion.div
                key={notice.id}
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
                  className={`${styles.bg} ml-1.5 rounded-2xl p-4 sm:p-6 shadow-sm hover:shadow-md transition`}
                >
                  <div className="flex items-start gap-4">
                    {/* Icon */}
                    <div
                      className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br ${styles.accent} flex items-center justify-center`}
                    >
                      <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-2 mb-1">
                        <span className="text-xs text-gray-500 flex items-center">
                          <Calendar className="w-4 h-4 mr-1" />
                          {formatDate(notice.notice_date)}
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
    </div>
  );
};

export default Notices;
