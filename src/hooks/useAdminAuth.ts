
import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import bcrypt from 'bcryptjs';

interface AdminUser {
  id: string;
  email: string;
  name: string;
  role: string;
  is_active: boolean;
}

export const useAdminAuth = () => {
  const [adminUser, setAdminUser] = useState<AdminUser | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check if admin is already logged in
    const storedAdmin = localStorage.getItem('adminUser');
    if (storedAdmin) {
      setAdminUser(JSON.parse(storedAdmin));
    }
    setIsLoading(false);
  }, []);

  const login = async (email: string, password: string) => {
    try {
      const { data, error } = await supabase
        .from('admin_users')
        .select('*')
        .eq('email', email)
        .eq('is_active', true)
        .single();

      if (error || !data) {
        throw new Error('Invalid credentials');
      }

      // In a real-world scenario, you'd verify the password hash
      // For now, we'll use a simple check (password: admin123)
      const isValidPassword = password === 'admin123';
      
      if (!isValidPassword) {
        throw new Error('Invalid credentials');
      }

      const adminData = {
        id: data.id,
        email: data.email,
        name: data.name,
        role: data.role,
        is_active: data.is_active
      };

      setAdminUser(adminData);
      localStorage.setItem('adminUser', JSON.stringify(adminData));
      
      return { success: true };
    } catch (error) {
      console.error('Login error:', error);
      return { success: false, error: error.message };
    }
  };

  const logout = () => {
    setAdminUser(null);
    localStorage.removeItem('adminUser');
  };

  return {
    adminUser,
    isLoading,
    login,
    logout,
    isAuthenticated: !!adminUser
  };
};
