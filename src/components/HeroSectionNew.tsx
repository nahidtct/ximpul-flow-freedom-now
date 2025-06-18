
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { BackgroundPathsOnly } from '@/components/ui/background-paths';
import { AnimatedText } from '@/components/ui/animated-underline-text-one';
import { RainbowButton } from '@/components/ui/rainbow-button';

export const HeroSectionNew = () => {
  const navigate = useNavigate();

  const scrollToBuy = () => {
    document.getElementById('buy')?.scrollIntoView({
      behavior: 'smooth'
    });
  };

  const goToSpecs = () => {
    navigate('/specs');
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
              <AnimatedText text="Introducing Flow" textClassName="lg:text-3xl xl:text-4xl text-[#1d1d1f] font-semibold text-3xl" underlineClassName="w-full text-primary" />
            </div>

            <h2 className="hero-main-heading lg:text-[2.43rem] xl:text-[2.916rem] font-semibold leading-tight tracking-tight apple-gradient-text mb-6 text-[2.916rem]">
              A Bottle That Makes Water Free Again.
            </h2>
            
            <div className="hero-product-image mb-6 flex justify-center">
              <img src="/lovable-uploads/6e9c56b5-1da4-4f5b-b10f-e1eeea35c436.png" alt="Ximpul Flow Water Bottle" className="max-w-xs lg:max-w-sm xl:max-w-md w-full h-auto object-contain" />
            </div>
            
            <p className="hero-tagline mb-5 gradient-text text-2xl font-bold">
              Water is free. Why are we paying for it?
            </p>
            
            <div className="hero-cta space-y-4">
              <div className="flex items-center justify-center gap-4">
                <RainbowButton onClick={scrollToBuy}>
                  Buy
                </RainbowButton>
                <Button size="lg" variant="outline" onClick={goToSpecs} className="hover:bg-foreground hover:text-background">
                  Specs
                </Button>
              </div>
              
              <p className="text-base text-[#1d1f1f] font-semibold">
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
          <AnimatedText text="Introducing Flow" textClassName="text-2xl text-[#1d1d1f] font-semibold" underlineClassName="w-full text-primary" />
        </div>
        
        <h2 className="hero-main-heading text-[1.62rem] sm:text-[2.43rem] font-semibold mb-8 leading-tight tracking-tight apple-gradient-text">
          A Bottle That Makes Water Free Again.
        </h2>
        
        <div className="hero-product-image mb-8 flex justify-center">
          <img src="/lovable-uploads/6e9c56b5-1da4-4f5b-b10f-e1eeea35c436.png" alt="Ximpul Flow Water Bottle" className="max-w-xs w-full h-auto object-contain" />
        </div>
        
        <p className="hero-tagline mb-6 gradient-text">Water is Free. Why are we paying for it?</p>
        
        <div className="hero-cta">
          <div className="flex items-center justify-center gap-4 mb-4">
            <RainbowButton onClick={scrollToBuy}>
              Buy
            </RainbowButton>
            <Button size="lg" variant="outline" onClick={goToSpecs} className="hover:bg-foreground hover:text-background">
              Specs
            </Button>
          </div>
          
          <p className="text-base text-gray-600">
            From 1,090 BDT
          </p>
        </div>
      </div>
    </section>
  );
};
