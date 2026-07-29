-- ==============================================================================
-- VERTICY WEB - MASTER SETUP SCRIPT
-- ==============================================================================

-- 1. TABELA DE PERFIS (PROFILES)
CREATE TABLE IF NOT EXISTS public.profiles (
  id uuid REFERENCES auth.users ON DELETE CASCADE PRIMARY KEY,
  username text UNIQUE NOT NULL,
  full_name text,
  profession text,
  plan text DEFAULT 'essencial',
  onboarding_completed boolean DEFAULT false,
  created_at timestamp with time zone DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Habilitar RLS e criar políticas para Profiles
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Public profiles are viewable by everyone" ON public.profiles FOR SELECT USING (true);
CREATE POLICY "Users can insert their own profile" ON public.profiles FOR INSERT WITH CHECK (auth.uid() = id);
CREATE POLICY "Users can update own profile" ON public.profiles FOR UPDATE USING (auth.uid() = id);

-- 2. TABELA DE SITES
CREATE TABLE IF NOT EXISTS public.sites (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id uuid REFERENCES auth.users(id) ON DELETE CASCADE UNIQUE,
  template_id text NOT NULL DEFAULT 'aurora',
  content jsonb DEFAULT '{}'::jsonb,
  published boolean DEFAULT false,
  created_at timestamp with time zone DEFAULT timezone('utc'::text, now()) NOT NULL,
  updated_at timestamp with time zone DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Trigger para atualizar updated_at
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = now();
    RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TRIGGER update_sites_updated_at
    BEFORE UPDATE ON public.sites
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();

-- Habilitar RLS e criar políticas para Sites
ALTER TABLE public.sites ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Public sites are viewable by everyone" ON public.sites FOR SELECT USING (true);
CREATE POLICY "Users can insert their own site" ON public.sites FOR INSERT WITH CHECK (auth.uid() = user_id);
CREATE POLICY "Users can update own site" ON public.sites FOR UPDATE USING (auth.uid() = user_id);

-- 3. TABELAS DE AGENDA
CREATE TABLE IF NOT EXISTS public.availability (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id uuid REFERENCES auth.users(id) ON DELETE CASCADE,
  day_of_week integer NOT NULL,
  start_time time NOT NULL,
  end_time time NOT NULL,
  slot_duration integer DEFAULT 30,
  created_at timestamp with time zone DEFAULT timezone('utc'::text, now()) NOT NULL,
  UNIQUE(user_id, day_of_week)
);

CREATE TABLE IF NOT EXISTS public.appointments (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id uuid REFERENCES auth.users(id) ON DELETE CASCADE,
  client_name text NOT NULL,
  client_whatsapp text NOT NULL,
  service_name text,
  appointment_date date NOT NULL,
  start_time time NOT NULL,
  status text DEFAULT 'confirmed',
  created_at timestamp with time zone DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Habilitar RLS e criar políticas para Agenda
ALTER TABLE public.availability ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.appointments ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can manage their own availability" ON public.availability FOR ALL USING (auth.uid() = user_id);
CREATE POLICY "Public can view availability" ON public.availability FOR SELECT USING (true);
CREATE POLICY "Users can manage their own appointments" ON public.appointments FOR ALL USING (auth.uid() = user_id);
CREATE POLICY "Public can insert appointments" ON public.appointments FOR INSERT WITH CHECK (true);
CREATE POLICY "Public can view busy slots" ON public.appointments FOR SELECT USING (true);

-- 4. BUCKET DE ARMAZENAMENTO (STORAGE PARA IMAGENS)
INSERT INTO storage.buckets (id, name, public) VALUES ('site-assets', 'site-assets', true) ON CONFLICT (id) DO NOTHING;
CREATE POLICY "Public Access" ON storage.objects FOR SELECT USING (bucket_id = 'site-assets');
CREATE POLICY "Authenticated users can upload" ON storage.objects FOR INSERT TO authenticated WITH CHECK (bucket_id = 'site-assets');
CREATE POLICY "Users can update own objects" ON storage.objects FOR UPDATE TO authenticated USING (bucket_id = 'site-assets');
CREATE POLICY "Users can delete own objects" ON storage.objects FOR DELETE TO authenticated USING (bucket_id = 'site-assets');
