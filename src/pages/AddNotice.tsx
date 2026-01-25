import { useState } from "react";
import { supabase } from "../lib/supabaseClient";
import { FileText, Calendar, Tag, AlignLeft } from "lucide-react";

const AddNotice = () => {
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

    const { data } = await supabase.auth.getSession();

    if (!data.session) {
      alert("Admin not logged in");
      setLoading(false);
      return;
    }

    const token = data.session.access_token;

    const res = await fetch("http://localhost:5000/api/notices", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        title,
        description,
        type,
        notice_date: noticeDate,
      }),
    });

    const result = await res.json();
    setLoading(false);

    if (result.success) {
      alert("Notice added successfully");
      setTitle("");
      setDescription("");
      setNoticeDate("");
      setType("important");
    } else {
      alert("Failed to add notice");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-indigo-800 to-teal-800 flex items-center justify-center px-4">
      <div className="w-full max-w-2xl bg-white rounded-3xl shadow-2xl p-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
          Add New Notice
        </h2>
        <p className="text-sm text-gray-500 mb-6">
          Publish announcements for students & parents
        </p>

        <form onSubmit={addNotice} className="space-y-4">
          {/* Title */}
          <div className="relative">
            <FileText className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Notice Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
              className="w-full pl-10 pr-4 py-3 rounded-xl border focus:ring-2 focus:ring-indigo-500 outline-none"
            />
          </div>

          {/* Description */}
          <div className="relative">
            <AlignLeft className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" />
            <textarea
              placeholder="Notice Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
              rows={4}
              className="w-full pl-10 pr-4 py-3 rounded-xl border focus:ring-2 focus:ring-indigo-500 outline-none resize-none"
            />
          </div>

          {/* Type */}
          <div className="relative">
            <Tag className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" />
            <select
              value={type}
              onChange={(e) =>
                setType(
                  e.target.value as
                    | "important"
                    | "event"
                    | "meeting"
                    | "holiday",
                )
              }
              className="w-full pl-10 pr-4 py-3 rounded-xl border focus:ring-2 focus:ring-indigo-500 outline-none bg-white"
            >
              <option value="important">Important</option>
              <option value="event">Event</option>
              <option value="meeting">Meeting</option>
              <option value="holiday">Holiday</option>
            </select>
          </div>

          {/* Date */}
          <div className="relative">
            <Calendar className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" />
            <input
              type="date"
              value={noticeDate}
              onChange={(e) => setNoticeDate(e.target.value)}
              required
              className="w-full pl-10 pr-4 py-3 rounded-xl border focus:ring-2 focus:ring-indigo-500 outline-none"
            />
          </div>

          {/* Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-gradient-to-r from-indigo-600 to-teal-600 text-white font-semibold py-3 rounded-xl hover:shadow-lg transition disabled:opacity-70"
          >
            {loading ? "Publishing..." : "Publish Notice"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddNotice;
