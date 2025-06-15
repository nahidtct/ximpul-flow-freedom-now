
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Lock } from 'lucide-react';

interface CustomerDetailsFormProps {
  customerName: string;
  customerPhone: string;
  customerAddress: string;
  selectedColor: string;
  onNameChange: (value: string) => void;
  onPhoneChange: (value: string) => void;
  onAddressChange: (value: string) => void;
}

export const CustomerDetailsForm = ({ 
  customerName, 
  customerPhone, 
  customerAddress,
  selectedColor, 
  onNameChange, 
  onPhoneChange,
  onAddressChange 
}: CustomerDetailsFormProps) => {
  const isDisabled = !selectedColor;

  return (
    <div className={`bg-white rounded-xl border border-gray-200 overflow-hidden ${isDisabled ? 'opacity-50' : ''}`}>
      <div className="px-6 py-4 border-b border-gray-100">
        <div className="flex items-center space-x-2">
          <h3 className="text-lg font-semibold text-gray-900">6. Your Information</h3>
          {isDisabled && <Lock className="w-4 h-4 text-gray-400" />}
        </div>
        {isDisabled && (
          <p className="text-sm text-gray-500 mt-1">Please select a color first</p>
        )}
      </div>
      <div className="p-6">
        <div className="space-y-4">
          <div>
            <Label htmlFor="name" className="text-sm font-medium text-gray-700 mb-2 block">
              Name *
            </Label>
            <Input 
              id="name" 
              type="text" 
              placeholder="Enter your name" 
              value={customerName} 
              onChange={e => selectedColor && onNameChange(e.target.value)} 
              className="text-base h-12 rounded-lg border-gray-300" 
              required 
              disabled={isDisabled}
            />
          </div>
          <div>
            <Label htmlFor="phone" className="text-sm font-medium text-gray-700 mb-2 block">
              Phone Number *
            </Label>
            <Input 
              id="phone" 
              type="tel" 
              placeholder="Enter your phone number" 
              value={customerPhone} 
              onChange={e => selectedColor && onPhoneChange(e.target.value)} 
              className="text-base h-12 rounded-lg border-gray-300" 
              required 
              disabled={isDisabled}
            />
          </div>
          <div>
            <Label htmlFor="address" className="text-sm font-medium text-gray-700 mb-2 block">
              Address *
            </Label>
            <Textarea 
              id="address" 
              placeholder="Enter your complete address" 
              value={customerAddress} 
              onChange={e => selectedColor && onAddressChange(e.target.value)} 
              className="text-base rounded-lg border-gray-300 min-h-[100px]" 
              required 
              disabled={isDisabled}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
