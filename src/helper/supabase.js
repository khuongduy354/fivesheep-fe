import { createClient } from "@supabase/supabase-js";

// Create a single supabase client for interacting with your database
// WARNING: only use this for demo purposes, you should never expose your secret key in a production application
const REACT_APP_SP_URL = "https://qlurszxavwgoxlgrtwoa.supabase.co";
const REACT_APP_SP_ANON =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFsdXJzenhhdndnb3hsZ3J0d29hIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTIyMDg1NDEsImV4cCI6MjAyNzc4NDU0MX0.046uFUU6Zrg5bMZFyGuCRvDiT_8nvwNdVyyK8nwclVE";
export const supabase = createClient(REACT_APP_SP_URL, REACT_APP_SP_ANON);
