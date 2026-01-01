import 'dotenv/config';
import { createClient } from '@supabase/supabase-js';

// Backend should use SUPABASE_URL and SUPABASE_KEY (SECRET key)
const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_KEY; // MUST be the secret key

if (!supabaseUrl || !supabaseKey) {
  throw new Error('Missing Supabase environment variables');
}

const supabase = createClient(supabaseUrl, supabaseKey);
export default supabase;
