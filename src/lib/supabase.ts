import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export interface Judge {
  id: string;
  name: string;
  role: string;
  bio: string;
  photo_url: string;
  website_url: string;
  linkedin_url: string;
  display_order: number;
  created_at: string;
}

export interface Artwork {
  id: string;
  title: string;
  artist_name: string;
  artist_email: string;
  grade_division: 'middle' | 'high';
  school: string;
  image_url: string;
  artist_statement: string;
  tools_used: string;
  prompt_excerpt: string;
  process_note: string;
  status: 'pending' | 'approved' | 'finalist' | 'winner';
  theme_tag: string;
  created_at: string;
}
