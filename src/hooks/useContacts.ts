
import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';

export interface Contact {
  id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  status: string;
  created_at: string;
  updated_at: string;
}

export const useContacts = () => {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchContacts = async () => {
    try {
      setIsLoading(true);
      const { data, error } = await supabase
        .from('contacts')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      
      setContacts(data || []);
    } catch (err: any) {
      console.error('Error fetching contacts:', err);
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  const submitContact = async (contactData: {
    name: string;
    email: string;
    subject: string;
    message: string;
  }) => {
    try {
      const { error } = await supabase
        .from('contacts')
        .insert([contactData]);

      if (error) throw error;
      
      toast.success('Message sent successfully! We will get back to you soon.');
      return { success: true };
    } catch (err: any) {
      console.error('Error submitting contact:', err);
      toast.error('Failed to send message. Please try again.');
      return { success: false, error: err.message };
    }
  };

  const updateContactStatus = async (contactId: string, newStatus: string) => {
    try {
      const { error } = await supabase
        .from('contacts')
        .update({ status: newStatus, updated_at: new Date().toISOString() })
        .eq('id', contactId);

      if (error) throw error;
      
      toast.success('Contact status updated');
      fetchContacts();
    } catch (err: any) {
      console.error('Error updating contact:', err);
      toast.error('Failed to update contact status');
    }
  };

  useEffect(() => {
    fetchContacts();
  }, []);

  return {
    contacts,
    isLoading,
    error,
    fetchContacts,
    submitContact,
    updateContactStatus
  };
};
