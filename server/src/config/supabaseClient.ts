import { createClient } from '@supabase/supabase-js'; 
/**
 * [TODO]
 * Get the key and url from supabase, create environment variables for them
 */
const supabaseKey = "";
const supabaseURL = "";

const supabase = createClient(supabaseKey, supabaseURL);

export default supabase;