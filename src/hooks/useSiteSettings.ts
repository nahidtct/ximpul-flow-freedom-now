
import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';

export interface SiteSetting {
  id: string;
  setting_key: string;
  setting_value: string | null;
  setting_type: string;
  description: string | null;
  category: string;
  created_at: string;
  updated_at: string;
}

export const useSiteSettings = () => {
  const [settings, setSettings] = useState<SiteSetting[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchSettings = async () => {
    try {
      setIsLoading(true);
      console.log('Fetching site settings...');
      
      const { data, error } = await supabase
        .from('site_settings')
        .select('*')
        .order('category', { ascending: true });

      if (error) {
        console.error('Error fetching site settings:', error);
        throw error;
      }
      
      console.log('Site settings fetched successfully:', data?.length || 0, 'settings');
      setSettings(data || []);
    } catch (err: any) {
      console.error('Error fetching site settings:', err);
      setError(err.message);
      toast.error('Failed to fetch site settings');
    } finally {
      setIsLoading(false);
    }
  };

  const updateSetting = async (settingKey: string, value: string) => {
    try {
      console.log('Updating setting:', { settingKey, value });
      
      const { error } = await supabase
        .from('site_settings')
        .update({ 
          setting_value: value,
          updated_at: new Date().toISOString()
        })
        .eq('setting_key', settingKey);

      if (error) {
        console.error('Error updating setting:', error);
        throw error;
      }
      
      // Update local state
      setSettings(prevSettings => 
        prevSettings.map(setting => 
          setting.setting_key === settingKey 
            ? { ...setting, setting_value: value, updated_at: new Date().toISOString() }
            : setting
        )
      );
      
      toast.success('Setting updated successfully');
      
    } catch (err: any) {
      console.error('Error updating setting:', err);
      toast.error(`Failed to update setting: ${err.message}`);
    }
  };

  const getSetting = (key: string): string => {
    const setting = settings.find(s => s.setting_key === key);
    return setting?.setting_value || '';
  };

  useEffect(() => {
    fetchSettings();
  }, []);

  return {
    settings,
    isLoading,
    error,
    fetchSettings,
    updateSetting,
    getSetting
  };
};
