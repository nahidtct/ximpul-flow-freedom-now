
import React from 'react';

export const AppleIntelligenceSection = () => {
  return (
    <section className="relative min-h-screen bg-background fade-on-scroll">
      {/* Full-width background image */}
      <div 
        className="absolute inset-0 bg-contain bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/lovable-uploads/859d4aae-9ba7-49d6-9f8c-5dd7370a224c.png')`
        }}
      />
      
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/20" />
      
      {/* Content positioned on the left */}
      <div className="relative z-10 flex items-center min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-2xl">
            <h2
              className="lg:text-[2.7rem] xl:text-[3.24rem] font-semibold leading-tight tracking-tight apple-gradient-text mb-6 text-[2.5rem]"
              style={{ lineHeight: 1.09 }}
            >
              Carry your freedom.
            </h2>
            <div className="lg:text-[2.7rem] xl:text-[3.24rem] font-semibold leading-tight tracking-tight apple-gradient-text mb-8 text-[2.5rem]" style={{ lineHeight: 1.09 }}>
              One refill at a time.
            </div>
            
            <div className="space-y-6 text-lg text-foreground font-light leading-relaxed">
              <p>
                In Bangladesh, we still rely on natural groundwater — but we buy bottled water daily, wrapped in plastic, priced unfairly.
              </p>
              <p>
                Ximpul Flow is your tool to change that. Built to last. Designed for freedom. This isn't just a bottle — it's a movement.
              </p>
              <p className="text-xl font-medium">
                Premium but affordable — World-class quality that doesn't break the bank.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
