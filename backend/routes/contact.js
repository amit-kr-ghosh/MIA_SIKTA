import express from 'express';
import supabase from '../config/supabase.js';

const router = express.Router();

router.post('/contact', async (req, res) => {
  try {
    const { name, email, phone, subject, message } = req.body;

    const { data, error } = await supabase
      .from('contact_messages')
      .insert([{ name, email, phone, subject, message }])
      .select();

    if (error) throw error;

    res.status(201).json({
      success: true,
      message: 'Message sent successfully'
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message
    });
  }
});

export default router;
