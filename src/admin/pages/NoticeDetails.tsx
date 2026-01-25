import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  Plus,
  Edit,
  Trash2,
  Loader2,
  Calendar,
  Tag,
} from "lucide-react";
import { supabase } from "../../lib/supabaseClient";

type Notice = {
  id: number;
  title: string;
  description: string;
  type: "important" | "event" | "meeting" | "holiday";
  notice_date: string;
  created_at: string;
};

const TYPE_STYLES: Record<string, string> = {
  important: "bg-red-500/10 text-red-400 border-red-500/30",
  event: "bg-cyan-500/10 text-cyan-400 border-cyan-500/30",
  meeting: "bg-amber-500/10 text-amber-400 border-amber-500/30",
  holiday: "bg-emerald-500/10 text-emerald-400 border-emerald-500/30",
};

export function NoticeDetails() {
  const [notices, setNotices] = useState<Notice[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNotices = async () => {
      const { data } = await supabase
        .from("notices")
        .select("*")
        .order("notice_date", { ascending: false });

      setNotices(data || []);
      setLoading(false);
    };

    fetchNotices();
  }, []);

  async function deleteNotice(id: number) {
    if (!confirm("Are you sure you want to delete this notice?")) return;

    await supabase.from("notices").delete().eq("id", id);
    setNotices((prev) => prev.filter((n) => n.id !== id));
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
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <div>
          <h1 className="text-3xl font-extrabold text-white">
            Notices
          </h1>
          <p className="text-neutral-400 text-sm">
            Manage all published notices
          </p>
        </div>

        <Link
          to="/admin/notices/add"
          className="
            inline-flex items-center justify-center gap-2
            px-4 py-2 rounded-lg
            bg-emerald-600 hover:bg-emerald-500
            text-white text-sm font-medium
            transition
          "
        >
          <Plus className="w-4 h-4" />
          Add Notice
        </Link>
      </div>

      {/* NOTICE LIST */}
      {notices.length === 0 ? (
        <div className="text-center text-neutral-400 py-16">
          No notices available
        </div>
      ) : (
        <div className="space-y-4">
          {notices.map((notice) => (
            <div
              key={notice.id}
              className="
                bg-neutral-900 border border-neutral-800
                rounded-2xl p-5
                hover:border-neutral-700
                transition
              "
            >
              {/* CONTENT */}
              <div className="space-y-2">
                <h3 className="text-lg font-semibold text-neutral-100 break-words">
                  {notice.title}
                </h3>

                <p className="text-sm text-neutral-400 line-clamp-3">
                  {notice.description}
                </p>

                <div className="flex flex-wrap items-center gap-3 text-xs pt-1">
                  <span className="flex items-center gap-1 text-neutral-400">
                    <Calendar className="w-3 h-3 text-cyan-400" />
                    {new Date(notice.notice_date).toLocaleDateString()}
                  </span>

                  <span
                    className={`flex items-center gap-1 px-2 py-0.5 rounded-full border ${TYPE_STYLES[notice.type]}`}
                  >
                    <Tag className="w-3 h-3" />
                    {notice.type}
                  </span>
                </div>
              </div>

              {/* ACTIONS */}
              <div className="flex gap-3 mt-4 sm:justify-end">
                <Link
                  to={`/admin/notices/edit/${notice.id}`}
                  className="
                    flex-1 sm:flex-none
                    inline-flex items-center justify-center gap-1
                    px-3 py-2 rounded-lg
                    bg-neutral-800 hover:bg-neutral-700
                    text-emerald-400 hover:text-emerald-300
                    text-sm
                    transition
                  "
                >
                  <Edit className="w-4 h-4" />
                  Edit
                </Link>

                <button
                  onClick={() => deleteNotice(notice.id)}
                  className="
                    flex-1 sm:flex-none
                    inline-flex items-center justify-center gap-1
                    px-3 py-2 rounded-lg
                    bg-neutral-800 hover:bg-red-500/10
                    text-red-400 hover:text-red-300
                    text-sm
                    transition
                  "
                >
                  <Trash2 className="w-4 h-4" />
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
