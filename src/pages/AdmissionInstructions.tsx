import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

interface Props {
  open: boolean;
  onClose: () => void;
}

const AdmissionInstructions = ({ open, onClose }: Props) => {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="
            fixed inset-0 z-[100]
            bg-black/60
            flex items-center justify-center
            px-3
          "
        >
          <motion.div
            initial={{ scale: 0.95, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.95, y: 20 }}
            transition={{ type: "spring", damping: 22 }}
            className="
              relative
              w-full max-w-4xl
              bg-yellow-400
              rounded-2xl
              shadow-2xl
              p-4 sm:p-6
            "
          >
            {/* CLOSE */}
            <button
              onClick={onClose}
              className="
                absolute top-3 right-3
                bg-white rounded-full p-2
                shadow hover:scale-105 transition
              "
            >
              <X size={18} />
            </button>

            {/* HEADER */}
            <h2 className="text-xl sm:text-2xl font-extrabold text-center mb-3">
              Admission Instructions
            </h2>

            {/* CONTENT */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm sm:text-base">
              {/* LEFT */}
              <div className="bg-yellow-300 rounded-xl p-4">
                <h3 className="font-bold mb-2">How to Apply</h3>

                <ul className="list-disc ml-5 space-y-1">
                  <li>Fill online admission form</li>
                  <li>Upload student photograph</li>
                  <li>Print 2 copies after submission</li>
                  <li>Submit at school on given date</li>
                </ul>

                <h4 className="font-bold mt-3 mb-1">Important Notes</h4>
                <ul className="list-disc ml-5 space-y-1">
                  <li>Bring required documents</li>
                  <li>Both parents must visit</li>
                  <li>No late submissions</li>
                  <li>Seats are limited</li>
                </ul>
              </div>

              {/* RIGHT */}
              <div className="bg-green-600 text-white rounded-xl p-4 flex flex-col justify-between">
                <div>
                  <h3 className="font-bold mb-2">Bank Details</h3>

                  <p>
                    <b>Bank:</b> PNB, Bettiah
                  </p>
                  <p>
                    <b>A/C Name:</b> Mother's Intl. Academy
                  </p>
                  <p>
                    <b>A/C No:</b> 191920100000252
                  </p>
                  <p>
                    <b>IFSC:</b> PUNB0223910
                  </p>
                  <p>
                    <b>Contact:</b> 9939055737
                  </p>
                </div>

                <button
                  onClick={onClose}
                  className="
                    mt-3
                    w-full
                    bg-white
                    text-green-700
                    font-bold
                    py-2
                    rounded-lg
                    hover:shadow-lg transition
                  "
                >
                  Proceed to Application
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default AdmissionInstructions;
