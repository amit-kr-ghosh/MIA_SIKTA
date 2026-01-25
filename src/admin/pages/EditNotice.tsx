import { useEffect, useState, FormEvent } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import {
  Loader2,
  ArrowLeft,
  FileText,
  AlignLeft,
  Tag,
  Calendar,
} from "lucide-react";
import { supabase } from "../../lib/supabaseClient";

type NoticeType = "important" | "event" | "meeting" | "holiday";

export function EditNotice() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [fetching, setFetching] = useState(true);

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    type: "important" as NoticeType,
    notice_date: "",
  });

  useEffect(() => {
    if (!id) return;

    const fetchNotice = async () => {
      const { data, error } = await supabase
        .from("notices")
        .select("*")
        .eq("id", id)
        .single();

      if (error || !data) {
        alert("Notice not found");
        navigate("/admin/notices");
        return;
      }

      setFormData({
        title: data.title,
        description: data.description,
        type: data.type,
        notice_date: data.notice_date,
      });

      setFetching(false);
    };

    fetchNotice();
  }, [id, navigate]);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setLoading(true);

    const { error } = await supabase
      .from("notices")
      .update(formData)
      .eq("id", id);

    setLoading(false);

    if (error) {
      alert("Failed to update notice");
    } else {
      // ✅ OPEN NOTICE DETAILS PAGE AFTER SUCCESS
      navigate(`/admin/notices/${id}`);
    }
  }

  if (fetching) {
    return (
      <div className="flex justify-center items-center h-64">
        <Loader2 className="w-6 h-6 animate-spin text-emerald-400" />
      </div>
    );
  }

  return (
    <div className="flex justify-center px-4 py-6">
      <div className="w-full max-w-xl bg-neutral-900 border border-neutral-800 rounded-3xl p-6 sm:p-8 shadow-xl">

        {/* BACK */}
        <Link
          to="/admin/notices"
          className="flex items-center gap-2 text-sm text-neutral-400 hover:text-white mb-4"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Notices
        </Link>

        {/* HEADER */}
        <div className="mb-5">
          <h2 className="text-2xl font-extrabold text-white">
            Edit Notice
          </h2>
          <p className="text-sm text-neutral-400 mt-1">
            Update the notice details
          </p>
        </div>

        {/* FORM */}
        <form onSubmit={handleSubmit} className="space-y-4">

          {/* TITLE */}
          <div>
            <label className="text-xs text-neutral-400 mb-1 block">
              Notice Title
            </label>
            <div className="relative">
              <FileText className="absolute left-3 top-3 w-4 h-4 text-emerald-400" />
              <input
                value={formData.title}
                onChange={(e) =>
                  setFormData({ ...formData, title: e.target.value })
                }
                required
                className="
                  w-full pl-10 py-2.5 rounded-xl
                  bg-neutral-800 border border-neutral-700
                  text-neutral-100
                  focus:outline-none focus:border-emerald-500
                "
              />
            </div>
          </div>

          {/* DESCRIPTION */}
          <div>
            <label className="text-xs text-neutral-400 mb-1 block">
              Description
            </label>
            <div className="relative">
              <AlignLeft className="absolute left-3 top-3 w-4 h-4 text-cyan-400" />
              <textarea
                value={formData.description}
                onChange={(e) =>
                  setFormData({ ...formData, description: e.target.value })
                }
                rows={3}
                required
                className="
                  w-full pl-10 py-2.5 rounded-xl resize-none
                  bg-neutral-800 border border-neutral-700
                  text-neutral-100
                  focus:outline-none focus:border-cyan-500
                "
              />
            </div>
          </div>

          {/* TYPE */}
          <div>
            <label className="text-xs text-neutral-400 mb-1 block">
              Notice Type
            </label>
            <div className="relative">
              <Tag className="absolute left-3 top-3 w-4 h-4 text-amber-400" />
              <select
                value={formData.type}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    type: e.target.value as NoticeType,
                  })
                }
                className="
                  w-full pl-10 py-2.5 rounded-xl
                  bg-neutral-800 border border-neutral-700
                  text-neutral-100
                "
              >
                <option value="important">Important</option>
                <option value="event">Event</option>
                <option value="meeting">Meeting</option>
                <option value="holiday">Holiday</option>
              </select>
            </div>
          </div>

          {/* DATE */}
          <div>
            <label className="text-xs text-neutral-400 mb-1 block">
              Notice Date
            </label>
            <div className="relative">
              <Calendar className="absolute left-3 top-3 w-4 h-4 text-emerald-400" />
              <input
                type="date"
                value={formData.notice_date}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    notice_date: e.target.value,
                  })
                }
                required
                className="
                  w-full pl-10 py-2.5 rounded-xl
                  bg-neutral-800 border border-neutral-700
                  text-neutral-100
                "
              />
            </div>
          </div>

          {/* SUBMIT */}
          <button
            disabled={loading}
            className="
              w-full mt-3 py-3 rounded-xl
              bg-emerald-600 hover:bg-emerald-500
              text-white font-medium
              flex items-center justify-center gap-2
              disabled:opacity-60
            "
          >
            {loading && <Loader2 className="w-4 h-4 animate-spin" />}
            {loading ? "Updating..." : "Update Notice"}
          </button>
        </form>
      </div>
    </div>
  );
}
