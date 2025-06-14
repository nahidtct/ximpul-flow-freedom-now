
import React from 'react';
import { Button } from '@/components/ui/button';
import { BackgroundPathsOnly } from '@/components/ui/background-paths';
import { AnimatedText } from '@/components/ui/animated-underline-text-one';

export const HeroSectionNew = () => {
  const scrollToBuy = () => {
    document.getElementById('buy')?.scrollIntoView({
      behavior: 'smooth'
    });
  };

  return (
    <section className="hero-section min-h-[80vh] flex flex-col justify-center items-center relative overflow-hidden pt-32 md:pt-24">
      <BackgroundPathsOnly />
      
      <div className="absolute inset-0 z-[1]" style={{
        background: 'linear-gradient(180deg, rgba(212, 234, 246, 0.3), rgba(249, 249, 249, 0.6) 75%, rgba(255, 255, 255, 0.8))',
        transition: 'opacity 1.83s ease-out'
      }} />
      
      {/* Content Container - Desktop Layout */}
      <div className="relative z-10 w-full h-full hidden md:block">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 h-full text-center">
          <div className="flex flex-col justify-center items-center h-full">
            {/* Animated Underline Text for product name */}
            <div className="hero-product-name lg:text-3xl xl:text-4xl text-[#1d1d1f] mb-3 mt-8 font-semibold text-3xl py-[10px]">
              <AnimatedText
                text="Introducing Ximpul Flow"
                textClassName="lg:text-3xl xl:text-4xl text-[#1d1d1f] font-semibold text-3xl"
                underlineClassName="w-full text-primary"
              />
            </div>

            <h2 className="hero-main-heading lg:text-[2.7rem] xl:text-[3.24rem] font-semibold leading-tight tracking-tight apple-gradient-text mb-6 text-[3.24rem]">
              A Bottle That Makes Water Free Again.
            </h2>
            
            <div className="hero-product-image mb-6 flex justify-center">
              <img src="/lovable-uploads/eaa1a148-5371-4701-8c74-ebc7f19de062.png" alt="Ximpul Flow Water Bottle" className="max-w-xs lg:max-w-sm xl:max-w-md w-full h-auto object-contain" />
            </div>
            
            <p className="hero-tagline mb-5 gradient-text text-2xl font-bold">
              Water is free. Why are we paying for it?
            </p>
            
            <div className="hero-cta space-y-4">
              <Button size="default" className="bg-black hover:bg-black/90 text-white px-6 py-2 text-base font-medium rounded-2xl" onClick={scrollToBuy}>
                Buy
              </Button>
              
              <p className="text-base text-[#1d1d1f] font-semibold">
                From 1,090 BDT
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Content Container - Mobile Layout */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center md:hidden pt-20">
        {/* Animated Underline Text for product name on mobile */}
        <div className="hero-product-name text-2xl text-[#1d1d1f] mb-4 font-semibold">
          <AnimatedText
            text="Introducing Ximpul Flow"
            textClassName="text-2xl text-[#1d1d1f] font-semibold"
            underlineClassName="w-full text-primary"
          />
        </div>
        
        <h2 className="hero-main-heading text-[1.8rem] sm:text-[2.7rem] font-semibold mb-8 leading-tight tracking-tight apple-gradient-text">
          A Bottle That Makes Water Free Again.
        </h2>
        
        <div className="hero-product-image mb-8 flex justify-center">
          <img src="/lovable-uploads/d93145c9-b665-4286-b586-342c557a9096.png" alt="Ximpul Flow Water Bottle" className="max-w-xs w-full h-auto object-contain" />
        </div>
        
        <p className="hero-tagline mb-6 gradient-text">
          Water is free. Why are we paying for it?
        </p>
        
        <div className="hero-cta">
          <Button size="lg" className="bg-black hover:bg-black/90 text-white px-8 py-3 text-lg font-medium rounded-2xl mb-4" onClick={scrollToBuy}>
            Buy
          </Button>
          
          <p className="text-base text-gray-600">
            From 1,090 BDT
          </p>
        </div>
      </div>
    </section>
  );
};
