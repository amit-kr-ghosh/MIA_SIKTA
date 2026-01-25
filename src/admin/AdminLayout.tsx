import { useState } from 'react';
import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom';
import {
  LayoutDashboard,
  FileText,
  MessageSquare,
  Bell,
  LogOut,
  Menu,
  X,
} from 'lucide-react';
import { supabase } from '../lib/supabaseClient';

const NAV = [
  { label: 'Dashboard', path: '/admin/dashboard', icon: LayoutDashboard },
  { label: 'Admissions', path: '/admin/admissions', icon: FileText },
  { label: 'Contacts', path: '/admin/contacts', icon: MessageSquare },
  { label: 'Notices', path: '/admin/notices', icon: Bell },
];

export default function AdminLayout() {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  async function logout() {
    await supabase.auth.signOut();
    navigate('/admin/login', { replace: true });
  }

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100">
      {/* HEADER */}
      <header className="sticky top-0 z-40 bg-neutral-950/80 backdrop-blur border-b border-neutral-800">
        <div className="max-w-7xl mx-auto h-14 px-4 flex items-center justify-between">
          <div className="flex items-center gap-5">
            {/* HAMBURGER */}
            <button
              onClick={() => setOpen(true)}
              className="md:hidden p-2 rounded-lg hover:bg-neutral-800"
            >
              <Menu className="w-5 h-5" />
            </button>

            {/* ADMIN LOGO → DASHBOARD */}
            <button
              onClick={() => navigate('/admin/dashboard')}
              className="font-extrabold tracking-tight text-white hover:text-neutral-200"
            >
              Admin
            </button>

            {/* DESKTOP NAV */}
            <nav className="hidden md:flex gap-1">
              {NAV.map(({ label, path, icon: Icon }) => {
                const active = location.pathname.startsWith(path);
                return (
                  <Link
                    key={path}
                    to={path}
                    className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm transition
                      ${
                        active
                          ? 'bg-neutral-800 text-white shadow-[0_0_20px_rgba(255,255,255,0.1)]'
                          : 'text-neutral-400 hover:bg-neutral-900'
                      }`}
                  >
                    <Icon className="w-4 h-4" />
                    {label}
                  </Link>
                );
              })}
            </nav>
          </div>

          {/* LOGOUT */}
          <button
            onClick={logout}
            className="flex items-center gap-2 text-sm text-neutral-400 hover:text-rose-400"
          >
            <LogOut className="w-4 h-4" />
            Logout
          </button>
        </div>
      </header>

      {/* MOBILE SIDEBAR */}
      {open && (
        <div className="fixed inset-0 z-50 md:hidden">
          {/* OVERLAY */}
          <div
            className="absolute inset-0 bg-black/60"
            onClick={() => setOpen(false)}
          />

          {/* DRAWER */}
          <div className="absolute left-0 top-0 h-full w-72 bg-neutral-950 border-r border-neutral-800 p-4">
            <div className="flex items-center justify-between mb-6">
              <span className="font-extrabold text-white">Admin</span>
              <button onClick={() => setOpen(false)}>
                <X className="w-5 h-5" />
              </button>
            </div>

            <nav className="space-y-2">
              {NAV.map(({ label, path, icon: Icon }) => {
                const active = location.pathname.startsWith(path);
                return (
                  <Link
                    key={path}
                    to={path}
                    onClick={() => setOpen(false)}
                    className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition
                      ${
                        active
                          ? 'bg-neutral-800 text-white'
                          : 'text-neutral-300 hover:bg-neutral-900'
                      }`}
                  >
                    <Icon className="w-4 h-4" />
                    {label}
                  </Link>
                );
              })}
            </nav>
          </div>
        </div>
      )}

      {/* CONTENT */}
      <main className="max-w-7xl mx-auto px-4 py-6">
        <Outlet />
      </main>
    </div>
  );
}
