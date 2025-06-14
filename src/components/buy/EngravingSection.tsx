
import { Input } from '@/components/ui/input';
import { Lock } from 'lucide-react';

interface EngravingSectionProps {
  engravingText: string;
  selectedColor: string;
  onEngravingChange: (value: string) => void;
}

export const EngravingSection = ({ engravingText, selectedColor, onEngravingChange }: EngravingSectionProps) => {
  const isDisabled = !selectedColor;

  return (
    <div className={`bg-white rounded-xl border border-gray-200 overflow-hidden ${isDisabled ? 'opacity-50' : ''}`}>
      <div className="px-6 py-4 border-b border-gray-100">
        <div className="flex items-center space-x-3">
          <img src="/lovable-uploads/6d7045cd-df5f-4044-81b4-5e7493e56c76.png" alt="Engraving icon" className="w-6 h-6 object-contain" />
          <h3 className="text-lg font-semibold text-gray-900">4. Personalize with Engraving <span className="text-base font-normal text-gray-500">(Optional)</span></h3>
          {isDisabled && <Lock className="w-4 h-4 text-gray-400" />}
        </div>
        {isDisabled && (
          <p className="text-sm text-gray-500 mt-1">Please select a color first</p>
        )}
      </div>
      <div className="p-6">
        <Input 
          placeholder="Add your name or message" 
          value={engravingText} 
          onChange={e => selectedColor && onEngravingChange(e.target.value)} 
          className="text-base h-12 rounded-lg border-gray-300" 
          disabled={isDisabled}
        />
        <p className="text-sm text-gray-500 mt-2">
          {engravingText ? 'Engraving: +300 BDT' : 'Engraving available for +300 BDT'}
        </p>
      </div>
    </div>
  );
};
