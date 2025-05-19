import { createClient } from '@supabase/supabase-js'; 
/**
 * [TODO]
 * Get the key and url from supabase, create environment variables for them
 */
const supabaseKey = process.env.SUPABASE_KEY || "";
const supabaseURL = process.env.SUPABASE_URL || "";

const supabase = createClient(supabaseKey, supabaseURL);

export default supabase;