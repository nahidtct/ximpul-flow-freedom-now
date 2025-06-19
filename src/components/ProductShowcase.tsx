
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
    image: '/lovable-uploads/64d91283-a1ff-4902-a552-a85ad04e66c6.png',
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

        <div className="grid grid-cols-2 gap-2 sm:gap-4 md:gap-8 max-w-6xl mx-auto">
          {products.map((product, index) => (
            <Card key={index} className="border border-border bg-background shadow-sm hover:shadow-lg transition-all duration-300 rounded-xl sm:rounded-2xl overflow-hidden">
              <CardContent className="p-2 sm:p-4 md:p-8">
                {/* Product Image */}
                <div className="flex justify-center mb-2 sm:mb-4 md:mb-8 bg-muted/30 rounded-xl sm:rounded-2xl p-2 sm:p-4 md:p-8 h-32 sm:h-48 md:h-80">
                  <img 
                    src={product.image} 
                    alt={`${product.name} ${product.edition}`} 
                    className="max-h-full w-auto object-contain" 
                  />
                </div>

                {/* Product Info */}
                <div className="text-center mb-2 sm:mb-4 md:mb-6">
                  <h3 className="text-sm sm:text-lg md:text-2xl font-semibold text-foreground mb-1">
                    {product.name}
                  </h3>
                  <p className="text-xs sm:text-sm md:text-lg text-muted-foreground mb-1 sm:mb-2 md:mb-4">
                    {product.edition}
                  </p>
                  <p className="text-xs sm:text-sm md:text-base text-foreground font-light mb-1 sm:mb-2 md:mb-4 leading-relaxed px-1">
                    {product.emotionalTitle}
                  </p>
                  <p className="text-xs sm:text-sm text-muted-foreground mb-2 sm:mb-4 md:mb-6 hidden sm:block">
                    {product.description}
                  </p>
                </div>

                {/* Price */}
                <div className="text-center mb-2 sm:mb-4 md:mb-6">
                  <p className="text-lg sm:text-2xl md:text-3xl font-light text-foreground">
                    ${product.price}
                  </p>
                </div>

                {/* Currently Viewing - Hidden on mobile */}
                <div className="text-center mb-2 sm:mb-4 hidden sm:block">
                  <p className="text-xs sm:text-sm text-muted-foreground">
                    {product.currentlyViewing}
                  </p>
                </div>

                {/* Buy Button */}
                <div className="text-center mb-2 sm:mb-4 md:mb-8">
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2 md:gap-4">
                    <RainbowButton 
                      size="sm"
                      className="w-full sm:w-auto text-xs sm:text-sm"
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
                      className="w-full sm:w-auto text-xs sm:text-sm hover:bg-foreground hover:text-background"
                    >
                      Specs
                    </Button>
                  </div>
                </div>

                {/* Features - Simplified for mobile */}
                <div className="space-y-1 sm:space-y-2 md:space-y-4 pt-2 sm:pt-4 border-t border-border">
                  <h4 className="text-center text-xs sm:text-sm font-medium text-foreground mb-1 sm:mb-2 md:mb-4">
                    Specifications
                  </h4>
                  {product.features.slice(0, 3).map((feature, idx) => (
                    <div key={idx} className="flex items-start space-x-1 sm:space-x-2 md:space-x-3">
                      <div className="p-1 sm:p-2 rounded-lg sm:rounded-2xl bg-primary/10 flex-shrink-0">
                        {feature.icon}
                      </div>
                      <div className="min-w-0 flex-1">
                        <h4 className="font-medium text-foreground text-xs sm:text-sm mb-0.5 sm:mb-1">
                          {feature.title}
                        </h4>
                        <p className="text-xs sm:text-xs text-muted-foreground leading-relaxed hidden sm:block">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  ))}
                  {/* Show remaining features only on larger screens */}
                  <div className="hidden md:block space-y-4">
                    {product.features.slice(3).map((feature, idx) => (
                      <div key={idx + 3} className="flex items-start space-x-3">
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
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
