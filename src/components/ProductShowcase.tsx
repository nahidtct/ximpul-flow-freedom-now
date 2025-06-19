
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
      icon: <Thermometer className="w-4 h-4" />,
      title: 'Temperature Control',
      description: 'Keeps drinks hot for 12 hours, cold for 24 hours'
    }, {
      icon: <Shield className="w-4 h-4" />,
      title: 'Food-Grade Safety',
      description: 'Premium 304 stainless steel, BPA-free'
    }, {
      icon: <Droplets className="w-4 h-4" />,
      title: 'Leak-Proof Design',
      description: 'Advanced seal technology with triple-lock mechanism'
    }, {
      icon: <Zap className="w-4 h-4" />,
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
      icon: <Thermometer className="w-4 h-4" />,
      title: 'Advanced Temperature Control',
      description: 'Keeps drinks hot for 12 hours, cold for 24 hours'
    }, {
      icon: <Shield className="w-4 h-4" />,
      title: 'Premium Safety',
      description: 'Premium 304 stainless steel, BPA-free'
    }, {
      icon: <Droplets className="w-4 h-4" />,
      title: 'Leak-Proof Design',
      description: 'Advanced seal technology with triple-lock mechanism'
    }, {
      icon: <Zap className="w-4 h-4" />,
      title: 'Easy Clean Technology',
      description: 'Wide mouth design for effortless cleaning'
    }, {
      icon: <Recycle className="w-4 h-4" />,
      title: 'Lifestyle Accessories',
      description: 'Includes silicone sleeve, straw cap, cleaning brushes, and aluminium hook'
    }]
  }];

  return (
    <section id="products" className="py-12 sm:py-24 bg-background fade-on-scroll">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="text-center mb-8 sm:mb-16">
          <p className="text-lg sm:text-xl text-muted-foreground font-light max-w-2xl mx-auto">
            Two editions. Infinite possibilities. Each bottle tells your story.
          </p>
        </div>

        {/* Apple-style side-by-side comparison */}
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-2 gap-4 sm:gap-8">
            {products.map((product, index) => (
              <div key={index} className="text-center space-y-4">
                {/* Product Image */}
                <div className="bg-muted/30 rounded-xl p-4 sm:p-8 h-32 sm:h-48 md:h-64 flex items-center justify-center">
                  <img 
                    src={product.image} 
                    alt={`${product.name} ${product.edition}`} 
                    className="max-h-full w-auto object-contain" 
                  />
                </div>

                {/* Product Info */}
                <div className="space-y-2">
                  <h3 className="text-base sm:text-xl font-semibold text-foreground">
                    {product.name}
                  </h3>
                  <p className="text-sm sm:text-base text-muted-foreground">
                    {product.edition}
                  </p>
                  <p className="text-xs sm:text-sm text-foreground font-light leading-relaxed">
                    {product.emotionalTitle}
                  </p>
                </div>

                {/* Price */}
                <div>
                  <p className="text-lg sm:text-2xl font-light text-foreground">
                    ${product.price}
                  </p>
                </div>

                {/* Buttons */}
                <div className="space-y-2">
                  <RainbowButton 
                    className="w-full text-xs sm:text-sm px-4 py-2"
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
                    className="w-full text-xs sm:text-sm hover:bg-foreground hover:text-background"
                  >
                    Specs
                  </Button>
                </div>

                {/* Features - Compact List */}
                <div className="text-left space-y-2 pt-4 border-t border-border">
                  <h4 className="text-xs sm:text-sm font-medium text-foreground mb-2">
                    Key Features
                  </h4>
                  {product.features.map((feature, idx) => (
                    <div key={idx} className="text-xs sm:text-sm text-muted-foreground">
                      {feature.title}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Compare Link */}
          <div className="text-center mt-8">
            <Button 
              variant="link" 
              onClick={goToSpecs}
              className="text-primary text-sm hover:underline"
            >
              Compare all specifications →
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
