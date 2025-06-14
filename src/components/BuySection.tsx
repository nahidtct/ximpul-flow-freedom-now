
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
    <section id="buy" className="py-6 bg-gray-50 fade-on-scroll">
      <div className="max-w-sm mx-auto px-3">
        {/* Header */}
        <div className="text-center mb-3">
          <h2 className="text-lg font-semibold text-gray-900 mb-1">
            Customize Your Level
          </h2>
          <p className="text-xs text-gray-600">
            Complete your order in simple steps
          </p>
        </div>

        <div className="space-y-2">
          
          {/* Edition Selection */}
          <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
            <div className="px-3 py-1.5 border-b border-gray-100">
              <h3 className="text-xs font-medium text-gray-900">Choose Edition</h3>
            </div>
            <div className="p-2">
              <RadioGroup value={selectedEdition} onValueChange={setSelectedEdition} className="space-y-1.5">
                {editions.map(edition => (
                  <div key={edition.value} className={`relative p-2 rounded-lg border cursor-pointer transition-all ${selectedEdition === edition.value ? 'border-blue-500 bg-blue-50' : 'border-gray-200'}`}>
                    <RadioGroupItem value={edition.value} id={edition.value} className="sr-only" />
                    <label htmlFor={edition.value} className="cursor-pointer block">
                      <div className="flex items-center space-x-2">
                        <img 
                          src="/lovable-uploads/a437a93c-eb4e-4537-8c6e-d24525112ede.png" 
                          alt="Product icon"
                          className="w-8 h-8 object-contain flex-shrink-0"
                        />
                        <div className="flex-1 min-w-0">
                          <div className="text-xs font-medium text-gray-900">{edition.name}</div>
                          <div className="text-xs text-gray-500">{edition.description}</div>
                        </div>
                        <div className="text-xs font-semibold text-blue-600">{edition.price} BDT</div>
                      </div>
                      {selectedEdition === edition.value && (
                        <div className="absolute top-1 right-1">
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
            <div className="px-3 py-1.5 border-b border-gray-100">
              <h3 className="text-xs font-medium text-gray-900">Choose Color</h3>
            </div>
            <div className="p-2">
              <RadioGroup value={selectedColor} onValueChange={setSelectedColor} className="space-y-1.5">
                {colors.map(color => (
                  <div key={color.value} className={`flex items-center space-x-2 p-2 rounded-lg border cursor-pointer transition-all ${selectedColor === color.value ? 'border-blue-500 bg-blue-50' : 'border-gray-200'}`}>
                    <RadioGroupItem value={color.value} id={color.value} />
                    <img 
                      src="/lovable-uploads/a437a93c-eb4e-4537-8c6e-d24525112ede.png" 
                      alt="Product icon"
                      className="w-6 h-6 object-contain flex-shrink-0"
                    />
                    <div className="w-4 h-4 rounded-full border border-gray-300" style={{backgroundColor: color.color}} />
                    <label htmlFor={color.value} className="text-xs font-medium cursor-pointer flex-1">
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
            <div className="px-3 py-1.5 border-b border-gray-100">
              <h3 className="text-xs font-medium text-gray-900">Add Accessories <span className="text-xs font-normal text-gray-500">(Optional)</span></h3>
            </div>
            <div className="p-2">
              <Carousel className="w-full">
                <CarouselContent className="-ml-1">
                  {accessories.map((accessory, index) => (
                    <CarouselItem key={index} className="pl-1 basis-1/2">
                      <div 
                        className={`p-2 rounded-lg border cursor-pointer transition-all text-center ${selectedAccessories.includes(accessory.name) ? 'border-blue-500 bg-blue-50' : 'border-gray-200'}`} 
                        onClick={() => handleAccessoryToggle(accessory.name)}
                      >
                        <div className="space-y-1">
                          <img 
                            src="/lovable-uploads/a437a93c-eb4e-4537-8c6e-d24525112ede.png" 
                            alt="Accessory icon"
                            className="w-6 h-6 object-contain mx-auto"
                          />
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
                <CarouselPrevious className="left-0 h-5 w-5" />
                <CarouselNext className="right-0 h-5 w-5" />
              </Carousel>
            </div>
          </div>

          {/* Engraving */}
          <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
            <div className="px-3 py-1.5 border-b border-gray-100">
              <div className="flex items-center space-x-2">
                <img 
                  src="/lovable-uploads/a437a93c-eb4e-4537-8c6e-d24525112ede.png" 
                  alt="Engraving icon"
                  className="w-4 h-4 object-contain"
                />
                <h3 className="text-xs font-medium text-gray-900">Personalize with Engraving <span className="text-xs font-normal text-gray-500">(Optional)</span></h3>
              </div>
            </div>
            <div className="p-2">
              <Input 
                placeholder="Add your name or message" 
                value={engravingText}
                onChange={(e) => setEngravingText(e.target.value)}
                className="text-xs h-7 rounded-lg border-gray-300" 
              />
              <p className="text-xs text-gray-500 mt-1">
                {engravingText ? 'Engraving: +300 BDT' : 'Engraving available for +300 BDT'}
              </p>
            </div>
          </div>

          {/* Customer Details */}
          <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
            <div className="px-3 py-1.5 border-b border-gray-100">
              <h3 className="text-xs font-medium text-gray-900">Your Information</h3>
            </div>
            <div className="p-2">
              <div className="space-y-2">
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
                    className="text-xs h-7 rounded-lg border-gray-300" 
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
                    className="text-xs h-7 rounded-lg border-gray-300" 
                    required
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Order Summary */}
          <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
            <div className="px-3 py-1.5 border-b border-gray-100">
              <h3 className="text-xs font-medium text-gray-900">Order Summary</h3>
            </div>
            <div className="p-2">
              <div className="space-y-1 mb-2">
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

              <div className="border-t border-gray-100 pt-2 mb-2">
                <div className="flex justify-between text-sm font-semibold">
                  <span className="text-gray-900">Total</span>
                  <span className="text-blue-600">{totalPrice} BDT</span>
                </div>
              </div>

              <Button 
                size="sm" 
                className="w-full bg-black hover:bg-black/90 text-white text-xs font-medium rounded-lg h-8"
                disabled={!customerName || !customerPhone}
              >
                <ShoppingCart className="mr-1 h-3 w-3" />
                Complete Order
              </Button>

              <p className="text-xs text-gray-500 text-center mt-1">
                Free delivery within Dhaka • Cash on delivery available
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
