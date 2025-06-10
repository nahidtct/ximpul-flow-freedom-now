
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
      
      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-5xl md:text-7xl font-thin text-white mb-6 animate-fade-in">
          Your Water.
          <br />
          <span className="font-light">Your Freedom.</span>
        </h1>
        
        <h2 className="text-xl md:text-2xl font-light text-white/90 mb-12 max-w-2xl mx-auto leading-relaxed">
          Will you keep paying for what falls from the sky?
        </h2>
        
        <Button 
          size="lg" 
          className="bg-white text-slate-900 hover:bg-white/90 px-8 py-6 text-lg font-medium rounded-full transition-all duration-300 hover:scale-105"
        >
          Buy Now
          <ChevronRight className="ml-2 h-5 w-5" />
        </Button>
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
