import React, { useState } from 'react';
import { ProductGallery } from './buy/ProductGallery';
import { EditionSelector } from './buy/EditionSelector';
import { ColorSelector } from './buy/ColorSelector';
import { AccessoriesCarousel } from './buy/AccessoriesCarousel';
import { EngravingSection } from './buy/EngravingSection';
import { PaymentMethodSelector } from './buy/PaymentMethodSelector';
import { CustomerDetailsForm } from './buy/CustomerDetailsForm';
import { OrderSummary } from './buy/OrderSummary';
import { Edition, Color, Accessory } from '@/types/buySection';

export const BuySection = () => {
  const [selectedEdition, setSelectedEdition] = useState('');
  const [selectedColor, setSelectedColor] = useState('');
  const [selectedAccessories, setSelectedAccessories] = useState<string[]>([]);
  const [engravingText, setEngravingText] = useState('');
  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('online');

  const handleAccessoryToggle = (accessory: string) => {
    if (!selectedColor) return;
    setSelectedAccessories(prev => prev.includes(accessory) ? prev.filter(a => a !== accessory) : [...prev, accessory]);
  };

  const editions: Edition[] = [{
    name: 'Base Edition',
    value: 'base',
    price: 1090,
    description: 'Essential hydration solution'
  }, {
    name: 'Lifestyle Edition',
    value: 'lifestyle',
    price: 1590,
    description: 'Complete lifestyle package'
  }];

  const colors: Color[] = [{
    name: 'Obsidian Black',
    value: 'obsidian',
    color: '#1a1a1a'
  }, {
    name: 'Graphite Gray',
    value: 'graphite',
    color: '#6b7280'
  }];

  const accessories: Accessory[] = [
    {
      name: 'Silicone Sleeve',
      price: 300,
      note: 'Soft grip and extra protection'
    },
    {
      name: 'Straw Cap',
      price: 250,
      note: 'Flexibility for active use'
    },
    {
      name: 'Standard Cap',
      price: 200,
      note: 'Replace or upgrade'
    },
    {
      name: 'Straw Cleaning Brush',
      price: 150,
      note: 'Maintain hygiene easily'
    },
    {
      name: 'Cleaning Brush',
      price: 150,
      note: 'Maintain hygiene easily'
    },
    {
      name: 'Aluminium Hook',
      price: 200,
      note: 'Strong, metallic hook for bag mounting'
    }
  ];

  const galleryImages = [
    '/lovable-uploads/6d7045cd-df5f-4044-81b4-5e7493e56c76.png',
    '/lovable-uploads/6d7045cd-df5f-4044-81b4-5e7493e56c76.png',
    '/lovable-uploads/6d7045cd-df5f-4044-81b4-5e7493e56c76.png',
    '/lovable-uploads/6d7045cd-df5f-4044-81b4-5e7493e56c76.png',
    '/lovable-uploads/6d7045cd-df5f-4044-81b4-5e7493e56c76.png'
  ];

  return (
    <section id="buy" className="py-8 bg-gray-50 fade-on-scroll">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-8">
          <p className="text-lg text-gray-600">
            Complete your order in simple steps
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <ProductGallery 
            mainImage="/lovable-uploads/6d7045cd-df5f-4044-81b4-5e7493e56c76.png"
            galleryImages={galleryImages}
          />

          <div className="space-y-6">
            <EditionSelector 
              editions={editions}
              selectedEdition={selectedEdition}
              onEditionChange={setSelectedEdition}
            />

            <ColorSelector 
              colors={colors}
              selectedColor={selectedColor}
              selectedEdition={selectedEdition}
              onColorChange={setSelectedColor}
            />

            <AccessoriesCarousel 
              accessories={accessories}
              selectedAccessories={selectedAccessories}
              selectedColor={selectedColor}
              onAccessoryToggle={handleAccessoryToggle}
            />

            <EngravingSection 
              engravingText={engravingText}
              selectedColor={selectedColor}
              onEngravingChange={setEngravingText}
            />

            <PaymentMethodSelector 
              paymentMethod={paymentMethod}
              selectedColor={selectedColor}
              onPaymentMethodChange={setPaymentMethod}
            />

            <CustomerDetailsForm 
              customerName={customerName}
              customerPhone={customerPhone}
              selectedColor={selectedColor}
              onNameChange={setCustomerName}
              onPhoneChange={setCustomerPhone}
            />

            <OrderSummary 
              selectedEdition={selectedEdition}
              selectedAccessories={selectedAccessories}
              engravingText={engravingText}
              paymentMethod={paymentMethod}
              customerName={customerName}
              customerPhone={customerPhone}
              selectedColor={selectedColor}
              editions={editions}
              accessories={accessories}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
