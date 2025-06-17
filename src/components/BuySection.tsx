
import React from 'react';
import { useBuySection } from '@/hooks/useBuySection';
import { BuySectionStates } from './buy/BuySectionStates';
import { BuySectionContent } from './buy/BuySectionContent';

export const BuySection = () => {
  console.log('BuySection component rendering...');
  
  const buySection = useBuySection();

  // Enhanced debugging for all environments
  console.log('BuySection render state:', {
    editions: buySection.editions.length,
    accessories: buySection.accessories.length,
    loadingProducts: buySection.loadingProducts,
    loadingAccessories: buySection.loadingAccessories,
    productsError: buySection.productsError?.message || null,
    accessoriesError: buySection.accessoriesError?.message || null,
    environment: import.meta.env.MODE,
    href: window.location.href
  });

  // Always render the section container - this ensures the section is visible
  return (
    <section id="buy" className="py-16 bg-gray-50 fade-on-scroll" style={{ minHeight: '400px' }}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Order Your Ximpul Flow</h2>
          <p className="text-lg text-gray-600">
            Complete your order in simple steps
          </p>
        </div>

        <BuySectionStates 
          loadingProducts={buySection.loadingProducts}
          loadingAccessories={buySection.loadingAccessories}
          productsError={buySection.productsError}
          accessoriesError={buySection.accessoriesError}
        />

        {/* Show main content when data is available OR show fallback */}
        {(!buySection.loadingProducts && !buySection.loadingAccessories) && (
          <BuySectionContent 
            selectedEdition={buySection.selectedEdition}
            selectedColor={buySection.selectedColor}
            selectedAccessories={buySection.selectedAccessories}
            engravingText={buySection.engravingText}
            customerName={buySection.customerName}
            customerPhone={buySection.customerPhone}
            customerAddress={buySection.customerAddress}
            paymentMethod={buySection.paymentMethod}
            isEngravingModalOpen={buySection.isEngravingModalOpen}
            editions={buySection.editions}
            accessories={buySection.accessories}
            setSelectedEdition={buySection.setSelectedEdition}
            setSelectedColor={buySection.setSelectedColor}
            setEngravingText={buySection.setEngravingText}
            setCustomerName={buySection.setCustomerName}
            setCustomerPhone={buySection.setCustomerPhone}
            setCustomerAddress={buySection.setCustomerAddress}
            setPaymentMethod={buySection.setPaymentMethod}
            setIsEngravingModalOpen={buySection.setIsEngravingModalOpen}
            handleAccessoryToggle={buySection.handleAccessoryToggle}
            handleOrderSubmit={buySection.handleOrderSubmit}
            isSubmitting={buySection.orderMutation.isPending}
          />
        )}

        {/* Debug info - only in development */}
        {import.meta.env.MODE === 'development' && (
          <div className="mt-8 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
            <h4 className="font-semibold text-yellow-800 mb-2">Debug Info:</h4>
            <pre className="text-xs text-yellow-700">
              {JSON.stringify({
                editions: buySection.editions.length,
                accessories: buySection.accessories.length,
                loadingProducts: buySection.loadingProducts,
                loadingAccessories: buySection.loadingAccessories,
                hasErrors: !!(buySection.productsError || buySection.accessoriesError)
              }, null, 2)}
            </pre>
          </div>
        )}
      </div>
    </section>
  );
};
