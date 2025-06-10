
import React from 'react';
import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 to-slate-700">
      {/* Background Image Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=2000&q=80')`
        }}
      />
      
      {/* Desktop Content - Side by Side Layout */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 hidden md:block py-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[60vh]">
          {/* Left Side - Text Content */}
          <div className="text-left">
            {/* Product Name */}
            <h1 className="text-[32px] font-semibold text-[#1d1d1f] mb-6">
              Ximpul Flow
            </h1>
            
            {/* Main Headline - Single Line */}
            <h2 className="text-[56px] font-semibold leading-none tracking-tight apple-gradient-text mb-8 whitespace-nowrap">
              Your Water. Your Freedom.
            </h2>
            
            {/* Tagline */}
            <p className="text-xl lg:text-2xl mb-8 text-white/90">
              Will you keep paying for what falls from the sky?
            </p>
            
            {/* CTA Section */}
            <div>
              <Button 
                size="lg" 
                className="bg-white text-slate-900 hover:bg-white/90 px-8 py-6 text-lg font-medium rounded-full transition-all duration-300 hover:scale-105 mb-4"
                onClick={() => document.getElementById('buy')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Buy Now
                <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
              
              {/* Pricing */}
              <p className="text-lg text-white/80">
                From 1,090 BDT or 91 BDT/mo. for 12 mo.*
              </p>
            </div>
          </div>

          {/* Right Side - Product Image */}
          <div className="flex justify-center lg:justify-end">
            <img 
              src="/lovable-uploads/ac604d15-e2d6-44f4-8750-0fced0ad0285.png" 
              alt="Ximpul Flow Water Bottle" 
              className="max-w-sm lg:max-w-md xl:max-w-lg w-full h-auto object-contain" 
            />
          </div>
        </div>
      </div>

      {/* Mobile Content - Keep Existing Layout */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center md:hidden">
        {/* Product Name */}
        <h1 className="text-2xl font-normal text-white mb-4">
          Ximpul Flow
        </h1>
        
        {/* Main Headline */}
        <h2 className="text-4xl sm:text-5xl font-semibold mb-8 leading-tight tracking-tight text-white">
          Your Water.
          <br />
          Your Freedom.
        </h2>
        
        {/* Product Image */}
        <div className="mb-8 flex justify-center">
          <img 
            src="/lovable-uploads/d93145c9-b665-4286-b586-342c557a9096.png" 
            alt="Ximpul Flow Water Bottle" 
            className="max-w-xs w-full h-auto object-contain" 
          />
        </div>
        
        {/* Tagline */}
        <p className="text-lg mb-6 text-white/90">
          Will you keep paying for what falls from the sky?
        </p>
        
        {/* CTA Section */}
        <div>
          <Button 
            size="lg" 
            className="bg-white text-slate-900 hover:bg-white/90 px-8 py-3 text-lg font-medium rounded-full mb-4"
            onClick={() => document.getElementById('buy')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Buy Now
            <ChevronRight className="ml-2 h-5 w-5" />
          </Button>
          
          {/* Pricing */}
          <p className="text-base text-white/80">
            From 1,090 BDT or 91 BDT/mo. for 12 mo.*
          </p>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};
