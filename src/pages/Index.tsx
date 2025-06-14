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
import { FAQSection } from '@/components/FAQSection';

import { Footer } from '@/components/Footer';
import { BackgroundPathsOnly } from '@/components/ui/background-paths';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { AnimatedText } from '@/components/ui/animated-underline-text-one';

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
              {/* Animated Underline Text for product name */}
              <div className="hero-product-name lg:text-3xl xl:text-4xl text-[#1d1d1f] mb-3 mt-16 font-semibold text-3xl py-[10px]">
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
                <Button size="default" className="bg-black hover:bg-black/90 text-white px-6 py-2 text-base font-medium rounded-2xl" onClick={() => document.getElementById('buy')?.scrollIntoView({
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
            <Button size="lg" className="bg-black hover:bg-black/90 text-white px-8 py-3 text-lg font-medium rounded-2xl mb-4" onClick={() => document.getElementById('buy')?.scrollIntoView({
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

      {/* Custom Apple-Style Story Section */}
      <section className="w-full flex flex-col items-center justify-center py-16 fade-on-scroll bg-background">
        <h2
          className="text-4xl md:text-6xl font-semibold text-center mb-4 apple-gradient-heading"
          style={{
            background:
              "linear-gradient(90deg, #0a84ff 10%, #bf5af2 50%, #ff375f 80%, #ff9f0a 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          Carry your freedom.
        </h2>
        <div className="text-2xl md:text-4xl font-bold text-foreground text-center mb-6">
          One refill at a time.
        </div>
        <div className="max-w-2xl mx-auto text-center text-lg md:text-xl text-gray-500 font-normal mb-2">
          In Bangladesh, we still rely on natural groundwater — but we buy bottled water daily, wrapped in plastic, priced unfairly.
          <br className="hidden md:block" />
          <span className="block mt-2">
            Ximpul Flow is your tool to change that. Built to last. Designed for freedom. This isn't just a bottle — it's a movement.
          </span>
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

      {/* Movement Section - "Make Water Free Again" Story */}
      <MovementSection />

      {/* Pricing Section - Clear Packages */}
      <ProductShowcase />

      {/* Buy Section with Color and Accessories Selection */}
      <BuySection />

      {/* FAQ Section */}
      <FAQSection />

      {/* Use the updated Footer component */}
      <Footer />
    </div>
  );
};

export default Index;
