import { motion } from 'framer-motion';
import { Calendar, FileText, AlertCircle, Bell } from 'lucide-react';

const Notices = () => {
  const notices = [
    {
      date: '2025-01-10',
      title: 'Admissions Open for Session 2025-2026',
      description:
        'Admissions are now open for all classes. Parents are requested to complete the online application form at the earliest.',
      type: 'important',
      icon: AlertCircle,
    },
    {
      date: '2025-01-08',
      title: 'Annual Sports Day',
      description:
        'Annual Sports Day will be held on January 25, 2025. All students are required to participate.',
      type: 'event',
      icon: Calendar,
    },
    {
      date: '2025-01-05',
      title: 'Parent-Teacher Meeting',
      description:
        'PTM scheduled for January 20, 2025. Parents are requested to meet class teachers to discuss student progress.',
      type: 'meeting',
      icon: Bell,
    },
    {
      date: '2025-01-03',
      title: 'Winter Break Schedule',
      description:
        'School will remain closed from January 15-22 for winter break. Classes will resume on January 23.',
      type: 'holiday',
      icon: FileText,
    },
    {
      date: '2024-12-28',
      title: 'Science Exhibition',
      description:
        'Annual Science Exhibition will be held on February 5, 2025. Students are encouraged to prepare innovative projects.',
      type: 'event',
      icon: Calendar,
    },
    {
      date: '2024-12-25',
      title: 'Fee Payment Reminder',
      description:
        'Last date for fee payment for Q4 is January 15, 2025. Late fee will be applicable after the due date.',
      type: 'important',
      icon: AlertCircle,
    },
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'important':
        return 'from-red-500 to-red-600';
      case 'event':
        return 'from-primary-600 to-teal-600';
      case 'meeting':
        return 'from-yellow-500 to-yellow-600';
      case 'holiday':
        return 'from-teal-500 to-teal-600';
      default:
        return 'from-gray-500 to-gray-600';
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    <div>
      <section className="bg-gradient-to-br from-primary-600 to-teal-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">Notice Board</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Stay updated with the latest announcements and important dates
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            {notices.map((notice, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow border-l-4 border-primary-600"
              >
                <div className="flex items-start space-x-4">
                  <div
                    className={`bg-gradient-to-br ${getTypeColor(
                      notice.type
                    )} w-14 h-14 rounded-lg flex items-center justify-center flex-shrink-0`}
                  >
                    <notice.icon className="h-7 w-7 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-semibold text-gray-500 flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        {formatDate(notice.date)}
                      </span>
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-semibold text-white capitalize ${
                          notice.type === 'important'
                            ? 'bg-red-500'
                            : notice.type === 'event'
                            ? 'bg-primary-600'
                            : notice.type === 'meeting'
                            ? 'bg-yellow-500'
                            : 'bg-teal-500'
                        }`}
                      >
                        {notice.type}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {notice.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {notice.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <Bell className="h-12 w-12 text-primary-600 mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Stay Connected
              </h2>
              <p className="text-gray-600 mb-6">
                Want to receive notices directly to your email? Subscribe to our
                notification service.
              </p>
              <button className="px-8 py-3 bg-gradient-to-r from-primary-600 to-teal-600 text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-200">
                Subscribe to Notifications
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Notices;