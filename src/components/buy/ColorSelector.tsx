
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Check, Lock } from 'lucide-react';
import { Color } from '@/types/buySection';

interface ColorSelectorProps {
  colors: Color[];
  selectedColor: string;
  selectedEdition: string;
  onColorChange: (value: string) => void;
}

export const ColorSelector = ({ colors, selectedColor, selectedEdition, onColorChange }: ColorSelectorProps) => {
  const isDisabled = !selectedEdition;

  return (
    <div className={`bg-white rounded-xl border border-gray-200 overflow-hidden ${isDisabled ? 'opacity-50' : ''}`}>
      <div className="px-6 py-4 border-b border-gray-100">
        <div className="flex items-center space-x-2">
          <h3 className="text-lg font-semibold text-gray-900">2. Choose Color</h3>
          {isDisabled && <Lock className="w-4 h-4 text-gray-400" />}
        </div>
        {isDisabled && (
          <p className="text-sm text-gray-500 mt-1">Please select an edition first</p>
        )}
      </div>
      <div className="p-6">
        <RadioGroup 
          value={selectedColor} 
          onValueChange={selectedEdition ? onColorChange : undefined} 
          className="space-y-3"
          disabled={isDisabled}
        >
          {colors.map(color => (
            <div key={color.value} className={`flex items-center space-x-4 p-4 rounded-lg border transition-all ${
              isDisabled 
                ? 'border-gray-200 cursor-not-allowed' 
                : selectedColor === color.value 
                  ? 'border-blue-500 bg-blue-50 cursor-pointer' 
                  : 'border-gray-200 cursor-pointer hover:border-gray-300'
            }`}>
              <RadioGroupItem value={color.value} id={color.value} disabled={isDisabled} />
              <img src="/lovable-uploads/6d7045cd-df5f-4044-81b4-5e7493e56c76.png" alt="Product icon" className="w-8 h-8 object-contain flex-shrink-0" />
              <div className="w-6 h-6 rounded-full border border-gray-300" style={{
                backgroundColor: color.color
              }} />
              <label htmlFor={color.value} className={`text-base font-medium flex-1 ${isDisabled ? 'cursor-not-allowed' : 'cursor-pointer'}`}>
                {color.name}
              </label>
              {selectedColor === color.value && <Check className="w-5 h-5 text-blue-600" />}
            </div>
          ))}
        </RadioGroup>
      </div>
    </div>
  );
};
