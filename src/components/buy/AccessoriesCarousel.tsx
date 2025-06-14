
import { Check, Plus, Lock } from 'lucide-react';
import { Accessory } from '@/types/buySection';

interface AccessoriesCarouselProps {
  accessories: Accessory[];
  selectedAccessories: string[];
  selectedColor: string;
  onAccessoryToggle: (accessory: string) => void;
}

export const AccessoriesCarousel = ({ accessories, selectedAccessories, selectedColor, onAccessoryToggle }: AccessoriesCarouselProps) => {
  const isDisabled = !selectedColor;

  return (
    <div className={`bg-white rounded-xl border border-gray-200 overflow-hidden ${isDisabled ? 'opacity-50' : ''}`}>
      <div className="px-6 py-4 border-b border-gray-100">
        <div className="flex items-center space-x-2">
          <h3 className="text-lg font-semibold text-gray-900">3. Add Accessories <span className="text-base font-normal text-gray-500">(Optional)</span></h3>
          {isDisabled && <Lock className="w-4 h-4 text-gray-400" />}
        </div>
        {isDisabled && (
          <p className="text-sm text-gray-500 mt-1">Please select a color first</p>
        )}
      </div>
      <div className="p-6">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {accessories.map((accessory, index) => (
            <div 
              key={index}
              className={`group relative p-5 rounded-2xl border-2 transition-all duration-300 cursor-pointer ${
                isDisabled 
                  ? 'border-gray-100 cursor-not-allowed bg-gray-50' 
                  : selectedAccessories.includes(accessory.name) 
                    ? 'border-blue-500 bg-blue-50 shadow-lg shadow-blue-100' 
                    : 'border-gray-100 bg-white hover:border-gray-200 hover:shadow-md'
              }`} 
              onClick={() => !isDisabled && onAccessoryToggle(accessory.name)}
            >
              {/* Selection Indicator */}
              <div className={`absolute top-4 right-4 w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all duration-300 ${
                selectedAccessories.includes(accessory.name) && !isDisabled
                  ? 'bg-blue-500 border-blue-500' 
                  : 'border-gray-300 bg-white'
              }`}>
                {selectedAccessories.includes(accessory.name) && !isDisabled ? (
                  <Check className="w-3 h-3 text-white" />
                ) : (
                  <Plus className="w-3 h-3 text-gray-400" />
                )}
              </div>

              {/* Product Image */}
              <div className="flex justify-center mb-4">
                <div className={`w-16 h-16 rounded-xl flex items-center justify-center transition-all duration-300 ${
                  selectedAccessories.includes(accessory.name) && !isDisabled
                    ? 'bg-blue-100' 
                    : 'bg-gray-100 group-hover:bg-gray-200'
                }`}>
                  <img 
                    src="/lovable-uploads/6d7045cd-df5f-4044-81b4-5e7493e56c76.png" 
                    alt={accessory.name} 
                    className="w-10 h-10 object-contain opacity-80" 
                  />
                </div>
              </div>

              {/* Product Info */}
              <div className="text-center space-y-2">
                <h4 className="font-semibold text-gray-900 text-sm leading-tight">
                  {accessory.name}
                </h4>
                <p className="text-xs text-gray-500 leading-relaxed">
                  {accessory.note}
                </p>
                <div className="pt-2">
                  <span className={`font-bold text-sm ${
                    selectedAccessories.includes(accessory.name) && !isDisabled
                      ? 'text-blue-600' 
                      : 'text-gray-900'
                  }`}>
                    +{accessory.price} BDT
                  </span>
                </div>
              </div>

              {/* Hover Effect */}
              {!isDisabled && (
                <div className={`absolute inset-0 rounded-2xl transition-all duration-300 ${
                  selectedAccessories.includes(accessory.name)
                    ? 'ring-2 ring-blue-500 ring-opacity-50' 
                    : 'group-hover:ring-2 group-hover:ring-gray-200'
                }`} />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
