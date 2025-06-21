
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Check } from 'lucide-react';

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
        <h3 className="text-lg font-semibold text-gray-900">1. Choose Your Edition</h3>
      </div>
      <div className="p-6">
        <div className="space-y-4">
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
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h4 className="font-semibold text-gray-900">{edition.name}</h4>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-bold text-gray-900">
                      {edition.price.toLocaleString()} BDT
                    </div>
                  </div>
                </div>

                <div className="flex items-start space-x-2">
                  <Check className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-gray-600">{getProductDescription(edition)}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};
