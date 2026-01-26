import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { supabase } from "../../lib/supabaseClient";
import { Loader2, ArrowLeft, Save, ExternalLink } from "lucide-react";

/* ---------------- TYPES ---------------- */

type AdmissionForm = {
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

  photo_url?: string | null;
};

/* ---------------- PAGE ---------------- */

export default function UpdateAdmissions() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [form, setForm] = useState<AdmissionForm>({});
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    fetchAdmission();
  }, []);

  async function fetchAdmission() {
    const { data, error } = await supabase
      .from("admissions_form")
      .select(`
        branch,
        session,
        class,
        student_name,
        dob,
        gender,
        caste,
        religion,
        father_name,
        father_qualification,
        father_occupation,
        father_occupation_details,
        father_income,
        mother_name,
        mother_qualification,
        mother_occupation,
        mother_occupation_details,
        mother_income,
        mobile_number,
        contact_number,
        email,
        present_address,
        permanent_address,
        siblings,
        guardian,
        photo_url
      `)
      .eq("id", id)
      .single();

    if (error) {
      alert("Failed to load admission");
      navigate("/admin/admissions");
      return;
    }

    setForm(data || {});
    setLoading(false);
  }

  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  }

  async function updateAdmission() {
    setSaving(true);

    const { error } = await supabase
      .from("admissions_form")
      .update(form)
      .eq("id", id);

    setSaving(false);

    if (error) alert("Update failed");
    else navigate("/admin/admissions");
  }

  if (loading) {
    return (
      <div className="flex justify-center py-24">
        <Loader2 className="animate-spin text-emerald-400" />
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8 space-y-6">
      {/* HEADER */}
      <div className="flex items-center gap-4">
        <button
          onClick={() => navigate(-1)}
          className="p-2 rounded-xl bg-neutral-900 border border-neutral-800 hover:bg-neutral-800"
        >
          <ArrowLeft className="text-neutral-300" />
        </button>
        <div>
          <h1 className="text-2xl font-semibold text-white">
            Edit Admission
          </h1>
          <p className="text-sm text-neutral-500">
            Full admission record editor
          </p>
        </div>
      </div>

      {/* BASIC */}
      <Section title="Basic Details">
        <Field label="Branch">
          <Input name="branch" value={form.branch} onChange={handleChange} />
        </Field>

        <Field label="Session">
          <Input name="session" value={form.session} onChange={handleChange} />
        </Field>

        <Field label="Class">
          <Input name="class" value={form.class} onChange={handleChange} />
        </Field>

        <Field label="Student Name">
          <Input
            name="student_name"
            value={form.student_name}
            onChange={handleChange}
          />
        </Field>

        <Field label="Date of Birth">
          <Input
            type="date"
            name="dob"
            value={form.dob}
            onChange={handleChange}
          />
        </Field>

        <Field label="Gender">
          <Select
            name="gender"
            value={form.gender}
            onChange={handleChange}
            options={["Male", "Female", "Other"]}
          />
        </Field>

        <Field label="Caste">
          <Input name="caste" value={form.caste} onChange={handleChange} />
        </Field>

        <Field label="Religion">
          <Input name="religion" value={form.religion} onChange={handleChange} />
        </Field>
      </Section>

      {/* FATHER */}
      <Section title="Father Details">
        <Field label="Name">
          <Input
            name="father_name"
            value={form.father_name}
            onChange={handleChange}
          />
        </Field>

        <Field label="Qualification">
          <Input
            name="father_qualification"
            value={form.father_qualification}
            onChange={handleChange}
          />
        </Field>

        <Field label="Occupation">
          <Input
            name="father_occupation"
            value={form.father_occupation}
            onChange={handleChange}
          />
        </Field>

        <Field label="Occupation Details">
          <Input
            name="father_occupation_details"
            value={form.father_occupation_details}
            onChange={handleChange}
          />
        </Field>

        <Field label="Monthly Income">
          <Input
            type="number"
            name="father_income"
            value={form.father_income ?? ""}
            onChange={handleChange}
          />
        </Field>
      </Section>

      {/* MOTHER */}
      <Section title="Mother Details">
        <Field label="Name">
          <Input
            name="mother_name"
            value={form.mother_name}
            onChange={handleChange}
          />
        </Field>

        <Field label="Qualification">
          <Input
            name="mother_qualification"
            value={form.mother_qualification}
            onChange={handleChange}
          />
        </Field>

        <Field label="Occupation">
          <Input
            name="mother_occupation"
            value={form.mother_occupation}
            onChange={handleChange}
          />
        </Field>

        <Field label="Occupation Details">
          <Input
            name="mother_occupation_details"
            value={form.mother_occupation_details}
            onChange={handleChange}
          />
        </Field>

        <Field label="Monthly Income">
          <Input
            type="number"
            name="mother_income"
            value={form.mother_income ?? ""}
            onChange={handleChange}
          />
        </Field>
      </Section>

      {/* CONTACT */}
      <Section title="Contact & Address">
        <Field label="Mobile Number">
          <Input
            name="mobile_number"
            value={form.mobile_number}
            onChange={handleChange}
          />
        </Field>

        <Field label="Alternate Number">
          <Input
            name="contact_number"
            value={form.contact_number}
            onChange={handleChange}
          />
        </Field>

        <Field label="Email">
          <Input name="email" value={form.email} onChange={handleChange} />
        </Field>

        <Field label="Guardian">
          <Input
            name="guardian"
            value={form.guardian}
            onChange={handleChange}
          />
        </Field>

        <Field label="Present Address" full>
          <Textarea
            name="present_address"
            value={form.present_address}
            onChange={handleChange}
          />
        </Field>

        <Field label="Permanent Address" full>
          <Textarea
            name="permanent_address"
            value={form.permanent_address}
            onChange={handleChange}
          />
        </Field>

        <Field label="Siblings Info" full>
          <Textarea
            name="siblings"
            value={form.siblings}
            onChange={handleChange}
          />
        </Field>
      </Section>

      {/* PHOTO */}
      {form.photo_url && (
        <Section title="Student Photo">
          <a
            href={form.photo_url}
            target="_blank"
            className="flex items-center gap-2 text-emerald-400 text-sm"
          >
            View Uploaded Photo <ExternalLink size={14} />
          </a>
        </Section>
      )}

      {/* SAVE */}
      <div className="sticky bottom-0 bg-neutral-950 pt-4">
        <button
          onClick={updateAdmission}
          disabled={saving}
          className="w-full flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 disabled:opacity-60 text-white py-4 rounded-xl font-semibold shadow-lg"
        >
          {saving ? <Loader2 className="animate-spin" /> : <Save size={18} />}
          Save Changes
        </button>
      </div>
    </div>
  );
}

/* ---------------- UI HELPERS ---------------- */

function Section({ title, children }: any) {
  return (
    <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-6">
      <p className="text-sm font-semibold text-emerald-400 mb-4">{title}</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">{children}</div>
    </div>
  );
}

function Field({ label, children, full }: any) {
  return (
    <div className={full ? "sm:col-span-2" : ""}>
      <label className="block text-xs text-neutral-400 mb-1">{label}</label>
      {children}
    </div>
  );
}

function Input(props: any) {
  return (
    <input
      {...props}
      className="w-full rounded-xl px-3 py-2.5 bg-neutral-950 border border-neutral-800 text-neutral-200 text-sm"
    />
  );
}

function Textarea(props: any) {
  return (
    <textarea
      {...props}
      rows={3}
      className="w-full rounded-xl px-3 py-2.5 bg-neutral-950 border border-neutral-800 text-neutral-200 text-sm"
    />
  );
}

function Select({ options, ...props }: any) {
  return (
    <select
      {...props}
      className="w-full rounded-xl px-3 py-2.5 bg-neutral-950 border border-neutral-800 text-neutral-200 text-sm"
    >
      <option value="">Select</option>
      {options.map((o: string) => (
        <option key={o} value={o}>
          {o}
        </option>
      ))}
    </select>
  );
}
