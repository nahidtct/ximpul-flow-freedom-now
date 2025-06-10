
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

export const ProductShowcase = () => {
  const products = [
    {
      name: 'Obsidian Black',
      image: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=600&q=80',
      benefits: [
        'Hot or cold — your choice',
        'Safe & leak-proof',
        'Personalize your bottle',
        'Lifestyle-first — not just a bottle'
      ]
    },
    {
      name: 'Graphite Gray',
      image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=600&q=80',
      benefits: [
        'Premium materials',
        'Condensation-free design',
        'Easy-grip surface',
        'Statement piece for your lifestyle'
      ]
    }
  ];

  return (
    <section className="apple-spacing bg-background fade-on-scroll">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-foreground mb-6">
            Choose Your Flow
          </h2>
          <p className="text-xl text-muted-foreground font-light max-w-2xl mx-auto">
            Two colors. Infinite possibilities. Each bottle tells your story.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {products.map((product, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-[1.02] overflow-hidden rounded-3xl">
              <CardContent className="p-0">
                <div className="relative">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-96 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-8">
                    <h3 className="text-white text-2xl font-light mb-4">{product.name}</h3>
                    <div className="space-y-2">
                      {product.benefits.map((benefit, idx) => (
                        <p key={idx} className="text-white/90 text-sm font-light">
                          {benefit}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
