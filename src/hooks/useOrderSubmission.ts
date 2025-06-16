import { useMutation } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';

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

interface UseOrderSubmissionProps {
  onSuccess?: (orderId: string) => void;
}

export const useOrderSubmission = (props?: UseOrderSubmissionProps) => {
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
    onSuccess: (data) => {
      console.log('Order success callback triggered');
      if (props?.onSuccess) {
        props.onSuccess(data.id);
      }
    },
    onError: (error) => {
      console.error('Order submission failed:', error);
      // Keep the error toast for error cases
      import('sonner').then(({ toast }) => {
        toast.error('Failed to place order. Please try again.');
      });
    },
  });
};
