
import React from 'react';
import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';

export const FinalCTA = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center fade-on-scroll">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=2000&q=80')`
        }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900/90 to-slate-700/90" />
      
      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-6xl font-light text-white mb-8 leading-tight">
          Will you pay again
          <br />
          for what falls from the sky?
        </h2>
        
        <p className="text-xl md:text-2xl font-light text-white/90 mb-12 max-w-2xl mx-auto">
          Or will you help make it free again?
        </p>
        
        <Button 
          size="lg" 
          className="bg-white text-slate-900 hover:bg-white/90 px-8 py-6 text-lg font-medium rounded-full transition-all duration-300 hover:scale-105 shadow-2xl"
        >
          Join the Movement
          <ChevronRight className="ml-2 h-5 w-5" />
        </Button>
      </div>
    </section>
  );
};
