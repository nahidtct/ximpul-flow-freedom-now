
import { Button } from '@/components/ui/button';
import { ShoppingCart } from 'lucide-react';
import { Edition, Accessory } from '@/types/buySection';

interface OrderSummaryProps {
  selectedEdition: string;
  selectedAccessories: string[];
  engravingText: string;
  paymentMethod: string;
  customerName: string;
  customerPhone: string;
  selectedColor: string;
  editions: Edition[];
  accessories: Accessory[];
  onOrderSubmit: () => void;
  isSubmitting: boolean;
}

export const OrderSummary = ({ 
  selectedEdition, 
  selectedAccessories, 
  engravingText, 
  paymentMethod, 
  customerName, 
  customerPhone, 
  selectedColor,
  editions,
  accessories,
  onOrderSubmit,
  isSubmitting
}: OrderSummaryProps) => {
  const basePrice = selectedEdition ? (editions.find(e => e.value === selectedEdition)?.price || 0) : 0;
  const accessoriesPrice = selectedAccessories.reduce((total, accessory) => {
    const item = accessories.find(a => a.name === accessory);
    return total + (item?.price || 0);
  }, 0);
  const engravingPrice = engravingText ? 150 : 0;
  const deliveryFee = paymentMethod === 'cod' ? 100 : 0;
  const subtotal = basePrice + accessoriesPrice + engravingPrice;
  const totalPrice = subtotal + deliveryFee;

  const isFormValid = customerName && customerPhone && selectedEdition && selectedColor;

  return (
    <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
      <div className="px-6 py-4 border-b border-gray-100">
        <h3 className="text-lg font-semibold text-gray-900">Order Summary</h3>
      </div>
      <div className="p-6">
        <div className="space-y-3 mb-6">
          {selectedEdition && (
            <div className="flex justify-between text-base">
              <span className="text-gray-600">{editions.find(e => e.value === selectedEdition)?.name}</span>
              <span className="font-semibold text-gray-900">{basePrice.toLocaleString()} BDT</span>
            </div>
          )}
          
          {selectedAccessories.length > 0 && (
            <div className="space-y-2">
              {selectedAccessories.map(accessory => {
                const item = accessories.find(a => a.name === accessory);
                return (
                  <div key={accessory} className="flex justify-between text-sm">
                    <span className="text-gray-600">{accessory}</span>
                    <span className="font-medium text-gray-900">+{item?.price.toLocaleString()} BDT</span>
                  </div>
                );
              })}
            </div>
          )}
          
          {engravingText && (
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">Engraving Service</span>
              <span className="font-medium text-gray-900">+150 BDT</span>
            </div>
          )}

          {selectedEdition && (
            <>
              <div className="flex justify-between text-base">
                <span className="text-gray-600">Subtotal</span>
                <span className="font-semibold text-gray-900">{subtotal.toLocaleString()} BDT</span>
              </div>

              <div className="flex justify-between text-base">
                <span className={deliveryFee > 0 ? "text-orange-600" : "text-green-600"}>
                  Delivery {paymentMethod === 'online' ? '(FREE)' : '(COD)'}
                </span>
                <span className={`font-semibold ${deliveryFee > 0 ? "text-orange-600" : "text-green-600"}`}>
                  {deliveryFee > 0 ? `+${deliveryFee.toLocaleString()} BDT` : 'FREE'}
                </span>
              </div>
            </>
          )}

          {!selectedEdition && (
            <div className="text-center py-4">
              <p className="text-gray-500">Please select an edition to see pricing</p>
            </div>
          )}
        </div>

        {selectedEdition && (
          <div className="border-t border-gray-100 pt-4 mb-6">
            <div className="flex justify-between text-xl font-bold">
              <span className="text-gray-900">Total</span>
              <span className="text-gray-900">{totalPrice.toLocaleString()} BDT</span>
            </div>
          </div>
        )}

        <Button 
          size="lg" 
          className="w-full bg-black hover:bg-black/90 text-white text-base font-semibold rounded-lg h-14" 
          disabled={!isFormValid || isSubmitting}
          onClick={onOrderSubmit}
        >
          <ShoppingCart className="mr-2 h-5 w-5" />
          {isSubmitting ? 'Processing...' : paymentMethod === 'online' ? 'Pay Online' : 'Order with COD'}
        </Button>

        <p className="text-sm text-gray-500 text-center mt-3">
          {paymentMethod === 'online' ? 'Secure payment • Free delivery' : 'Cash on delivery • +100 BDT delivery fee'}
        </p>
      </div>
    </div>
  );
};
