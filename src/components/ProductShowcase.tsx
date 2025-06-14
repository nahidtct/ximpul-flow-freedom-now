import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Thermometer, Shield, Droplets, Zap, Recycle, Award } from 'lucide-react';

export const ProductShowcase = () => {
  const products = [
    {
      name: 'Ximpul Flow',
      edition: 'Base Edition',
      emotionalTitle: 'Minimal. Functional. Everyday essential.',
      image: '/lovable-uploads/eaa1a148-5371-4701-8c74-ebc7f19de062.png',
      description: 'The next evolution of hydration and freedom.',
      price: '1,090',
      buttonText: 'Buy',
      currentlyViewing: 'Currently viewing',
      features: [
        { icon: <Thermometer className="w-5 h-5" />, title: 'Temperature Control', description: 'Keeps drinks hot for 12 hours, cold for 24 hours' },
        { icon: <Shield className="w-5 h-5" />, title: 'Food-Grade Safety', description: 'Premium 304 stainless steel, BPA-free' },
        { icon: <Droplets className="w-5 h-5" />, title: 'Leak-Proof Design', description: 'Advanced seal technology with triple-lock mechanism' },
        { icon: <Zap className="w-5 h-5" />, title: 'Easy Clean', description: 'Wide mouth design for effortless cleaning' }
      ]
    },
    {
      name: 'Ximpul Flow',
      edition: 'Lifestyle Edition',
      emotionalTitle: 'For those who live in motion.',
      image: '/lovable-uploads/d93145c9-b665-4286-b586-342c557a9096.png',
      description: 'The next evolution of hydration, freedom, and style.',
      price: '1,590',
      buttonText: 'Buy',
      currentlyViewing: 'Currently viewing',
      features: [
        { icon: <Thermometer className="w-5 h-5" />, title: 'Advanced Temperature Control', description: 'Keeps drinks hot for 12 hours, cold for 24 hours' },
        { icon: <Shield className="w-5 h-5" />, title: 'Premium Safety', description: 'Premium 304 stainless steel, BPA-free' },
        { icon: <Droplets className="w-5 h-5" />, title: 'Leak-Proof Design', description: 'Advanced seal technology with triple-lock mechanism' },
        { icon: <Zap className="w-5 h-5" />, title: 'Easy Clean Technology', description: 'Wide mouth design for effortless cleaning' },
        { icon: <Recycle className="w-5 h-5" />, title: 'Lifestyle Accessories', description: 'Includes silicone sleeve, straw cap, and handle rope' },
        { icon: <Award className="w-5 h-5" />, title: 'Premium Package', description: 'Complete lifestyle solution for active users' }
      ]
    }
  ];

  return (
    <section className="py-24 bg-background fade-on-scroll">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-foreground mb-6">
            Buy
          </h2>
          <p className="text-xl text-muted-foreground font-light max-w-2xl mx-auto">
            Two editions. Infinite possibilities. Each bottle tells your story.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {products.map((product, index) => (
            <Card key={index} className="border border-border bg-background shadow-sm hover:shadow-lg transition-all duration-300 rounded-2xl overflow-hidden">
              <CardContent className="p-8">
                {/* Product Image */}
                <div className="flex justify-center mb-8 bg-muted/30 rounded-2xl p-8 h-80">
                  <img
                    src={product.image}
                    alt={`${product.name} ${product.edition}`}
                    className="max-h-full w-auto object-contain"
                  />
                </div>

                {/* Product Info */}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-semibold text-foreground mb-1">
                    {product.name}
                  </h3>
                  <p className="text-lg text-muted-foreground mb-4">
                    {product.edition}
                  </p>
                  <p className="text-base text-foreground font-light mb-4 leading-relaxed">
                    {product.emotionalTitle}
                  </p>
                  <p className="text-sm text-muted-foreground mb-6">
                    {product.description}
                  </p>
                </div>

                {/* Price */}
                <div className="text-center mb-6">
                  <p className="text-3xl font-light text-foreground">
                    ${product.price}
                  </p>
                </div>

                {/* Currently Viewing */}
                <div className="text-center mb-4">
                  <p className="text-sm text-muted-foreground">
                    {product.currentlyViewing}
                  </p>
                </div>

                {/* Buy Button */}
                <div className="text-center mb-8">
                  <Button 
                    className="bg-black hover:bg-black/90 text-white px-8 py-3 rounded-2xl font-medium transition-all duration-300 hover:scale-105"
                    onClick={() => document.getElementById('buy')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    {product.buttonText}
                  </Button>
                </div>

                {/* Always Expanded Features */}
                <div className="space-y-4 pt-4 border-t border-border">
                  <h4 className="text-center text-sm font-medium text-foreground mb-4">
                    Specifications
                  </h4>
                  {product.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start space-x-3">
                      <div className="p-2 rounded-2xl bg-primary/10 flex-shrink-0">
                        {feature.icon}
                      </div>
                      <div>
                        <h4 className="font-medium text-foreground text-sm mb-1">
                          {feature.title}
                        </h4>
                        <p className="text-xs text-muted-foreground leading-relaxed">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
