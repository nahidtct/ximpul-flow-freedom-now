
import React, { useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { CheckCircle, Package, Clock, Phone, Home, FileText, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

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
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white pt-20 pb-8 px-4">
      <div className="max-w-2xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-6">
          <div className="w-16 h-16 mx-auto bg-green-100 rounded-full flex items-center justify-center mb-4">
            <CheckCircle className="h-10 w-10 text-green-600" />
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
            Thank You!
          </h1>
          <p className="text-base text-gray-600">
            Your Ximpul Flow order has been successfully placed.
          </p>
        </div>

        {/* Order Details Card */}
        <Card className="mb-6">
          <CardContent className="p-4 sm:p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4 text-center">Order Summary</h2>
            <div className="space-y-3">
              <div className="flex justify-between items-center py-2 border-b border-gray-200">
                <span className="text-gray-600 text-sm">Order Number:</span>
                <span className="font-bold text-lg text-gray-900">#{numericOrderId}</span>
              </div>
              {totalAmount && (
                <div className="flex justify-between items-center py-2 border-b border-gray-200">
                  <span className="text-gray-600 text-sm">Total Amount:</span>
                  <span className="font-bold text-lg text-gray-900">{parseInt(totalAmount).toLocaleString()} BDT</span>
                </div>
              )}
              {paymentMethod && (
                <div className="flex justify-between items-center py-2">
                  <span className="text-gray-600 text-sm">Payment Method:</span>
                  <span className="font-medium text-gray-900 text-sm">
                    {paymentMethod === 'online' ? 'Online Payment' : 'Cash on Delivery'}
                  </span>
                </div>
              )}
            </div>
          </CardContent>
        </Card>

        {/* What's Next Section */}
        <Card className="mb-6">
          <CardContent className="p-4 sm:p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4 text-center">What happens next?</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="text-center">
                <div className="w-12 h-12 mx-auto bg-gray-100 rounded-full flex items-center justify-center mb-3">
                  <Package className="h-6 w-6 text-gray-700" />
                </div>
                <h4 className="font-medium text-gray-900 mb-1 text-sm">Order Processing</h4>
                <p className="text-xs text-gray-600">We'll prepare your order</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 mx-auto bg-gray-100 rounded-full flex items-center justify-center mb-3">
                  <Clock className="h-6 w-6 text-gray-700" />
                </div>
                <h4 className="font-medium text-gray-900 mb-1 text-sm">Delivery Time</h4>
                <p className="text-xs text-gray-600">3-5 business days</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 mx-auto bg-gray-100 rounded-full flex items-center justify-center mb-3">
                  <Phone className="h-6 w-6 text-gray-700" />
                </div>
                <h4 className="font-medium text-gray-900 mb-1 text-sm">Stay Updated</h4>
                <p className="text-xs text-gray-600">We'll call with updates</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Contact Information */}
        <Card className="mb-6 bg-gray-900 text-white">
          <CardContent className="p-4 text-center">
            <h3 className="text-base font-semibold mb-2">Need Help?</h3>
            <div className="flex flex-col sm:flex-row gap-3 justify-center items-center text-xs">
              <div className="flex items-center gap-2">
                <Phone className="h-3 w-3" />
                <span>+880 1XXX-XXXXXX</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-3 w-3" />
                <span>support@ximpulflow.com</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Action Button */}
        <div className="text-center">
          <Button asChild className="bg-gray-900 hover:bg-gray-800 text-white">
            <Link to="/" className="flex items-center justify-center gap-2">
              <Home className="h-4 w-4" />
              Continue Shopping
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ThankYou;
