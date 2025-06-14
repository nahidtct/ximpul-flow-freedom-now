
import React from 'react';
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
import { HeroSectionNew } from '@/components/HeroSectionNew';
import { AppleIntelligenceSection } from '@/components/AppleIntelligenceSection';
import { useHeroAnimations } from '@/hooks/useHeroAnimations';

const Index = () => {
  useHeroAnimations();

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <HeroSectionNew />
      
      {/* Apple Intelligence-inspired Section */}
      <AppleIntelligenceSection />

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
