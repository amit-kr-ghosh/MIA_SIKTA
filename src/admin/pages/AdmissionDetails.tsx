import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Eye, Trash2, Loader2, X } from "lucide-react";
import { supabase } from "../../lib/supabaseClient";

type AdmissionForm = {
  id: string;
  class?: string;
  student_name?: string;
  dob?: string;
  gender?: string;
  father_name?: string;
  mother_name?: string;
  mobile_number?: string;
  present_address?: string;
  status?: "New" | "Reviewed" | "Approved" | "Rejected";
  created_at: string;
};

const STATUS_STYLES: Record<string, string> = {
  New: "bg-neutral-700 text-neutral-200",
  Reviewed: "bg-amber-500/10 text-amber-400 border border-amber-500/30",
  Approved: "bg-emerald-500/10 text-emerald-400 border border-emerald-500/30",
  Rejected: "bg-red-500/10 text-red-400 border border-red-500/30",
};

export function AdmissionDetails() {
  const [admissions, setAdmissions] = useState<AdmissionForm[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedAdmission, setSelectedAdmission] =
    useState<AdmissionForm | null>(null);
  const [updatingStatus, setUpdatingStatus] = useState<string | null>(null);

  useEffect(() => {
    fetchAdmissions();
  }, []);

  async function fetchAdmissions() {
    try {
      const { data } = await supabase
        .from("admissions_form")
        .select("*")
        .order("created_at", { ascending: false });

      setAdmissions(data || []);
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  }

  async function updateStatus(id: string, status: AdmissionForm["status"]) {
    setUpdatingStatus(id);
    try {
      await supabase
        .from("admissions_form")
        .update({ status })
        .eq("id", id);

      setAdmissions((prev) =>
        prev.map((a) => (a.id === id ? { ...a, status } : a))
      );

      if (selectedAdmission?.id === id) {
        setSelectedAdmission({ ...selectedAdmission, status });
      }
    } catch {
      alert("Failed to update status");
    } finally {
      setUpdatingStatus(null);
    }
  }

  async function deleteAdmission(id: string) {
    if (!confirm("Delete this admission?")) return;

    await supabase.from("admissions_form").delete().eq("id", id);
    setAdmissions((prev) => prev.filter((a) => a.id !== id));
    if (selectedAdmission?.id === id) setSelectedAdmission(null);
  }

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <Loader2 className="w-6 h-6 animate-spin text-emerald-400" />
      </div>
    );
  }

  return (
    <div className="space-y-6">

      {/* HEADER */}
      <div>
        <h1 className="text-3xl font-extrabold text-white">
          Admissions
        </h1>
        <p className="text-neutral-400 text-sm mt-1">
          Manage admission form submissions
        </p>
      </div>

      {/* LIST */}
      {admissions.length === 0 ? (
        <div className="text-center text-neutral-400 py-16">
          No admissions submitted yet
        </div>
      ) : (
        <div className="space-y-4">
          {admissions.map((a) => (
            <div
              key={a.id}
              className="
                bg-neutral-900 border border-neutral-800
                rounded-2xl p-5
                flex flex-col sm:flex-row sm:items-center sm:justify-between
                gap-4
              "
            >
              <div className="space-y-1">
                <p className="text-lg font-semibold text-neutral-100">
                  {a.student_name}
                </p>
                <p className="text-sm text-neutral-400">
                  Class: {a.class || "N/A"}
                </p>
                <p className="text-sm text-neutral-500">
                  {new Date(a.created_at).toLocaleDateString()}
                </p>
              </div>

              <div className="flex items-center gap-3">
                <span
                  className={`px-3 py-1 rounded-full text-xs ${STATUS_STYLES[a.status || "New"]}`}
                >
                  {a.status || "New"}
                </span>

                <button
                  onClick={() => setSelectedAdmission(a)}
                  className="p-2 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-cyan-400"
                >
                  <Eye className="w-4 h-4" />
                </button>

                <button
                  onClick={() => deleteAdmission(a.id)}
                  className="p-2 rounded-lg bg-neutral-800 hover:bg-red-500/10 text-red-400"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* MODAL */}
      <AnimatePresence>
        {selectedAdmission && (
          <>
            <motion.div
              className="fixed inset-0 bg-black/60 z-50"
              onClick={() => setSelectedAdmission(null)}
            />

            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="
                fixed inset-4 sm:inset-auto sm:left-1/2 sm:top-1/2
                sm:-translate-x-1/2 sm:-translate-y-1/2
                bg-neutral-900 border border-neutral-800
                rounded-2xl max-w-xl w-full z-50
              "
            >
              <div className="flex justify-between items-center p-5 border-b border-neutral-800">
                <h2 className="text-lg font-semibold text-white">
                  Admission Details
                </h2>
                <button onClick={() => setSelectedAdmission(null)}>
                  <X className="text-neutral-400" />
                </button>
              </div>

              <div className="p-5 grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-neutral-300">
                <p><b>Name:</b> {selectedAdmission.student_name}</p>
                <p><b>Class:</b> {selectedAdmission.class}</p>
                <p><b>Gender:</b> {selectedAdmission.gender || "N/A"}</p>
                <p><b>DOB:</b> {selectedAdmission.dob || "N/A"}</p>
                <p className="sm:col-span-2">
                  <b>Address:</b> {selectedAdmission.present_address || "N/A"}
                </p>
              </div>

              <div className="p-5 border-t border-neutral-800 flex flex-wrap gap-2">
                {["New", "Reviewed", "Approved", "Rejected"].map((s) => (
                  <button
                    key={s}
                    disabled={updatingStatus === selectedAdmission.id}
                    onClick={() =>
                      updateStatus(
                        selectedAdmission.id,
                        s as AdmissionForm["status"]
                      )
                    }
                    className={`
                      px-4 py-2 rounded-lg text-sm
                      ${STATUS_STYLES[s]}
                      hover:opacity-80
                      disabled:opacity-50
                    `}
                  >
                    {updatingStatus === selectedAdmission.id ? (
                      <Loader2 className="w-4 h-4 animate-spin" />
                    ) : (
                      s
                    )}
                  </button>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
