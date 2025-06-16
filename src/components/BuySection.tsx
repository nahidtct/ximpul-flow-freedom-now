
import React, { useState } from 'react';
import { ProductGallery } from './buy/ProductGallery';
import { EditionSelector } from './buy/EditionSelector';
import { ColorSelector } from './buy/ColorSelector';
import { AccessoriesCarousel } from './buy/AccessoriesCarousel';
import { EngravingSection } from './buy/EngravingSection';
import { EngravingModal } from './buy/EngravingModal';
import { PaymentMethodSelector } from './buy/PaymentMethodSelector';
import { CustomerDetailsForm } from './buy/CustomerDetailsForm';
import { OrderSummary } from './buy/OrderSummary';
import { useProducts, useAccessories } from '@/hooks/useProducts';
import { useOrderSubmission } from '@/hooks/useOrderSubmission';
import { Color } from '@/types/buySection';

export const BuySection = () => {
  const [selectedEdition, setSelectedEdition] = useState('');
  const [selectedColor, setSelectedColor] = useState('');
  const [selectedAccessories, setSelectedAccessories] = useState<string[]>([]);
  const [engravingText, setEngravingText] = useState('');
  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [customerAddress, setCustomerAddress] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('online');
  const [isEngravingModalOpen, setIsEngravingModalOpen] = useState(false);

  const { data: editions = [], isLoading: loadingProducts, error: productsError } = useProducts();
  const { data: accessories = [], isLoading: loadingAccessories, error: accessoriesError } = useAccessories();
  const orderMutation = useOrderSubmission();

  const galleryImages = [
    '/lovable-uploads/58ab89a6-dcd6-4dbd-8f34-f33d92e0dad9.png',
    '/lovable-uploads/6d02ee6b-27ea-423a-b207-0225e530b813.png',
    '/lovable-uploads/f20b8efa-8169-4ff2-9742-0d729584792c.png',
    '/lovable-uploads/ec80b5a4-7467-4700-acfe-06bf9d6b46e1.png',
    '/lovable-uploads/084234fa-91d8-4a6f-9590-0a9273da4525.png'
  ];
  const [mainImage, setMainImage] = useState(galleryImages[0]);

  const handleAccessoryToggle = (accessory: string) => {
    if (!selectedColor) return;
    setSelectedAccessories(prev => prev.includes(accessory) ? prev.filter(a => a !== accessory) : [...prev, accessory]);
  };

  const colors: Color[] = [{
    name: 'Obsidian Black',
    value: 'obsidian',
    color: '#1a1a1a'
  }, {
    name: 'Graphite Gray',
    value: 'graphite',
    color: '#6b7280'
  }];

  const handleOrderSubmit = () => {
    const basePrice = selectedEdition ? (editions.find(e => e.value === selectedEdition)?.price || 0) : 0;
    const accessoriesPrice = selectedAccessories.reduce((total, accessory) => {
      const item = accessories.find(a => a.name === accessory);
      return total + (item?.price || 0);
    }, 0);
    const engravingPrice = engravingText ? 300 : 0;
    const deliveryFee = paymentMethod === 'cod' ? 100 : 0;
    const subtotal = basePrice + accessoriesPrice + engravingPrice;
    const totalPrice = subtotal + deliveryFee;

    orderMutation.mutate({
      customerName,
      customerPhone,
      customerAddress,
      selectedEdition,
      selectedColor,
      selectedAccessories,
      engravingText,
      paymentMethod,
      subtotal,
      deliveryFee,
      totalAmount: totalPrice
    });
  };

  // Show error state if there are any errors
  if (productsError || accessoriesError) {
    return (
      <section id="buy" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Order Your Ximpul Flow</h2>
            <p className="text-lg text-red-600">
              Unable to load product information. Please try again later.
            </p>
            <button 
              onClick={() => window.location.reload()} 
              className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
              Retry
            </button>
          </div>
        </div>
      </section>
    );
  }

  // Show loading state
  if (loadingProducts || loadingAccessories) {
    return (
      <section id="buy" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Order Your Ximpul Flow</h2>
            <div className="flex items-center justify-center">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
              <p className="ml-3 text-lg text-gray-600">Loading products...</p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="buy" className="py-16 bg-gray-50 fade-on-scroll">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Order Your Ximpul Flow</h2>
          <p className="text-lg text-gray-600">
            Complete your order in simple steps
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <ProductGallery 
            mainImage={mainImage}
            galleryImages={galleryImages}
            onThumbnailClick={setMainImage}
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
              onOpenModal={() => setIsEngravingModalOpen(true)}
            />

            <EngravingModal
              isOpen={isEngravingModalOpen}
              onClose={() => setIsEngravingModalOpen(false)}
              initialText={engravingText}
              onSave={setEngravingText}
            />

            <PaymentMethodSelector 
              paymentMethod={paymentMethod}
              selectedColor={selectedColor}
              onPaymentMethodChange={setPaymentMethod}
            />

            <CustomerDetailsForm 
              customerName={customerName}
              customerPhone={customerPhone}
              customerAddress={customerAddress}
              selectedColor={selectedColor}
              onNameChange={setCustomerName}
              onPhoneChange={setCustomerPhone}
              onAddressChange={setCustomerAddress}
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
              onOrderSubmit={handleOrderSubmit}
              isSubmitting={orderMutation.isPending}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
