
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { ChevronRight, Check } from 'lucide-react';

export const BuySection = () => {
  const [selectedColor, setSelectedColor] = useState('obsidian');
  const [selectedAccessories, setSelectedAccessories] = useState<string[]>([]);

  const handleAccessoryToggle = (accessory: string) => {
    setSelectedAccessories(prev => 
      prev.includes(accessory) 
        ? prev.filter(a => a !== accessory) 
        : [...prev, accessory]
    );
  };

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
      price: 300
    },
    {
      name: 'Straw Cap',
      price: 250
    },
    {
      name: 'Handle Rope',
      price: 200
    },
    {
      name: 'Cleaning Brush',
      price: 150
    }
  ];

  return (
    <section id="buy" className="apple-spacing bg-muted/30 fade-on-scroll">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-foreground mb-6">
            Make It Yours
          </h2>
          <p className="text-xl text-muted-foreground font-light">
            Customize your Ximpul Flow
          </p>
        </div>

        <Card className="border-0 shadow-2xl rounded-3xl overflow-hidden">
          <CardContent className="p-12">
            {/* Color Selection */}
            <div className="mb-12">
              <h3 className="text-2xl font-light text-foreground mb-6">Choose Your Color</h3>
              <RadioGroup value={selectedColor} onValueChange={setSelectedColor} className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {colors.map(color => (
                  <div key={color.value} className="flex items-center space-x-3 p-4 rounded-2xl border-2 hover:border-primary/50 transition-colors">
                    <RadioGroupItem value={color.value} id={color.value} />
                    <div className="flex items-center space-x-3">
                      <div 
                        className="w-8 h-8 rounded-full border-2 border-border" 
                        style={{ backgroundColor: color.color }}
                      />
                      <label htmlFor={color.value} className="text-lg font-medium cursor-pointer">
                        {color.name}
                      </label>
                    </div>
                  </div>
                ))}
              </RadioGroup>
            </div>

            {/* Accessories Selection */}
            <div className="mb-12">
              <h3 className="text-2xl font-light text-foreground mb-6">Add Accessories</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {accessories.map(accessory => (
                  <div 
                    key={accessory.name}
                    className={`p-4 rounded-2xl border-2 cursor-pointer transition-all ${
                      selectedAccessories.includes(accessory.name) 
                        ? 'border-primary bg-primary/5' 
                        : 'border-border hover:border-primary/50'
                    }`}
                    onClick={() => handleAccessoryToggle(accessory.name)}
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">{accessory.name}</p>
                        <p className="text-sm text-muted-foreground">+{accessory.price} BDT</p>
                      </div>
                      {selectedAccessories.includes(accessory.name) && (
                        <Check className="w-5 h-5 text-primary" />
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Personalization */}
            <div className="mb-12">
              <h3 className="text-2xl font-light text-foreground mb-6">Personalize</h3>
              <Input 
                placeholder="Add your name (optional)" 
                className="text-lg p-4 rounded-2xl border-2" 
              />
              <p className="text-sm text-muted-foreground mt-2">+300 BDT for engraving</p>
            </div>

            {/* Price and Buy Button */}
            <div className="text-center">
              <div className="mb-6">
                <p className="text-3xl font-light text-foreground">
                  Starting at <span className="text-primary font-medium">1,090 BDT</span>
                </p>
              </div>
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-12 py-6 text-xl font-medium rounded-full transition-all duration-300 hover:scale-105 w-full md:w-auto"
              >
                Buy Now
                <ChevronRight className="ml-2 h-6 w-6" />
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
