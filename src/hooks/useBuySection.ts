
import { useState } from 'react';
import { useProducts, useAccessories } from '@/hooks/useProducts';
import { useOrderSubmission } from '@/hooks/useOrderSubmission';

export const useBuySection = () => {
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

  const handleAccessoryToggle = (accessory: string) => {
    if (!selectedColor) return;
    setSelectedAccessories(prev => 
      prev.includes(accessory) 
        ? prev.filter(a => a !== accessory) 
        : [...prev, accessory]
    );
  };

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

  return {
    // State
    selectedEdition,
    selectedColor,
    selectedAccessories,
    engravingText,
    customerName,
    customerPhone,
    customerAddress,
    paymentMethod,
    isEngravingModalOpen,
    // Data
    editions,
    accessories,
    loadingProducts,
    loadingAccessories,
    productsError,
    accessoriesError,
    orderMutation,
    // Actions
    setSelectedEdition,
    setSelectedColor,
    setEngravingText,
    setCustomerName,
    setCustomerPhone,
    setCustomerAddress,
    setPaymentMethod,
    setIsEngravingModalOpen,
    handleAccessoryToggle,
    handleOrderSubmit
  };
};
