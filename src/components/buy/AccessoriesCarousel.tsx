
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

  // Map accessory names to their specific images
  const getAccessoryImage = (accessoryName: string) => {
    console.log('Getting image for accessory:', accessoryName);
    
    const imageMap: { [key: string]: string } = {
      'Carabiner Hook': '/lovable-uploads/5ab211c1-9638-4224-9a53-0c8e660bc9be.png',
      'Aluminium Hook': '/lovable-uploads/5ab211c1-9638-4224-9a53-0c8e660bc9be.png',
      'Bottle Brush': '/lovable-uploads/4315376a-ff14-4683-84d6-b03c96f689d0.png',
      'Cleaning Brush': '/lovable-uploads/4315376a-ff14-4683-84d6-b03c96f689d0.png',
      'Steel Straw Set': '/lovable-uploads/a09450ea-b274-4a61-ab28-d9f053a0d789.png',
      'Straw Cap': '/lovable-uploads/a09450ea-b274-4a61-ab28-d9f053a0d789.png',
      'Grip Sleeve': '/lovable-uploads/5db54c96-cade-47a7-abd9-6d68ec608f3c.png',
      'Silicone Sleeve': '/lovable-uploads/5db54c96-cade-47a7-abd9-6d68ec608f3c.png',
      'Premium Cap': '/lovable-uploads/f083954e-29e0-4720-a050-e8d9f88e5192.png',
      'Standard Cap': '/lovable-uploads/f083954e-29e0-4720-a050-e8d9f88e5192.png',
      'Hydration Lid': '/lovable-uploads/f260e012-e3be-4c1c-8b71-1d2d98fbc29f.png',
      'Straw Cleaning Brush': '/lovable-uploads/f260e012-e3be-4c1c-8b71-1d2d98fbc29f.png'
    };
    
    // Return specific image if found, otherwise fallback to generic image
    const image = imageMap[accessoryName] || '/lovable-uploads/6d7045cd-df5f-4044-81b4-5e7493e56c76.png';
    console.log('Returning image:', image, 'for accessory:', accessoryName);
    return image;
  };

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
              className={`group relative p-3 rounded-2xl border-2 transition-all duration-300 cursor-pointer ${
                isDisabled 
                  ? 'border-gray-100 cursor-not-allowed bg-gray-50' 
                  : selectedAccessories.includes(accessory.name) 
                    ? 'border-blue-500 bg-blue-50 shadow-lg shadow-blue-100' 
                    : 'border-gray-100 bg-white hover:border-gray-200 hover:shadow-md'
              }`} 
              onClick={() => !isDisabled && onAccessoryToggle(accessory.name)}
            >
              {/* Selection Indicator */}
              <div className={`absolute top-3 right-3 w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all duration-300 ${
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
              <div className="flex justify-center mb-3">
                <div className={`w-20 h-20 rounded-xl flex items-center justify-center transition-all duration-300 p-1 ${
                  selectedAccessories.includes(accessory.name) && !isDisabled
                    ? 'bg-blue-100' 
                    : 'bg-gray-100 group-hover:bg-gray-200'
                }`}>
                  <img 
                    src={getAccessoryImage(accessory.name)}
                    alt={accessory.name} 
                    className="w-full h-full object-contain" 
                    onError={(e) => {
                      console.log('Image failed to load:', getAccessoryImage(accessory.name));
                      e.currentTarget.src = '/lovable-uploads/6d7045cd-df5f-4044-81b4-5e7493e56c76.png';
                    }}
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
