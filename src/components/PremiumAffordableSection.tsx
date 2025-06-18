
import React from 'react';

export const PremiumAffordableSection = () => {
  return (
    <section className="py-12 bg-background fade-on-scroll">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Text content */}
          <div className="order-2 lg:order-1">
            <h2 className="lg:text-[2.7rem] xl:text-[3.24rem] font-semibold leading-tight tracking-tight apple-gradient-text mb-8 text-[3.24rem]" style={{ lineHeight: 1.09 }}>
              Premium but affordable
            </h2>
            <p className="text-lg text-muted-foreground font-light leading-relaxed">
              World-class quality that doesn't break the bank. Experience premium materials and innovative design at a price that makes sense.
            </p>
          </div>
          
          {/* Right side - Product image */}
          <div className="order-1 lg:order-2">
            <div className="relative">
              <img
                src="/lovable-uploads/2df90fc8-9b98-46ae-972a-68ad5ed69e81.png"
                alt="Premium water bottle with textured grip design"
                className="w-full h-auto object-contain rounded-3xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
