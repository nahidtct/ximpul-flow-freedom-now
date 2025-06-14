
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Check, CreditCard, Banknote, Lock } from 'lucide-react';

interface PaymentMethodSelectorProps {
  paymentMethod: string;
  selectedColor: string;
  onPaymentMethodChange: (value: string) => void;
}

export const PaymentMethodSelector = ({ paymentMethod, selectedColor, onPaymentMethodChange }: PaymentMethodSelectorProps) => {
  const isDisabled = !selectedColor;

  return (
    <div className={`bg-white rounded-xl border border-gray-200 overflow-hidden ${isDisabled ? 'opacity-50' : ''}`}>
      <div className="px-6 py-4 border-b border-gray-100">
        <div className="flex items-center space-x-2">
          <h3 className="text-lg font-semibold text-gray-900">5. Payment Method</h3>
          {isDisabled && <Lock className="w-4 h-4 text-gray-400" />}
        </div>
        {isDisabled && (
          <p className="text-sm text-gray-500 mt-1">Please select a color first</p>
        )}
      </div>
      <div className="p-6">
        <RadioGroup 
          value={paymentMethod} 
          onValueChange={selectedColor ? onPaymentMethodChange : undefined} 
          className="space-y-3"
          disabled={isDisabled}
        >
          <div className={`flex items-center space-x-4 p-4 rounded-lg border transition-all ${
            isDisabled 
              ? 'border-gray-200 cursor-not-allowed' 
              : paymentMethod === 'online' 
                ? 'border-green-500 bg-green-50 cursor-pointer' 
                : 'border-gray-200 cursor-pointer hover:border-gray-300'
          }`}>
            <RadioGroupItem value="online" id="online" disabled={isDisabled} />
            <CreditCard className="w-6 h-6 text-green-600" />
            <label htmlFor="online" className={`text-base font-medium flex-1 ${isDisabled ? 'cursor-not-allowed' : 'cursor-pointer'}`}>
              Online Payment
            </label>
            <span className="text-sm text-green-600 font-semibold">FREE Delivery</span>
            {paymentMethod === 'online' && <Check className="w-5 h-5 text-green-600" />}
          </div>
          <div className={`flex items-center space-x-4 p-4 rounded-lg border transition-all ${
            isDisabled 
              ? 'border-gray-200 cursor-not-allowed' 
              : paymentMethod === 'cod' 
                ? 'border-orange-500 bg-orange-50 cursor-pointer' 
                : 'border-gray-200 cursor-pointer hover:border-gray-300'
          }`}>
            <RadioGroupItem value="cod" id="cod" disabled={isDisabled} />
            <Banknote className="w-6 h-6 text-orange-600" />
            <label htmlFor="cod" className={`text-base font-medium flex-1 ${isDisabled ? 'cursor-not-allowed' : 'cursor-pointer'}`}>
              Cash on Delivery
            </label>
            <span className="text-sm text-orange-600 font-semibold">+100 BDT</span>
            {paymentMethod === 'cod' && <Check className="w-5 h-5 text-orange-600" />}
          </div>
        </RadioGroup>
      </div>
    </div>
  );
};
