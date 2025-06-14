
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

interface Faq3Props {
  heading: string;
  description: string;
  items?: FaqItem[];
  supportHeading: string;
  supportDescription: string;
  supportButtonText: string;
  supportButtonUrl: string;
}

const faqItems = [
  {
    id: "faq-1",
    question: "What is Ximpul?",
    answer:
      "Ximpul is a lifestyle brand from Bangladesh dedicated to bringing global-quality products to people at #TruePrice — with full transparency and no compromise on innovation or product integrity."
  },
  {
    id: "faq-2",
    question: "What does #TruePrice mean?",
    answer:
      "#TruePrice means you get the same factory quality as premium global brands — without paying an inflated brand price. It also means we don't sell fake \"factory-direct\" scrap. Every product is fully curated, tested, and guaranteed."
  },
  {
    id: "faq-3",
    question: "Is Ximpul trying to copy other brands?",
    answer:
      "No. We do not copy brands. We source from top factories and work to bring equal or better quality products to Bangladesh — under our own brand, at honest prices."
  },
  {
    id: "faq-4",
    question: "Why is packaging so simple?",
    answer:
      "We believe your money should go to the product, not the box. Our simple, eco-friendly packaging helps reduce waste and keeps the focus on delivering real value."
  },
  {
    id: "faq-5",
    question: "What is Ximpul Flow?",
    answer:
      "Ximpul Flow is our first initiative — a premium water bottle designed to help people carry their own safe, clean water, and contribute to making water free again — instead of paying again and again for bottled water."
  },
  {
    id: "faq-6",
    question: "Is there any compromise on product quality?",
    answer:
      "Never. Every Ximpul product is selected through strict quality control. Our mission is to deliver global quality at #TruePrice — without compromise."
  },
  {
    id: "faq-7",
    question: "What types of products will Ximpul offer in the future?",
    answer:
      "We will gradually introduce lifestyle products across multiple categories: hydration, personal accessories, home, travel — always following our brand philosophy: The best. For all. At #TruePrice."
  }
];

const Faq3 = ({
  heading = "Frequently asked questions",
  description = "Find answers to common questions about our products. Can't find what you're looking for? Contact our support team.",
  items = faqItems,
  supportHeading = "Need more support?",
  supportDescription = "Our dedicated support team is here to help you with any questions or concerns. Get in touch with us for personalized assistance.",
  supportButtonText = "Contact Support",
  supportButtonUrl = "/contact",
}: Faq3Props) => {
  return (
    <section className="py-32">
      <div className="container space-y-16">
        <div className="mx-auto flex max-w-3xl flex-col text-left md:text-center">
          <h2 className="mb-3 text-3xl font-semibold md:mb-4 lg:mb-6 lg:text-4xl">
            {heading}
          </h2>
          <p className="text-muted-foreground lg:text-lg">{description}</p>
        </div>
        <Accordion
          type="single"
          collapsible
          className="mx-auto w-full lg:max-w-3xl"
        >
          {items.map((item) => (
            <AccordionItem key={item.id} value={item.id}>
              <AccordionTrigger className="transition-opacity duration-200 hover:no-underline hover:opacity-60">
                <div className="font-medium sm:py-1 lg:py-2 lg:text-lg">
                  {item.question}
                </div>
              </AccordionTrigger>
              <AccordionContent className="sm:mb-1 lg:mb-2">
                <div className="text-muted-foreground lg:text-lg">
                  {item.answer}
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
        <div className="mx-auto flex max-w-4xl flex-col items-center rounded-lg bg-accent p-4 text-center md:rounded-xl md:p-6 lg:p-8">
          <div className="relative">
            <Avatar className="absolute mb-4 size-16 origin-bottom -translate-x-[60%] scale-[80%] border md:mb-5">
              <AvatarImage src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face" />
              <AvatarFallback>XS</AvatarFallback>
            </Avatar>
            <Avatar className="absolute mb-4 size-16 origin-bottom translate-x-[60%] scale-[80%] border md:mb-5">
              <AvatarImage src="https://images.unsplash.com/photo-1494790108755-2616b381e4b9?w=150&h=150&fit=crop&crop=face" />
              <AvatarFallback>XS</AvatarFallback>
            </Avatar>
            <Avatar className="mb-4 size-16 border md:mb-5">
              <AvatarImage src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face" />
              <AvatarFallback>XS</AvatarFallback>
            </Avatar>
          </div>
          <h3 className="mb-2 max-w-3xl font-semibold lg:text-lg">
            {supportHeading}
          </h3>
          <p className="mb-8 max-w-3xl text-muted-foreground lg:text-lg">
            {supportDescription}
          </p>
          <div className="flex w-full flex-col justify-center gap-2 sm:flex-row">
            <Button className="w-full sm:w-auto" asChild>
              <a href={supportButtonUrl}>
                {supportButtonText}
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Faq3 };
