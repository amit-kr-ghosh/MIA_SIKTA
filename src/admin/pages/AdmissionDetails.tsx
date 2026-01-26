import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Eye, Trash2, Loader2, X, Pencil } from "lucide-react";
import { supabase } from "../../lib/supabaseClient";
import { useNavigate } from "react-router-dom";

/* ---------------- TYPES ---------------- */

type AdmissionForm = {
  id: string;
  branch?: string;
  session?: string;
  class?: string;
  student_name?: string;
  dob?: string;
  gender?: string;
  caste?: string;
  religion?: string;

  father_name?: string;
  father_qualification?: string;
  father_occupation?: string;
  father_occupation_details?: string;
  father_income?: number | null;

  mother_name?: string;
  mother_qualification?: string;
  mother_occupation?: string;
  mother_occupation_details?: string;
  mother_income?: number | null;

  mobile_number?: string;
  contact_number?: string;
  email?: string;

  present_address?: string;
  permanent_address?: string;

  siblings?: string;
  guardian?: string;

  photo_url?: string;
  created_at: string;
};

/* ---------------- PAGE ---------------- */

export function AdmissionDetails() {
  const [admissions, setAdmissions] = useState<AdmissionForm[]>([]);
  const [loading, setLoading] = useState(true);
  const [selected, setSelected] = useState<AdmissionForm | null>(null);

  const navigate = useNavigate();

  useEffect(() => {
    fetchAdmissions();
  }, []);

  async function fetchAdmissions() {
    const { data } = await supabase
      .from("admissions_form")
      .select("*")
      .order("created_at", { ascending: false });

    setAdmissions(data || []);
    setLoading(false);
  }

  async function deleteAdmission(id: string) {
    if (!confirm("Delete this admission permanently?")) return;
    await supabase.from("admissions_form").delete().eq("id", id);
    setAdmissions((p) => p.filter((a) => a.id !== id));
    setSelected(null);
  }

  if (loading) {
    return (
      <div className="flex justify-center py-24">
        <Loader2 className="animate-spin text-emerald-400" />
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-white">Admissions</h1>

      {admissions.map((a) => (
        <div
          key={a.id}
          className="bg-neutral-900 border border-neutral-800 rounded-2xl p-5 flex flex-col sm:flex-row sm:justify-between gap-4"
        >
          <div>
            <p className="text-lg font-semibold text-white">
              {a.student_name}
            </p>
            <p className="text-sm text-neutral-400">
              Class: {a.class || "N/A"}
            </p>
          </div>

          <div className="flex gap-2">
            <button
              onClick={() => setSelected(a)}
              className="icon-btn text-cyan-400"
            >
              <Eye size={16} />
            </button>

            <button
              onClick={() => navigate(`/admin/update-admission/${a.id}`)}
              className="icon-btn text-amber-400"
            >
              <Pencil size={16} />
            </button>

            <button
              onClick={() => deleteAdmission(a.id)}
              className="icon-btn text-red-400"
            >
              <Trash2 size={16} />
            </button>
          </div>
        </div>
      ))}

      {/* ================= MODAL ================= */}
      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center p-3 sm:p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ type: "spring", stiffness: 260, damping: 25 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-4xl bg-neutral-900 border border-neutral-800 rounded-3xl shadow-2xl"
            >
              {/* HEADER */}
              <div className="flex justify-between items-center px-5 sm:px-6 py-4 border-b border-neutral-800">
                <h2 className="text-lg font-semibold text-white">
                  Admission Details
                </h2>
                <button onClick={() => setSelected(null)}>
                  <X className="text-neutral-400" />
                </button>
              </div>

              {/* BODY */}
              <div className="px-5 sm:px-6 py-6 space-y-10 text-sm text-neutral-300 max-h-[80vh] overflow-y-auto">
                {selected.photo_url && (
                  <div className="flex justify-center">
                    <img
                      src={selected.photo_url}
                      className="w-32 h-32 sm:w-40 sm:h-40 rounded-2xl object-cover border border-neutral-700"
                    />
                  </div>
                )}

                <Section title="Basic Details">
                  <Info label="Branch" value={selected.branch} />
                  <Info label="Session" value={selected.session} />
                  <Info label="Class" value={selected.class} />
                </Section>

                <Section title="Student Details">
                  <Info label="Name" value={selected.student_name} />
                  <Info label="DOB" value={selected.dob} />
                  <Info label="Gender" value={selected.gender} />
                  <Info label="Caste" value={selected.caste} />
                  <Info label="Religion" value={selected.religion} />
                </Section>

                <Section title="Father Details">
                  <Info label="Name" value={selected.father_name} />
                  <Info label="Qualification" value={selected.father_qualification} />
                  <Info label="Occupation" value={selected.father_occupation} />
                  <Info label="Occupation Details" value={selected.father_occupation_details} />
                  <Info label="Income" value={selected.father_income ? `₹ ${selected.father_income}` : undefined} />
                </Section>

                <Section title="Mother Details">
                  <Info label="Name" value={selected.mother_name} />
                  <Info label="Qualification" value={selected.mother_qualification} />
                  <Info label="Occupation" value={selected.mother_occupation} />
                  <Info label="Occupation Details" value={selected.mother_occupation_details} />
                  <Info label="Income" value={selected.mother_income ? `₹ ${selected.mother_income}` : undefined} />
                </Section>

                <Section title="Contact">
                  <Info label="Mobile" value={selected.mobile_number} />
                  <Info label="Alternate" value={selected.contact_number} />
                  <Info label="Email" value={selected.email} />
                  <Info label="Guardian" value={selected.guardian} />
                </Section>

                <TextBlock title="Present Address">
                  {selected.present_address}
                </TextBlock>

                <TextBlock title="Permanent Address">
                  {selected.permanent_address}
                </TextBlock>

                <TextBlock title="Sibling Information">
                  {selected.siblings || "No sibling information"}
                </TextBlock>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/* ---------------- HELPERS ---------------- */

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <p className="text-xs uppercase tracking-wider text-neutral-500 mb-3">
        {title}
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {children}
      </div>
    </div>
  );
}

function Info({
  label,
  value,
}: {
  label: string;
  value?: string;
}) {
  return (
    <p className="leading-relaxed">
      <span className="text-neutral-500">{label}:</span>{" "}
      <span className="text-neutral-300">{value || "N/A"}</span>
    </p>
  );
}

function TextBlock({
  title,
  children,
}: {
  title: string;
  children?: string;
}) {
  return (
    <div className="space-y-2">
      <p className="text-xs uppercase tracking-wider text-neutral-500">
        {title}
      </p>
      <p className="text-sm text-neutral-300 leading-relaxed leading-loose break-words">
        {children && children.trim() !== "" ? children : "N/A"}
      </p>
    </div>
  );
}
