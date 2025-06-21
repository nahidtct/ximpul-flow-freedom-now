
import React, { useEffect, useState } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { Check, Package, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const PaymentSuccess = () => {
  const [searchParams] = useSearchParams();
  const tranId = searchParams.get('tran_id');
  const [orderDetails, setOrderDetails] = useState<any>(null);

  useEffect(() => {
    // You can fetch order details using tranId if needed
    if (tranId) {
      console.log('Payment successful for transaction:', tranId);
    }
  }, [tranId]);

  // Generate numeric order ID from UUID
  const getNumericOrderId = (uuid: string | null) => {
    if (!uuid) return '000000';
    // Extract numbers from UUID and take first 6 digits
    const numbers = uuid.replace(/[^0-9]/g, '');
    return numbers.slice(0, 6) || '000000';
  };

  const numericOrderId = getNumericOrderId(tranId);

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8 text-center">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <Check className="w-8 h-8 text-green-600" />
        </div>
        
        <h1 className="text-2xl font-bold text-gray-900 mb-4">
          Payment Successful!
        </h1>
        
        <p className="text-gray-600 mb-6">
          Thank you for your purchase. Your payment has been processed successfully.
        </p>

        {tranId && (
          <div className="bg-gray-50 rounded-lg p-4 mb-6">
            <p className="text-sm text-gray-500">Order ID</p>
            <p className="font-mono text-sm font-medium text-gray-900">#{numericOrderId}</p>
          </div>
        )}

        <div className="space-y-4 mb-6">
          <div className="flex items-center text-left">
            <Package className="w-5 h-5 text-blue-600 mr-3" />
            <div>
              <p className="font-medium text-gray-900">Your order is confirmed</p>
              <p className="text-sm text-gray-500">We'll start processing it right away</p>
            </div>
          </div>
          
          <div className="flex items-center text-left">
            <Clock className="w-5 h-5 text-orange-600 mr-3" />
            <div>
              <p className="font-medium text-gray-900">Delivery within 3-5 days</p>
              <p className="text-sm text-gray-500">Free delivery to your address</p>
            </div>
          </div>
        </div>

        <div className="space-y-3">
          <Button asChild className="w-full bg-gray-900 hover:bg-black text-white">
            <Link to="/" onClick={() => window.scrollTo(0, 0)}>
              Continue Shopping
            </Link>
          </Button>
          
          <Button variant="outline" asChild className="w-full hover:bg-black hover:text-white">
            <Link to="/contact" onClick={() => window.scrollTo(0, 0)}>
              Contact Support
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};
