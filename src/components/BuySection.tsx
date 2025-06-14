
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Check, ShoppingCart, Phone, User, Package } from 'lucide-react';

export const BuySection = () => {
  const [selectedEdition, setSelectedEdition] = useState('base');
  const [selectedColor, setSelectedColor] = useState('obsidian');
  const [selectedAccessories, setSelectedAccessories] = useState<string[]>([]);
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
  const engravingPrice = customerName ? 300 : 0;
  const totalPrice = basePrice + accessoriesPrice + engravingPrice;

  return (
    <section id="buy" className="py-24 bg-background fade-on-scroll">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-light text-foreground mb-4">
            Customize Your Level
          </h2>
          <p className="text-xl text-muted-foreground font-light">
            Complete your order in 3 simple steps
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Product Configuration */}
          <div className="lg:col-span-2">
            <Card className="border border-border shadow-lg rounded-2xl overflow-hidden">
              <CardContent className="p-8">
                <Tabs defaultValue="edition" className="w-full">
                  <TabsList className="grid w-full grid-cols-3 mb-8">
                    <TabsTrigger value="edition" className="flex items-center gap-2">
                      <Package className="w-4 h-4" />
                      Edition
                    </TabsTrigger>
                    <TabsTrigger value="customize" className="flex items-center gap-2">
                      <User className="w-4 h-4" />
                      Customize
                    </TabsTrigger>
                    <TabsTrigger value="details" className="flex items-center gap-2">
                      <Phone className="w-4 h-4" />
                      Details
                    </TabsTrigger>
                  </TabsList>

                  {/* Step 1: Edition & Color Selection */}
                  <TabsContent value="edition" className="space-y-8">
                    <div>
                      <h3 className="text-2xl font-semibold mb-6">Choose Your Edition</h3>
                      <RadioGroup value={selectedEdition} onValueChange={setSelectedEdition} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {editions.map(edition => (
                          <div key={edition.value} className={`p-6 rounded-2xl border-2 cursor-pointer transition-all ${selectedEdition === edition.value ? 'border-primary bg-primary/5' : 'border-border hover:border-primary/50'}`}>
                            <RadioGroupItem value={edition.value} id={edition.value} className="sr-only" />
                            <label htmlFor={edition.value} className="cursor-pointer block">
                              <div className="text-lg font-semibold mb-2">{edition.name}</div>
                              <div className="text-sm text-muted-foreground mb-3">{edition.description}</div>
                              <div className="text-xl font-bold text-primary">{edition.price} BDT</div>
                            </label>
                          </div>
                        ))}
                      </RadioGroup>
                    </div>

                    <div>
                      <h3 className="text-2xl font-semibold mb-6">Choose Your Color</h3>
                      <RadioGroup value={selectedColor} onValueChange={setSelectedColor} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {colors.map(color => (
                          <div key={color.value} className={`flex items-center space-x-4 p-4 rounded-2xl border-2 cursor-pointer transition-all ${selectedColor === color.value ? 'border-primary bg-primary/5' : 'border-border hover:border-primary/50'}`}>
                            <RadioGroupItem value={color.value} id={color.value} />
                            <div className="flex items-center space-x-3">
                              <div className="w-8 h-8 rounded-full border-2 border-border" style={{backgroundColor: color.color}} />
                              <label htmlFor={color.value} className="text-lg font-medium cursor-pointer">
                                {color.name}
                              </label>
                            </div>
                          </div>
                        ))}
                      </RadioGroup>
                    </div>
                  </TabsContent>

                  {/* Step 2: Accessories */}
                  <TabsContent value="customize" className="space-y-6">
                    <h3 className="text-2xl font-semibold mb-6">Add Accessories (Optional)</h3>
                    <div className="grid grid-cols-1 gap-4">
                      {accessories.map(accessory => (
                        <div 
                          key={accessory.name} 
                          className={`p-4 rounded-2xl border-2 cursor-pointer transition-all ${selectedAccessories.includes(accessory.name) ? 'border-primary bg-primary/5' : 'border-border hover:border-primary/50'}`} 
                          onClick={() => handleAccessoryToggle(accessory.name)}
                        >
                          <div className="flex items-center justify-between">
                            <div>
                              <p className="font-semibold">{accessory.name}</p>
                              <p className="text-sm text-muted-foreground">{accessory.note}</p>
                            </div>
                            <div className="flex items-center gap-3">
                              <span className="font-semibold">+{accessory.price} BDT</span>
                              {selectedAccessories.includes(accessory.name) && (
                                <Check className="w-5 h-5 text-primary" />
                              )}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="pt-6 border-t">
                      <Label htmlFor="engraving" className="text-lg font-semibold mb-3 block">
                        Personalize with Engraving (Optional)
                      </Label>
                      <Input 
                        id="engraving"
                        placeholder="Add your name or message" 
                        value={customerName}
                        onChange={(e) => setCustomerName(e.target.value)}
                        className="text-lg p-4 rounded-2xl border-2" 
                      />
                      <p className="text-sm text-muted-foreground mt-2">
                        {customerName ? 'Engraving service: +300 BDT' : 'Free personalization available'}
                      </p>
                    </div>
                  </TabsContent>

                  {/* Step 3: Customer Details */}
                  <TabsContent value="details" className="space-y-6">
                    <h3 className="text-2xl font-semibold mb-6">Your Information</h3>
                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="name" className="text-base font-medium mb-2 block">
                          Full Name *
                        </Label>
                        <Input 
                          id="name"
                          type="text"
                          placeholder="Enter your full name" 
                          value={customerName}
                          onChange={(e) => setCustomerName(e.target.value)}
                          className="text-lg p-4 rounded-2xl border-2" 
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="phone" className="text-base font-medium mb-2 block">
                          Phone Number *
                        </Label>
                        <Input 
                          id="phone"
                          type="tel"
                          placeholder="Enter your phone number" 
                          value={customerPhone}
                          onChange={(e) => setCustomerPhone(e.target.value)}
                          className="text-lg p-4 rounded-2xl border-2" 
                          required
                        />
                      </div>
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Order Summary */}
          <div className="lg:col-span-1">
            <Card className="border border-border shadow-lg rounded-2xl overflow-hidden sticky top-8">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-6">Order Summary</h3>
                
                <div className="space-y-4 mb-6">
                  <div className="flex justify-between">
                    <span>Ximpul Flow {editions.find(e => e.value === selectedEdition)?.name}</span>
                    <span>{basePrice} BDT</span>
                  </div>
                  
                  {selectedAccessories.length > 0 && (
                    <div className="space-y-2">
                      {selectedAccessories.map(accessory => {
                        const item = accessories.find(a => a.name === accessory);
                        return (
                          <div key={accessory} className="flex justify-between text-sm">
                            <span>{accessory}</span>
                            <span>+{item?.price} BDT</span>
                          </div>
                        );
                      })}
                    </div>
                  )}
                  
                  {customerName && (
                    <div className="flex justify-between text-sm">
                      <span>Engraving Service</span>
                      <span>+300 BDT</span>
                    </div>
                  )}
                </div>

                <div className="border-t pt-4 mb-6">
                  <div className="flex justify-between text-xl font-bold">
                    <span>Total</span>
                    <span className="text-primary">{totalPrice} BDT</span>
                  </div>
                </div>

                <Button 
                  size="lg" 
                  className="w-full bg-black hover:bg-black/90 text-white py-4 text-lg font-medium rounded-2xl transition-all duration-300 hover:scale-105"
                  disabled={!customerName || !customerPhone}
                >
                  <ShoppingCart className="mr-2 h-5 w-5" />
                  Complete Order
                </Button>

                <p className="text-xs text-muted-foreground text-center mt-4">
                  Free delivery within Dhaka. Cash on delivery available.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
