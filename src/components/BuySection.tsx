import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Check, ShoppingCart, Plus, CreditCard, Banknote } from 'lucide-react';

export const BuySection = () => {
  const [selectedEdition, setSelectedEdition] = useState('base');
  const [selectedColor, setSelectedColor] = useState('obsidian');
  const [selectedAccessories, setSelectedAccessories] = useState<string[]>([]);
  const [engravingText, setEngravingText] = useState('');
  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('online');

  const handleAccessoryToggle = (accessory: string) => {
    setSelectedAccessories(prev => prev.includes(accessory) ? prev.filter(a => a !== accessory) : [...prev, accessory]);
  };

  const editions = [{
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
  const colors = [{
    name: 'Obsidian Black',
    value: 'obsidian',
    color: '#1a1a1a'
  }, {
    name: 'Graphite Gray',
    value: 'graphite',
    color: '#6b7280'
  }];
  const accessories = [{
    name: 'Silicone Sleeve',
    price: 300,
    note: 'Soft grip protection'
  }, {
    name: 'Straw Cap',
    price: 250,
    note: 'Active use flexibility'
  }, {
    name: 'Handle Rope',
    price: 200,
    note: 'Alternative handle'
  }, {
    name: 'Cleaning Brush',
    price: 150,
    note: 'Easy maintenance'
  }];
  const basePrice = editions.find(e => e.value === selectedEdition)?.price || 1090;
  const accessoriesPrice = selectedAccessories.reduce((total, accessory) => {
    const item = accessories.find(a => a.name === accessory);
    return total + (item?.price || 0);
  }, 0);
  const engravingPrice = engravingText ? 300 : 0;
  const deliveryFee = paymentMethod === 'cod' ? 100 : 0;
  const subtotal = basePrice + accessoriesPrice + engravingPrice;
  const totalPrice = subtotal + deliveryFee;

  // Product gallery images (using the uploaded image for all for now)
  const galleryImages = ['/lovable-uploads/6d7045cd-df5f-4044-81b4-5e7493e56c76.png', '/lovable-uploads/6d7045cd-df5f-4044-81b4-5e7493e56c76.png', '/lovable-uploads/6d7045cd-df5f-4044-81b4-5e7493e56c76.png', '/lovable-uploads/6d7045cd-df5f-4044-81b4-5e7493e56c76.png', '/lovable-uploads/6d7045cd-df5f-4044-81b4-5e7493e56c76.png'];

  return (
    <section id="buy" className="py-8 bg-gray-50 fade-on-scroll">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8">
          
          <p className="text-lg text-gray-600">
            Complete your order in simple steps
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Product Gallery - Sticky on desktop */}
          <div className="lg:sticky lg:top-8 lg:self-start space-y-6">
            {/* Main Product Image */}
            <div className="aspect-square bg-white rounded-2xl border border-gray-200 overflow-hidden">
              <img src="/lovable-uploads/6d7045cd-df5f-4044-81b4-5e7493e56c76.png" alt="Ximpul Flow Water Bottle" className="w-full h-full object-contain p-8" />
            </div>
            
            {/* Thumbnail Gallery */}
            <div className="grid grid-cols-5 gap-3">
              {galleryImages.map((image, index) => (
                <div key={index} className="aspect-square bg-white rounded-lg border border-gray-200 overflow-hidden cursor-pointer hover:border-blue-500 transition-colors">
                  <img src={image} alt={`Product view ${index + 1}`} className="w-full h-full object-contain p-2" />
                </div>
              ))}
            </div>
          </div>

          {/* Checkout Form */}
          <div className="space-y-6">
            
            {/* Edition Selection */}
            <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
              <div className="px-6 py-4 border-b border-gray-100">
                <h3 className="text-lg font-semibold text-gray-900">Choose Edition</h3>
              </div>
              <div className="p-6">
                <RadioGroup value={selectedEdition} onValueChange={setSelectedEdition} className="space-y-4">
                  {editions.map(edition => (
                    <div key={edition.value} className={`relative p-4 rounded-lg border cursor-pointer transition-all ${selectedEdition === edition.value ? 'border-blue-500 bg-blue-50' : 'border-gray-200'}`}>
                      <RadioGroupItem value={edition.value} id={edition.value} className="sr-only" />
                      <label htmlFor={edition.value} className="cursor-pointer block">
                        <div className="flex items-center space-x-4">
                          <img src="/lovable-uploads/6d7045cd-df5f-4044-81b4-5e7493e56c76.png" alt="Product icon" className="w-12 h-12 object-contain flex-shrink-0" />
                          <div className="flex-1 min-w-0">
                            <div className="text-base font-semibold text-gray-900">{edition.name}</div>
                            <div className="text-sm text-gray-500">{edition.description}</div>
                          </div>
                          <div className="text-lg font-bold text-blue-600">{edition.price} BDT</div>
                        </div>
                        {selectedEdition === edition.value && (
                          <div className="absolute top-2 right-2">
                            <Check className="w-5 h-5 text-blue-600" />
                          </div>
                        )}
                      </label>
                    </div>
                  ))}
                </RadioGroup>
              </div>
            </div>

            {/* Color Selection */}
            <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
              <div className="px-6 py-4 border-b border-gray-100">
                <h3 className="text-lg font-semibold text-gray-900">Choose Color</h3>
              </div>
              <div className="p-6">
                <RadioGroup value={selectedColor} onValueChange={setSelectedColor} className="space-y-3">
                  {colors.map(color => (
                    <div key={color.value} className={`flex items-center space-x-4 p-4 rounded-lg border cursor-pointer transition-all ${selectedColor === color.value ? 'border-blue-500 bg-blue-50' : 'border-gray-200'}`}>
                      <RadioGroupItem value={color.value} id={color.value} />
                      <img src="/lovable-uploads/6d7045cd-df5f-4044-81b4-5e7493e56c76.png" alt="Product icon" className="w-8 h-8 object-contain flex-shrink-0" />
                      <div className="w-6 h-6 rounded-full border border-gray-300" style={{
                        backgroundColor: color.color
                      }} />
                      <label htmlFor={color.value} className="text-base font-medium cursor-pointer flex-1">
                        {color.name}
                      </label>
                      {selectedColor === color.value && <Check className="w-5 h-5 text-blue-600" />}
                    </div>
                  ))}
                </RadioGroup>
              </div>
            </div>

            {/* Accessories Carousel */}
            <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
              <div className="px-6 py-4 border-b border-gray-100">
                <h3 className="text-lg font-semibold text-gray-900">Add Accessories <span className="text-base font-normal text-gray-500">(Optional)</span></h3>
              </div>
              <div className="p-6">
                <Carousel className="w-full">
                  <CarouselContent className="-ml-2">
                    {accessories.map((accessory, index) => (
                      <CarouselItem key={index} className="pl-2 basis-1/2">
                        <div className={`p-4 rounded-lg border cursor-pointer transition-all text-center ${selectedAccessories.includes(accessory.name) ? 'border-blue-500 bg-blue-50' : 'border-gray-200'}`} onClick={() => handleAccessoryToggle(accessory.name)}>
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

            {/* Engraving */}
            <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
              <div className="px-6 py-4 border-b border-gray-100">
                <div className="flex items-center space-x-3">
                  <img src="/lovable-uploads/6d7045cd-df5f-4044-81b4-5e7493e56c76.png" alt="Engraving icon" className="w-6 h-6 object-contain" />
                  <h3 className="text-lg font-semibold text-gray-900">Personalize with Engraving <span className="text-base font-normal text-gray-500">(Optional)</span></h3>
                </div>
              </div>
              <div className="p-6">
                <Input placeholder="Add your name or message" value={engravingText} onChange={e => setEngravingText(e.target.value)} className="text-base h-12 rounded-lg border-gray-300" />
                <p className="text-sm text-gray-500 mt-2">
                  {engravingText ? 'Engraving: +300 BDT' : 'Engraving available for +300 BDT'}
                </p>
              </div>
            </div>

            {/* Payment Method */}
            <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
              <div className="px-6 py-4 border-b border-gray-100">
                <h3 className="text-lg font-semibold text-gray-900">Payment Method</h3>
              </div>
              <div className="p-6">
                <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod} className="space-y-3">
                  <div className={`flex items-center space-x-4 p-4 rounded-lg border cursor-pointer transition-all ${paymentMethod === 'online' ? 'border-green-500 bg-green-50' : 'border-gray-200'}`}>
                    <RadioGroupItem value="online" id="online" />
                    <CreditCard className="w-6 h-6 text-green-600" />
                    <label htmlFor="online" className="text-base font-medium cursor-pointer flex-1">
                      Online Payment
                    </label>
                    <span className="text-sm text-green-600 font-semibold">FREE Delivery</span>
                    {paymentMethod === 'online' && <Check className="w-5 h-5 text-green-600" />}
                  </div>
                  <div className={`flex items-center space-x-4 p-4 rounded-lg border cursor-pointer transition-all ${paymentMethod === 'cod' ? 'border-orange-500 bg-orange-50' : 'border-gray-200'}`}>
                    <RadioGroupItem value="cod" id="cod" />
                    <Banknote className="w-6 h-6 text-orange-600" />
                    <label htmlFor="cod" className="text-base font-medium cursor-pointer flex-1">
                      Cash on Delivery
                    </label>
                    <span className="text-sm text-orange-600 font-semibold">+100 BDT</span>
                    {paymentMethod === 'cod' && <Check className="w-5 h-5 text-orange-600" />}
                  </div>
                </RadioGroup>
              </div>
            </div>

            {/* Customer Details */}
            <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
              <div className="px-6 py-4 border-b border-gray-100">
                <h3 className="text-lg font-semibold text-gray-900">Your Information</h3>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="name" className="text-sm font-medium text-gray-700 mb-2 block">
                      Full Name *
                    </Label>
                    <Input id="name" type="text" placeholder="Enter your full name" value={customerName} onChange={e => setCustomerName(e.target.value)} className="text-base h-12 rounded-lg border-gray-300" required />
                  </div>
                  <div>
                    <Label htmlFor="phone" className="text-sm font-medium text-gray-700 mb-2 block">
                      Phone Number *
                    </Label>
                    <Input id="phone" type="tel" placeholder="Enter your phone number" value={customerPhone} onChange={e => setCustomerPhone(e.target.value)} className="text-base h-12 rounded-lg border-gray-300" required />
                  </div>
                </div>
              </div>
            </div>

            {/* Order Summary */}
            <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
              <div className="px-6 py-4 border-b border-gray-100">
                <h3 className="text-lg font-semibold text-gray-900">Order Summary</h3>
              </div>
              <div className="p-6">
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between text-base">
                    <span className="text-gray-600">Ximpul Flow {editions.find(e => e.value === selectedEdition)?.name}</span>
                    <span className="font-semibold text-gray-900">{basePrice} BDT</span>
                  </div>
                  
                  {selectedAccessories.length > 0 && (
                    <div className="space-y-2">
                      {selectedAccessories.map(accessory => {
                        const item = accessories.find(a => a.name === accessory);
                        return (
                          <div key={accessory} className="flex justify-between text-sm">
                            <span className="text-gray-600">{accessory}</span>
                            <span className="font-medium text-gray-900">+{item?.price} BDT</span>
                          </div>
                        );
                      })}
                    </div>
                  )}
                  
                  {engravingText && (
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Engraving Service</span>
                      <span className="font-medium text-gray-900">+300 BDT</span>
                    </div>
                  )}

                  <div className="flex justify-between text-base">
                    <span className="text-gray-600">Subtotal</span>
                    <span className="font-semibold text-gray-900">{subtotal} BDT</span>
                  </div>

                  <div className="flex justify-between text-base">
                    <span className={deliveryFee > 0 ? "text-orange-600" : "text-green-600"}>
                      Delivery {paymentMethod === 'online' ? '(FREE)' : '(COD)'}
                    </span>
                    <span className={`font-semibold ${deliveryFee > 0 ? "text-orange-600" : "text-green-600"}`}>
                      {deliveryFee > 0 ? `+${deliveryFee} BDT` : 'FREE'}
                    </span>
                  </div>
                </div>

                <div className="border-t border-gray-100 pt-4 mb-6">
                  <div className="flex justify-between text-xl font-bold">
                    <span className="text-gray-900">Total</span>
                    <span className="text-blue-600">{totalPrice} BDT</span>
                  </div>
                </div>

                <Button size="lg" className="w-full bg-black hover:bg-black/90 text-white text-base font-semibold rounded-lg h-14" disabled={!customerName || !customerPhone}>
                  <ShoppingCart className="mr-2 h-5 w-5" />
                  {paymentMethod === 'online' ? 'Pay Online' : 'Order with COD'}
                </Button>

                <p className="text-sm text-gray-500 text-center mt-3">
                  {paymentMethod === 'online' ? 'Secure payment • Free delivery' : 'Cash on delivery • +100 BDT delivery fee'}
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
