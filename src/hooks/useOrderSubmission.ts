
import { useMutation } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';
import { useNavigate } from 'react-router-dom';

interface OrderData {
  customerName: string;
  customerPhone: string;
  customerEmail: string;
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
      
      // First, create the order in database
      const { data: order, error: orderError } = await supabase
        .from('orders')
        .insert([{
          customer_name: orderData.customerName,
          customer_phone: orderData.customerPhone,
          customer_email: orderData.customerEmail || null,
          customer_address: orderData.customerAddress,
          selected_edition: orderData.selectedEdition,
          selected_color: orderData.selectedColor,
          selected_accessories: orderData.selectedAccessories,
          engraving_text: orderData.engravingText || null,
          payment_method: orderData.paymentMethod,
          subtotal: orderData.subtotal,
          delivery_fee: orderData.deliveryFee,
          total_amount: orderData.totalAmount,
          order_status: orderData.paymentMethod === 'online' ? 'pending_payment' : 'pending'
        }])
        .select()
        .single();

      if (orderError) {
        console.error('Order creation error:', orderError);
        throw orderError;
      }

      console.log('Order created successfully:', order);

      // Send email notification
      try {
        await supabase.functions.invoke('send-order-email', {
          body: {
            orderId: order.id,
            customerName: orderData.customerName,
            customerEmail: orderData.customerEmail,
            customerPhone: orderData.customerPhone,
            selectedEdition: orderData.selectedEdition,
            selectedColor: orderData.selectedColor,
            totalAmount: orderData.totalAmount,
            paymentMethod: orderData.paymentMethod
          }
        });
        console.log('Email notification sent');
      } catch (emailError) {
        console.error('Email notification failed:', emailError);
        // Don't fail the order if email fails
      }

      // If payment method is online, initialize SSLCommerz payment
      if (orderData.paymentMethod === 'online') {
        const { data: paymentData, error: paymentError } = await supabase.functions.invoke('create-sslcommerz-payment', {
          body: {
            customerName: orderData.customerName,
            customerPhone: orderData.customerPhone,
            customerEmail: orderData.customerEmail,
            customerAddress: orderData.customerAddress,
            totalAmount: orderData.totalAmount,
            orderId: order.id
          }
        });

        if (paymentError || !paymentData.success) {
          console.error('Payment initialization error:', paymentError || paymentData.error);
          throw new Error('Payment initialization failed');
        }

        // Redirect to SSLCommerz payment gateway
        window.location.href = paymentData.gatewayPageURL;
        return order;
      }

      return order;
    },
    onSuccess: (data, orderData) => {
      // Only show success message for COD orders
      // Online payment success will be handled by the payment gateway redirect
      if (orderData.paymentMethod === 'cod') {
        toast.success(`Order placed successfully! Order ID: ${data.id.slice(0, 8)}`);
        console.log('Order success toast shown');
        
        const searchParams = new URLSearchParams({
          orderId: data.id,
          paymentMethod: orderData.paymentMethod,
          totalAmount: orderData.totalAmount.toString()
        });
        
        navigate(`/thank-you?${searchParams.toString()}`);
      }
    },
    onError: (error) => {
      console.error('Order submission failed:', error);
      toast.error('Failed to place order. Please try again.');
    },
  });
};
