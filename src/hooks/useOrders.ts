
import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';

export interface Order {
  id: string;
  customer_name: string;
  customer_phone: string;
  customer_email: string;
  customer_address: string;
  selected_edition: string;
  selected_color: string;
  selected_accessories: string[];
  engraving_text: string | null;
  payment_method: string;
  subtotal: number;
  delivery_fee: number;
  total_amount: number;
  order_status: string;
  admin_notes: string | null;
  tracking_number: string | null;
  estimated_delivery: string | null;
  processed_by: string | null;
  processed_at: string | null;
  created_at: string;
  updated_at: string;
}

export const useOrders = () => {
  const [orders, setOrders] = useState<Order[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchOrders = async () => {
    try {
      setIsLoading(true);
      const { data, error } = await supabase
        .from('orders')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setOrders(data || []);
    } catch (err) {
      console.error('Error fetching orders:', err);
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  const updateOrderStatus = async (orderId: string, newStatus: string, adminId: string, notes?: string) => {
    try {
      const { error } = await supabase
        .from('orders')
        .update({
          order_status: newStatus,
          processed_by: adminId,
          processed_at: new Date().toISOString(),
          admin_notes: notes || null
        })
        .eq('id', orderId);

      if (error) throw error;

      // Add to order history
      await supabase
        .from('order_status_history')
        .insert({
          order_id: orderId,
          new_status: newStatus,
          changed_by: adminId,
          notes: notes || null
        });

      toast.success('Order status updated successfully');
      fetchOrders(); // Refresh orders
    } catch (err) {
      console.error('Error updating order:', err);
      toast.error('Failed to update order status');
    }
  };

  const updateTrackingInfo = async (orderId: string, trackingNumber: string, estimatedDelivery: string) => {
    try {
      const { error } = await supabase
        .from('orders')
        .update({
          tracking_number: trackingNumber,
          estimated_delivery: estimatedDelivery
        })
        .eq('id', orderId);

      if (error) throw error;
      
      toast.success('Tracking information updated');
      fetchOrders();
    } catch (err) {
      console.error('Error updating tracking:', err);
      toast.error('Failed to update tracking information');
    }
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  return {
    orders,
    isLoading,
    error,
    fetchOrders,
    updateOrderStatus,
    updateTrackingInfo
  };
};
