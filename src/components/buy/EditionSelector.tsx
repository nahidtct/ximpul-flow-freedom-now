
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Check } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

interface Edition {
  name: string;
  value: string;
  price: number;
  description: string;
}

interface EditionSelectorProps {
  editions: Edition[];
  selectedEdition: string;
  onEditionChange: (value: string) => void;
}

export const EditionSelector: React.FC<EditionSelectorProps> = ({
  editions,
  selectedEdition,
  onEditionChange
}) => {
  const isMobile = useIsMobile();

  // Map the generic descriptions to specific product details
  const getProductDescription = (edition: Edition) => {
    if (edition.value === 'base') {
      return "500ml Ximpul Flow Bottle, Standard Cap and Silicone Sleeve";
    } else if (edition.value === 'lifestyle') {
      return "500ml Ximpul Flow Bottle, Standard & Straw Caps, Silicone Sleeve, Cleaning Brushes and Aluminium Hook";
    }
    return edition.description;
  };

  return (
    <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
      <div className="px-6 py-4 border-b border-gray-100">
        <h3 className="text-lg font-semibold text-gray-900">1. Choose Edition</h3>
      </div>
      <div className="p-6">
        <div className={`${isMobile ? 'space-y-4' : 'grid grid-cols-2 gap-4'}`}>
          {editions.map((edition) => (
            <Card 
              key={edition.value}
              className={`cursor-pointer transition-all hover:shadow-md ${
                selectedEdition === edition.value 
                  ? 'ring-2 ring-primary border-primary' 
                  : 'border-gray-200'
              }`}
              onClick={() => onEditionChange(edition.value)}
            >
              <CardContent className="p-6">
                <div className={`${isMobile ? 'flex items-start justify-between mb-4' : 'mb-4'}`}>
                  <div className={`${isMobile ? 'flex-1' : ''}`}>
                    <h4 className="font-semibold text-gray-900 mb-2">{edition.name}</h4>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {getProductDescription(edition)}
                    </p>
                  </div>
                  <div className={`${isMobile ? 'ml-4 text-right' : 'mt-4 text-right'}`}>
                    <div className="text-lg font-bold text-gray-900">
                      {edition.price.toLocaleString()} BDT
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};
