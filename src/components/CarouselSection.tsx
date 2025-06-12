
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Droplets, Shield, Thermometer, Coffee, Award, Car, Users, Heart, Zap } from 'lucide-react';

export const CarouselSection = () => {
  const slides = [
    {
      icon: <Droplets className="w-16 h-16 text-primary mb-6" />,
      title: "Perfect for Daily Life",
      description: "Easily carry your water everywhere. Keep your bottle in your bag, car, or desk. With Ximpul Flow, clean water is always within reach - whether you're at home, office, gym, or traveling."
    },
    {
      icon: <Shield className="w-16 h-16 text-primary mb-6" />,
      title: "Premium Materials, Safe Choice",
      description: "Made with food-grade 304 stainless steel and BPA-free components. Your health matters - that's why we use only the safest, highest-quality materials that won't leach chemicals into your water."
    },
    {
      icon: <Thermometer className="w-16 h-16 text-primary mb-6" />,
      title: "Temperature Control Mastery",
      description: "Hot coffee stays hot for 12+ hours. Ice-cold water stays refreshing all day. Our double-wall vacuum insulation technology ensures your drinks maintain the perfect temperature, no matter the weather."
    },
    {
      icon: <Coffee className="w-16 h-16 text-primary mb-6" />,
      title: "Two Ways to Drink",
      description: "Choose your style with our dual cap system. Standard cap for hot beverages and controlled drinking. Straw cap for easy hydration during workouts and active moments. Switch anytime."
    },
    {
      icon: <Award className="w-16 h-16 text-primary mb-6" />,
      title: "Built to Last Years",
      description: "Durable construction that withstands daily use. Scratch-resistant finish keeps it looking new. This isn't just a purchase - it's an investment in sustainable hydration for years to come."
    }
  ];

  return (
    <section className="apple-spacing bg-muted/30 fade-on-scroll">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-foreground mb-6">
            Everything You Need to Know
          </h2>
          <p className="text-xl text-muted-foreground font-light">
            Discover why Ximpul Flow is the perfect choice for your lifestyle
          </p>
        </div>

        <div className="relative">
          <Carousel className="w-full" opts={{ align: "start", loop: true }}>
            <CarouselContent className="-ml-4">
              {slides.map((slide, index) => (
                <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                  <Card className="h-full border-0 shadow-lg rounded-3xl overflow-hidden bg-background hover:shadow-xl transition-shadow duration-300">
                    <CardContent className="p-8 text-center h-full flex flex-col">
                      <div className="flex-shrink-0 mb-6 flex justify-center">
                        <div className="p-4 rounded-full bg-primary/10">
                          {slide.icon}
                        </div>
                      </div>
                      
                      <h3 className="text-2xl font-medium text-foreground mb-6 leading-tight">
                        {slide.title}
                      </h3>
                      
                      <p className="text-muted-foreground font-light leading-relaxed flex-grow">
                        {slide.description}
                      </p>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            
            <div className="flex justify-center mt-8 space-x-4">
              <CarouselPrevious className="relative left-0 top-0 translate-y-0 bg-background border-2 hover:bg-muted" />
              <CarouselNext className="relative right-0 top-0 translate-y-0 bg-background border-2 hover:bg-muted" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
};
