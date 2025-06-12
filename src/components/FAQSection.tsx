
import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

export const FAQSection = () => {
  const faqItems = [{
    question: "How long does Ximpul Flow keep drinks hot or cold?",
    answer: "Ximpul Flow keeps drinks hot or cold for up to 24 hours thanks to our double-wall vacuum insulation technology."
  }, {
    question: "What cap options are available?",
    answer: "You can choose between Standard Cap or Straw Cap. The Lifestyle Edition includes both caps for maximum flexibility."
  }, {
    question: "Is Ximpul Flow safe for all types of beverages?",
    answer: "Yes, Ximpul Flow is made from premium 304 stainless steel and is FDA approved & BPA-free, making it safe for water, coffee, tea, juices, and other beverages."
  }, {
    question: "Can I personalize my bottle with engraving?",
    answer: "Absolutely! We offer professional engraving services to add your name or custom message to your bottle for an additional 300 BDT."
  }, {
    question: "What's the difference between Base and Lifestyle Edition?",
    answer: "Base Edition (1090 BDT) includes the bottle, one cap, and handle rope. Lifestyle Edition (1590 BDT) includes both caps, extra accessories, cleaning brushes, silicone sleeve, and aluminum hook."
  }, {
    question: "Do you offer international shipping?",
    answer: "Currently, we ship within Bangladesh. We're working on expanding our shipping options to serve customers internationally."
  }];

  return (
    <section id="faq" className="apple-spacing bg-muted/30 fade-on-scroll">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-foreground mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-muted-foreground font-light">
            Everything you need to know about Ximpul Flow
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqItems.map((item, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="border border-border rounded-2xl px-6 bg-background">
              <AccordionTrigger className="text-left text-lg font-medium hover:no-underline">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground font-light leading-relaxed">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};
