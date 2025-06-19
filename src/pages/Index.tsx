
import React from 'react';
import { ProductShowcase } from '@/components/ProductShowcase';
import { PremiumAffordableSection } from '@/components/PremiumAffordableSection';
import { ProductFeaturesSection } from '@/components/ProductFeaturesSection';
import { CarouselSection } from '@/components/CarouselSection';
import { HashtagSection } from '@/components/HashtagSection';
import { MovementSection } from '@/components/MovementSection';
import { BuySection } from '@/components/BuySection';
import { FAQSection } from '@/components/FAQSection';
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
      {/* Hero Section */}
      <HeroSectionNew />
      
      {/* New Hero Section Demo */}
      <HeroSectionDemo />
      
      {/* New Carousel Section */}
      <CarouselSection />

      {/* Product Features Grid Section */}
      <ProductFeaturesSection />

      {/* Product Detail Images Section */}
      <ProductDetailImagesSection />

      {/* Premium but Affordable Section */}
      <PremiumAffordableSection />

      {/* Product Gallery Section */}
      <LifestyleGallery />

      {/* Movement Section - "Make Water Free Again" Story */}
      <MovementSection />

      {/* Pricing Section - Clear Packages */}
      <ProductShowcase />

      {/* Buy Section with Color and Accessories Selection */}
      <BuySection />

      {/* FAQ Section */}
      <FAQSection />

      {/* Hashtag Movement Section - moved after FAQ */}
      <HashtagSection />
    </div>
  );
};

export default Index;
