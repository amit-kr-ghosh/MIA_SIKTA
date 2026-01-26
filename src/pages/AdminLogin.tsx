import { useEffect, useState } from "react";
import { supabase } from "../lib/supabaseClient";
import { useNavigate } from "react-router-dom";
import {
  Lock,
  Mail,
  Loader2,
  Shield,
  Eye,
  EyeOff,
} from "lucide-react";

const STORAGE_KEY = "admin_login_remember";

const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [remember, setRemember] = useState(true);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  /* ---------------- LOAD SAVED LOGIN ---------------- */
  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (!saved) return;

    try {
      const parsed = JSON.parse(saved);
      setEmail(parsed.email || "");
      setPassword(parsed.password || "");
      setRemember(true);
    } catch {
      localStorage.removeItem(STORAGE_KEY);
    }
  }, []);

  /* ---------------- LOGIN ---------------- */
  const loginAdmin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    /* 1️⃣ LOGIN */
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error || !data.user) {
      setLoading(false);
      alert(error?.message || "Login failed");
      return;
    }

    /* 2️⃣ CHECK ROLE */
    const { data: roleData, error: roleError } = await supabase
      .from("user_roles")
      .select("role")
      .eq("user_id", data.user.id)
      .maybeSingle();

    if (roleError || roleData?.role !== "admin") {
      await supabase.auth.signOut();
      localStorage.removeItem(STORAGE_KEY);
      setLoading(false);
      alert("Access denied. Admin only.");
      return;
    }

    /* 3️⃣ SAVE LOGIN (OPTIONAL) */
    if (remember) {
      localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify({
          email,
          password, // saved ONLY if user opted in
        })
      );
    } else {
      localStorage.removeItem(STORAGE_KEY);
    }

    setLoading(false);

    /* 4️⃣ REDIRECT */
    navigate("/admin/dashboard", { replace: true });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-neutral-950 px-4">
      <div
        className="
          w-full max-w-md
          bg-neutral-900 border border-neutral-800
          rounded-3xl p-6 sm:p-8
          shadow-xl
        "
      >
        {/* HEADER */}
        <div className="text-center mb-6">
          <div className="mx-auto w-14 h-14 rounded-2xl bg-emerald-500/10 flex items-center justify-center mb-4">
            <Shield className="w-7 h-7 text-emerald-400" />
          </div>

          <h2 className="text-2xl font-extrabold text-white">
            Admin Login
          </h2>
          <p className="text-sm text-neutral-400 mt-1">
            Authorized access only
          </p>
        </div>

        {/* FORM */}
        <form onSubmit={loginAdmin} className="space-y-4">
          {/* EMAIL */}
          <div>
            <label className="block text-xs text-neutral-400 mb-1">
              Email Address
            </label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-neutral-400" />
              <input
                type="email"
                placeholder="admin@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="
                  w-full pl-10 py-3 rounded-xl
                  bg-neutral-800 border border-neutral-700
                  text-neutral-100 placeholder-neutral-500
                  focus:outline-none focus:border-emerald-500
                "
              />
            </div>
          </div>

          {/* PASSWORD */}
          <div>
            <label className="block text-xs text-neutral-400 mb-1">
              Password
            </label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-neutral-400" />

              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="
                  w-full pl-10 pr-10 py-3 rounded-xl
                  bg-neutral-800 border border-neutral-700
                  text-neutral-100 placeholder-neutral-500
                  focus:outline-none focus:border-emerald-500
                "
              />

              <button
                type="button"
                onClick={() => setShowPassword((v) => !v)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-white"
              >
                {showPassword ? (
                  <EyeOff className="w-4 h-4" />
                ) : (
                  <Eye className="w-4 h-4" />
                )}
              </button>
            </div>
          </div>

          {/* REMEMBER ME */}
          <div className="flex items-center gap-2 text-xs text-neutral-400">
            <input
              type="checkbox"
              checked={remember}
              onChange={(e) => setRemember(e.target.checked)}
              className="accent-emerald-500"
            />
            Remember me on this device
          </div>

          {/* SUBMIT */}
          <button
            type="submit"
            disabled={loading}
            className="
              w-full mt-2 py-3 rounded-xl
              bg-emerald-600 hover:bg-emerald-500
              text-white font-semibold
              flex items-center justify-center gap-2
              transition
              disabled:opacity-60 disabled:cursor-not-allowed
            "
          >
            {loading && <Loader2 className="w-4 h-4 animate-spin" />}
            {loading ? "Signing in..." : "Login"}
          </button>
        </form>

        {/* FOOTER */}
        <p className="mt-6 text-xs text-center text-neutral-500">
          Mother’s International Academy • Admin Panel
        </p>
      </div>
    </div>
  );
};

export default AdminLogin;
