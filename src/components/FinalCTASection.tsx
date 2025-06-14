
import React from 'react';
import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';

export const FinalCTASection = () => {
  return (
    <section className="apple-spacing bg-background fade-on-scroll">
      <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
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
