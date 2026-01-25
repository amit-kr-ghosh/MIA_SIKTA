import { motion, AnimatePresence } from "framer-motion";

const LoadingScreen = ({ isLoading }: { isLoading: boolean }) => {
  return (
    <AnimatePresence>
      {isLoading && (
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
          {/* LOGO */}
          <motion.img
            src="/images/logo/logo.png"
            alt="Loading"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="h-20 w-20 mb-6"
          />

          {/* TEXT */}
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-lg font-bold text-gray-800 tracking-wide"
          >
            Mothers International Academy
          </motion.h2>

          {/* LOADER BAR */}
          <div className="mt-6 w-52 h-2 bg-gray-200 rounded-full overflow-hidden">
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
};

export default LoadingScreen;
