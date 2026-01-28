import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { X, Search } from "lucide-react";
import { supabase } from "../lib/supabaseClient";

type GalleryFolder = {
  name: string;
  cover: string;
  images: string[];
};

const BUCKET = "gallery";

/* 🔥 REAL FOLDERS IN SUPABASE */
const FOLDERS = [
  "building",
  "children_day",
  "cleanliness_drive",
  "debate",
  "olympiad",
  "patna_tour",
  "rangoli",
  "school",
];

const Gallery = () => {
  const [folders, setFolders] = useState<GalleryFolder[]>([]);
  const [activeFolder, setActiveFolder] = useState<GalleryFolder | null>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  /* ================= FETCH GALLERY (PARALLEL) ================= */
  useEffect(() => {
    const fetchGallery = async () => {
      setLoading(true);

      const results = await Promise.all(
        FOLDERS.map(async (folder) => {
          const { data: files, error } = await supabase.storage
            .from(BUCKET)
            .list(folder, { limit: 100 });

          if (error || !files) return null;

          const images = files
            .filter((f) => /\.(jpg|jpeg|png|webp)$/i.test(f.name))
            .map(
              (f) =>
                supabase.storage
                  .from(BUCKET)
                  .getPublicUrl(`${folder}/${f.name}`).data.publicUrl
            );

          if (!images.length) return null;

          return {
            name: folder.replace(/_/g, " "),
            cover: images[0],
            images,
          };
        })
      );

      setFolders(results.filter(Boolean) as GalleryFolder[]);
      setLoading(false);
    };

    fetchGallery();
  }, []);

  /* ================= SEARCH ================= */
  const filteredFolders = folders.filter((f) =>
    f.name.toLowerCase().includes(search.toLowerCase())
  );

  /* ================= ESC CLOSE ================= */
  useEffect(() => {
    const esc = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedImage(null);
        setActiveFolder(null);
      }
    };
    window.addEventListener("keydown", esc);
    return () => window.removeEventListener("keydown", esc);
  }, []);

  return (
    <div>
      {/* ================= HERO ================= */}
      <section className="bg-gradient-to-br from-indigo-800 via-indigo-700 to-teal-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl sm:text-5xl font-extrabold mb-4"
          >
            School Gallery
          </motion.h1>
          <p className="text-indigo-100 text-lg max-w-3xl mx-auto">
            Moments captured at Mother’s International Academy
          </p>
        </div>
      </section>

      {/* ================= SEARCH ================= */}
      <div className="max-w-7xl mx-auto px-4 mt-10">
        <div className="relative max-w-md mx-auto">
          <Search className="absolute left-3 top-3.5 w-5 h-5 text-gray-400" />
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search events..."
            className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-indigo-500 outline-none"
          />
        </div>
      </div>

      {/* ================= GALLERY GRID ================= */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          {loading ? (
            <p className="text-center text-gray-500">Loading gallery...</p>
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
              {filteredFolders.map((folder, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.03 }}
                  onClick={() => setActiveFolder(folder)}
                  className="cursor-pointer group"
                >
                  <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg bg-gray-200">
                    <img
                      src={folder.cover}
                      alt={folder.name}
                      loading="lazy"
                      decoding="async"
                      onLoad={(e) =>
                        e.currentTarget.classList.remove("blur-md")
                      }
                      className="
                        w-full h-full object-cover
                        blur-md scale-105
                        transition-all duration-500
                        group-hover:scale-110
                      "
                    />
                    <div className="absolute inset-0 bg-black/50 flex items-end p-4">
                      <h3 className="text-white font-bold text-lg capitalize">
                        {folder.name}
                      </h3>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ================= FOLDER VIEW ================= */}
      <AnimatePresence>
        {activeFolder && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm overflow-y-auto"
          >
            <div className="max-w-7xl mx-auto px-4 py-10">
              <button
                onClick={() => setActiveFolder(null)}
                className="text-white mb-6 flex items-center gap-2"
              >
                <X /> Back
              </button>

              <h2 className="text-white text-3xl font-bold mb-6 capitalize">
                {activeFolder.name}
              </h2>

              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
                {activeFolder.images.map((img, i) => (
                  <div
                    key={i}
                    onClick={() => setSelectedImage(img)}
                    className="cursor-pointer aspect-[4/3] rounded-xl overflow-hidden bg-gray-800"
                  >
                    <img
                      src={img}
                      loading="lazy"
                      decoding="async"
                      onLoad={(e) =>
                        e.currentTarget.classList.remove("blur-md")
                      }
                      className="
                        w-full h-full object-cover
                        blur-md scale-105
                        transition-all duration-500
                        hover:scale-110
                      "
                    />
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ================= IMAGE MODAL ================= */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-black/90 flex items-center justify-center p-4"
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-6 right-6 text-white"
            >
              <X className="w-8 h-8" />
            </button>

            <motion.img
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              src={selectedImage}
              className="max-w-[90vw] max-h-[85vh] rounded-2xl object-contain"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Gallery;
