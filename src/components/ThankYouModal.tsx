
import React, { useEffect, useState } from 'react';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { CheckCircle, Package, Truck, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ThankYouModalProps {
  isOpen: boolean;
  onClose: () => void;
  orderDetails: {
    orderId: string;
    totalAmount: number;
    paymentMethod: string;
    customerName: string;
  };
}

export const ThankYouModal = ({ isOpen, onClose, orderDetails }: ThankYouModalProps) => {
  const [showConfetti, setShowConfetti] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setShowConfetti(true);
      const timer = setTimeout(() => setShowConfetti(false), 3000);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  const Confetti = () => {
    return (
      <div className="fixed inset-0 pointer-events-none z-50">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-bounce"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${2 + Math.random() * 2}s`,
            }}
          >
            <div
              className="w-2 h-2 rounded-full"
              style={{
                backgroundColor: ['#3B82F6', '#EF4444', '#10B981', '#F59E0B', '#8B5CF6'][
                  Math.floor(Math.random() * 5)
                ],
              }}
            />
          </div>
        ))}
      </div>
    );
  };

  return (
    <>
      {showConfetti && <Confetti />}
      <Dialog open={isOpen} onOpenChange={onClose}>
        <DialogContent className="sm:max-w-md bg-white border-0 shadow-2xl rounded-3xl p-0 overflow-hidden">
          <div className="relative">
            {/* Header with success icon */}
            <div className="bg-gradient-to-br from-green-50 to-blue-50 px-8 pt-8 pb-6 text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-full mb-4 animate-scale-in">
                <CheckCircle className="w-10 h-10 text-green-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Thank You!</h2>
              <p className="text-gray-600">Your order has been placed successfully</p>
            </div>

            {/* Order details */}
            <div className="px-8 py-6 space-y-6">
              <div className="bg-gray-50 rounded-2xl p-4">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm font-medium text-gray-600">Order ID</span>
                  <span className="text-sm font-mono text-gray-900">#{orderDetails.orderId}</span>
                </div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm font-medium text-gray-600">Total Amount</span>
                  <span className="text-lg font-bold text-gray-900">{orderDetails.totalAmount} BDT</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-gray-600">Payment Method</span>
                  <span className="text-sm text-gray-900 capitalize">
                    {orderDetails.paymentMethod === 'online' ? 'Online Payment' : 'Cash on Delivery'}
                  </span>
                </div>
              </div>

              {/* Next steps */}
              <div className="space-y-4">
                <h3 className="font-semibold text-gray-900">What happens next?</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                      <Package className="w-4 h-4 text-blue-600" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-900">Order Confirmation</p>
                      <p className="text-xs text-gray-600">We'll send you a confirmation shortly</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="flex-shrink-0 w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
                      <Clock className="w-4 h-4 text-orange-600" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-900">Processing</p>
                      <p className="text-xs text-gray-600">Your order is being prepared</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="flex-shrink-0 w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                      <Truck className="w-4 h-4 text-green-600" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-900">Delivery</p>
                      <p className="text-xs text-gray-600">Expected within 3-5 business days</p>
                    </div>
                  </div>
                </div>
              </div>

              <p className="text-center text-sm text-gray-600">
                Hello {orderDetails.customerName}, we'll contact you soon to confirm your order details.
              </p>
            </div>

            {/* Footer */}
            <div className="px-8 pb-8">
              <Button 
                onClick={onClose}
                className="w-full bg-black hover:bg-gray-800 text-white rounded-xl h-12 font-medium"
              >
                Continue Shopping
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};
