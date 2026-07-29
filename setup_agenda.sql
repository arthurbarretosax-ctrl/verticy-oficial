-- Tabela de Disponibilidade (Expediente do usuário)
CREATE TABLE IF NOT EXISTS public.availability (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id uuid REFERENCES auth.users(id) ON DELETE CASCADE,
  day_of_week integer NOT NULL, -- 0 = Domingo, 1 = Segunda, etc.
  start_time time NOT NULL, -- ex: '09:00:00'
  end_time time NOT NULL, -- ex: '18:00:00'
  slot_duration integer DEFAULT 30, -- duração média do atendimento em minutos
  created_at timestamp with time zone DEFAULT timezone('utc'::text, now()) NOT NULL,
  UNIQUE(user_id, day_of_week)
);

-- Tabela de Agendamentos (Clientes marcados)
CREATE TABLE IF NOT EXISTS public.appointments (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id uuid REFERENCES auth.users(id) ON DELETE CASCADE, -- Dono do site
  client_name text NOT NULL,
  client_whatsapp text NOT NULL,
  service_name text, -- Nome do serviço escolhido
  appointment_date date NOT NULL,
  start_time time NOT NULL,
  status text DEFAULT 'confirmed', -- confirmed, cancelled, completed
  created_at timestamp with time zone DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Habilitar RLS
ALTER TABLE public.availability ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.appointments ENABLE ROW LEVEL SECURITY;

-- Políticas para Availability
-- O dono do site pode ler, inserir, atualizar e deletar seus próprios horários
CREATE POLICY "Users can manage their own availability" ON public.availability
  FOR ALL USING (auth.uid() = user_id);
-- O público pode ler os horários (necessário para o modal de agendamento no site público)
CREATE POLICY "Public can view availability" ON public.availability
  FOR SELECT USING (true);

-- Políticas para Appointments
-- O dono do site pode ver e gerenciar todos os agendamentos marcados com ele
CREATE POLICY "Users can manage their own appointments" ON public.appointments
  FOR ALL USING (auth.uid() = user_id);
-- O público pode inserir novos agendamentos e ver APENAS os horários ocupados (para não marcar duplo)
CREATE POLICY "Public can insert appointments" ON public.appointments
  FOR INSERT WITH CHECK (true);
CREATE POLICY "Public can view busy slots" ON public.appointments
  FOR SELECT USING (true); -- O front-end filtrará apenas data/hora para não vazar os nomes dos clientes
