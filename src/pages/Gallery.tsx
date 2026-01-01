import { motion } from 'framer-motion';
import { useState } from 'react';
import { X } from 'lucide-react';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const images = [
    {
      url: 'https://images.pexels.com/photos/8923166/pexels-photo-8923166.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Classroom Learning',
    },
    {
      url: 'https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'School Building',
    },
    {
      url: 'https://images.pexels.com/photos/5212653/pexels-photo-5212653.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Science Lab',
    },
    {
      url: 'https://images.pexels.com/photos/8364026/pexels-photo-8364026.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Sports Day',
    },
    {
      url: 'https://images.pexels.com/photos/8087871/pexels-photo-8087871.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Art Class',
    },
    {
      url: 'https://images.pexels.com/photos/8613089/pexels-photo-8613089.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Library',
    },
    {
      url: 'https://images.pexels.com/photos/5212317/pexels-photo-5212317.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Annual Function',
    },
    {
      url: 'https://images.pexels.com/photos/8364028/pexels-photo-8364028.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Computer Lab',
    },
    {
      url: 'https://images.pexels.com/photos/159844/cellular-education-classroom-159844.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Study Area',
    },
  ];

  return (
    <div>
      <section className="bg-gradient-to-br from-primary-600 to-teal-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">Gallery</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Glimpses of life at Mothers International Academy
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {images.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="relative group cursor-pointer overflow-hidden rounded-xl shadow-lg"
                onClick={() => setSelectedImage(image.url)}
              >
                <img
                  src={image.url}
                  alt={image.title}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-white font-semibold text-lg">{image.title}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <X className="h-8 w-8" />
          </button>
          <motion.img
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            src={selectedImage}
            alt="Selected"
            className="max-w-full max-h-full object-contain rounded-lg"
          />
        </div>
      )}
    </div>
  );
};

export default Gallery;