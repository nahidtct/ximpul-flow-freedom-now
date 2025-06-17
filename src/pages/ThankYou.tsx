
import React, { useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { CheckCircle, Package, Clock, Phone, Home, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ThankYou = () => {
  const [searchParams] = useSearchParams();
  const orderId = searchParams.get('orderId');
  const paymentMethod = searchParams.get('paymentMethod');
  const totalAmount = searchParams.get('totalAmount');

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Generate numeric order ID from UUID
  const getNumericOrderId = (uuid: string | null) => {
    if (!uuid) return '000000';
    // Extract numbers from UUID and take first 6 digits
    const numbers = uuid.replace(/[^0-9]/g, '');
    return numbers.slice(0, 6) || '000000';
  };

  const numericOrderId = getNumericOrderId(orderId);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-16">
      <div className="max-w-3xl mx-auto px-4">
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 text-center border border-gray-100">
          {/* Success Icon with Animation */}
          <div className="mb-8">
            <div className="relative">
              <CheckCircle className="h-20 w-20 text-green-500 mx-auto animate-scale-in" />
              <div className="absolute inset-0 h-20 w-20 mx-auto rounded-full bg-green-100 animate-pulse"></div>
            </div>
          </div>

          {/* Thank You Message */}
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 animate-fade-in">
            Thank You!
          </h1>
          <p className="text-xl text-gray-600 mb-10 animate-fade-in delay-100">
            Your Ximpul Flow order has been successfully placed and is being processed.
          </p>

          {/* Order Details Card */}
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-8 mb-10 border border-blue-100 animate-fade-in delay-300">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Order Summary</h2>
            <div className="space-y-4">
              <div className="flex justify-between items-center py-2 border-b border-blue-200 last:border-b-0">
                <span className="text-gray-600 font-medium">Order Number:</span>
                <span className="font-bold text-2xl text-blue-600">#{numericOrderId}</span>
              </div>
              {totalAmount && (
                <div className="flex justify-between items-center py-2 border-b border-blue-200 last:border-b-0">
                  <span className="text-gray-600 font-medium">Total Amount:</span>
                  <span className="font-bold text-xl text-gray-900">{totalAmount} BDT</span>
                </div>
              )}
              {paymentMethod && (
                <div className="flex justify-between items-center py-2">
                  <span className="text-gray-600 font-medium">Payment Method:</span>
                  <span className="font-semibold text-gray-900 capitalize">
                    {paymentMethod === 'online' ? 'Online Payment' : 'Cash on Delivery'}
                  </span>
                </div>
              )}
            </div>
          </div>

          {/* What's Next Section */}
          <div className="mb-10 animate-fade-in delay-500">
            <h3 className="text-2xl font-semibold text-gray-900 mb-8">What happens next?</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <Package className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h4 className="font-semibold text-gray-900 mb-2">Order Processing</h4>
                <p className="text-sm text-gray-600 leading-relaxed">We'll carefully prepare your Ximpul Flow for shipment</p>
              </div>
              <div className="p-6 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <Clock className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h4 className="font-semibold text-gray-900 mb-2">Delivery Time</h4>
                <p className="text-sm text-gray-600 leading-relaxed">3-5 business days to your address</p>
              </div>
              <div className="p-6 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <Phone className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h4 className="font-semibold text-gray-900 mb-2">Stay Updated</h4>
                <p className="text-sm text-gray-600 leading-relaxed">We'll call you with delivery updates</p>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl p-8 mb-10 text-white animate-fade-in delay-700">
            <h3 className="text-xl font-semibold mb-3">Need Help?</h3>
            <p className="mb-4 opacity-90">
              If you have any questions about your order, feel free to contact us.
            </p>
            <div className="text-sm space-y-1 opacity-90">
              <p>📞 Phone: +880 1XXX-XXXXXX</p>
              <p>✉️ Email: support@ximpulflow.com</p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in delay-1000">
            <Button asChild size="lg" className="bg-black hover:bg-black/90 text-white px-8 py-3">
              <Link to="/" className="flex items-center gap-2">
                <Home className="h-4 w-4" />
                Continue Shopping
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild className="px-8 py-3">
              <Link to="/specs" className="flex items-center gap-2">
                <FileText className="h-4 w-4" />
                View Product Specs
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThankYou;
