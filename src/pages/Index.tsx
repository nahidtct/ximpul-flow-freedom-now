import React, { useEffect } from 'react';
import { Navigation } from '@/components/Navigation';
import { HeroSection } from '@/components/HeroSection';
import { ProductShowcase } from '@/components/ProductShowcase';
import { ProductFeaturesSection } from '@/components/ProductFeaturesSection';
import { ProductFeaturesListSection } from '@/components/ProductFeaturesListSection';
import { BrandStorySection } from '@/components/BrandStorySection';
import { HashtagSection } from '@/components/HashtagSection';
import { TestimonialsSection } from '@/components/TestimonialsSection';
import { Faq3 } from '@/components/ui/faq3';
import { BuySection } from '@/components/BuySection';
import { Footer } from '@/components/Footer';

const Index = () => {
  useEffect(() => {
    // Intersection Observer for fade-in animations
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

    const elementsToObserve = document.querySelectorAll('.fade-on-scroll');
    elementsToObserve.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const faqItems = [
    {
      id: "faq-1",
      question: "What is Ximpul?",
      answer: "Ximpul is a lifestyle brand from Bangladesh dedicated to bringing global-quality products to people at #TruePrice — with full transparency and no compromise on innovation or product integrity."
    },
    {
      id: "faq-2",
      question: "What is Ximpul Flow?",
      answer: "Ximpul Flow is our first initiative — a premium water bottle designed to help people carry their own safe, clean water, and contribute to making water free again — instead of paying again and again for bottled water."
    },
    {
      id: "faq-3",
      question: "What does #TruePrice mean?",
      answer: "#TruePrice means you get the same factory quality as premium global brands — without paying an inflated brand price. It also means we don't sell fake \"factory-direct\" scrap. Every product is fully curated, tested, and guaranteed."
    },
    {
      id: "faq-4",
      question: "Is Ximpul trying to copy other brands?",
      answer: "No. We do not copy brands. We source from top factories and work to bring equal or better quality products to Bangladesh — under our own brand, at honest prices."
    },
    {
      id: "faq-5",
      question: "Why is packaging so simple?",
      answer: "We believe your money should go to the product, not the box. Our simple, eco-friendly packaging helps reduce waste and keeps the focus on delivering real value."
    },
    {
      id: "faq-6",
      question: "Is there any compromise on product quality?",
      answer: "Never. Every Ximpul product is selected through strict quality control. Our mission is to deliver global quality at #TruePrice — without compromise."
    },
    {
      id: "faq-7",
      question: "What types of products will Ximpul offer in the future?",
      answer: "We will gradually introduce lifestyle products across multiple categories: hydration, personal accessories, home, travel — always following our brand philosophy: The best. For all. At #TruePrice."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <ProductShowcase />
      <ProductFeaturesSection />
      <ProductFeaturesListSection />
      <BrandStorySection />
      <HashtagSection />
      <TestimonialsSection />
      <BuySection />
      
      <div id="faq" className="fade-on-scroll">
        <Faq3 
          heading="Frequently Asked Questions"
          description="Everything you need to know about Ximpul Flow and our mission to make water free again."
          items={faqItems}
          supportHeading="Still have questions?"
          supportDescription="Can't find the answer you're looking for? Our support team is here to help with any questions about Ximpul Flow or our #TruePrice philosophy."
          supportButtonText="Contact Support"
          supportButtonUrl="/contact"
        />
      </div>
      
      <Footer />
    </div>
  );
};

export default Index;
