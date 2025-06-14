
import React, { useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from '@/components/ui/carousel';
import { CheckCircle } from 'lucide-react';
import { BorderBeam } from '@/components/ui/border-beam';

export const CarouselSection = () => {
  const [api, setApi] = React.useState<CarouselApi>();
  
  const slides = [
    "Make Water Free Again: Reusable lifestyle bottle to replace single-use plastic",
    "Apple-level Product Experience: Minimal, premium, clean design",
    "One Bottle, Two Modes: Switch caps for how you want to drink",
    "Personalized & Giftable: Engraving option makes it uniquely yours",
    "Built for Bangladesh: First lifestyle bottle with this mission and quality in BD",
    "World-Class Quality: Guarantee of premium build at an affordable price",
    "Safe Beyond Plastic: Safer than plastic bottles — health first",
    "Part of Your Life: Designed to be an essential lifestyle product",
    "Lifestyle Add-ons: Accessories and engraving to match your personal style",
    "Convenient & Flexible: Hot or cold — your choice, your style"
  ];

  useEffect(() => {
    if (!api) {
      return;
    }

    const interval = setInterval(() => {
      api.scrollNext();
    }, 3000);

    return () => clearInterval(interval);
  }, [api]);

  return (
    <section className="apple-spacing bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="lg:text-[2.7rem] xl:text-[3.24rem] font-semibold leading-tight tracking-tight apple-gradient-text mb-6 text-[3.24rem]" style={{ lineHeight: 1.09 }}>
            Why Choose Ximpul Flow
          </h2>
          <p className="text-xl text-muted-foreground font-light max-w-2xl mx-auto">
            Every feature designed with your lifestyle in mind
          </p>
        </div>

        <div className="relative">
          <Carousel 
            className="w-full" 
            opts={{ 
              align: "start", 
              loop: true,
              skipSnaps: false,
              dragFree: true
            }}
            setApi={setApi}
          >
            <CarouselContent className="-ml-4">
              {slides.map((slide, index) => (
                <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                  <Card className="relative h-full border-0 bg-muted/20 hover:bg-muted/30 transition-all duration-300 rounded-2xl overflow-hidden">
                    <CardContent className="p-8 h-full flex flex-col">
                      {/* Product Image */}
                      <div className="flex justify-center mb-6">
                        <img 
                          src="/lovable-uploads/3206014d-8b7b-48fa-be6b-24c9a2af5025.png" 
                          alt="Ximpul Flow Water Bottle" 
                          className="w-24 h-32 object-contain"
                        />
                      </div>
                      
                      {/* Text Content */}
                      <div className="flex items-start space-x-4 flex-grow">
                        <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                        <p className="text-foreground leading-relaxed font-light text-lg">
                          {slide}
                        </p>
                      </div>
                    </CardContent>
                    <BorderBeam duration={12} delay={index * 0.2} />
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            
            <div className="flex justify-center mt-12 space-x-4">
              <CarouselPrevious className="relative left-0 top-0 translate-y-0 bg-background/80 backdrop-blur-sm border hover:bg-muted/50 transition-colors" />
              <CarouselNext className="relative right-0 top-0 translate-y-0 bg-background/80 backdrop-blur-sm border hover:bg-muted/50 transition-colors" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
};
