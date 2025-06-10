
import React from 'react';
import { Thermometer, Shield, Droplets, Zap, Recycle, Award } from 'lucide-react';

export const ProductFeaturesSection = () => {
  const features = [
    {
      icon: <Thermometer className="w-8 h-8 text-primary" />,
      title: "Advanced Temperature Control",
      description: "Keeps drinks hot for 12 hours, cold for 24 hours with premium double-wall vacuum insulation technology"
    },
    {
      icon: <Shield className="w-8 h-8 text-primary" />,
      title: "Food-Grade Safety",
      description: "Made with premium 304 stainless steel, completely BPA-free and safe for all beverages"
    },
    {
      icon: <Droplets className="w-8 h-8 text-primary" />,
      title: "100% Leak-Proof Design",
      description: "Advanced seal technology with triple-lock mechanism ensures zero spills in any position"
    },
    {
      icon: <Zap className="w-8 h-8 text-primary" />,
      title: "Easy Clean Technology",
      description: "Wide mouth design and smooth interior coating for effortless cleaning and maintenance"
    },
    {
      icon: <Recycle className="w-8 h-8 text-primary" />,
      title: "Eco-Friendly Impact",
      description: "Replace 1,000+ plastic bottles per year. Sustainable choice for conscious consumers"
    },
    {
      icon: <Award className="w-8 h-8 text-primary" />,
      title: "Premium Craftsmanship",
      description: "Precision-engineered with attention to every detail. Built to last a lifetime"
    }
  ];

  return (
    <section id="features" className="apple-spacing bg-muted/30 fade-on-scroll">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-light text-foreground mb-6">
            Engineered for Life
          </h2>
          <p className="text-xl text-muted-foreground font-light max-w-2xl mx-auto">
            Every detail crafted with purpose. Premium materials meet innovative design.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          {features.map((feature, index) => (
            <div key={index} className="text-center group hover:transform hover:scale-105 transition-all duration-300">
              <div className="mb-6 flex justify-center">
                <div className="p-4 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  {feature.icon}
                </div>
              </div>
              <h3 className="text-xl font-medium text-foreground mb-4">{feature.title}</h3>
              <p className="text-muted-foreground font-light leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
