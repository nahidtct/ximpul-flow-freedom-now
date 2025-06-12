
import React from 'react';
import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';

export const FinalCTASection = () => {
  return (
    <section className="apple-spacing bg-background fade-on-scroll">
      <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-6xl font-light text-foreground mb-8 leading-tight">
          Will you pay again
          <br />
          for what falls from the sky?
        </h2>
        
        <p className="text-xl md:text-2xl font-light text-muted-foreground mb-12 max-w-2xl mx-auto">
          Or will you help make it free again — one refill at a time?
        </p>
        
        <Button size="lg" className="bg-black hover:bg-black/90 text-white px-12 py-6 text-xl font-medium rounded-2xl transition-all duration-300 hover:scale-105 shadow-2xl" onClick={() => document.getElementById('buy')?.scrollIntoView({
          behavior: 'smooth'
        })}>
          Join the Movement
          <ChevronRight className="ml-2 h-6 w-6" />
        </Button>
      </div>
    </section>
  );
};
