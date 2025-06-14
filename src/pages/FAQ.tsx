
import React, { useEffect } from 'react';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { Faq3 } from '@/components/ui/faq3';

const FAQ = () => {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, []);

  const faqItems = [
    {
      id: "faq-1",
      question: "What is Ximpul?",
      answer: "Ximpul is a lifestyle brand from Bangladesh dedicated to bringing global-quality products to people at #TruePrice — with full transparency and no compromise on innovation or product integrity."
    },
    {
      id: "faq-2",
      question: "What does #TruePrice mean?",
      answer: "#TruePrice means you get the same factory quality as premium global brands — without paying an inflated brand price. It also means we don't sell fake \"factory-direct\" scrap. Every product is fully curated, tested, and guaranteed."
    },
    {
      id: "faq-3",
      question: "Is Ximpul trying to copy other brands?",
      answer: "No. We do not copy brands. We source from top factories and work to bring equal or better quality products to Bangladesh — under our own brand, at honest prices."
    },
    {
      id: "faq-4",
      question: "Why is packaging so simple?",
      answer: "We believe your money should go to the product, not the box. Our simple, eco-friendly packaging helps reduce waste and keeps the focus on delivering real value."
    },
    {
      id: "faq-5",
      question: "What is Ximpul Flow?",
      answer: "Ximpul Flow is our first initiative — a premium water bottle designed to help people carry their own safe, clean water, and contribute to making water free again — instead of paying again and again for bottled water."
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
      
      <Faq3 
        heading="Frequently Asked Questions"
        description="Everything you need to know about Ximpul Flow and our mission to make water free again."
        items={faqItems}
        supportHeading="Still have questions?"
        supportDescription="Can't find the answer you're looking for? Our support team is here to help with any questions about Ximpul Flow or our #TruePrice philosophy."
        supportButtonText="Contact Support"
        supportButtonUrl="/contact"
      />

      <Footer />
    </div>
  );
};

export default FAQ;
