/*
  # BAY GEN AI Competition Database Schema

  ## Overview
  Creates tables for the BAY GEN AI art competition website including artworks, judges, and submissions.

  ## New Tables
  
  ### `judges`
  - `id` (uuid, primary key)
  - `name` (text) - Judge's full name
  - `role` (text) - Their specialty (Artist/Technologist/Educator/Ethics)
  - `bio` (text) - 2-3 sentence biography
  - `photo_url` (text) - Profile photo URL
  - `website_url` (text, optional) - Personal website
  - `linkedin_url` (text, optional) - LinkedIn profile
  - `display_order` (integer) - For ordering on jury page
  - `created_at` (timestamptz)
  
  ### `artworks`
  - `id` (uuid, primary key)
  - `title` (text) - Artwork title
  - `artist_name` (text) - Student artist name
  - `artist_email` (text) - Contact email
  - `grade_division` (text) - 'middle' or 'high'
  - `school` (text, optional) - School name
  - `image_url` (text) - Main artwork image
  - `artist_statement` (text) - 100-200 word statement
  - `tools_used` (text) - AI tools and software used
  - `prompt_excerpt` (text, optional) - Sample prompts
  - `process_note` (text, optional) - How they created it
  - `status` (text) - 'pending', 'approved', 'finalist', 'winner'
  - `theme_tag` (text) - Which theme/year
  - `created_at` (timestamptz)
  
  ## Security
  - Enable RLS on all tables
  - Public read access for approved artworks and judges
  - Authenticated admin access for management
*/

-- Create judges table
CREATE TABLE IF NOT EXISTS judges (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  role text NOT NULL,
  bio text NOT NULL,
  photo_url text DEFAULT '',
  website_url text DEFAULT '',
  linkedin_url text DEFAULT '',
  display_order integer DEFAULT 0,
  created_at timestamptz DEFAULT now()
);

-- Create artworks table
CREATE TABLE IF NOT EXISTS artworks (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  artist_name text NOT NULL,
  artist_email text NOT NULL,
  grade_division text NOT NULL CHECK (grade_division IN ('middle', 'high')),
  school text DEFAULT '',
  image_url text NOT NULL,
  artist_statement text NOT NULL,
  tools_used text NOT NULL,
  prompt_excerpt text DEFAULT '',
  process_note text DEFAULT '',
  status text DEFAULT 'pending' CHECK (status IN ('pending', 'approved', 'finalist', 'winner')),
  theme_tag text DEFAULT '2024',
  created_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE judges ENABLE ROW LEVEL SECURITY;
ALTER TABLE artworks ENABLE ROW LEVEL SECURITY;

-- Judges policies: public can read all judges
CREATE POLICY "Anyone can view judges"
  ON judges FOR SELECT
  TO anon, authenticated
  USING (true);

-- Artworks policies: public can view approved artworks only
CREATE POLICY "Anyone can view approved artworks"
  ON artworks FOR SELECT
  TO anon, authenticated
  USING (status IN ('approved', 'finalist', 'winner'));

-- Allow anonymous submissions (will be moderated)
CREATE POLICY "Anyone can submit artworks"
  ON artworks FOR INSERT
  TO anon, authenticated
  WITH CHECK (status = 'pending');
