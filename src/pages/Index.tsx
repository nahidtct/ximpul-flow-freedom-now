
import React, { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronRight, Facebook, Instagram, Youtube } from 'lucide-react';
import { Navigation } from '@/components/Navigation';
import { ProductShowcase } from '@/components/ProductShowcase';
import { PremiumAffordableSection } from '@/components/PremiumAffordableSection';
import { ProductFeaturesSection } from '@/components/ProductFeaturesSection';
import { CarouselSection } from '@/components/CarouselSection';
import { HashtagSection } from '@/components/HashtagSection';
import { MovementSection } from '@/components/MovementSection';
import { BuySection } from '@/components/BuySection';
import { TestimonialsSection } from '@/components/TestimonialsSection';
import { FAQSection } from '@/components/FAQSection';
import { FinalCTASection } from '@/components/FinalCTASection';
import { ProductFeaturesListSection } from '@/components/ProductFeaturesListSection';
import { BackgroundPathsOnly } from '@/components/ui/background-paths';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const Index = () => {
  useEffect(() => {
    // Smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth';

    // GSAP Animations
    const ctx = gsap.context(() => {
      // Hero animations with staggered timeline
      const tl = gsap.timeline();

      // Animate product name first
      tl.fromTo('.hero-product-name', {
        opacity: 0,
        y: 30
      }, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out"
      })
      // Then animate main heading
      .fromTo('.hero-main-heading', {
        opacity: 0,
        y: 50,
        scale: 0.95
      }, {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1.2,
        ease: "power3.out"
      }, "-=0.4")
      // Then animate product image
      .fromTo('.hero-product-image', {
        opacity: 0,
        y: 80,
        scale: 0.9
      }, {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1.5,
        ease: "power3.out"
      }, "-=0.8")
      // Finally animate tagline and CTA
      .fromTo('.hero-tagline', {
        opacity: 0,
        y: 30
      }, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out"
      }, "-=0.6").fromTo('.hero-cta', {
        opacity: 0,
        y: 30,
        scale: 0.9
      }, {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.8,
        ease: "power3.out"
      }, "-=0.4");

      // Fade in animations for sections
      gsap.utils.toArray('.fade-on-scroll').forEach((element: any) => {
        gsap.fromTo(element, {
          opacity: 0,
          y: 50
        }, {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: element,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        });
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="hero-section min-h-[80vh] flex flex-col justify-center items-center relative overflow-hidden my-0">
        <BackgroundPathsOnly />
        
        <div className="absolute inset-0 z-[1]" style={{
          background: 'linear-gradient(180deg, rgba(212, 234, 246, 0.3), rgba(249, 249, 249, 0.6) 75%, rgba(255, 255, 255, 0.8))',
          transition: 'opacity 1.83s ease-out'
        }} />
        
        {/* Content Container - Desktop Layout */}
        <div className="relative z-10 w-full h-full hidden md:block">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 h-full text-center">
            <div className="flex flex-col justify-center items-center h-full">
              <h1 className="hero-product-name lg:text-3xl xl:text-4xl text-[#1d1d1f] mb-3 mt-16 font-semibold text-3xl py-[10px]">
                Ximpul Flow
              </h1>
              
              <h2 className="hero-main-heading lg:text-5xl xl:text-6xl font-semibold leading-tight tracking-tight apple-gradient-text mb-6 text-6xl">
                Your Water. Your Freedom.
              </h2>
              
              <div className="hero-product-image mb-6 flex justify-center">
                <img src="/lovable-uploads/eaa1a148-5371-4701-8c74-ebc7f19de062.png" alt="Ximpul Flow Water Bottle" className="max-w-xs lg:max-w-sm xl:max-w-md w-full h-auto object-contain" />
              </div>
              
              <p className="hero-tagline mb-5 gradient-text text-2xl font-bold">
                Will you keep paying for what falls from the sky?
              </p>
              
              <div className="hero-cta space-y-4">
                <Button size="default" className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 text-base font-medium rounded-full" onClick={() => document.getElementById('buy')?.scrollIntoView({
                  behavior: 'smooth'
                })}>
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
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center md:hidden">
          <h1 className="hero-product-name text-2xl text-[#1d1d1f] mb-4 font-semibold">
            Ximpul Flow
          </h1>
          
          <h2 className="hero-main-heading text-4xl sm:text-5xl font-semibold mb-8 leading-tight tracking-tight apple-gradient-text">
            Your Water.
            <br />
            Your Freedom.
          </h2>
          
          <div className="hero-product-image mb-8 flex justify-center">
            <img src="/lovable-uploads/d93145c9-b665-4286-b586-342c557a9096.png" alt="Ximpul Flow Water Bottle" className="max-w-xs w-full h-auto object-contain" />
          </div>
          
          <p className="hero-tagline mb-6 gradient-text">
            Will you keep paying for what falls from the sky?
          </p>
          
          <div className="hero-cta">
            <Button size="lg" className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 text-lg font-medium rounded-full mb-4" onClick={() => document.getElementById('buy')?.scrollIntoView({
              behavior: 'smooth'
            })}>
              Buy
            </Button>
            
            <p className="text-base text-gray-600">
              From 1,090 BDT
            </p>
          </div>
        </div>
      </section>

      {/* Premium but Affordable Section */}
      <PremiumAffordableSection />

      {/* Product Features Grid Section */}
      <ProductFeaturesSection />

      {/* New Carousel Section */}
      <CarouselSection />

      {/* Hashtag Movement Section */}
      <HashtagSection />

      {/* Product Features List Section */}
      <ProductFeaturesListSection />

      {/* Movement Section - "Make Water Free Again" Story */}
      <MovementSection />

      {/* Pricing Section - Clear Packages */}
      <ProductShowcase />

      {/* Buy Section with Color and Accessories Selection */}
      <BuySection />

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* FAQ Section */}
      <FAQSection />

      {/* Final CTA - Emotional + Action */}
      <FinalCTASection />

      {/* Simple Footer */}
      <footer className="bg-background border-t py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <p className="text-lg md:text-xl font-light leading-relaxed max-w-3xl mx-auto text-muted-foreground">
              "Every refill tells a story — of change, of freedom, of a better way to live."
            </p>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
            <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-6 text-center">
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                Refund Policy
              </a>
            </div>

            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div className="text-center mt-8 pt-8 border-t">
            <p className="text-muted-foreground font-light">
              © 2024 Ximpul Flow. Made with love in Bangladesh.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
