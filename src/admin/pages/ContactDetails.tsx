
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Trash2,
  Loader2,
  X,
  Mail,
  Phone,
  User,
  FileText,
} from "lucide-react";
import { supabase } from "../../lib/supabaseClient";

type ContactMessage = {
  id: string;
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  created_at: string;
};

export function ContactDetails() {
  const [contacts, setContacts] = useState<ContactMessage[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedContact, setSelectedContact] =
    useState<ContactMessage | null>(null);

  useEffect(() => {
    fetchContacts();
  }, []);

  async function fetchContacts() {
    try {
      const { data } = await supabase
        .from("contact_messages")
        .select("*")
        .order("created_at", { ascending: false });

      setContacts(data || []);
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  }

  async function deleteContact(id: string) {
    if (!confirm("Delete this message?")) return;

    await supabase.from("contact_messages").delete().eq("id", id);
    setContacts((prev) => prev.filter((c) => c.id !== id));
    if (selectedContact?.id === id) setSelectedContact(null);
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
          Contact Messages
        </h1>
        <p className="text-sm text-neutral-400 mt-1">
          View and manage contact form submissions
        </p>
      </div>

      {/* LIST */}
      {contacts.length === 0 ? (
        <div className="text-center text-neutral-400 py-16">
          No contact messages yet
        </div>
      ) : (
        <div className="space-y-4">
          {contacts.map((c) => (
            <motion.div
              key={c.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              className="
                bg-neutral-900 border border-neutral-800
                rounded-2xl p-5
                flex flex-col sm:flex-row sm:justify-between
                gap-4
              "
            >
              {/* CONTENT */}
              <div className="space-y-2">
                <div className="flex flex-wrap items-center gap-3 text-sm">
                  <span className="flex items-center gap-1 text-neutral-200 font-medium">
                    <User className="w-4 h-4 text-cyan-400" />
                    {c.name}
                  </span>

                  <span className="flex items-center gap-1 text-neutral-400">
                    <Mail className="w-4 h-4 text-neutral-500" />
                    {c.email}
                  </span>

                  <span className="flex items-center gap-1 text-neutral-400">
                    <Phone className="w-4 h-4 text-neutral-500" />
                    {c.phone}
                  </span>
                </div>

                <div className="flex items-center gap-2 text-sm">
                  <FileText className="w-4 h-4 text-amber-400" />
                  <span className="text-neutral-300 font-medium">
                    {c.subject}
                  </span>
                </div>

                <p className="text-sm text-neutral-400 line-clamp-2">
                  {c.message}
                </p>

                <p className="text-xs text-neutral-500">
                  {new Date(c.created_at).toLocaleString()}
                </p>
              </div>

              {/* ACTIONS */}
              <div className="flex gap-3 sm:flex-col sm:items-end">
                <button
                  onClick={() => setSelectedContact(c)}
                  className="
                    px-4 py-2 rounded-lg text-sm
                    bg-neutral-800 hover:bg-neutral-700
                    text-emerald-400
                  "
                >
                  View
                </button>

                <button
                  onClick={() => deleteContact(c.id)}
                  className="
                    p-2 rounded-lg
                    bg-neutral-800 hover:bg-red-500/10
                    text-red-400
                  "
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      )}

      {/* MODAL */}
      <AnimatePresence>
        {selectedContact && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* OVERLAY */}
            <div
              className="absolute inset-0 bg-black/60"
              onClick={() => setSelectedContact(null)}
            />

            {/* MODAL CARD */}
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="
                relative w-full max-w-xl
                bg-neutral-900 border border-neutral-800
                rounded-2xl shadow-xl
              "
            >
              <div className="flex justify-between items-center p-5 border-b border-neutral-800">
                <h2 className="text-lg font-semibold text-white">
                  Message Details
                </h2>
                <button onClick={() => setSelectedContact(null)}>
                  <X className="text-neutral-400" />
                </button>
              </div>

              <div className="p-5 space-y-4 text-sm text-neutral-300 max-h-[65vh] overflow-y-auto">
                <p><b>Name:</b> {selectedContact.name}</p>
                <p>
                  <b>Email:</b>{" "}
                  <a
                    href={`mailto:${selectedContact.email}`}
                    className="text-emerald-400 hover:underline"
                  >
                    {selectedContact.email}
                  </a>
                </p>
                <p>
                  <b>Phone:</b>{" "}
                  <a
                    href={`tel:${selectedContact.phone}`}
                    className="text-emerald-400 hover:underline"
                  >
                    {selectedContact.phone}
                  </a>
                </p>
                <p><b>Subject:</b> {selectedContact.subject}</p>
                <p className="whitespace-pre-wrap">
                  <b>Message:</b>{" "}
                  <span className="text-neutral-400">
                    {selectedContact.message}
                  </span>
                </p>
                <p className="text-xs text-neutral-500">
                  Received on{" "}
                  {new Date(selectedContact.created_at).toLocaleString()}
                </p>
              </div>

              <div className="p-5 border-t border-neutral-800 flex justify-end gap-3">
                <button
                  onClick={() => deleteContact(selectedContact.id)}
                  className="
                    px-4 py-2 rounded-lg
                    bg-red-500/10 text-red-400
                    hover:bg-red-500/20
                  "
                >
                  Delete
                </button>
                <button
                  onClick={() => setSelectedContact(null)}
                  className="
                    px-4 py-2 rounded-lg
                    bg-neutral-800 text-neutral-300
                    hover:bg-neutral-700
                  "
                >
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
