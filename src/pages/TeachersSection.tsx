import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";

const teachers = [
  {
    name: "Mrs. Anjali Verma",
    subject: "English",
    role: "Senior Educator",
    image: "https://images.unsplash.com/photo-1598257006458-087169a1f08d",
  },
  {
    name: "Mr. Rahul Sharma",
    subject: "Mathematics",
    role: "HOD – Maths",
    image: "https://images.unsplash.com/photo-1607746882042-944635dfe10e",
  },
  {
    name: "Ms. Pooja Singh",
    subject: "Science",
    role: "Senior Faculty",
    image: "https://images.unsplash.com/photo-1586297135537-94bc9ba060aa",
  },
  {
    name: "Mr. Suresh Kumar",
    subject: "Social Science",
    role: "Faculty",
    image: "https://images.unsplash.com/photo-1527980965255-d3b416303d12",
  },
];

const TeachersSection = () => {
  const [index, setIndex] = useState(0);
  const [imageLoaded, setImageLoaded] = useState(true);

  const next = () => {
    setImageLoaded(false);
    setIndex((i) => (i + 1) % teachers.length);
  };

  const prev = () => {
    setImageLoaded(false);
    setIndex((i) => (i - 1 + teachers.length) % teachers.length);
  };

  /* 🔄 AUTO SCROLL (waits for image) */
  useEffect(() => {
    const timer = setInterval(() => {
      setImageLoaded(false);
      setIndex((i) => (i + 1) % teachers.length);
    }, 3200); // slightly fast but readable

    return () => clearInterval(timer);
  }, []);

  const teacher = teachers[index];

  return (
    <section className="py-16 bg-black text-white">
      <div className="max-w-6xl mx-auto px-4 text-center">
        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl font-extrabold mb-3">
          Meet Our Teachers
        </h2>

        <p className="text-gray-400 max-w-xl mx-auto mb-10 text-sm sm:text-base">
          Experienced, dedicated, and passionate educators shaping young minds
        </p>

        {/* Carousel */}
        <div className="relative flex items-center justify-center">
          {/* Left */}
          <button
            onClick={prev}
            className="hidden sm:flex absolute left-0 p-2 rounded-full bg-white/10 border border-white/20 hover:bg-white/20 transition"
          >
            <ChevronLeft />
          </button>

          {/* Card */}
          <div
            className="
              bg-white/5
              backdrop-blur-xl
              border border-white/10
              rounded-2xl
              shadow-xl
              overflow-hidden
              max-w-xs
              w-full
            "
          >
            {/* IMAGE */}
            <div className="h-56 sm:h-64 w-full bg-black/20">
              <img
                src={teacher.image}
                alt={teacher.name}
                onLoad={() => setImageLoaded(true)}
                className={`w-full h-full object-cover transition-opacity duration-200 ${
                  imageLoaded ? "opacity-100" : "opacity-0"
                }`}
              />
            </div>

            {/* TEXT */}
            <div className="p-4 text-center">
              <h3 className="text-lg font-bold">{teacher.name}</h3>
              <p className="text-indigo-400 font-semibold text-sm mt-1">
                {teacher.subject}
              </p>
              <p className="text-gray-400 text-xs mt-1">
                {teacher.role}
              </p>
            </div>
          </div>

          {/* Right */}
          <button
            onClick={next}
            className="hidden sm:flex absolute right-0 p-2 rounded-full bg-white/10 border border-white/20 hover:bg-white/20 transition"
          >
            <ChevronRight />
          </button>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-6">
          {teachers.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                setImageLoaded(false);
                setIndex(i);
              }}
              className={`h-2 w-2 rounded-full ${
                i === index ? "bg-indigo-500" : "bg-gray-600"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeachersSection;
