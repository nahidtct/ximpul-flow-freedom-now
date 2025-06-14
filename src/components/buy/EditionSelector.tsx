
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Check } from 'lucide-react';
import { Edition } from '@/types/buySection';

interface EditionSelectorProps {
  editions: Edition[];
  selectedEdition: string;
  onEditionChange: (value: string) => void;
}

export const EditionSelector = ({ editions, selectedEdition, onEditionChange }: EditionSelectorProps) => {
  return (
    <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
      <div className="px-6 py-4 border-b border-gray-100">
        <h3 className="text-lg font-semibold text-gray-900">1. Choose Edition</h3>
      </div>
      <div className="p-6">
        <RadioGroup value={selectedEdition} onValueChange={onEditionChange} className="space-y-4">
          {editions.map(edition => (
            <div key={edition.value} className={`relative p-4 rounded-lg border cursor-pointer transition-all ${selectedEdition === edition.value ? 'border-blue-500 bg-blue-50' : 'border-gray-200 hover:border-gray-300'}`}>
              <RadioGroupItem value={edition.value} id={edition.value} className="sr-only" />
              <label htmlFor={edition.value} className="cursor-pointer block">
                <div className="flex items-center space-x-4">
                  <img src="/lovable-uploads/6d7045cd-df5f-4044-81b4-5e7493e56c76.png" alt="Product icon" className="w-12 h-12 object-contain flex-shrink-0" />
                  <div className="flex-1 min-w-0">
                    <div className="text-base font-semibold text-gray-900">{edition.name}</div>
                    <div className="text-sm text-gray-500">{edition.description}</div>
                  </div>
                  <div className="text-lg font-bold text-blue-600">{edition.price} BDT</div>
                </div>
                {selectedEdition === edition.value && (
                  <div className="absolute top-2 right-2">
                    <Check className="w-5 h-5 text-blue-600" />
                  </div>
                )}
              </label>
            </div>
          ))}
        </RadioGroup>
      </div>
    </div>
  );
};
