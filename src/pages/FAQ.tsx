
import React from 'react';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const FAQ = () => {
  const faqs = [
    {
      question: "What makes Ximpul Flow different from other water bottles?",
      answer: "Ximpul Flow isn't just a water bottle — it's a statement. We believe water should be free, and our bottles help you break free from expensive plastic bottles while making a style statement. Each bottle is designed with premium materials and can be personalized with your name."
    },
    {
      question: "How long does the bottle keep drinks hot or cold?",
      answer: "Our double-wall vacuum insulation keeps drinks cold for 24 hours and hot for 12 hours. The advanced insulation technology ensures your beverages maintain the perfect temperature throughout your day."
    },
    {
      question: "Is the bottle leak-proof?",
      answer: "Absolutely! All Ximpul Flow bottles feature a leak-proof design with premium sealing technology. You can confidently carry it in your bag, backpack, or gym bag without worrying about spills."
    },
    {
      question: "Can I personalize my bottle?",
      answer: "Yes! We offer engraving services for 300 BDT to add your name or a personal message to your bottle. This makes it uniquely yours and adds a personal touch to your daily hydration routine."
    },
    {
      question: "What's included in the Lifestyle Edition?",
      answer: "The Lifestyle Edition includes everything in the Base Edition plus: a silicone protective sleeve, straw cap for easy drinking, carabiner hook, cleaning brush, and premium gift packaging. It's perfect for active lifestyles."
    },
    {
      question: "How do I clean my Ximpul Flow bottle?",
      answer: "The bottle is easy to clean with warm soapy water. For deeper cleaning, use the included cleaning brush (in Lifestyle Edition) or purchase one separately. The wide mouth design makes it easy to reach all areas."
    },
    {
      question: "What's your return policy?",
      answer: "We offer a 30-day return policy for unused products in original packaging. If you're not completely satisfied with your Ximpul Flow, contact our customer service team for a hassle-free return process."
    },
    {
      question: "Do you ship across Bangladesh?",
      answer: "Yes, we ship nationwide across Bangladesh. Standard shipping takes 3-5 business days for Dhaka and 5-7 business days for other areas. Express shipping options are also available."
    },
    {
      question: "Are the materials safe?",
      answer: "Absolutely. All Ximpul Flow bottles are made from 18/8 food-grade stainless steel and are completely BPA-free. Our materials meet international safety standards for food and beverage containers."
    },
    {
      question: "Can I buy replacement parts?",
      answer: "Yes! All accessories and replacement parts are available separately on our Accessories page. This includes caps, sleeves, hooks, and cleaning supplies to keep your bottle in perfect condition."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-slate-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-light text-foreground mb-6">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-muted-foreground">
            Everything you need to know about Ximpul Flow
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="border border-border rounded-lg px-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <AccordionTrigger className="text-left py-6 text-lg font-medium hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="pb-6 text-muted-foreground leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h3 className="text-3xl font-light text-foreground mb-4">
            Still have questions?
          </h3>
          <p className="text-xl text-muted-foreground mb-8">
            We're here to help you join the movement
          </p>
          <div className="space-y-4">
            <p className="text-lg">
              <strong>Email:</strong> hello@ximpulflow.com
            </p>
            <p className="text-lg">
              <strong>Phone:</strong> +880 1234-567890
            </p>
            <p className="text-lg">
              <strong>Hours:</strong> Sunday - Thursday, 9 AM - 6 PM (GMT+6)
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FAQ;
