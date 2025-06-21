
import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.45.0";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { 
      customerName, 
      customerPhone, 
      customerEmail, 
      customerAddress,
      totalAmount,
      orderId 
    } = await req.json();

    // SSLCommerz configuration
    const store_id = 'solut660bb9fa34eb5';
    const store_passwd = 'solut660bb9fa34eb5@ssl';
    const is_live = false; // Set to true for production

    // Prepare SSLCommerz payment data
    const data = {
      store_id: store_id,
      store_passwd: store_passwd,
      total_amount: totalAmount,
      currency: 'BDT',
      tran_id: orderId, // Unique transaction reference
      success_url: `${req.headers.get("origin")}/payment-success?tran_id=${orderId}`,
      fail_url: `${req.headers.get("origin")}/payment-failed?tran_id=${orderId}`,
      cancel_url: `${req.headers.get("origin")}/payment-cancelled?tran_id=${orderId}`,
      ipn_url: `${Deno.env.get("SUPABASE_URL")}/functions/v1/sslcommerz-ipn`,
      shipping_method: 'Courier',
      product_name: 'Ximpul Flow Bottle',
      product_category: 'Physical',
      product_profile: 'physical-goods',
      cus_name: customerName,
      cus_email: customerEmail || 'guest@example.com',
      cus_add1: customerAddress,
      cus_add2: customerAddress,
      cus_city: 'Dhaka',
      cus_state: 'Dhaka',
      cus_postcode: '1000',
      cus_country: 'Bangladesh',
      cus_phone: customerPhone,
      cus_fax: customerPhone,
      ship_name: customerName,
      ship_add1: customerAddress,
      ship_add2: customerAddress,
      ship_city: 'Dhaka',
      ship_state: 'Dhaka',
      ship_postcode: '1000',
      ship_country: 'Bangladesh',
    };

    // Make request to SSLCommerz
    const sslcommerzUrl = is_live 
      ? 'https://securepay.sslcommerz.com/gwprocess/v4/api.php'
      : 'https://sandbox.sslcommerz.com/gwprocess/v4/api.php';

    const formData = new URLSearchParams();
    Object.keys(data).forEach(key => {
      formData.append(key, data[key as keyof typeof data].toString());
    });

    const response = await fetch(sslcommerzUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: formData,
    });

    const result = await response.json();

    if (result.status === 'SUCCESS') {
      return new Response(JSON.stringify({ 
        success: true,
        gatewayPageURL: result.GatewayPageURL,
        sessionkey: result.sessionkey
      }), {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
        status: 200,
      });
    } else {
      throw new Error(result.failedreason || 'Payment initialization failed');
    }

  } catch (error) {
    console.error('SSLCommerz payment error:', error);
    return new Response(JSON.stringify({ 
      success: false, 
      error: error.message 
    }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 500,
    });
  }
});
