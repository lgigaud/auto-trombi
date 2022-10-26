import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://zjgoooagewiwyfnmdirg.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpqZ29vb2FnZXdpd3lmbm1kaXJnIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjY3OTMxMTIsImV4cCI6MTk4MjM2OTExMn0.z1azLhx27tJTxm7fBUeAsovFX4qyk8bLSbgKnwHCmRE';
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;