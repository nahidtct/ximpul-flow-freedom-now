
import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import { Edition, Accessory } from '@/types/buySection';

export const useProducts = () => {
  return useQuery({
    queryKey: ['products'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('products')
        .select('*')
        .order('price', { ascending: true });
      
      if (error) throw error;
      
      return data.map(product => ({
        name: `${product.name} ${product.edition.charAt(0).toUpperCase() + product.edition.slice(1)} Edition`,
        value: product.edition,
        price: product.price,
        description: product.description || ''
      })) as Edition[];
    },
  });
};

export const useAccessories = () => {
  return useQuery({
    queryKey: ['accessories'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('accessories')
        .select('*')
        .order('name');
      
      if (error) throw error;
      
      return data.map(accessory => ({
        name: accessory.name,
        price: accessory.price,
        note: accessory.note || ''
      })) as Accessory[];
    },
  });
};
