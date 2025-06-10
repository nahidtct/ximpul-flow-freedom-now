
import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

export const FAQSection = () => {
  const faqItems = [
    {
      question: "How long does Ximpul Flow keep drinks hot or cold?",
      answer: "Ximpul Flow keeps drinks hot for up to 12 hours and cold for up to 24 hours thanks to our advanced double-wall vacuum insulation technology."
    },
    {
      question: "Is Ximpul Flow safe for all types of beverages?",
      answer: "Yes, Ximpul Flow is made from premium 304 stainless steel and is completely BPA-free, making it safe for water, coffee, tea, juices, and other beverages."
    },
    {
      question: "Can I personalize my bottle with engraving?",
      answer: "Absolutely! We offer professional engraving services to add your name or custom text to your bottle for an additional 300 BDT."
    },
    {
      question: "How do I clean my Ximpul Flow bottle?",
      answer: "The wide mouth design makes cleaning easy. Simply use warm soapy water and our included cleaning brush. The smooth interior coating prevents odor and stain buildup."
    },
    {
      question: "What's included with my purchase?",
      answer: "Each Ximpul Flow comes with the bottle, standard cap, and cleaning brush. Additional accessories can be purchased separately."
    },
    {
      question: "Do you offer international shipping?",
      answer: "Currently, we ship within Bangladesh. We're working on expanding our shipping options to serve customers internationally."
    }
  ];

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
            <AccordionItem 
              key={index} 
              value={`item-${index}`} 
              className="border border-border rounded-2xl px-6 bg-background"
            >
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
