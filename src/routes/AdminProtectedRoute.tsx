import { Navigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabaseClient';

const AdminProtectedRoute = ({ children }: { children: JSX.Element }) => {
  const [loading, setLoading] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const checkAdmin = async () => {
      const { data: auth } = await supabase.auth.getUser();

      if (!auth.user) {
        setLoading(false);
        return;
      }

      const { data } = await supabase
        .from('user_roles')
        .select('role')
        .eq('user_id', auth.user.id)
        .single();

      setIsAdmin(data?.role === 'admin');
      setLoading(false);
    };

    checkAdmin();
  }, []);

  if (loading) return null;

  return isAdmin ? children : <Navigate to="/admin/login" replace />;
};

export default AdminProtectedRoute;
