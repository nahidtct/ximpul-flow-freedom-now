
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Check } from 'lucide-react';

interface Edition {
  name: string;
  value: string;
  price: number;
  originalPrice?: number;
  savings?: number;
  features: string[];
  image?: string;
  colors?: { name: string; value: string; hex: string }[];
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
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold text-gray-900">Choose Your Edition</h3>
      <div className="grid md:grid-cols-2 gap-4">
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
                  {edition.originalPrice && (
                    <div className="text-sm text-gray-500 line-through">
                      {edition.originalPrice.toLocaleString()} BDT
                    </div>
                  )}
                  {edition.savings && (
                    <div className="text-sm text-green-600 font-medium">
                      Save {edition.savings} BDT
                    </div>
                  )}
                </div>
              </div>

              <div className="space-y-2">
                {edition.features.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-2">
                    <Check className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-600">{feature}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};
