
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

export const LifestyleGallery = () => {
  const productImages = [
    {
      image: '/lovable-uploads/a44c6b1e-d7be-4764-be5b-56df9fac3e9a.png',
      title: 'Complete Set'
    },
    {
      image: '/lovable-uploads/7176b950-e718-4577-a7f9-5e65c1811e58.png',
      title: 'Textured Grip'
    },
    {
      image: '/lovable-uploads/1e2abc2a-2836-4dad-ad5b-7962aa9b7f98.png',
      title: 'Side Profile'
    },
    {
      image: '/lovable-uploads/841e3dea-d23a-4419-8563-82c217d2bed2.png',
      title: 'Ergonomic Design'
    },
    {
      image: '/lovable-uploads/22ab9da4-fbda-4981-bc1a-1e93c16d2c5d.png',
      title: 'Color Options'
    },
    {
      image: '/lovable-uploads/8b1016d0-9003-4b84-ba91-b76e53d0751a.png',
      title: 'Premium Cap'
    },
    {
      image: '/lovable-uploads/98251ec1-0e5e-40b7-962a-e9989c247749.png',
      title: 'Cap Detail'
    },
    {
      image: '/lovable-uploads/1902deae-2847-44b6-ab69-7c7183e4b48b.png',
      title: 'Bottle Cap'
    },
    {
      image: '/lovable-uploads/00e04cfe-21e9-43f5-999f-de65c95b042a.png',
      title: 'Interior View'
    },
    {
      image: '/lovable-uploads/a2c202be-17b1-4dd1-9b5d-a7412ff6cf1a.png',
      title: 'Top View'
    }
  ];

  return (
    <section className="py-24 bg-background fade-on-scroll">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="lg:text-[2.7rem] xl:text-[3.24rem] font-semibold leading-tight tracking-tight apple-gradient-text mb-6 text-[3.24rem]" style={{ lineHeight: 1.09 }}>
            Every Detail Matters
          </h2>
          <p className="text-lg text-muted-foreground font-light max-w-2xl mx-auto">
            Explore the premium craftsmanship and thoughtful design that makes Ximpul Flow extraordinary.
          </p>
        </div>

        <Carousel className="w-full max-w-5xl mx-auto">
          <CarouselContent>
            {productImages.map((item, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-2xl overflow-hidden">
                  <CardContent className="p-0">
                    <div className="relative overflow-hidden bg-white">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-80 object-contain transition-transform duration-500 hover:scale-105 p-8"
                      />
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6">
                        <h3 className="text-white text-lg font-medium">{item.title}</h3>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="-left-12" />
          <CarouselNext className="-right-12" />
        </Carousel>
      </div>
    </section>
  );
};
