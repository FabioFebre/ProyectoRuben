import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://iauyvkwpeghudaygqgan.supabase.co";
const supabaseAnonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlhdXl2a3dwZWdodWRheWdxZ2FuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjA1MTA0NTYsImV4cCI6MjA3NjA4NjQ1Nn0.DPOkRuapK2AN-QMWF1Zdh051m83NP3dL_jFfUbIA04k";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
