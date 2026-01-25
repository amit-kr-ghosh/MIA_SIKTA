import express from 'express';
import supabase from '../config/supabase.js';

const router = express.Router();

/* ---------------- HELPER: CHECK ADMIN ---------------- */
const checkAdmin = async (req) => {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader) return null;

    const token = authHeader.replace('Bearer ', '');
    if (!token) return null;

    const { data: userData, error: userError } =
      await supabase.auth.getUser(token);

    if (userError || !userData?.user) return null;

    const { data: roleData, error: roleError } = await supabase
      .from('user_roles')
      .select('role')
      .eq('user_id', userData.user.id)
      .maybeSingle();

    if (roleError) return null;
    if (!roleData || roleData.role !== 'admin') return null;

    return userData.user;
  } catch (err) {
    console.error('checkAdmin error:', err);
    return null;
  }
};
/* ---------------------------------------------------- */

/* CREATE NOTICE (ADMIN ONLY) */
router.post('/notices', async (req, res) => {
  try {
    const admin = await checkAdmin(req);

    if (!admin) {
      return res.status(403).json({
        success: false,
        message: 'Admin access required',
      });
    }

    const { title, description, type, notice_date } = req.body;

    if (!title || !description || !type || !notice_date) {
      return res.status(400).json({
        success: false,
        message: 'Missing required fields',
      });
    }

    // 🔥 INSERT ONLY — NO select().single()
    const { error } = await supabase.from('notices').insert([
      {
        title,
        description,
        type,
        notice_date,
        created_by: admin.id,
      },
    ]);

    if (error) {
      console.error('INSERT ERROR:', error);
      return res.status(400).json({
        success: false,
        message: error.message,
      });
    }

    res.status(201).json({ success: true });
  } catch (err) {
    console.error('POST /notices error:', err);
    res.status(500).json({
      success: false,
      message: 'Internal server error',
    });
  }
});

/* GET ALL NOTICES (PUBLIC) */
router.get('/notices', async (req, res) => {
  try {
    const { data, error } = await supabase
      .from('notices')
      .select('*')
      .order('notice_date', { ascending: false });

    if (error) throw error;

    res.json({ success: true, data });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: 'Failed to fetch notices',
    });
  }
});

/* DELETE NOTICE (ADMIN ONLY) */
router.delete('/notices/:id', async (req, res) => {
  try {
    const admin = await checkAdmin(req);

    if (!admin) {
      return res.status(403).json({
        success: false,
        message: 'Admin access required',
      });
    }

    const { id } = req.params;

    const { error } = await supabase
      .from('notices')
      .delete()
      .eq('id', id);

    if (error) {
      return res.status(400).json({
        success: false,
        message: error.message,
      });
    }

    res.json({ success: true });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: 'Internal server error',
    });
  }
});

export default router;
