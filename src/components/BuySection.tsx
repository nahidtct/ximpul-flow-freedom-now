
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Check, ShoppingCart, Plus } from 'lucide-react';

export const BuySection = () => {
  const [selectedEdition, setSelectedEdition] = useState('base');
  const [selectedColor, setSelectedColor] = useState('obsidian');
  const [selectedAccessories, setSelectedAccessories] = useState<string[]>([]);
  const [engravingText, setEngravingText] = useState('');
  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');

  const handleAccessoryToggle = (accessory: string) => {
    setSelectedAccessories(prev => 
      prev.includes(accessory) 
        ? prev.filter(a => a !== accessory) 
        : [...prev, accessory]
    );
  };

  const editions = [
    {
      name: 'Base Edition',
      value: 'base',
      price: 1090,
      description: 'Essential hydration solution'
    },
    {
      name: 'Lifestyle Edition',
      value: 'lifestyle',
      price: 1590,
      description: 'Complete lifestyle package'
    }
  ];

  const colors = [
    {
      name: 'Obsidian Black',
      value: 'obsidian',
      color: '#1a1a1a'
    },
    {
      name: 'Graphite Gray',
      value: 'graphite',
      color: '#6b7280'
    }
  ];

  const accessories = [
    {
      name: 'Silicone Sleeve',
      price: 300,
      note: 'Soft grip protection'
    },
    {
      name: 'Straw Cap',
      price: 250,
      note: 'Active use flexibility'
    },
    {
      name: 'Handle Rope',
      price: 200,
      note: 'Alternative handle'
    },
    {
      name: 'Cleaning Brush',
      price: 150,
      note: 'Easy maintenance'
    }
  ];

  const basePrice = editions.find(e => e.value === selectedEdition)?.price || 1090;
  const accessoriesPrice = selectedAccessories.reduce((total, accessory) => {
    const item = accessories.find(a => a.name === accessory);
    return total + (item?.price || 0);
  }, 0);
  const engravingPrice = engravingText ? 300 : 0;
  const totalPrice = basePrice + accessoriesPrice + engravingPrice;

  return (
    <section id="buy" className="py-8 bg-gray-50 fade-on-scroll">
      <div className="max-w-md mx-auto px-3">
        {/* Header */}
        <div className="text-center mb-4">
          <h2 className="text-xl font-semibold text-gray-900 mb-1">
            Customize Your Level
          </h2>
          <p className="text-sm text-gray-600">
            Complete your order in simple steps
          </p>
        </div>

        <div className="space-y-3">
          
          {/* Edition Selection */}
          <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
            <div className="px-3 py-2 border-b border-gray-100">
              <h3 className="text-sm font-medium text-gray-900">Choose Edition</h3>
            </div>
            <div className="p-3">
              <RadioGroup value={selectedEdition} onValueChange={setSelectedEdition} className="space-y-2">
                {editions.map(edition => (
                  <div key={edition.value} className={`relative p-3 rounded-lg border cursor-pointer transition-all ${selectedEdition === edition.value ? 'border-blue-500 bg-blue-50' : 'border-gray-200'}`}>
                    <RadioGroupItem value={edition.value} id={edition.value} className="sr-only" />
                    <label htmlFor={edition.value} className="cursor-pointer block">
                      <div className="flex justify-between items-center">
                        <div>
                          <div className="text-sm font-medium text-gray-900">{edition.name}</div>
                          <div className="text-xs text-gray-500">{edition.description}</div>
                        </div>
                        <div className="text-sm font-semibold text-blue-600">{edition.price} BDT</div>
                      </div>
                      {selectedEdition === edition.value && (
                        <div className="absolute top-2 right-2">
                          <Check className="w-3 h-3 text-blue-600" />
                        </div>
                      )}
                    </label>
                  </div>
                ))}
              </RadioGroup>
            </div>
          </div>

          {/* Color Selection */}
          <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
            <div className="px-3 py-2 border-b border-gray-100">
              <h3 className="text-sm font-medium text-gray-900">Choose Color</h3>
            </div>
            <div className="p-3">
              <RadioGroup value={selectedColor} onValueChange={setSelectedColor} className="space-y-2">
                {colors.map(color => (
                  <div key={color.value} className={`flex items-center space-x-3 p-2 rounded-lg border cursor-pointer transition-all ${selectedColor === color.value ? 'border-blue-500 bg-blue-50' : 'border-gray-200'}`}>
                    <RadioGroupItem value={color.value} id={color.value} />
                    <div className="w-5 h-5 rounded-full border border-gray-300" style={{backgroundColor: color.color}} />
                    <label htmlFor={color.value} className="text-sm font-medium cursor-pointer flex-1">
                      {color.name}
                    </label>
                    {selectedColor === color.value && (
                      <Check className="w-3 h-3 text-blue-600" />
                    )}
                  </div>
                ))}
              </RadioGroup>
            </div>
          </div>

          {/* Accessories Carousel */}
          <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
            <div className="px-3 py-2 border-b border-gray-100">
              <h3 className="text-sm font-medium text-gray-900">Add Accessories <span className="text-xs font-normal text-gray-500">(Optional)</span></h3>
            </div>
            <div className="p-3">
              <Carousel className="w-full">
                <CarouselContent className="-ml-2">
                  {accessories.map((accessory, index) => (
                    <CarouselItem key={index} className="pl-2 basis-2/3">
                      <div 
                        className={`p-3 rounded-lg border cursor-pointer transition-all text-center ${selectedAccessories.includes(accessory.name) ? 'border-blue-500 bg-blue-50' : 'border-gray-200'}`} 
                        onClick={() => handleAccessoryToggle(accessory.name)}
                      >
                        <div className="space-y-1">
                          <p className="font-medium text-xs text-gray-900">{accessory.name}</p>
                          <p className="text-xs text-gray-500 leading-tight">{accessory.note}</p>
                          <div className="flex items-center justify-between">
                            <span className="font-semibold text-xs text-blue-600">+{accessory.price} BDT</span>
                            {selectedAccessories.includes(accessory.name) ? (
                              <Check className="w-3 h-3 text-blue-600" />
                            ) : (
                              <Plus className="w-3 h-3 text-gray-400" />
                            )}
                          </div>
                        </div>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="left-0 h-6 w-6" />
                <CarouselNext className="right-0 h-6 w-6" />
              </Carousel>
            </div>
          </div>

          {/* Engraving */}
          <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
            <div className="px-3 py-2 border-b border-gray-100">
              <h3 className="text-sm font-medium text-gray-900">Personalize with Engraving <span className="text-xs font-normal text-gray-500">(Optional)</span></h3>
            </div>
            <div className="p-3">
              <Input 
                placeholder="Add your name or message" 
                value={engravingText}
                onChange={(e) => setEngravingText(e.target.value)}
                className="text-sm h-8 rounded-lg border-gray-300" 
              />
              <p className="text-xs text-gray-500 mt-1">
                {engravingText ? 'Engraving: +300 BDT' : 'Engraving available for +300 BDT'}
              </p>
            </div>
          </div>

          {/* Customer Details */}
          <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
            <div className="px-3 py-2 border-b border-gray-100">
              <h3 className="text-sm font-medium text-gray-900">Your Information</h3>
            </div>
            <div className="p-3">
              <div className="space-y-3">
                <div>
                  <Label htmlFor="name" className="text-xs font-medium text-gray-700 mb-1 block">
                    Full Name *
                  </Label>
                  <Input 
                    id="name"
                    type="text"
                    placeholder="Enter your full name" 
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    className="text-sm h-8 rounded-lg border-gray-300" 
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="phone" className="text-xs font-medium text-gray-700 mb-1 block">
                    Phone Number *
                  </Label>
                  <Input 
                    id="phone"
                    type="tel"
                    placeholder="Enter your phone number" 
                    value={customerPhone}
                    onChange={(e) => setCustomerPhone(e.target.value)}
                    className="text-sm h-8 rounded-lg border-gray-300" 
                    required
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Order Summary */}
          <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
            <div className="px-3 py-2 border-b border-gray-100">
              <h3 className="text-sm font-medium text-gray-900">Order Summary</h3>
            </div>
            <div className="p-3">
              <div className="space-y-1 mb-3">
                <div className="flex justify-between text-xs">
                  <span className="text-gray-600">Ximpul Flow {editions.find(e => e.value === selectedEdition)?.name}</span>
                  <span className="font-medium text-gray-900">{basePrice} BDT</span>
                </div>
                
                {selectedAccessories.length > 0 && (
                  <div className="space-y-1">
                    {selectedAccessories.map(accessory => {
                      const item = accessories.find(a => a.name === accessory);
                      return (
                        <div key={accessory} className="flex justify-between text-xs">
                          <span className="text-gray-600">{accessory}</span>
                          <span className="font-medium text-gray-900">+{item?.price} BDT</span>
                        </div>
                      );
                    })}
                  </div>
                )}
                
                {engravingText && (
                  <div className="flex justify-between text-xs">
                    <span className="text-gray-600">Engraving Service</span>
                    <span className="font-medium text-gray-900">+300 BDT</span>
                  </div>
                )}
              </div>

              <div className="border-t border-gray-100 pt-2 mb-3">
                <div className="flex justify-between text-base font-semibold">
                  <span className="text-gray-900">Total</span>
                  <span className="text-blue-600">{totalPrice} BDT</span>
                </div>
              </div>

              <Button 
                size="sm" 
                className="w-full bg-black hover:bg-black/90 text-white text-sm font-medium rounded-lg h-10"
                disabled={!customerName || !customerPhone}
              >
                <ShoppingCart className="mr-2 h-4 w-4" />
                Complete Order
              </Button>

              <p className="text-xs text-gray-500 text-center mt-2">
                Free delivery within Dhaka • Cash on delivery available
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
