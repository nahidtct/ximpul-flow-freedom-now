
-- Create site_settings table for managing site configuration
CREATE TABLE public.site_settings (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  setting_key TEXT NOT NULL UNIQUE,
  setting_value TEXT,
  setting_type TEXT DEFAULT 'text', -- text, url, email, phone, boolean
  description TEXT,
  category TEXT DEFAULT 'general', -- general, social, contact, etc.
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.site_settings ENABLE ROW LEVEL SECURITY;

-- Create policy for public read access (for frontend)
CREATE POLICY "Anyone can read site settings" ON public.site_settings 
FOR SELECT USING (true);

-- Create policy for admin write access
CREATE POLICY "Admins can manage site settings" ON public.site_settings 
FOR ALL USING (true);

-- Insert default settings
INSERT INTO public.site_settings (setting_key, setting_value, setting_type, description, category) VALUES
('social_instagram_url', '#', 'url', 'Instagram profile URL', 'social'),
('social_facebook_url', '#', 'url', 'Facebook page URL', 'social'),
('social_youtube_url', '#', 'url', 'YouTube channel URL', 'social'),
('social_tiktok_url', '#', 'url', 'TikTok profile URL', 'social'),
('contact_phone', '+8801XXXXXXXXX', 'phone', 'Primary contact phone number', 'contact'),
('contact_email', 'support@ximpul.com', 'email', 'Primary contact email address', 'contact'),
('company_name', 'Ximpul', 'text', 'Company name', 'general'),
('company_address', 'Dhaka, Bangladesh', 'text', 'Company address', 'contact');

-- Create index for better performance
CREATE INDEX idx_site_settings_key ON public.site_settings(setting_key);
CREATE INDEX idx_site_settings_category ON public.site_settings(category);
