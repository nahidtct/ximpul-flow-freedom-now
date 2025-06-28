
import React from 'react';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { ProductShowcase } from '@/components/ProductShowcase';
import { PremiumAffordableSection } from '@/components/PremiumAffordableSection';
import { MovementSection } from '@/components/MovementSection';
import { BuySection } from '@/components/BuySection';
import { FAQSection } from '@/components/FAQSection';
import { HashtagSection } from '@/components/HashtagSection';
import { HeroSectionNew } from '@/components/HeroSectionNew';
import { HeroSectionDemo } from '@/components/HeroSectionDemo';
import { LifestyleGallery } from '@/components/LifestyleGallery';
import { ProductDetailImagesSection } from '@/components/ProductDetailImagesSection';
import { useHeroAnimations } from '@/hooks/useHeroAnimations';

const Index = () => {
  useHeroAnimations();

  console.log('Index component rendering - BuySection should be included');

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <Navigation />
      
      {/* Hero Section */}
      <HeroSectionNew />
      
      {/* New Hero Section Demo - "Carry Your Freedom" */}
      <HeroSectionDemo />
      
      {/* Movement Section - "Make Water Free Again" Story - moved after Carry Your Freedom */}
      <MovementSection />

      {/* Product Detail Images Section */}
      <ProductDetailImagesSection />

      {/* Premium but Affordable Section */}
      <PremiumAffordableSection />

      {/* Product Gallery Section */}
      <LifestyleGallery />

      {/* Pricing Section - Clear Packages */}
      <ProductShowcase />

      {/* Buy Section with Color and Accessories Selection */}
      <BuySection />

      {/* FAQ Section */}
      <FAQSection />

      {/* Hashtag Movement Section - moved after FAQ */}
      <HashtagSection />
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
