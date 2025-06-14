
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

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* FAQ Component */}
      <Faq3 
        heading="Frequently Asked Questions"
        description="Everything you need to know about Ximpul Flow and our mission to make water free again."
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
