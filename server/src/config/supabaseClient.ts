import dotenv from 'dotenv';
import { createClient } from '@supabase/supabase-js'; 
dotenv.config();

const supabaseURL = process.env.SUPABASE_URL || "";
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || "";

const supabase = createClient(supabaseURL, supabaseKey);

export default supabase;