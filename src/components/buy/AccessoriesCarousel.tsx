
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
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
        <Carousel className="w-full">
          <CarouselContent className="-ml-2">
            {accessories.map((accessory, index) => (
              <CarouselItem key={index} className="pl-2 basis-1/2">
                <div 
                  className={`p-4 rounded-lg border transition-all text-center ${
                    isDisabled 
                      ? 'border-gray-200 cursor-not-allowed' 
                      : selectedAccessories.includes(accessory.name) 
                        ? 'border-blue-500 bg-blue-50 cursor-pointer' 
                        : 'border-gray-200 cursor-pointer hover:border-gray-300'
                  }`} 
                  onClick={() => !isDisabled && onAccessoryToggle(accessory.name)}
                >
                  <div className="space-y-3">
                    <img src="/lovable-uploads/6d7045cd-df5f-4044-81b4-5e7493e56c76.png" alt="Accessory icon" className="w-10 h-10 object-contain mx-auto" />
                    <p className="font-semibold text-sm text-gray-900">{accessory.name}</p>
                    <p className="text-xs text-gray-500 leading-relaxed">{accessory.note}</p>
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-sm text-blue-600">+{accessory.price} BDT</span>
                      {selectedAccessories.includes(accessory.name) ? <Check className="w-4 h-4 text-blue-600" /> : <Plus className="w-4 h-4 text-gray-400" />}
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-2 h-8 w-8" />
          <CarouselNext className="right-2 h-8 w-8" />
        </Carousel>
      </div>
    </div>
  );
};
