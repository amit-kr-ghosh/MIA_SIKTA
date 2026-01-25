import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import { X } from 'lucide-react';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedImage(null);
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  const images = [
    { url: '/images/gallery/class1.jpeg', title: 'Classroom Moments' },
    { url: '/images/gallery/class2.jpeg', title: 'Students Assembly' },
    { url: '/images/gallery/class3.jpeg', title: 'Learning Together' },
    { url: '/images/gallery/class4.jpeg', title: 'Group Activities' },
    { url: '/images/gallery/class5.jpeg', title: 'School Assembly' },
    { url: '/images/gallery/class6.jpeg', title: 'Student Achievements' },
    { url: '/images/gallery/school_building.jpeg', title: 'School Campus' },
    { url: '/images/gallery/school_building1.jpeg', title: 'Academic Block' },
  ];

  return (
    <div>
      {/* HERO */}
      <section className="bg-gradient-to-br from-indigo-900 via-indigo-800 to-teal-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl sm:text-5xl font-extrabold mb-4"
          >
            School Gallery
          </motion.h1>
          <p className="text-indigo-100 text-lg max-w-3xl mx-auto">
            Real moments from everyday life at Mother’s International Academy
          </p>
        </div>
      </section>

      {/* GALLERY GRID */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
            {images.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="relative overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition cursor-pointer group break-inside-avoid"
                onClick={() => setSelectedImage(image.url)}
              >
                <img
                  src={image.url}
                  alt={image.title}
                  className="w-full object-cover group-hover:scale-105 transition-transform duration-500"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-white font-semibold text-lg">
                      {image.title}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* MODAL */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-6 right-6 text-white hover:scale-110 transition"
            >
              <X className="w-8 h-8" />
            </button>

            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              src={selectedImage}
              className="max-w-[90vw] max-h-[85vh] rounded-2xl shadow-2xl object-contain"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Gallery;
