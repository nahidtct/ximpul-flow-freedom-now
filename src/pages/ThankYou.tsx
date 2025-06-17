
import React from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { CheckCircle, Package, Clock, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ThankYou = () => {
  const [searchParams] = useSearchParams();
  const orderId = searchParams.get('orderId');
  const paymentMethod = searchParams.get('paymentMethod');
  const totalAmount = searchParams.get('totalAmount');

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-2xl mx-auto px-4">
        <div className="bg-white rounded-xl shadow-lg p-8 text-center">
          {/* Success Icon */}
          <div className="mb-6">
            <CheckCircle className="h-16 w-16 text-green-500 mx-auto" />
          </div>

          {/* Thank You Message */}
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Thank You for Your Order!
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            Your order has been successfully placed and is being processed.
          </p>

          {/* Order Details */}
          <div className="bg-gray-50 rounded-lg p-6 mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Order Details</h2>
            <div className="space-y-3 text-left">
              {orderId && (
                <div className="flex justify-between">
                  <span className="text-gray-600">Order ID:</span>
                  <span className="font-semibold text-gray-900">#{orderId.slice(0, 8)}</span>
                </div>
              )}
              {totalAmount && (
                <div className="flex justify-between">
                  <span className="text-gray-600">Total Amount:</span>
                  <span className="font-semibold text-gray-900">{totalAmount} BDT</span>
                </div>
              )}
              {paymentMethod && (
                <div className="flex justify-between">
                  <span className="text-gray-600">Payment Method:</span>
                  <span className="font-semibold text-gray-900">
                    {paymentMethod === 'online' ? 'Online Payment' : 'Cash on Delivery'}
                  </span>
                </div>
              )}
            </div>
          </div>

          {/* What's Next */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">What happens next?</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
              <div className="p-4">
                <Package className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                <h4 className="font-medium text-gray-900 mb-1">Order Processing</h4>
                <p className="text-sm text-gray-600">We'll prepare your Ximpul Flow for shipment</p>
              </div>
              <div className="p-4">
                <Clock className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                <h4 className="font-medium text-gray-900 mb-1">Delivery Time</h4>
                <p className="text-sm text-gray-600">3-5 business days to your address</p>
              </div>
              <div className="p-4">
                <Phone className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                <h4 className="font-medium text-gray-900 mb-1">Stay Updated</h4>
                <p className="text-sm text-gray-600">We'll call you with delivery updates</p>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="bg-blue-50 rounded-lg p-6 mb-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Need Help?</h3>
            <p className="text-gray-600 mb-3">
              If you have any questions about your order, feel free to contact us.
            </p>
            <div className="text-sm text-gray-600">
              <p>Phone: +880 1XXX-XXXXXX</p>
              <p>Email: support@ximpulflow.com</p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild className="bg-black hover:bg-black/90">
              <Link to="/">Continue Shopping</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link to="/specs">View Product Specs</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThankYou;
