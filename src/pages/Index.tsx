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
import { HeroSection as LaunchHeroSection } from "@/components/ui/hero-section";
import { Icons } from "@/components/ui/icons";

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
      <LaunchHeroSection
        badge={{
          text: "Your water. Your freedom.",
          action: {
            text: "Learn more",
            href: "#movement"
          }
        }}
        title="Carry your freedom. One refill at a time."
        description="In Bangladesh, we still rely on natural groundwater — but we buy bottled water daily, wrapped in plastic, priced unfairly. Ximpul Flow is your tool to change that. Built to last. Designed for freedom. This isn’t just a bottle — it’s a movement."
        actions={[
          {
            text: "See the Movement",
            href: "#movement",
            variant: "default"
          },
          {
            text: "GitHub",
            href: "https://github.com/your-repo",
            variant: "glow",
            icon: <Icons.gitHub className="h-5 w-5" />
          }
        ]}
        image={{
          light: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=800&q=80",
          dark: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=800&q=80",
          alt: "Water falling into cupped hands"
        }}
      />

      {/* Product Story Section */}
      <section className="apple-spacing bg-background fade-on-scroll">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-4xl md:text-5xl font-light text-foreground mb-8 leading-tight">
                Carry your freedom. One refill at a time.
              </h2>
              
              <div className="space-y-6 text-lg md:text-xl font-light leading-relaxed text-muted-foreground">
                <p>
                  In Bangladesh, we still rely on natural groundwater — but we buy bottled water daily, wrapped in plastic, priced unfairly.
                </p>
                <p>
                  Ximpul Flow is your tool to change that. Built to last. Designed for freedom. This isn't just a bottle — it's a movement.
                </p>
              </div>
            </div>
            
            <div className="order-1 lg:order-2">
              <img 
                src="/lovable-uploads/2be1ace5-987b-4571-ac83-2463e6fce899.png" 
                alt="Water falling into cupped hands" 
                className="w-full h-auto object-cover rounded-2xl shadow-lg"
              />
            </div>
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
