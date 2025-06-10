
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Quote, Star } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

export const TestimonialsSection = () => {
  const testimonials = [
    {
      quote: "I feel proud to use it.",
      author: "Rifat Ahmed",
      location: "Dhaka",
      rating: 5
    },
    {
      quote: "Amazing build quality — feels like a global brand.",
      author: "Fatima Khan",
      location: "Chittagong",
      rating: 5
    },
    {
      quote: "I love that I no longer need to buy plastic bottles.",
      author: "Sakib Rahman",
      location: "Sylhet",
      rating: 5
    },
    {
      quote: "The personalization makes it truly mine.",
      author: "Nusrat Jahan",
      location: "Rajshahi",
      rating: 5
    }
  ];

  return (
    <section className="py-24 bg-background fade-on-scroll">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-foreground mb-6">
            Join the Movement
          </h2>
          <p className="text-xl text-muted-foreground font-light">
            See what our community has to say
          </p>
        </div>

        <Carousel className="w-full max-w-4xl mx-auto">
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="md:basis-1/2">
                <Card className="border-0 shadow-lg h-full">
                  <CardContent className="p-8 flex flex-col justify-between h-full">
                    <div>
                      <Quote className="w-8 h-8 text-primary mb-4 opacity-60" />
                      <p className="text-lg font-light text-foreground mb-6 leading-relaxed">
                        "{testimonial.quote}"
                      </p>
                    </div>
                    
                    <div>
                      <div className="flex items-center mb-2">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                        ))}
                      </div>
                      <p className="font-medium text-foreground">{testimonial.author}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.location}</p>
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
