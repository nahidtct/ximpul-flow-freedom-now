
import { useMutation } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';
import { useNavigate } from 'react-router-dom';

interface OrderData {
  customerName: string;
  customerPhone: string;
  customerAddress: string;
  selectedEdition: string;
  selectedColor: string;
  selectedAccessories: string[];
  engravingText: string;
  paymentMethod: string;
  subtotal: number;
  deliveryFee: number;
  totalAmount: number;
}

export const useOrderSubmission = () => {
  const navigate = useNavigate();

  return useMutation({
    mutationFn: async (orderData: OrderData) => {
      console.log('Submitting order:', orderData);
      
      const { data, error } = await supabase
        .from('orders')
        .insert([{
          customer_name: orderData.customerName,
          customer_phone: orderData.customerPhone,
          customer_address: orderData.customerAddress,
          selected_edition: orderData.selectedEdition,
          selected_color: orderData.selectedColor,
          selected_accessories: orderData.selectedAccessories,
          engraving_text: orderData.engravingText || null,
          payment_method: orderData.paymentMethod,
          subtotal: orderData.subtotal,
          delivery_fee: orderData.deliveryFee,
          total_amount: orderData.totalAmount,
          order_status: 'pending'
        }])
        .select()
        .single();

      if (error) {
        console.error('Order submission error:', error);
        throw error;
      }

      console.log('Order submitted successfully:', data);
      return data;
    },
    onSuccess: (data, orderData) => {
      toast.success(`Order placed successfully! Order ID: ${data.id.slice(0, 8)}`);
      console.log('Order success toast shown');
      
      // Navigate to thank you page with order details
      const searchParams = new URLSearchParams({
        orderId: data.id,
        paymentMethod: orderData.paymentMethod,
        totalAmount: orderData.totalAmount.toString()
      });
      
      navigate(`/thank-you?${searchParams.toString()}`);
    },
    onError: (error) => {
      console.error('Order submission failed:', error);
      toast.error('Failed to place order. Please try again.');
    },
  });
};
