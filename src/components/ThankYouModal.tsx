
import React, { useEffect, useState } from 'react';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { CheckCircle, Package, Truck, Calendar } from 'lucide-react';

interface ThankYouModalProps {
  isOpen: boolean;
  onClose: () => void;
  orderId: string;
}

export const ThankYouModal: React.FC<ThankYouModalProps> = ({ isOpen, onClose, orderId }) => {
  const [showConfetti, setShowConfetti] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setShowConfetti(true);
      // Auto close after 8 seconds
      const timer = setTimeout(() => {
        onClose();
      }, 8000);

      return () => clearTimeout(timer);
    }
  }, [isOpen, onClose]);

  const createConfetti = () => {
    const colors = ['#ff6b6b', '#4ecdc4', '#45b7d1', '#96ceb4', '#feca57', '#ff9ff3'];
    return Array.from({ length: 50 }, (_, i) => (
      <div
        key={i}
        className="confetti-piece"
        style={{
          left: `${Math.random() * 100}%`,
          backgroundColor: colors[Math.floor(Math.random() * colors.length)],
          animationDelay: `${Math.random() * 3}s`,
          animationDuration: `${3 + Math.random() * 2}s`
        }}
      />
    ));
  };

  return (
    <>
      {showConfetti && (
        <div className="fixed inset-0 pointer-events-none z-[100] overflow-hidden">
          {createConfetti()}
        </div>
      )}
      
      <Dialog open={isOpen} onOpenChange={onClose}>
        <DialogContent className="max-w-md mx-auto bg-white rounded-2xl shadow-2xl border-0 p-0 overflow-hidden">
          <div className="relative">
            {/* Success Animation Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-blue-50" />
            
            <div className="relative p-8 text-center">
              {/* Success Icon */}
              <div className="mx-auto mb-6 w-16 h-16 bg-green-100 rounded-full flex items-center justify-center animate-scale-in">
                <CheckCircle className="w-8 h-8 text-green-600" />
              </div>

              {/* Thank You Message */}
              <h2 className="text-2xl font-bold text-gray-900 mb-2 animate-fade-in">
                Order Confirmed!
              </h2>
              
              <p className="text-gray-600 mb-6 animate-fade-in delay-100">
                Thank you for your order. Your Ximpul Flow is on its way!
              </p>

              {/* Order Details */}
              <div className="bg-gray-50 rounded-xl p-4 mb-6 animate-fade-in delay-200">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">Order ID:</span>
                  <span className="font-mono font-medium text-gray-900">#{orderId.slice(0, 8).toUpperCase()}</span>
                </div>
              </div>

              {/* Timeline */}
              <div className="space-y-3 mb-6 animate-fade-in delay-300">
                <div className="flex items-center text-sm text-gray-600">
                  <Package className="w-4 h-4 mr-3 text-blue-600" />
                  <span>Order processing will begin shortly</span>
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <Truck className="w-4 h-4 mr-3 text-orange-600" />
                  <span>Estimated delivery: 3-5 business days</span>
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <Calendar className="w-4 h-4 mr-3 text-green-600" />
                  <span>You'll receive tracking information via SMS</span>
                </div>
              </div>

              {/* Action Button */}
              <button
                onClick={onClose}
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-xl font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-200 animate-fade-in delay-500"
              >
                Continue Shopping
              </button>

              {/* Footer Message */}
              <p className="text-xs text-gray-500 mt-4 animate-fade-in delay-700">
                Questions? Contact our support team anytime.
              </p>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};
