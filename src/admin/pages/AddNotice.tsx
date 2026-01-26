import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../../lib/supabaseClient";
import {
  FileText,
  Calendar,
  Tag,
  AlignLeft,
  Loader2,
} from "lucide-react";

export function AddNotice() {
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [type, setType] = useState<
    "important" | "event" | "meeting" | "holiday"
  >("important");
  const [noticeDate, setNoticeDate] = useState("");
  const [loading, setLoading] = useState(false);

  const addNotice = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const { data: sessionData } = await supabase.auth.getSession();

    if (!sessionData.session) {
      alert("Admin not logged in");
      setLoading(false);
      return;
    }

    const { data, error } = await supabase
      .from("notices")
      .insert([
        {
          title,
          description,
          type,
          notice_date: noticeDate,
          created_by: sessionData.session.user.id,
        },
      ])
      .select("id")
      .single();

    setLoading(false);

    if (error || !data) {
      alert("Failed to add notice");
      return;
    }

    // ✅ OPEN NOTICE DETAILS PAGE AFTER SUCCESS
    navigate(`/admin/notices/`);
  };

  return (
    <div className="flex justify-center px-4 py-6">
      <div
        className="
          w-full max-w-xl
          bg-neutral-900 border border-neutral-800
          rounded-3xl shadow-xl
          p-6 sm:p-8
          max-h-[calc(100vh-7rem)]
        "
      >
        {/* HEADER */}
        <div className="mb-5">
          <h2 className="text-2xl font-extrabold text-white">
            Add New Notice
          </h2>
          <p className="text-sm text-neutral-400 mt-1">
            Publish an announcement for students & parents
          </p>
        </div>

        {/* FORM */}
        <form onSubmit={addNotice} className="space-y-4">

          {/* TITLE */}
          <div>
            <label className="text-xs text-neutral-400 mb-1 block">
              Notice Title
            </label>
            <div className="relative">
              <FileText className="absolute left-3 top-3 w-4 h-4 text-emerald-400" />
              <input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
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
                value={description}
                onChange={(e) => setDescription(e.target.value)}
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
                value={type}
                onChange={(e) =>
                  setType(e.target.value as typeof type)
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
                value={noticeDate}
                onChange={(e) => setNoticeDate(e.target.value)}
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
            {loading ? "Publishing..." : "Publish Notice"}
          </button>
        </form>
      </div>
    </div>
  );
}
