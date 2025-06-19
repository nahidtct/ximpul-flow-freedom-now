
import React, { useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, type CarouselApi } from '@/components/ui/carousel';
import { CheckCircle } from 'lucide-react';
import { BorderBeam } from '@/components/ui/border-beam';

export const CarouselSection = () => {
  const [api, setApi] = React.useState<CarouselApi>();
  const slides = ["Make Water Free Again: Reusable lifestyle bottle to replace single-use plastic", "Apple-level Product Experience: Minimal, premium, clean design", "One Bottle, Two Modes: Switch caps for how you want to drink", "Personalized & Giftable: Engraving option makes it uniquely yours", "Built for Bangladesh: First lifestyle bottle with this mission and quality in BD", "World-Class Quality: Guarantee of premium build at an affordable price", "Safe Beyond Plastic: Safer than plastic bottles — health first", "Part of Your Life: Designed to be an essential lifestyle product", "Lifestyle Add-ons: Accessories and engraving to match your personal style", "Convenient & Flexible: Hot or cold — your choice, your style"];

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
    <section className="py-16 bg-background fade-on-scroll">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Carousel setApi={setApi} className="w-full">
          <CarouselContent>
            {slides.map((slide, index) => (
              <CarouselItem key={index}>
                <Card className="border-none shadow-none">
                  <CardContent className="flex items-center justify-center p-8">
                    <div className="text-center space-y-4">
                      <CheckCircle className="w-8 h-8 text-green-500 mx-auto" />
                      <p className="text-lg font-medium text-foreground max-w-2xl">
                        {slide}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
};
