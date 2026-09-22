create table if not exists public.menu_categories (
  id text primary key,
  label text not null,
  sort_order int default 0
);
create table if not exists public.menu_items (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  description text,
  price_zar numeric,
  image text,
  category text references public.menu_categories (id),
  available boolean default true,
  featured boolean default false,
  created_at timestamptz default now()
);
create table if not exists public.events (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  description text,
  date date not null,
  start_time time,
  end_time time,
  image text,
  category text,
  location text,
  booking_url text,
  video_url text,
  featured boolean default false,
  published boolean default false,
  created_at timestamptz default now()
);
create table if not exists public.gallery_images (
  id uuid primary key default gen_random_uuid(),
  src text not null,
  alt text not null,
  category text not null,
  created_at timestamptz default now()
);
create table if not exists public.reservations (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null,
  phone text not null,
  guests int not null,
  date date not null,
  time time not null,
  special_request text,
  status text not null default 'pending' check (status in ('pending','confirmed','cancelled','completed')),
  created_at timestamptz default now()
);
create table if not exists public.function_enquiries (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null,
  phone text not null,
  event_type text not null,
  guests int not null,
  preferred_date date,
  budget text,
  additional_info text,
  status text default 'new',
  created_at timestamptz default now()
);
create table if not exists public.contact_messages (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null,
  phone text,
  message text not null,
  created_at timestamptz default now()
);
alter table public.reservations enable row level security;
alter table public.function_enquiries enable row level security;
alter table public.contact_messages enable row level security;
alter table public.menu_items enable row level security;
alter table public.events enable row level security;
alter table public.gallery_images enable row level security;
create policy "public read menu" on public.menu_items for select using (true);
create policy "public read published events" on public.events for select using (published = true);
create policy "public read gallery" on public.gallery_images for select using (true);
