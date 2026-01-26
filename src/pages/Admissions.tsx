import { motion } from "framer-motion";
import { useState, FormEvent } from "react";
import { Upload, Send, CheckCircle } from "lucide-react";
import { supabase } from "../lib/supabaseClient";
import AdmissionInstructions from "./AdmissionInstructions";
import { generateAdmissionPDF } from "../utils/generateAdmissionPDF";

const Admissions = () => {
  const [showInstructions, setShowInstructions] = useState(true);

  const [formData, setFormData] = useState({
    branch: "Mothers International Academy",
    session: "2025-2026",
    class: "",
    student_name: "",
    dob: "",
    gender: "",
    caste: "",
    religion: "",
    father_name: "",
    father_qualification: "",
    father_occupation: "",
    father_occupation_details: "",
    father_income: "",
    mother_name: "",
    mother_qualification: "",
    mother_occupation: "",
    mother_occupation_details: "",
    mother_income: "",
    mobile_number: "",
    contact_number: "",
    email: "",
    present_address: "",
    permanent_address: "",
    siblings: "",
    guardian: "",
  });

  const [photo, setPhoto] = useState<File | null>(null);
  const [photoPreview, setPhotoPreview] = useState<string>("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const classes = [
    "Nursery",
    "KG",
    "Class I",
    "Class II",
    "Class III",
    "Class IV",
    "Class V",
    "Class VI",
    "Class VII",
    "Class VIII",
    "Class IX",
    "Class X",
  ];

  const genders = ["Male", "Female", "Other"];
  const castes = ["General", "OBC", "SC", "ST", "Other"];
  const religions = [
    "Hindu",
    "Muslim",
    "Christian",
    "Sikh",
    "Buddhist",
    "Jain",
    "Other",
  ];
  const occupations = [
    "Government Service",
    "Private Service",
    "Business",
    "Self Employed",
    "Homemaker",
    "Other",
  ];
  const guardians = ["Father", "Mother", "Both Parents", "Guardian", "Other"];

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handlePhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 2 * 1024 * 1024) {
        alert("File size should be less than 2MB");
        return;
      }
      if (!["image/jpeg", "image/jpg", "image/png"].includes(file.type)) {
        alert("Only JPG, JPEG, and PNG files are allowed");
        return;
      }
      setPhoto(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setPhotoPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      let photoUrl: string | undefined;

      /* ---------- UPLOAD PHOTO ---------- */
      if (photo) {
        const ext = photo.name.split(".").pop();
        const fileName = `${Date.now()}-${Math.random()
          .toString(36)
          .slice(2)}.${ext}`;

        const { error: uploadError } = await supabase.storage
          .from("admission-photos")
          .upload(fileName, photo);

        if (uploadError) throw uploadError;

        photoUrl = supabase.storage
          .from("admission-photos")
          .getPublicUrl(fileName).data.publicUrl;
      }

      /* ---------- INSERT FORM ---------- */
      const { error } = await supabase.from("admissions_form").insert([
        {
          ...formData,
          father_income: formData.father_income
            ? Number(formData.father_income)
            : null,
          mother_income: formData.mother_income
            ? Number(formData.mother_income)
            : null,
          photo_url: photoUrl || null,
        },
      ]);

      if (error) throw error;

      /* ---------- GENERATE PDF ---------- */
      generateAdmissionPDF(
        {
          ...formData,
          photo_url: photoUrl,
        },
        photoUrl,
      );

      setSubmitSuccess(true);
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch (err: any) {
      console.error(err);
      alert(err.message || "Failed to submit form");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitSuccess) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-primary-600 to-teal-600 flex items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white rounded-2xl p-8 md:p-12 max-w-md text-center"
        >
          <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Application Submitted!
          </h2>
          <p className="text-gray-600 mb-6">
            Thank you for your interest in Mothers International Academy. We
            have received your application and will contact you soon.
          </p>
          <button
            onClick={() => {
              setSubmitSuccess(false);
              setFormData({
                branch: "Mothers International Academy",
                session: "2025-2026",
                class: "",
                student_name: "",
                dob: "",
                gender: "",
                caste: "",
                religion: "",
                father_name: "",
                father_qualification: "",
                father_occupation: "",
                father_occupation_details: "",
                father_income: "",
                mother_name: "",
                mother_qualification: "",
                mother_occupation: "",
                mother_occupation_details: "",
                mother_income: "",
                mobile_number: "",
                contact_number: "",
                email: "",
                present_address: "",
                permanent_address: "",
                siblings: "",
                guardian: "",
              });
              setPhoto(null);
              setPhotoPreview("");
            }}
            className="px-6 py-3 bg-gradient-to-r from-primary-600 to-teal-600 text-white font-semibold rounded-lg hover:shadow-lg transition-all"
          >
            Submit Another Application
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <>
      <AdmissionInstructions
        open={showInstructions}
        onClose={() => setShowInstructions(false)}
      />

      <div className="min-h-screen bg-gradient-to-br from-primary-600 via-primary-700 to-teal-600 py-12">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-8"
          >
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              Admission Application Form
            </h1>
            <p className="text-xl text-blue-100">
              Session 2025-2026 | Mothers International Academy
            </p>
          </motion.div>
          <div className="flex justify-center my-6">
            <button
              onClick={() => setShowInstructions(true)}
              className="
      bg-yellow-400
      px-6 py-3
      rounded-xl
      font-bold
      shadow
      hover:shadow-lg
      transition
    "
            >
              View Admission Instructions
            </button>
          </div>

          <br />

          <motion.form
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            onSubmit={handleSubmit}
            className="bg-white rounded-2xl shadow-2xl p-8 md:p-12"
          >
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-1">
                Student Information
              </h2>
              <div className="h-1 w-20 bg-gradient-to-r from-primary-600 to-teal-600 rounded-full"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Branch <span className="text-red-500">*</span>
                </label>
                <select
                  name="branch"
                  value={formData.branch}
                  onChange={handleChange}
                  required
                  className="
    w-full px-4 py-3
    rounded-lg
    border border-gray-300
    bg-white
    focus:border-primary-600
    focus:ring-2 focus:ring-primary-600/20
    outline-none
  "
                >
                  <option value="Mothers International Academy">
                    Mothers International Academy
                  </option>
                  <option value="Vatika Vihar Play School">
                    Vatika Vihar Play School
                  </option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Session <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="session"
                  value={formData.session}
                  readOnly
                  className="w-full px-4 py-3 rounded-lg bg-gray-100 border border-gray-300 text-gray-600"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Class Applying For <span className="text-red-500">*</span>
                </label>
                <select
                  name="class"
                  value={formData.class}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary-600 focus:ring-2 focus:ring-primary-600/20 outline-none"
                >
                  <option value="">Select Class</option>
                  {classes.map((cls) => (
                    <option key={cls} value={cls}>
                      {cls}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Student Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="student_name"
                  value={formData.student_name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary-600 focus:ring-2 focus:ring-primary-600/20 outline-none"
                  placeholder="Full Name"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Date of Birth <span className="text-red-500">*</span>
                </label>
                <input
                  type="date"
                  name="dob"
                  value={formData.dob}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary-600 focus:ring-2 focus:ring-primary-600/20 outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Gender <span className="text-red-500">*</span>
                </label>
                <select
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary-600 focus:ring-2 focus:ring-primary-600/20 outline-none"
                >
                  <option value="">Select Gender</option>
                  {genders.map((gender) => (
                    <option key={gender} value={gender}>
                      {gender}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Caste
                </label>
                <select
                  name="caste"
                  value={formData.caste}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary-600 focus:ring-2 focus:ring-primary-600/20 outline-none"
                >
                  <option value="">Select Caste</option>
                  {castes.map((caste) => (
                    <option key={caste} value={caste}>
                      {caste}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Religion
                </label>
                <select
                  name="religion"
                  value={formData.religion}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary-600 focus:ring-2 focus:ring-primary-600/20 outline-none"
                >
                  <option value="">Select Religion</option>
                  {religions.map((religion) => (
                    <option key={religion} value={religion}>
                      {religion}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-1">
                Father's Information
              </h2>
              <div className="h-1 w-20 bg-gradient-to-r from-primary-600 to-teal-600 rounded-full"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Father's Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="father_name"
                  value={formData.father_name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary-600 focus:ring-2 focus:ring-primary-600/20 outline-none"
                  placeholder="Full Name"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Father's Qualification
                </label>
                <input
                  type="text"
                  name="father_qualification"
                  value={formData.father_qualification}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary-600 focus:ring-2 focus:ring-primary-600/20 outline-none"
                  placeholder="e.g., B.Tech, MBA"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Father's Occupation
                </label>
                <select
                  name="father_occupation"
                  value={formData.father_occupation}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary-600 focus:ring-2 focus:ring-primary-600/20 outline-none"
                >
                  <option value="">Select Occupation</option>
                  {occupations.map((occupation) => (
                    <option key={occupation} value={occupation}>
                      {occupation}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Occupation Details
                </label>
                <input
                  type="text"
                  name="father_occupation_details"
                  value={formData.father_occupation_details}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary-600 focus:ring-2 focus:ring-primary-600/20 outline-none"
                  placeholder="Job Title / Business"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Monthly Income (₹)
                </label>
                <input
                  type="number"
                  name="father_income"
                  value={formData.father_income}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary-600 focus:ring-2 focus:ring-primary-600/20 outline-none"
                  placeholder="50000"
                />
              </div>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-1">
                Mother's Information
              </h2>
              <div className="h-1 w-20 bg-gradient-to-r from-primary-600 to-teal-600 rounded-full"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Mother's Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="mother_name"
                  value={formData.mother_name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary-600 focus:ring-2 focus:ring-primary-600/20 outline-none"
                  placeholder="Full Name"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Mother's Qualification
                </label>
                <input
                  type="text"
                  name="mother_qualification"
                  value={formData.mother_qualification}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary-600 focus:ring-2 focus:ring-primary-600/20 outline-none"
                  placeholder="e.g., B.A., M.Sc"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Mother's Occupation
                </label>
                <select
                  name="mother_occupation"
                  value={formData.mother_occupation}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary-600 focus:ring-2 focus:ring-primary-600/20 outline-none"
                >
                  <option value="">Select Occupation</option>
                  {occupations.map((occupation) => (
                    <option key={occupation} value={occupation}>
                      {occupation}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Occupation Details
                </label>
                <input
                  type="text"
                  name="mother_occupation_details"
                  value={formData.mother_occupation_details}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary-600 focus:ring-2 focus:ring-primary-600/20 outline-none"
                  placeholder="Job Title / Business"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Monthly Income (₹)
                </label>
                <input
                  type="number"
                  name="mother_income"
                  value={formData.mother_income}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary-600 focus:ring-2 focus:ring-primary-600/20 outline-none"
                  placeholder="30000"
                />
              </div>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-1">
                Contact & Address Details
              </h2>
              <div className="h-1 w-20 bg-gradient-to-r from-primary-600 to-teal-600 rounded-full"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Mobile Number <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  name="mobile_number"
                  value={formData.mobile_number}
                  onChange={handleChange}
                  required
                  maxLength={10}
                  pattern="[0-9]{10}"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary-600 focus:ring-2 focus:ring-primary-600/20 outline-none"
                  placeholder="10 digit number"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Contact Number (Optional)
                </label>
                <input
                  type="tel"
                  name="contact_number"
                  value={formData.contact_number}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary-600 focus:ring-2 focus:ring-primary-600/20 outline-none"
                  placeholder="Alternate number"
                />
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary-600 focus:ring-2 focus:ring-primary-600/20 outline-none"
                  placeholder="example@email.com"
                />
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Present Address <span className="text-red-500">*</span>
                </label>
                <textarea
                  name="present_address"
                  value={formData.present_address}
                  onChange={handleChange}
                  required
                  rows={3}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary-600 focus:ring-2 focus:ring-primary-600/20 outline-none resize-none"
                  placeholder="Current residential address"
                ></textarea>
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Permanent Address <span className="text-red-500">*</span>
                </label>
                <textarea
                  name="permanent_address"
                  value={formData.permanent_address}
                  onChange={handleChange}
                  required
                  rows={3}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary-600 focus:ring-2 focus:ring-primary-600/20 outline-none resize-none"
                  placeholder="Permanent residential address"
                ></textarea>
              </div>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-1">
                Other Details
              </h2>
              <div className="h-1 w-20 bg-gradient-to-r from-primary-600 to-teal-600 rounded-full"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="md:col-span-2">
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Sibling Information (Optional)
                </label>
                <textarea
                  name="siblings"
                  value={formData.siblings}
                  onChange={handleChange}
                  rows={2}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary-600 focus:ring-2 focus:ring-primary-600/20 outline-none resize-none"
                  placeholder="Name, Class, School (if any)"
                ></textarea>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Child will stay with
                </label>
                <select
                  name="guardian"
                  value={formData.guardian}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary-600 focus:ring-2 focus:ring-primary-600/20 outline-none"
                >
                  <option value="">Select Guardian</option>
                  {guardians.map((guardian) => (
                    <option key={guardian} value={guardian}>
                      {guardian}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Student Photograph
                </label>
                <div className="relative">
                  <input
                    type="file"
                    accept=".jpg,.jpeg,.png"
                    onChange={handlePhotoChange}
                    className="hidden"
                    id="photo-upload"
                  />
                  <label
                    htmlFor="photo-upload"
                    className="flex items-center justify-center w-full px-4 py-3 bg-gray-50 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:bg-gray-100 transition-colors"
                  >
                    <Upload className="h-5 w-5 text-gray-400 mr-2" />
                    <span className="text-gray-600">
                      {photo ? photo.name : "Upload Photo (Max 2MB)"}
                    </span>
                  </label>
                </div>
                {photoPreview && (
                  <img
                    src={photoPreview}
                    alt="Preview"
                    className="mt-4 w-32 h-32 object-cover rounded-lg border-2 border-gray-300"
                  />
                )}
              </div>
            </div>

            <div className="flex items-center justify-center pt-6">
              <button
                type="submit"
                disabled={isSubmitting}
                className="px-12 py-4 bg-gradient-to-r from-primary-600 to-teal-600 text-white font-bold text-lg rounded-lg hover:shadow-xl transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center space-x-3"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                    <span>Submitting...</span>
                  </>
                ) : (
                  <>
                    <Send className="h-6 w-6" />
                    <span>Submit Application</span>
                  </>
                )}
              </button>
            </div>
          </motion.form>
        </div>
      </div>
    </>
  );
};

export default Admissions;
