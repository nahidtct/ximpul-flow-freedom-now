
import React from 'react';

export const PremiumAffordableSection = () => {
  return (
    <section className="apple-spacing bg-background fade-on-scroll">
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
                src="/lovable-uploads/859d4aae-9ba7-49d6-9f8c-5dd7370a224c.png"
                alt="Lightweight and compact water bottles"
                className="w-full h-auto object-contain rounded-3xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
