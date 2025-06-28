
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
    console.log('Received order email request for:', orderData.orderId);

    // Validate required fields
    if (!orderData.customerEmail || !orderData.orderId) {
      console.log('Missing required fields:', { email: orderData.customerEmail, orderId: orderData.orderId });
      return new Response(JSON.stringify({ 
        success: false, 
        error: 'Missing required fields' 
      }), {
        status: 400,
        headers: {
          "Content-Type": "application/json",
          ...corsHeaders,
        },
      });
    }

    // Email content for customer
    const customerEmailContent = `
      <h2>Thank you for your order!</h2>
      <p>Dear ${orderData.customerName},</p>
      
      <p>Your order has been received successfully. Here are the details:</p>
      
      <ul>
        <li><strong>Order ID:</strong> ${orderData.orderId}</li>
        <li><strong>Edition:</strong> ${orderData.selectedEdition}</li>
        <li><strong>Color:</strong> ${orderData.selectedColor}</li>
        <li><strong>Total Amount:</strong> ${orderData.totalAmount} BDT</li>
        <li><strong>Payment Method:</strong> ${orderData.paymentMethod}</li>
      </ul>
      
      <p>We will process your order and contact you soon.</p>
      
      <p>Best regards,<br>Ximpul Team</p>
    `;

    // Admin notification content
    const adminEmailContent = `
      <h2>New Order Received</h2>
      
      <h3>Customer Details:</h3>
      <ul>
        <li><strong>Name:</strong> ${orderData.customerName}</li>
        <li><strong>Email:</strong> ${orderData.customerEmail}</li>
        <li><strong>Phone:</strong> ${orderData.customerPhone}</li>
      </ul>
      
      <h3>Order Details:</h3>
      <ul>
        <li><strong>Order ID:</strong> ${orderData.orderId}</li>
        <li><strong>Edition:</strong> ${orderData.selectedEdition}</li>
        <li><strong>Color:</strong> ${orderData.selectedColor}</li>
        <li><strong>Total Amount:</strong> ${orderData.totalAmount} BDT</li>
        <li><strong>Payment Method:</strong> ${orderData.paymentMethod}</li>
        <li><strong>Order Time:</strong> ${new Date().toISOString()}</li>
      </ul>
    `;

    console.log('Sending emails...');

    // For now, we'll just log the email content since we don't have a working email service configured
    console.log('Customer email content:', customerEmailContent);
    console.log('Admin email content:', adminEmailContent);

    // TODO: Replace this with actual email service (Resend, SendGrid, etc.)
    // For now, just return success
    console.log('Email notification logged successfully for order:', orderData.orderId);

    return new Response(JSON.stringify({ 
      success: true,
      message: 'Email notification processed' 
    }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });
  } catch (error: any) {
    console.error("Error in send-order-email function:", error);
    return new Response(
      JSON.stringify({ 
        success: false, 
        error: error.message 
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
