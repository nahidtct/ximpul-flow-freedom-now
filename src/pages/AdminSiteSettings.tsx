
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { Settings, Globe, Phone, Mail, Users } from 'lucide-react';
import { useSiteSettings } from '@/hooks/useSiteSettings';

const AdminSiteSettings = () => {
  const { settings, isLoading, updateSetting, getSetting } = useSiteSettings();
  const [formData, setFormData] = useState<Record<string, string>>({});

  // Initialize form data when settings are loaded
  React.useEffect(() => {
    if (settings.length > 0) {
      const initialData: Record<string, string> = {};
      settings.forEach(setting => {
        initialData[setting.setting_key] = setting.setting_value || '';
      });
      setFormData(initialData);
    }
  }, [settings]);

  const handleInputChange = (key: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [key]: value
    }));
  };

  const handleSave = async (key: string) => {
    await updateSetting(key, formData[key] || '');
  };

  const handleSaveAll = async () => {
    for (const [key, value] of Object.entries(formData)) {
      await updateSetting(key, value);
    }
  };

  const getIcon = (category: string) => {
    switch (category) {
      case 'social':
        return <Users className="h-5 w-5" />;
      case 'contact':
        return <Phone className="h-5 w-5" />;
      case 'general':
        return <Globe className="h-5 w-5" />;
      default:
        return <Settings className="h-5 w-5" />;
    }
  };

  const groupedSettings = settings.reduce((groups, setting) => {
    const category = setting.category || 'general';
    if (!groups[category]) {
      groups[category] = [];
    }
    groups[category].push(setting);
    return groups;
  }, {} as Record<string, typeof settings>);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-lg">Loading site settings...</div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Site Settings</h1>
          <p className="text-muted-foreground">Manage your site configuration and contact information</p>
        </div>
        <Button onClick={handleSaveAll} className="bg-blue-600 hover:bg-blue-700">
          Save All Changes
        </Button>
      </div>

      <div className="grid gap-6">
        {Object.entries(groupedSettings).map(([category, categorySettings]) => (
          <Card key={category}>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 capitalize">
                {getIcon(category)}
                {category} Settings
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {categorySettings.map((setting, index) => (
                <div key={setting.id}>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-end">
                    <div className="md:col-span-2">
                      <Label htmlFor={setting.setting_key} className="text-sm font-medium">
                        {setting.description || setting.setting_key}
                      </Label>
                      <Input
                        id={setting.setting_key}
                        type={setting.setting_type === 'email' ? 'email' : 
                              setting.setting_type === 'url' ? 'url' : 'text'}
                        value={formData[setting.setting_key] || ''}
                        onChange={(e) => handleInputChange(setting.setting_key, e.target.value)}
                        placeholder={`Enter ${setting.description?.toLowerCase() || setting.setting_key}`}
                        className="mt-1"
                      />
                      <p className="text-xs text-muted-foreground mt-1">
                        Key: {setting.setting_key}
                      </p>
                    </div>
                    <Button 
                      onClick={() => handleSave(setting.setting_key)}
                      variant="outline"
                      size="sm"
                    >
                      Save
                    </Button>
                  </div>
                  {index < categorySettings.length - 1 && <Separator className="mt-4" />}
                </div>
              ))}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default AdminSiteSettings;
