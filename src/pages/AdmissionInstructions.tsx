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
          className="fixed inset-0 z-[100] bg-black/50 flex items-center justify-center px-4"
        >
          <motion.div
            initial={{ scale: 0.9, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.9, y: 20 }}
            transition={{ type: "spring", damping: 22 }}
            className="relative max-w-5xl w-full bg-yellow-400 rounded-xl shadow-2xl overflow-hidden"
          >
            {/* CLOSE */}
            <button
              onClick={onClose}
              className="absolute top-3 right-3 bg-white rounded-full p-1 shadow"
            >
              <X size={18} />
            </button>

            <div className="grid md:grid-cols-3 gap-4 p-5">
              {/* LEFT */}
              <div className="md:col-span-2 bg-yellow-300 rounded-lg p-4">
                <h2 className="text-xl font-extrabold mb-2">
                  Online Application
                </h2>

                <p className="text-sm mb-3">
                  Please follow these 2 easy steps to apply online for admission
                  in our school.
                </p>

                <ol className="list-decimal ml-5 space-y-2 text-sm">
                  <li>
                    Fill the form and upload a passport size photograph of the
                    candidate.
                  </li>
                  <li>
                    After submitting, print two copies and submit at the school
                    counter at the specified date and time.
                  </li>
                </ol>

                <h3 className="font-bold mt-4 mb-1">Instructions</h3>
                <ol className="list-decimal ml-5 space-y-1 text-sm">
                  <li>Print two copies after submission.</li>
                  <li>
                    Attach Aadhaar / Voter ID / PAN, Birth Certificate & Family
                    photograph.
                  </li>
                  <li>No form accepted after the due date.</li>
                  <li>Both parents must accompany the child.</li>
                  <li>Selection committee decision is final.</li>
                  <li>Limited seats – no guarantee of admission.</li>
                </ol>
              </div>

              {/* RIGHT */}
              <div className="bg-green-600 text-white rounded-lg p-4">
                <h3 className="font-bold mb-3">
                  School Bank Account Details
                </h3>

                <div className="space-y-2 text-sm">
                  <p><b>Bank:</b> Punjab National Bank, Bettiah</p>
                  <p><b>Account Name:</b> Mothers International Academy</p>
                  <p><b>Account No:</b> 191920100000252</p>
                  <p><b>IFSC:</b> PUNB0223910</p>
                  <p><b>Contact:</b> 9939055737</p>
                </div>

                <button
                  onClick={onClose}
                  className="mt-4 w-full bg-white text-green-700 font-bold py-2 rounded-lg"
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
