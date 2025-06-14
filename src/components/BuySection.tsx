
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Check, ShoppingCart } from 'lucide-react';

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
      note: 'Soft grip and extra protection'
    },
    {
      name: 'Straw Cap',
      price: 250,
      note: 'Flexibility for active use'
    },
    {
      name: 'Handle Rope',
      price: 200,
      note: 'Additional or alternative handle'
    },
    {
      name: 'Cleaning Brush',
      price: 150,
      note: 'Maintain hygiene easily'
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
    <section id="buy" className="py-16 sm:py-20 lg:py-24 bg-background fade-on-scroll">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-medium text-foreground mb-3">
            Customize Your Level
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground font-light max-w-2xl mx-auto">
            Personalize with engraving. Complete your order in one simple step.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 lg:gap-8">
          {/* Main Configuration - Takes more space on desktop */}
          <div className="lg:col-span-3">
            <div className="space-y-8 sm:space-y-10">
              
              {/* Edition Selection */}
              <div className="bg-white rounded-xl sm:rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
                <div className="p-4 sm:p-6 border-b border-gray-50">
                  <h3 className="text-lg sm:text-xl font-medium text-gray-900">Choose Your Edition</h3>
                </div>
                <div className="p-4 sm:p-6">
                  <RadioGroup value={selectedEdition} onValueChange={setSelectedEdition} className="space-y-3">
                    {editions.map(edition => (
                      <div key={edition.value} className={`relative p-4 sm:p-5 rounded-xl border-2 cursor-pointer transition-all duration-200 ${selectedEdition === edition.value ? 'border-primary bg-primary/5 shadow-sm' : 'border-gray-200 hover:border-gray-300'}`}>
                        <RadioGroupItem value={edition.value} id={edition.value} className="sr-only" />
                        <label htmlFor={edition.value} className="cursor-pointer block">
                          <div className="flex justify-between items-start">
                            <div>
                              <div className="text-sm sm:text-base font-medium text-gray-900 mb-1">{edition.name}</div>
                              <div className="text-xs sm:text-sm text-gray-600">{edition.description}</div>
                            </div>
                            <div className="text-lg sm:text-xl font-semibold text-primary">{edition.price} BDT</div>
                          </div>
                          {selectedEdition === edition.value && (
                            <div className="absolute top-3 right-3">
                              <Check className="w-4 h-4 text-primary" />
                            </div>
                          )}
                        </label>
                      </div>
                    ))}
                  </RadioGroup>
                </div>
              </div>

              {/* Color Selection */}
              <div className="bg-white rounded-xl sm:rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
                <div className="p-4 sm:p-6 border-b border-gray-50">
                  <h3 className="text-lg sm:text-xl font-medium text-gray-900">Choose Your Color</h3>
                </div>
                <div className="p-4 sm:p-6">
                  <RadioGroup value={selectedColor} onValueChange={setSelectedColor} className="space-y-3">
                    {colors.map(color => (
                      <div key={color.value} className={`flex items-center space-x-3 p-3 sm:p-4 rounded-xl border-2 cursor-pointer transition-all duration-200 ${selectedColor === color.value ? 'border-primary bg-primary/5' : 'border-gray-200 hover:border-gray-300'}`}>
                        <RadioGroupItem value={color.value} id={color.value} />
                        <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full border-2 border-gray-300" style={{backgroundColor: color.color}} />
                        <label htmlFor={color.value} className="text-sm sm:text-base font-medium cursor-pointer flex-1">
                          {color.name}
                        </label>
                        {selectedColor === color.value && (
                          <Check className="w-4 h-4 text-primary" />
                        )}
                      </div>
                    ))}
                  </RadioGroup>
                </div>
              </div>

              {/* Accessories */}
              <div className="bg-white rounded-xl sm:rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
                <div className="p-4 sm:p-6 border-b border-gray-50">
                  <h3 className="text-lg sm:text-xl font-medium text-gray-900">Add Accessories <span className="text-sm font-normal text-gray-500">(Optional)</span></h3>
                </div>
                <div className="p-4 sm:p-6">
                  <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
                    {accessories.map((accessory, index) => (
                      <div 
                        key={index}
                        className={`p-3 sm:p-4 rounded-lg border-2 cursor-pointer transition-all duration-200 text-center ${selectedAccessories.includes(accessory.name) ? 'border-primary bg-primary/5' : 'border-gray-200 hover:border-gray-300'}`} 
                        onClick={() => handleAccessoryToggle(accessory.name)}
                      >
                        <div className="space-y-2">
                          <p className="font-medium text-xs sm:text-sm text-gray-900">{accessory.name}</p>
                          <p className="text-xs text-gray-600 line-clamp-2">{accessory.note}</p>
                          <div className="flex items-center justify-between">
                            <span className="font-semibold text-xs sm:text-sm text-primary">+{accessory.price} BDT</span>
                            {selectedAccessories.includes(accessory.name) && (
                              <Check className="w-3 h-3 sm:w-4 sm:h-4 text-primary" />
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Engraving */}
              <div className="bg-white rounded-xl sm:rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
                <div className="p-4 sm:p-6 border-b border-gray-50">
                  <h3 className="text-lg sm:text-xl font-medium text-gray-900">Personalize with Engraving <span className="text-sm font-normal text-gray-500">(Optional)</span></h3>
                </div>
                <div className="p-4 sm:p-6">
                  <Input 
                    placeholder="Add your name or message" 
                    value={engravingText}
                    onChange={(e) => setEngravingText(e.target.value)}
                    className="text-sm sm:text-base p-3 sm:p-4 rounded-lg border-gray-300" 
                  />
                  <p className="text-xs sm:text-sm text-gray-600 mt-2">
                    {engravingText ? 'Engraving service: +300 BDT' : 'Engraving service available for +300 BDT'}
                  </p>
                </div>
              </div>

              {/* Customer Details */}
              <div className="bg-white rounded-xl sm:rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
                <div className="p-4 sm:p-6 border-b border-gray-50">
                  <h3 className="text-lg sm:text-xl font-medium text-gray-900">Your Information</h3>
                </div>
                <div className="p-4 sm:p-6">
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="name" className="text-sm font-medium text-gray-700 mb-2 block">
                        Full Name *
                      </Label>
                      <Input 
                        id="name"
                        type="text"
                        placeholder="Enter your full name" 
                        value={customerName}
                        onChange={(e) => setCustomerName(e.target.value)}
                        className="text-sm sm:text-base p-3 sm:p-4 rounded-lg border-gray-300" 
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone" className="text-sm font-medium text-gray-700 mb-2 block">
                        Phone Number *
                      </Label>
                      <Input 
                        id="phone"
                        type="tel"
                        placeholder="Enter your phone number" 
                        value={customerPhone}
                        onChange={(e) => setCustomerPhone(e.target.value)}
                        className="text-sm sm:text-base p-3 sm:p-4 rounded-lg border-gray-300" 
                        required
                      />
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Order Summary - Sidebar on desktop */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl sm:rounded-2xl border border-gray-100 shadow-sm overflow-hidden sticky top-4">
              <div className="p-4 sm:p-6 border-b border-gray-50">
                <h3 className="text-lg font-medium text-gray-900">Order Summary</h3>
              </div>
              <div className="p-4 sm:p-6">
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Ximpul Flow {editions.find(e => e.value === selectedEdition)?.name}</span>
                    <span className="font-medium text-gray-900">{basePrice} BDT</span>
                  </div>
                  
                  {selectedAccessories.length > 0 && (
                    <div className="space-y-2">
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

                <div className="border-t border-gray-100 pt-4 mb-6">
                  <div className="flex justify-between text-lg font-semibold">
                    <span className="text-gray-900">Total</span>
                    <span className="text-primary">{totalPrice} BDT</span>
                  </div>
                </div>

                <Button 
                  size="lg" 
                  className="w-full bg-black hover:bg-black/90 text-white py-3 sm:py-4 text-sm sm:text-base font-medium rounded-lg transition-all duration-200 hover:scale-[1.02]"
                  disabled={!customerName || !customerPhone}
                >
                  <ShoppingCart className="mr-2 h-4 w-4" />
                  Complete Order
                </Button>

                <p className="text-xs text-gray-500 text-center mt-4 leading-relaxed">
                  Free delivery within Dhaka<br />
                  Cash on delivery available
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
