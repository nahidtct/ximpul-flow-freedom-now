
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Thermometer, Shield, Droplets, Zap, Recycle } from 'lucide-react';
import { RainbowButton } from '@/components/ui/rainbow-button';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

export const ProductShowcase = () => {
  const navigate = useNavigate();

  const goToSpecs = () => {
    navigate('/specs');
  };

  const products = [{
    name: 'Ximpul Flow',
    edition: 'Base Edition',
    emotionalTitle: 'Minimal. Functional. Everyday essential.',
    image: '/lovable-uploads/eaa1a148-5371-4701-8c74-ebc7f19de062.png',
    description: 'The next evolution of hydration and freedom.',
    price: '1,090',
    buttonText: 'Buy',
    currentlyViewing: 'Currently viewing',
    features: [{
      icon: <Thermometer className="w-4 h-4 sm:w-5 sm:h-5" />,
      title: 'Temperature Control',
      description: 'Keeps drinks hot for 12 hours, cold for 24 hours'
    }, {
      icon: <Shield className="w-4 h-4 sm:w-5 sm:h-5" />,
      title: 'Food-Grade Safety',
      description: 'Premium 304 stainless steel, BPA-free'
    }, {
      icon: <Droplets className="w-4 h-4 sm:w-5 sm:h-5" />,
      title: 'Leak-Proof Design',
      description: 'Advanced seal technology with triple-lock mechanism'
    }, {
      icon: <Zap className="w-4 h-4 sm:w-5 sm:h-5" />,
      title: 'Easy Clean',
      description: 'Wide mouth design for effortless cleaning'
    }]
  }, {
    name: 'Ximpul Flow',
    edition: 'Lifestyle Edition',
    emotionalTitle: 'For those who live in motion.',
    image: '/lovable-uploads/f260e012-e3be-4c1c-8b71-1d2d98fbc29f.png',
    description: 'The next evolution of hydration, freedom, and style.',
    price: '1,590',
    buttonText: 'Buy',
    currentlyViewing: 'Currently viewing',
    features: [{
      icon: <Thermometer className="w-4 h-4 sm:w-5 sm:h-5" />,
      title: 'Advanced Temperature Control',
      description: 'Keeps drinks hot for 12 hours, cold for 24 hours'
    }, {
      icon: <Shield className="w-4 h-4 sm:w-5 sm:h-5" />,
      title: 'Premium Safety',
      description: 'Premium 304 stainless steel, BPA-free'
    }, {
      icon: <Droplets className="w-4 h-4 sm:w-5 sm:h-5" />,
      title: 'Leak-Proof Design',
      description: 'Advanced seal technology with triple-lock mechanism'
    }, {
      icon: <Zap className="w-4 h-4 sm:w-5 sm:h-5" />,
      title: 'Easy Clean Technology',
      description: 'Wide mouth design for effortless cleaning'
    }, {
      icon: <Recycle className="w-4 h-4 sm:w-5 sm:h-5" />,
      title: 'Lifestyle Accessories',
      description: 'Includes silicone sleeve, straw cap, cleaning brushes, and aluminium hook'
    }]
  }];

  return (
    <section id="products" className="py-12 sm:py-24 bg-background fade-on-scroll">
      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
        <div className="text-center mb-8 sm:mb-16">
          <p className="text-lg sm:text-xl text-muted-foreground font-light max-w-2xl mx-auto px-4">
            Two editions. Infinite possibilities. Each bottle tells your story.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 max-w-6xl mx-auto">
          {products.map((product, index) => (
            <Card key={index} className="border border-border bg-background shadow-sm hover:shadow-lg transition-all duration-300 rounded-xl sm:rounded-2xl overflow-hidden">
              <CardContent className="p-4 sm:p-6 md:p-8">
                {/* Product Image */}
                <div className="flex justify-center mb-4 sm:mb-6 md:mb-8 bg-muted/30 rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 h-48 sm:h-64 md:h-80">
                  <img 
                    src={product.image} 
                    alt={`${product.name} ${product.edition}`} 
                    className="max-h-full w-auto object-contain" 
                  />
                </div>

                {/* Product Info */}
                <div className="text-center mb-4 sm:mb-6">
                  <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-foreground mb-2">
                    {product.name}
                  </h3>
                  <p className="text-sm sm:text-base md:text-lg text-muted-foreground mb-2 sm:mb-4">
                    {product.edition}
                  </p>
                  <p className="text-sm sm:text-base text-foreground font-light mb-2 sm:mb-4 leading-relaxed">
                    {product.emotionalTitle}
                  </p>
                  <p className="text-sm text-muted-foreground mb-4 sm:mb-6">
                    {product.description}
                  </p>
                </div>

                {/* Price */}
                <div className="text-center mb-4 sm:mb-6">
                  <p className="text-2xl sm:text-3xl font-light text-foreground">
                    ${product.price}
                  </p>
                </div>

                {/* Currently Viewing */}
                <div className="text-center mb-4 sm:mb-6">
                  <p className="text-sm text-muted-foreground">
                    {product.currentlyViewing}
                  </p>
                </div>

                {/* Buy Button */}
                <div className="text-center mb-6 sm:mb-8">
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4">
                    <RainbowButton 
                      className="w-full sm:w-auto text-sm px-6 py-2"
                      onClick={() => document.getElementById('buy')?.scrollIntoView({
                        behavior: 'smooth'
                      })}
                    >
                      {product.buttonText}
                    </RainbowButton>
                    <Button 
                      size="sm" 
                      variant="outline" 
                      onClick={goToSpecs} 
                      className="w-full sm:w-auto text-sm hover:bg-foreground hover:text-background"
                    >
                      Specs
                    </Button>
                  </div>
                </div>

                {/* Features */}
                <div className="space-y-3 sm:space-y-4 pt-4 sm:pt-6 border-t border-border">
                  <h4 className="text-center text-sm font-medium text-foreground mb-4">
                    Specifications
                  </h4>
                  {product.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start space-x-3">
                      <div className="p-2 rounded-2xl bg-primary/10 flex-shrink-0">
                        {feature.icon}
                      </div>
                      <div className="min-w-0 flex-1">
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
