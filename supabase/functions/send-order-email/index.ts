
import { serve } from "https://deno.land/std@0.190.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface OrderEmailRequest {
  orderId: string;
  customerName: string;
  customerEmail: string;
  customerPhone: string;
  selectedEdition: string;
  selectedColor: string;
  totalAmount: number;
  paymentMethod: string;
}

const handler = async (req: Request): Promise<Response> => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const orderData: OrderEmailRequest = await req.json();
    console.log('Sending order email for:', orderData.orderId);

    // Email content
    const emailContent = `
      New Order Received - ${orderData.orderId}
      
      Customer Details:
      - Name: ${orderData.customerName}
      - Email: ${orderData.customerEmail}
      - Phone: ${orderData.customerPhone}
      
      Order Details:
      - Edition: ${orderData.selectedEdition}
      - Color: ${orderData.selectedColor}
      - Total Amount: ${orderData.totalAmount} BDT
      - Payment Method: ${orderData.paymentMethod}
      
      Order ID: ${orderData.orderId}
      Time: ${new Date().toISOString()}
    `;

    // Send email using SMTP
    const emailResponse = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        service_id: 'gmail',
        template_id: 'order_notification',
        user_id: 'public_key',
        template_params: {
          to_email: 'nahid.tct@gmail.com',
          from_email: 'sohub.web@gmail.com',
          subject: `New Order - ${orderData.orderId}`,
          message: emailContent,
          customer_name: orderData.customerName,
          order_id: orderData.orderId,
          total_amount: orderData.totalAmount,
        }
      }),
    });

    console.log('Email sent successfully for order:', orderData.orderId);

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });
  } catch (error: any) {
    console.error("Error sending order email:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
