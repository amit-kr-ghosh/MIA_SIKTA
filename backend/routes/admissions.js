import express from 'express';
import multer from 'multer';
import  supabase from '../config/supabase.js';

const router = express.Router();
const upload = multer({ storage: multer.memoryStorage() });

router.post('/admissions-form', upload.single('photo'), async (req, res) => {
  try {
    const formData = req.body;
    let photoUrl = null;

    if (req.file) {
      const fileExt = req.file.originalname.split('.').pop();
      const fileName = `${Date.now()}-${Math.random().toString(36).substring(7)}.${fileExt}`;

      const { data: uploadData, error: uploadError } = await supabase.storage
        .from('admission-photos')
        .upload(fileName, req.file.buffer, {
          contentType: req.file.mimetype,
          upsert: false
        });

      if (uploadError) throw uploadError;

      const { data: { publicUrl } } = supabase.storage
        .from('admission-photos')
        .getPublicUrl(fileName);

      photoUrl = publicUrl;
    }

    const { data, error } = await supabase
      .from('admissions_form')
      .insert([{
        branch: formData.branch || 'Mothers International Academy',
        session: formData.session || '2025-2026',
        class: formData.class,
        student_name: formData.student_name,
        dob: formData.dob,
        gender: formData.gender,
        caste: formData.caste,
        religion: formData.religion,
        father_name: formData.father_name,
        father_qualification: formData.father_qualification,
        father_occupation: formData.father_occupation,
        father_occupation_details: formData.father_occupation_details,
        father_income: formData.father_income ? parseFloat(formData.father_income) : null,
        mother_name: formData.mother_name,
        mother_qualification: formData.mother_qualification,
        mother_occupation: formData.mother_occupation,
        mother_occupation_details: formData.mother_occupation_details,
        mother_income: formData.mother_income ? parseFloat(formData.mother_income) : null,
        mobile_number: formData.mobile_number,
        contact_number: formData.contact_number,
        email: formData.email,
        present_address: formData.present_address,
        permanent_address: formData.permanent_address,
        siblings: formData.siblings,
        guardian: formData.guardian,
        photo_url: photoUrl,
        status: 'New'
      }])
      .select();

    if (error) throw error;

    res.status(201).json({
      success: true,
      message: 'Admission form submitted successfully',
      data: data[0]
    });
  } catch (error) {
    console.error('Error submitting admission form:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to submit admission form',
      error: error.message
    });
  }
});

router.get('/admissions-form', async (req, res) => {
  try {
    const { data, error } = await supabase
      .from('admissions_form')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) throw error;

    res.status(200).json({
      success: true,
      data: data
    });
  } catch (error) {
    console.error('Error fetching admission forms:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch admission forms',
      error: error.message
    });
  }
});

router.get('/admissions-form/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { data, error } = await supabase
      .from('admissions_form')
      .select('*')
      .eq('id', id)
      .maybeSingle();

    if (error) throw error;

    if (!data) {
      return res.status(404).json({
        success: false,
        message: 'Admission form not found'
      });
    }

    res.status(200).json({
      success: true,
      data: data
    });
  } catch (error) {
    console.error('Error fetching admission form:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch admission form',
      error: error.message
    });
  }
});

router.put('/admissions-form/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    const { data, error } = await supabase
      .from('admissions_form')
      .update({ status })
      .eq('id', id)
      .select();

    if (error) throw error;

    if (!data || data.length === 0) {
      return res.status(404).json({
        success: false,
        message: 'Admission form not found'
      });
    }

    res.status(200).json({
      success: true,
      message: 'Admission form updated successfully',
      data: data[0]
    });
  } catch (error) {
    console.error('Error updating admission form:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to update admission form',
      error: error.message
    });
  }
});

router.delete('/admissions-form/:id', async (req, res) => {
  try {
    const { id } = req.params;

    const { error } = await supabase
      .from('admissions_form')
      .delete()
      .eq('id', id);

    if (error) throw error;

    res.status(200).json({
      success: true,
      message: 'Admission form deleted successfully'
    });
  } catch (error) {
    console.error('Error deleting admission form:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to delete admission form',
      error: error.message
    });
  }
});

export default router;
