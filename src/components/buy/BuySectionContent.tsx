
import { useState } from 'react';
import { ProductGallery } from './ProductGallery';
import { EditionSelector } from './EditionSelector';
import { ColorSelector } from './ColorSelector';
import { AccessoriesCarousel } from './AccessoriesCarousel';
import { EngravingSection } from './EngravingSection';
import { EngravingModal } from './EngravingModal';
import { PaymentMethodSelector } from './PaymentMethodSelector';
import { CustomerDetailsForm } from './CustomerDetailsForm';
import { OrderSummary } from './OrderSummary';
import { Color } from '@/types/buySection';

interface BuySectionContentProps {
  // State
  selectedEdition: string;
  selectedColor: string;
  selectedAccessories: string[];
  engravingText: string;
  customerName: string;
  customerPhone: string;
  customerEmail: string;
  customerAddress: string;
  paymentMethod: string;
  isEngravingModalOpen: boolean;
  // Data
  editions: any[];
  accessories: any[];
  // Actions
  setSelectedEdition: (value: string) => void;
  setSelectedColor: (value: string) => void;
  setEngravingText: (value: string) => void;
  setCustomerName: (value: string) => void;
  setCustomerPhone: (value: string) => void;
  setCustomerEmail: (value: string) => void;
  setCustomerAddress: (value: string) => void;
  setPaymentMethod: (value: string) => void;
  setIsEngravingModalOpen: (value: boolean) => void;
  handleAccessoryToggle: (accessory: string) => void;
  handleOrderSubmit: () => void;
  isSubmitting: boolean;
}

export const BuySectionContent = (props: BuySectionContentProps) => {
  const galleryImages = [
    '/lovable-uploads/58ab89a6-dcd6-4dbd-8f34-f33d92e0dad9.png',
    '/lovable-uploads/6d02ee6b-27ea-423a-b207-0225e530b813.png',
    '/lovable-uploads/f20b8efa-8169-4ff2-9742-0d729584792c.png',
    '/lovable-uploads/ec80b5a4-7467-4700-acfe-06bf9d6b46e1.png',
    '/lovable-uploads/084234fa-91d8-4a6f-9590-0a9273da4525.png'
  ];
  const [mainImage, setMainImage] = useState(galleryImages[0]);

  const colors: Color[] = [{
    name: 'Obsidian Black',
    value: 'obsidian',
    color: '#1a1a1a'
  }, {
    name: 'Graphite Gray',
    value: 'graphite',
    color: '#6b7280'
  }];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <ProductGallery 
        mainImage={mainImage}
        galleryImages={galleryImages}
        onThumbnailClick={setMainImage}
      />

      <div className="space-y-6">
        {props.editions.length > 0 ? (
          <EditionSelector 
            editions={props.editions}
            selectedEdition={props.selectedEdition}
            onEditionChange={props.setSelectedEdition}
          />
        ) : (
          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">1. Choose Edition</h3>
            <p className="text-gray-500">Loading editions...</p>
          </div>
        )}

        <ColorSelector 
          colors={colors}
          selectedColor={props.selectedColor}
          selectedEdition={props.selectedEdition}
          onColorChange={props.setSelectedColor}
        />

        {props.accessories.length > 0 ? (
          <AccessoriesCarousel 
            accessories={props.accessories}
            selectedAccessories={props.selectedAccessories}
            selectedColor={props.selectedColor}
            onAccessoryToggle={props.handleAccessoryToggle}
          />
        ) : (
          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">3. Add Accessories</h3>
            <p className="text-gray-500">Loading accessories...</p>
          </div>
        )}

        <EngravingSection 
          engravingText={props.engravingText}
          selectedColor={props.selectedColor}
          onOpenModal={() => props.setIsEngravingModalOpen(true)}
        />

        <EngravingModal
          isOpen={props.isEngravingModalOpen}
          onClose={() => props.setIsEngravingModalOpen(false)}
          initialText={props.engravingText}
          onSave={props.setEngravingText}
        />

        <PaymentMethodSelector 
          paymentMethod={props.paymentMethod}
          selectedColor={props.selectedColor}
          onPaymentMethodChange={props.setPaymentMethod}
        />

        <CustomerDetailsForm 
          customerName={props.customerName}
          customerPhone={props.customerPhone}
          customerEmail={props.customerEmail}
          customerAddress={props.customerAddress}
          selectedColor={props.selectedColor}
          onNameChange={props.setCustomerName}
          onPhoneChange={props.setCustomerPhone}
          onEmailChange={props.setCustomerEmail}
          onAddressChange={props.setCustomerAddress}
        />

        <OrderSummary 
          selectedEdition={props.selectedEdition}
          selectedAccessories={props.selectedAccessories}
          engravingText={props.engravingText}
          paymentMethod={props.paymentMethod}
          customerName={props.customerName}
          customerPhone={props.customerPhone}
          selectedColor={props.selectedColor}
          editions={props.editions}
          accessories={props.accessories}
          onOrderSubmit={props.handleOrderSubmit}
          isSubmitting={props.isSubmitting}
        />
      </div>
    </div>
  );
};
