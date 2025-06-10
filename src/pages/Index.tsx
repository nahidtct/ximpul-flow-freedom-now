
import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { ChevronRight, Star, Quote, Instagram, Facebook, Youtube, Check, Droplets, Shield, Thermometer, Zap } from 'lucide-react';
import { Navigation } from '@/components/Navigation';

const Index = () => {
  const [selectedColor, setSelectedColor] = useState('obsidian');
  const [selectedAccessories, setSelectedAccessories] = useState<string[]>([]);

  useEffect(() => {
    // Smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth';
    
    // Add scroll animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
        }
      });
    }, observerOptions);

    const elements = document.querySelectorAll('.fade-on-scroll');
    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const handleAccessoryToggle = (accessory: string) => {
    setSelectedAccessories(prev => 
      prev.includes(accessory) 
        ? prev.filter(a => a !== accessory)
        : [...prev, accessory]
    );
  };

  const colors = [
    { name: 'Obsidian Black', value: 'obsidian', color: '#1a1a1a' },
    { name: 'Graphite Gray', value: 'graphite', color: '#6b7280' }
  ];

  const accessories = [
    { name: 'Silicone Sleeve', price: 300 },
    { name: 'Straw Cap', price: 250 },
    { name: 'Handle Rope', price: 200 },
    { name: 'Cleaning Brush', price: 150 }
  ];

  const features = [
    {
      icon: <Thermometer className="w-8 h-8 text-primary" />,
      title: "Temperature Control",
      description: "Keeps drinks hot for 12 hours, cold for 24 hours with double-wall insulation"
    },
    {
      icon: <Shield className="w-8 h-8 text-primary" />,
      title: "Food-Grade Safety",
      description: "Made with premium 304 stainless steel, completely BPA-free and safe"
    },
    {
      icon: <Droplets className="w-8 h-8 text-primary" />,
      title: "Leak-Proof Design",
      description: "Advanced seal technology ensures zero spills in any position"
    },
    {
      icon: <Zap className="w-8 h-8 text-primary" />,
      title: "Easy Clean",
      description: "Wide mouth design and smooth interior for effortless cleaning"
    }
  ];

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
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section - Light with Apple Style */}
      <section className="apple-spacing flex items-center justify-center bg-gradient-to-b from-background to-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Text Content */}
            <div className="text-center lg:text-left">
              <h1 className="text-5xl md:text-7xl font-thin text-foreground mb-6 leading-tight">
                Your Water.
                <br />
                <span className="font-light text-primary">Your Freedom.</span>
              </h1>
              
              <p className="text-xl md:text-2xl font-light text-muted-foreground mb-12 max-w-2xl leading-relaxed">
                Will you keep paying for what falls from the sky?
              </p>
              
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg font-medium rounded-full transition-all duration-300 hover:scale-105"
              >
                Buy Now
                <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
            </div>

            {/* Hero Image */}
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=800&q=80"
                alt="Ximpul Flow Bottle"
                className="w-full max-w-md mx-auto rounded-3xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Brand Story Section - Apple Style with Side-by-Side */}
      <section className="apple-spacing bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-32">
          {/* Story Block 1 */}
          <div className="grid lg:grid-cols-2 gap-16 items-center fade-on-scroll">
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl md:text-4xl font-light text-foreground mb-6 leading-relaxed">
                Water falls from the sky. It should be free.
              </h2>
              <p className="text-lg text-muted-foreground font-light">
                Yet we pay for it every day — trapped in plastic, polluted, overpriced.
              </p>
            </div>
            <div className="order-1 lg:order-2">
              <img
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80"
                alt="Plastic bottles"
                className="w-full rounded-3xl shadow-xl"
              />
            </div>
          </div>

          {/* Story Block 2 */}
          <div className="grid lg:grid-cols-2 gap-16 items-center fade-on-scroll">
            <div>
              <img
                src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&q=80"
                alt="Ximpul Flow lifestyle"
                className="w-full rounded-3xl shadow-xl"
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-light text-foreground mb-6 leading-relaxed">
                Ximpul Flow is here to change that.
              </h2>
              <p className="text-lg text-muted-foreground font-light">
                It is more than a bottle. It is a statement: <span className="text-primary font-medium">Make Water Free Again.</span>
              </p>
            </div>
          </div>

          {/* Story Block 3 */}
          <div className="grid lg:grid-cols-2 gap-16 items-center fade-on-scroll">
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl md:text-4xl font-light text-foreground mb-6 leading-relaxed">
                By using your own bottle — stylish, personalized with your own name
              </h2>
              <p className="text-lg text-muted-foreground font-light">
                You take back the freedom to drink water as it was meant to be.
              </p>
            </div>
            <div className="order-1 lg:order-2">
              <img
                src="https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=800&q=80"
                alt="Lifestyle with bottle"
                className="w-full rounded-3xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Product Features Section - Apple Style */}
      <section className="apple-spacing bg-muted/30 fade-on-scroll">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-light text-foreground mb-6">
              Engineered for Life
            </h2>
            <p className="text-xl text-muted-foreground font-light">
              Every detail crafted with purpose
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="mb-6 flex justify-center">
                  {feature.icon}
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

      {/* Product Showcase */}
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
            {[
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
            ].map((product, index) => (
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

      {/* Buy Section with Color and Accessories Selection */}
      <section id="buy" className="apple-spacing bg-muted/30 fade-on-scroll">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light text-foreground mb-6">
              Make It Yours
            </h2>
            <p className="text-xl text-muted-foreground font-light">
              Customize your Ximpul Flow
            </p>
          </div>

          <Card className="border-0 shadow-2xl rounded-3xl overflow-hidden">
            <CardContent className="p-12">
              {/* Color Selection */}
              <div className="mb-12">
                <h3 className="text-2xl font-light text-foreground mb-6">Choose Your Color</h3>
                <RadioGroup value={selectedColor} onValueChange={setSelectedColor} className="grid grid-cols-2 gap-6">
                  {colors.map((color) => (
                    <div key={color.value} className="flex items-center space-x-3 p-4 rounded-2xl border-2 hover:border-primary/50 transition-colors">
                      <RadioGroupItem value={color.value} id={color.value} />
                      <div className="flex items-center space-x-3">
                        <div 
                          className="w-8 h-8 rounded-full border-2 border-border"
                          style={{ backgroundColor: color.color }}
                        />
                        <label htmlFor={color.value} className="text-lg font-medium cursor-pointer">
                          {color.name}
                        </label>
                      </div>
                    </div>
                  ))}
                </RadioGroup>
              </div>

              {/* Accessories Selection */}
              <div className="mb-12">
                <h3 className="text-2xl font-light text-foreground mb-6">Add Accessories</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {accessories.map((accessory) => (
                    <div 
                      key={accessory.name}
                      className={`p-4 rounded-2xl border-2 cursor-pointer transition-all ${
                        selectedAccessories.includes(accessory.name)
                          ? 'border-primary bg-primary/5'
                          : 'border-border hover:border-primary/50'
                      }`}
                      onClick={() => handleAccessoryToggle(accessory.name)}
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium">{accessory.name}</p>
                          <p className="text-sm text-muted-foreground">+{accessory.price} BDT</p>
                        </div>
                        {selectedAccessories.includes(accessory.name) && (
                          <Check className="w-5 h-5 text-primary" />
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Personalization */}
              <div className="mb-12">
                <h3 className="text-2xl font-light text-foreground mb-6">Personalize</h3>
                <Input 
                  placeholder="Add your name (optional)"
                  className="text-lg p-4 rounded-2xl border-2"
                />
                <p className="text-sm text-muted-foreground mt-2">+300 BDT for engraving</p>
              </div>

              {/* Price and Buy Button */}
              <div className="text-center">
                <div className="mb-6">
                  <p className="text-3xl font-light text-foreground">
                    Starting at <span className="text-primary font-medium">1,090 BDT</span>
                  </p>
                </div>
                <Button 
                  size="lg" 
                  className="bg-primary hover:bg-primary/90 text-primary-foreground px-12 py-6 text-xl font-medium rounded-full transition-all duration-300 hover:scale-105 w-full md:w-auto"
                >
                  Buy Now
                  <ChevronRight className="ml-2 h-6 w-6" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="apple-spacing bg-background fade-on-scroll">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light text-foreground mb-6">
              Join the Movement
            </h2>
            <p className="text-xl text-muted-foreground font-light">
              See what our community has to say
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-0 shadow-lg rounded-3xl overflow-hidden">
                <CardContent className="p-8 text-center">
                  <Quote className="w-8 h-8 text-primary mb-4 mx-auto opacity-60" />
                  <p className="text-lg font-light text-foreground mb-6 leading-relaxed">
                    "{testimonial.quote}"
                  </p>
                  
                  <div className="flex items-center justify-center mb-2">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="font-medium text-foreground">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="apple-spacing bg-gradient-to-br from-primary/10 to-primary/5 fade-on-scroll">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-6xl font-light text-foreground mb-8 leading-tight">
            Will you pay again
            <br />
            for what falls from the sky?
          </h2>
          
          <p className="text-xl md:text-2xl font-light text-muted-foreground mb-12 max-w-2xl mx-auto">
            Or will you help make it free again?
          </p>
          
          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-12 py-6 text-xl font-medium rounded-full transition-all duration-300 hover:scale-105 shadow-2xl"
          >
            Buy Now
            <ChevronRight className="ml-2 h-6 w-6" />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-background py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Brand Quote */}
          <div className="text-center mb-12">
            <p className="text-xl md:text-2xl font-light leading-relaxed max-w-4xl mx-auto">
              "Every refill tells a story — of change, of freedom, of a better way to live."
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {/* Newsletter */}
            <div>
              <h4 className="text-lg font-medium mb-4">Join the Movement</h4>
              <p className="text-background/80 mb-4 font-light">Stay updated with our latest news and offers.</p>
              <div className="flex gap-2">
                <Input 
                  placeholder="Enter your email" 
                  className="bg-background/10 border-background/20 text-background placeholder:text-background/60"
                />
                <Button className="bg-background text-foreground hover:bg-background/90">
                  Subscribe
                </Button>
              </div>
            </div>

            {/* Links */}
            <div>
              <h4 className="text-lg font-medium mb-4">Legal</h4>
              <div className="space-y-2">
                <a href="#" className="block text-background/80 hover:text-background transition-colors">
                  Privacy Policy
                </a>
                <a href="#" className="block text-background/80 hover:text-background transition-colors">
                  Terms of Service
                </a>
                <a href="#" className="block text-background/80 hover:text-background transition-colors">
                  Refund Policy
                </a>
              </div>
            </div>

            {/* Social */}
            <div>
              <h4 className="text-lg font-medium mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-background/80 hover:text-background transition-colors">
                  <Facebook className="w-6 h-6" />
                </a>
                <a href="#" className="text-background/80 hover:text-background transition-colors">
                  <Instagram className="w-6 h-6" />
                </a>
                <a href="#" className="text-background/80 hover:text-background transition-colors">
                  <Youtube className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>

          {/* Bottom */}
          <div className="border-t border-background/20 mt-12 pt-8 text-center">
            <p className="text-background/60 font-light">
              © 2024 Ximpul Flow. Made with love in Bangladesh.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
