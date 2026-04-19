-- Blade Boutique — initial schema
-- Run this in Supabase SQL Editor for project fkgigqodctfselcwsqfz

create extension if not exists "pgcrypto";

create table if not exists public.enquiries (
  id uuid default gen_random_uuid() primary key,
  name text not null,
  phone text not null,
  email text,
  service text not null,
  preferred_date date,
  message text,
  source text default 'website',
  created_at timestamptz default now()
);

create table if not exists public.gallery_items (
  id uuid default gen_random_uuid() primary key,
  service_slug text not null,
  before_url text,
  after_url text,
  caption text,
  client_name text,
  weeks_healed int,
  featured boolean default false,
  display_order int default 0,
  created_at timestamptz default now()
);

create index if not exists gallery_items_service_idx on public.gallery_items (service_slug);
create index if not exists gallery_items_featured_idx on public.gallery_items (featured) where featured = true;

create table if not exists public.reviews (
  id uuid default gen_random_uuid() primary key,
  author text not null,
  rating int check (rating between 1 and 5),
  body text,
  service_mentioned text,
  source text default 'google',
  featured boolean default false,
  created_at timestamptz default now()
);

create index if not exists reviews_featured_idx on public.reviews (featured) where featured = true;

-- RLS
alter table public.enquiries enable row level security;
alter table public.gallery_items enable row level security;
alter table public.reviews enable row level security;

-- Anyone can submit an enquiry
create policy "anon insert enquiries"
on public.enquiries for insert to anon
with check (true);

-- Public read for gallery + reviews
create policy "public read gallery"
on public.gallery_items for select to anon
using (true);

create policy "public read reviews"
on public.reviews for select to anon
using (true);

-- Service role bypasses RLS automatically; admin writes happen server-side.
