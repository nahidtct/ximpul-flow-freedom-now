
import React from 'react';
import { SparklesText } from '@/components/ui/sparkles-text';

export const PremiumAffordableSection = () => {
  return <section className="bg-background fade-on-scroll py-[10px]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-[31px]">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Text content */}
          <div className="order-1 lg:order-1 text-center lg:text-left">
            <SparklesText 
              text="Premium But Affordable"
              className="lg:text-[2.7rem] xl:text-[3.24rem] font-semibold leading-tight tracking-tight apple-gradient-text mb-8 text-[3.24rem]"
              colors={{
                first: "#9E7AFF",
                second: "#FE8BBB"
              }}
              sparklesCount={12}
              style={{
                lineHeight: 1.09
              }}
            />
            <p className="text-lg text-muted-foreground font-light leading-relaxed">
              World-class quality that doesn't break the bank. Experience premium materials and innovative design at a price that makes sense.
            </p>
          </div>
          
          {/* Right side - Product image */}
          <div className="order-2 lg:order-2">
            <div className="relative">
              <img src="/lovable-uploads/bb4f7329-6e04-437c-b4c8-b96a09551e0d.png" alt="Premium water bottle with textured grip design" className="w-full h-auto object-contain rounded-3xl" />
            </div>
          </div>
        </div>
      </div>
    </section>;
};
