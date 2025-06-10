
import React, { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ChevronRight, Star, Quote, Instagram, Facebook, Youtube } from 'lucide-react';
import { Navigation } from '@/components/Navigation';
import { HeroSection } from '@/components/HeroSection';
import { BrandStorySection } from '@/components/BrandStorySection';
import { LifestyleGallery } from '@/components/LifestyleGallery';
import { ProductShowcase } from '@/components/ProductShowcase';
import { TestimonialsSection } from '@/components/TestimonialsSection';
import { FinalCTA } from '@/components/FinalCTA';
import { Footer } from '@/components/Footer';

const Index = () => {
  useEffect(() => {
    // Smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth';
    
    // Add scroll animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
        }
      });
    }, observerOptions);

    const elements = document.querySelectorAll('.fade-on-scroll');
    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <BrandStorySection />
      <LifestyleGallery />
      <ProductShowcase />
      <TestimonialsSection />
      <FinalCTA />
      <Footer />
    </div>
  );
};

export default Index;
