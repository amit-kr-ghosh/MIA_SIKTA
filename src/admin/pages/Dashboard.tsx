import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  FileText,
  MessageSquare,
  Bell,
  Plus,
  Pencil,
  Trash2,
  ChevronRight,
  Calendar,
  Clock,
  CheckCircle,
  AlertCircle,
} from 'lucide-react';
import { supabase } from '../../lib/supabaseClient';

export function Dashboard() {
  const navigate = useNavigate();

  const [stats, setStats] = useState<any>({});
  const [notices, setNotices] = useState<any[]>([]);
  const [insights, setInsights] = useState<any>({});

  useEffect(() => {
    loadStats();
    loadNotices();
    loadInsights();
  }, []);

  /* ------------------ BASIC STATS ------------------ */
  const loadStats = async () => {
    const today = new Date().toISOString().split('T')[0];

    const [a, c, n, t] = await Promise.all([
      supabase.from('admissions_form').select('*', { count: 'exact', head: true }),
      supabase.from('contact_messages').select('*', { count: 'exact', head: true }),
      supabase.from('notices').select('*', { count: 'exact', head: true }),
      supabase
        .from('admissions_form')
        .select('*', { count: 'exact', head: true })
        .gte('created_at', today),
    ]);

    setStats({
      admissions: a.count || 0,
      contacts: c.count || 0,
      notices: n.count || 0,
      todayAdmissions: t.count || 0,
    });
  };

  /* ------------------ INSIGHTS ------------------ */
  const loadInsights = async () => {
    const last7Days = new Date();
    last7Days.setDate(last7Days.getDate() - 7);

    const [lastAdmission, lastNotice, weekAdmissions, todayMessages] =
      await Promise.all([
        supabase
          .from('admissions_form')
          .select('created_at')
          .order('created_at', { ascending: false })
          .limit(1)
          .single(),

        supabase
          .from('notices')
          .select('created_at')
          .order('created_at', { ascending: false })
          .limit(1)
          .single(),

        supabase
          .from('admissions_form')
          .select('*', { count: 'exact', head: true })
          .gte('created_at', last7Days.toISOString()),

        supabase
          .from('contact_messages')
          .select('*', { count: 'exact', head: true })
          .gte('created_at', new Date().toISOString().split('T')[0]),
      ]);

    setInsights({
      lastAdmission: lastAdmission?.data?.created_at,
      lastNotice: lastNotice?.data?.created_at,
      weekAdmissions: weekAdmissions.count || 0,
      todayMessages: todayMessages.count || 0,
    });
  };

  /* ------------------ NOTICES ------------------ */
  const loadNotices = async () => {
    const { data } = await supabase
      .from('notices')
      .select('id, title, created_at')
      .order('created_at', { ascending: false })
      .limit(5);

    setNotices(data || []);
  };

  const deleteNotice = async (id: string) => {
    if (!confirm('Delete this notice?')) return;
    await supabase.from('notices').delete().eq('id', id);
    setNotices(prev => prev.filter(n => n.id !== id));
    loadStats();
  };

  return (
    <div className="space-y-6">

      {/* HEADER */}
      <section className="rounded-3xl bg-neutral-900 border border-neutral-800 p-6">
        <h1 className="text-3xl font-extrabold text-white">Dashboard</h1>
        <p className="text-neutral-400 mt-1">
          Admissions, messages & notices overview
        </p>
      </section>

      {/* KPI CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        <KPI
          icon={FileText}
          label="Admissions"
          value={stats.admissions}
          sub={`${stats.todayAdmissions} today`}
          gradient="from-emerald-500 to-cyan-500"
          onClick={() => navigate('/admin/admissions')}
        />
        <KPI
          icon={MessageSquare}
          label="Contacts"
          value={stats.contacts}
          sub="Inbox"
          gradient="from-rose-500 to-pink-500"
          onClick={() => navigate('/admin/contacts')}
        />
        <KPI
          icon={Bell}
          label="Notices"
          value={stats.notices}
          sub="Manage notices"
          gradient="from-amber-400 to-orange-500"
          onClick={() => navigate('/admin/notices')}
        />
      </div>

      {/* INSIGHTS + NOTICES */}
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-5">

        {/* NOTICES — FIRST ON MOBILE */}
        <div className="order-1 lg:order-2 bg-neutral-900 border border-neutral-800 rounded-2xl p-5">
          <div className="flex items-center justify-between mb-3">
            <h3 className="font-semibold flex items-center gap-2 text-amber-300">
              <Bell className="w-5 h-5" />
              Notices
            </h3>

            <button
              onClick={() => navigate('/admin/notices/add')}
              className="
                flex items-center gap-1 px-3 py-1.5 rounded-lg
                bg-neutral-800 border border-neutral-700
                text-neutral-200
                hover:bg-neutral-700 hover:text-white
                transition
              "
            >
              <Plus className="w-4 h-4" />
              Add Notice
            </button>
          </div>

          {notices.map((n) => (
            <div
              key={n.id}
              className="flex items-center justify-between py-3 border-b border-neutral-700/60"
            >
              <div className="min-w-0">
                <p className="text-sm font-medium text-neutral-100 truncate">
                  {n.title}
                </p>
                <p className="text-xs text-neutral-400 flex items-center gap-1 mt-0.5">
                  <Calendar className="w-3 h-3 text-cyan-400" />
                  {new Date(n.created_at).toLocaleDateString()}
                </p>
              </div>

              <div className="flex gap-2">
                <ActionBtn
                  icon={Pencil}
                  label="Edit"
                  color="text-emerald-400"
                  onClick={() => navigate(`/admin/notices/edit/${n.id}`)}
                />
                <ActionBtn
                  icon={Trash2}
                  label="Delete"
                  color="text-rose-400"
                  onClick={() => deleteNotice(n.id)}
                />
              </div>
            </div>
          ))}
        </div>

        {/* INSIGHTS — SECOND ON MOBILE */}
        <div className="order-2 lg:order-1 lg:col-span-2 bg-neutral-900 border border-neutral-800 rounded-2xl p-5">
          <h3 className="font-bold mb-4 flex items-center gap-2 text-indigo-400">
            <CheckCircle className="w-5 h-5" />
            Today & Activity Insights
          </h3>

          <div className="grid sm:grid-cols-2 gap-4 text-sm">
            <Insight
              icon={Calendar}
              label="Admissions (Last 7 Days)"
              value={insights.weekAdmissions}
            />
            <Insight
              icon={MessageSquare}
              label="Messages Today"
              value={insights.todayMessages}
            />
            <Insight
              icon={Clock}
              label="Last Admission"
              value={
                insights.lastAdmission
                  ? new Date(insights.lastAdmission).toLocaleString()
                  : 'No data'
              }
            />
            <Insight
              icon={AlertCircle}
              label="Last Notice Posted"
              value={
                insights.lastNotice
                  ? new Date(insights.lastNotice).toLocaleString()
                  : 'No notices yet'
              }
            />
          </div>
        </div>

      </section>
    </div>
  );
}

/* ------------------ COMPONENTS ------------------ */

function KPI({ icon: Icon, label, value, sub, onClick, gradient }: any) {
  return (
    <button
      onClick={onClick}
      className="group relative text-left bg-neutral-900 border border-neutral-800 rounded-2xl p-5 hover:-translate-y-1 hover:border-neutral-700 transition"
    >
      <ChevronRight className="absolute top-4 right-4 w-5 h-5 text-neutral-500 group-hover:text-white transition" />
      <div className={`w-12 h-12 rounded-xl flex items-center justify-center bg-gradient-to-br ${gradient}`}>
        <Icon className="w-6 h-6 text-white" />
      </div>
      <h4 className="mt-4 text-neutral-400">{label}</h4>
      <p className="text-4xl font-extrabold text-white">{value}</p>
      <p className="mt-1 text-xs text-neutral-500">{sub}</p>
    </button>
  );
}

function Insight({ icon: Icon, label, value }: any) {
  return (
    <div className="flex items-start gap-3 bg-neutral-800/50 rounded-xl p-3">
      <Icon className="w-5 h-5 text-indigo-400 mt-0.5" />
      <div>
        <p className="text-neutral-400 text-xs">{label}</p>
        <p className="text-neutral-200 font-medium">{value}</p>
      </div>
    </div>
  );
}

function ActionBtn({ icon: Icon, label, color, onClick }: any) {
  return (
    <button
      onClick={onClick}
      className={`flex items-center gap-1 text-xs px-2 py-1 rounded
        bg-neutral-800 hover:bg-neutral-700 ${color}`}
    >
      <Icon className="w-3 h-3" />
      {label}
    </button>
  );
}
