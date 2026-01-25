/*
  # Create Admissions Form Table

  ## Overview
  This migration creates the admissions_form table for storing student admission applications
  for Mothers International Academy.

  ## New Tables
    - `admissions_form`
      - `id` (uuid, primary key) - Unique identifier for each admission
      - `branch` (text) - School branch name (fixed: Mothers International Academy)
      - `session` (text) - Academic session (e.g., 2025-2026)
      - `class` (text) - Class/grade applying for
      - `student_name` (text) - Full name of the student
      - `dob` (date) - Date of birth
      - `gender` (text) - Gender of student
      - `caste` (text) - Caste category
      - `religion` (text) - Religion
      - `father_name` (text) - Father's full name
      - `father_qualification` (text) - Father's educational qualification
      - `father_occupation` (text) - Father's occupation category
      - `father_occupation_details` (text) - Detailed occupation description
      - `father_income` (numeric) - Father's monthly income
      - `mother_name` (text) - Mother's full name
      - `mother_qualification` (text) - Mother's educational qualification
      - `mother_occupation` (text) - Mother's occupation category
      - `mother_occupation_details` (text) - Detailed occupation description
      - `mother_income` (numeric) - Mother's monthly income
      - `mobile_number` (text) - Primary mobile number (10 digits)
      - `contact_number` (text) - Secondary contact number (optional)
      - `email` (text) - Email address
      - `present_address` (text) - Current residential address
      - `permanent_address` (text) - Permanent residential address
      - `siblings` (text) - Information about siblings (optional)
      - `guardian` (text) - Person child will stay with
      - `photo_url` (text) - URL of uploaded student photograph in Supabase Storage
      - `status` (text) - Application status (default: 'New')
      - `created_at` (timestamptz) - Timestamp of submission

  ## Security
    - Enable RLS on `admissions_form` table
    - Add policy for public to insert new applications
    - Add policy for public to read all applications (for admin view)
    
  ## Notes
    - No authentication required as per project requirements
    - Photo uploads will be stored in Supabase Storage bucket 'admission-photos'
    - All applications default to 'New' status
*/

CREATE TABLE IF NOT EXISTS admissions_form (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  branch text NOT NULL DEFAULT 'Mothers International Academy',
  session text NOT NULL DEFAULT '2025-2026',
  class text NOT NULL,
  student_name text NOT NULL,
  dob date NOT NULL,
  gender text NOT NULL,
  caste text,
  religion text,
  father_name text NOT NULL,
  father_qualification text,
  father_occupation text,
  father_occupation_details text,
  father_income numeric,
  mother_name text NOT NULL,
  mother_qualification text,
  mother_occupation text,
  mother_occupation_details text,
  mother_income numeric,
  mobile_number text NOT NULL,
  contact_number text,
  email text,
  present_address text NOT NULL,
  permanent_address text NOT NULL,
  siblings text,
  guardian text,
  photo_url text,
  status text DEFAULT 'New',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE admissions_form ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can insert admission applications"
  ON admissions_form
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

CREATE POLICY "Anyone can view admission applications"
  ON admissions_form
  FOR SELECT
  TO anon, authenticated
  USING (true);

CREATE POLICY "Anyone can update admission applications"
  ON admissions_form
  FOR UPDATE
  TO anon, authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Anyone can delete admission applications"
  ON admissions_form
  FOR DELETE
  TO anon, authenticated
  USING (true);