
import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';

export interface Order {
  id: string;
  customer_name: string;
  customer_phone: string;
  customer_email: string | null;
  customer_address: string;
  selected_edition: string;
  selected_color: string;
  selected_accessories: string[];
  engraving_text: string | null;
  payment_method: string;
  payment_status: string;
  payment_transaction_id: string | null;
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
      console.log('Fetching orders from database...');
      
      const { data, error } = await supabase
        .from('orders')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) {
        console.error('Error fetching orders:', error);
        throw error;
      }
      
      console.log('Orders fetched successfully:', data?.length || 0, 'orders');
      
      const transformedOrders: Order[] = (data || []).map(order => ({
        ...order,
        selected_accessories: Array.isArray(order.selected_accessories) 
          ? order.selected_accessories as string[]
          : [],
        payment_status: order.payment_status || 'pending',
        customer_email: order.customer_email || null
      }));
      
      setOrders(transformedOrders);
    } catch (err: any) {
      console.error('Error fetching orders:', err);
      setError(err.message);
      toast.error('Failed to fetch orders');
    } finally {
      setIsLoading(false);
    }
  };

  const updateOrderStatus = async (orderId: string, newStatus: string, adminId: string, notes?: string) => {
    try {
      console.log('Updating order status:', { orderId, newStatus, adminId, notes });
      
      // First, update the order
      const { error: updateError } = await supabase
        .from('orders')
        .update({
          order_status: newStatus,
          processed_by: adminId,
          processed_at: new Date().toISOString(),
          admin_notes: notes || null
        })
        .eq('id', orderId);

      if (updateError) {
        console.error('Error updating order:', updateError);
        throw updateError;
      }

      console.log('Order updated successfully');

      // Add to order history
      const { error: historyError } = await supabase
        .from('order_status_history')
        .insert({
          order_id: orderId,
          new_status: newStatus,
          changed_by: adminId,
          notes: notes || null
        });

      if (historyError) {
        console.error('Error creating order history:', historyError);
        // Don't throw here, as the main update succeeded
      }

      // Update the local state immediately for better UX
      setOrders(prevOrders => 
        prevOrders.map(order => 
          order.id === orderId 
            ? { 
                ...order, 
                order_status: newStatus, 
                processed_by: adminId,
                processed_at: new Date().toISOString(),
                admin_notes: notes || null
              }
            : order
        )
      );

      toast.success('Order status updated successfully');
      
      // Also refresh from server to ensure data consistency
      setTimeout(() => {
        fetchOrders();
      }, 100);
      
    } catch (err: any) {
      console.error('Error updating order:', err);
      toast.error(`Failed to update order status: ${err.message}`);
    }
  };

  const updateTrackingInfo = async (orderId: string, trackingNumber: string, estimatedDelivery: string) => {
    try {
      console.log('Updating tracking info:', { orderId, trackingNumber, estimatedDelivery });
      
      const { error } = await supabase
        .from('orders')
        .update({
          tracking_number: trackingNumber,
          estimated_delivery: estimatedDelivery
        })
        .eq('id', orderId);

      if (error) {
        console.error('Error updating tracking:', error);
        throw error;
      }
      
      // Update local state immediately
      setOrders(prevOrders => 
        prevOrders.map(order => 
          order.id === orderId 
            ? { ...order, tracking_number: trackingNumber, estimated_delivery: estimatedDelivery }
            : order
        )
      );
      
      toast.success('Tracking information updated');
      
      // Refresh from server
      setTimeout(() => {
        fetchOrders();
      }, 100);
      
    } catch (err: any) {
      console.error('Error updating tracking:', err);
      toast.error(`Failed to update tracking information: ${err.message}`);
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
