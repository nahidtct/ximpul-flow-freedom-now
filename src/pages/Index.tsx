import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { ChevronRight, Star, Quote, Instagram, Facebook, Youtube, Check, Droplets, Shield, Thermometer, Zap, Recycle, Award } from 'lucide-react';
import { Navigation } from '@/components/Navigation';
import { BackgroundPathsOnly } from '@/components/ui/background-paths';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);
const Index = () => {
  const [selectedColor, setSelectedColor] = useState('obsidian');
  const [selectedAccessories, setSelectedAccessories] = useState<string[]>([]);
  useEffect(() => {
    // Smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth';

    // GSAP Animations
    const ctx = gsap.context(() => {
      // Hero animations with staggered timeline
      const tl = gsap.timeline();

      // Animate product name first
      tl.fromTo('.hero-product-name', {
        opacity: 0,
        y: 30
      }, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out"
      })
      // Then animate main heading
      .fromTo('.hero-main-heading', {
        opacity: 0,
        y: 50,
        scale: 0.95
      }, {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1.2,
        ease: "power3.out"
      }, "-=0.4")
      // Then animate product image
      .fromTo('.hero-product-image', {
        opacity: 0,
        y: 80,
        scale: 0.9
      }, {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1.5,
        ease: "power3.out"
      }, "-=0.8")
      // Finally animate tagline and CTA
      .fromTo('.hero-tagline', {
        opacity: 0,
        y: 30
      }, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out"
      }, "-=0.6").fromTo('.hero-cta', {
        opacity: 0,
        y: 30,
        scale: 0.9
      }, {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.8,
        ease: "power3.out"
      }, "-=0.4");

      // Fade in animations for sections
      gsap.utils.toArray('.fade-on-scroll').forEach((element: any) => {
        gsap.fromTo(element, {
          opacity: 0,
          y: 50
        }, {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: element,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        });
      });
    });
    return () => ctx.revert();
  }, []);
  const handleAccessoryToggle = (accessory: string) => {
    setSelectedAccessories(prev => prev.includes(accessory) ? prev.filter(a => a !== accessory) : [...prev, accessory]);
  };
  const colors = [{
    name: 'Obsidian Black',
    value: 'obsidian',
    color: '#1a1a1a'
  }, {
    name: 'Graphite Gray',
    value: 'graphite',
    color: '#6b7280'
  }];
  const accessories = [{
    name: 'Silicone Sleeve',
    price: 300
  }, {
    name: 'Straw Cap',
    price: 250
  }, {
    name: 'Handle Rope',
    price: 200
  }, {
    name: 'Cleaning Brush',
    price: 150
  }];
  const features = [{
    icon: <Thermometer className="w-8 h-8 text-primary" />,
    title: "Advanced Temperature Control",
    description: "Keeps drinks hot for 12 hours, cold for 24 hours with premium double-wall vacuum insulation technology"
  }, {
    icon: <Shield className="w-8 h-8 text-primary" />,
    title: "Food-Grade Safety",
    description: "Made with premium 304 stainless steel, completely BPA-free and safe for all beverages"
  }, {
    icon: <Droplets className="w-8 h-8 text-primary" />,
    title: "100% Leak-Proof Design",
    description: "Advanced seal technology with triple-lock mechanism ensures zero spills in any position"
  }, {
    icon: <Zap className="w-8 h-8 text-primary" />,
    title: "Easy Clean Technology",
    description: "Wide mouth design and smooth interior coating for effortless cleaning and maintenance"
  }, {
    icon: <Recycle className="w-8 h-8 text-primary" />,
    title: "Eco-Friendly Impact",
    description: "Replace 1,000+ plastic bottles per year. Sustainable choice for conscious consumers"
  }, {
    icon: <Award className="w-8 h-8 text-primary" />,
    title: "Premium Craftsmanship",
    description: "Precision-engineered with attention to every detail. Built to last a lifetime"
  }];
  const testimonials = [{
    quote: "I feel proud to use it.",
    author: "Rifat Ahmed",
    location: "Dhaka",
    rating: 5
  }, {
    quote: "Amazing build quality — feels like a global brand.",
    author: "Fatima Khan",
    location: "Chittagong",
    rating: 5
  }, {
    quote: "I love that I no longer need to buy plastic bottles.",
    author: "Sakib Rahman",
    location: "Sylhet",
    rating: 5
  }];
  const faqItems = [{
    question: "How long does Ximpul Flow keep drinks hot or cold?",
    answer: "Ximpul Flow keeps drinks hot for up to 12 hours and cold for up to 24 hours thanks to our advanced double-wall vacuum insulation technology."
  }, {
    question: "Is Ximpul Flow safe for all types of beverages?",
    answer: "Yes, Ximpul Flow is made from premium 304 stainless steel and is completely BPA-free, making it safe for water, coffee, tea, juices, and other beverages."
  }, {
    question: "Can I personalize my bottle with engraving?",
    answer: "Absolutely! We offer professional engraving services to add your name or custom text to your bottle for an additional 300 BDT."
  }, {
    question: "How do I clean my Ximpul Flow bottle?",
    answer: "The wide mouth design makes cleaning easy. Simply use warm soapy water and our included cleaning brush. The smooth interior coating prevents odor and stain buildup."
  }, {
    question: "What's included with my purchase?",
    answer: "Each Ximpul Flow comes with the bottle, standard cap, and cleaning brush. Additional accessories can be purchased separately."
  }, {
    question: "Do you offer international shipping?",
    answer: "Currently, we ship within Bangladesh. We're working on expanding our shipping options to serve customers internationally."
  }];
  return <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section - Apple MacBook Air Style */}
      <section className="hero-section h-screen flex flex-col justify-center items-center relative overflow-hidden my-[65px]">
        {/* Animated Background Paths */}
        <BackgroundPathsOnly />
        
        {/* Background Gradient */}
        <div className="absolute inset-0 z-[1]" style={{
        background: 'linear-gradient(180deg, rgba(212, 234, 246, 0.3), rgba(249, 249, 249, 0.6) 75%, rgba(255, 255, 255, 0.8))',
        transition: 'opacity 1.83s ease-out'
      }} />
        
        {/* Content Container - Desktop Layout */}
        <div className="relative z-10 w-full h-full hidden md:block">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
            {/* Desktop Grid Layout */}
            <div className="grid grid-cols-2 h-full items-center">
              {/* Left Column - Text Content */}
              <div className="flex flex-col justify-center space-y-8">
                {/* Product Name */}
                <h1 className="hero-product-name text-3xl lg:text-4xl xl:text-5xl font-normal text-black">
                  Ximpul Flow
                </h1>
                
                {/* Main Headline */}
                <h2 className="hero-main-heading text-6xl lg:text-7xl xl:text-8xl font-semibold leading-tight tracking-tight apple-gradient-text">
                  Your Water. Your Freedom.
                </h2>
                
                {/* Tagline */}
                <p className="hero-tagline text-xl lg:text-2xl">
                  Will you keep paying for what falls from the sky?
                </p>
                
                {/* CTA Section */}
                <div className="hero-cta space-y-4">
                  <Button size="lg" className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 text-lg font-medium rounded-full" onClick={() => document.getElementById('buy')?.scrollIntoView({
                  behavior: 'smooth'
                })}>
                    Buy
                  </Button>
                  
                  {/* Pricing */}
                  <p className="text-lg text-gray-600">
                    From 1,090 BDT
                  </p>
                </div>
              </div>
              
              {/* Right Column - Product Image */}
              <div className="hero-product-image flex justify-center items-center">
                <img src="/lovable-uploads/eaa1a148-5371-4701-8c74-ebc7f19de062.png" alt="Ximpul Flow Water Bottle" className="max-w-md lg:max-w-lg xl:max-w-xl w-full h-auto object-contain" />
              </div>
            </div>
          </div>
        </div>

        {/* Content Container - Mobile Layout */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center md:hidden">
          {/* Product Name */}
          <h1 className="hero-product-name text-2xl font-normal text-black mb-4">
            Ximpul Flow
          </h1>
          
          {/* Main Headline */}
          <h2 className="hero-main-heading text-4xl sm:text-5xl font-semibold mb-8 leading-tight tracking-tight apple-gradient-text">
            Your Water.
            <br />
            Your Freedom.
          </h2>
          
          {/* Product Image */}
          <div className="hero-product-image mb-8 flex justify-center">
            <img src="/lovable-uploads/d93145c9-b665-4286-b586-342c557a9096.png" alt="Ximpul Flow Water Bottle" className="max-w-xs w-full h-auto object-contain" />
          </div>
          
          {/* Tagline */}
          <p className="hero-tagline text-lg mb-6">
            Will you keep paying for what falls from the sky?
          </p>
          
          {/* CTA Section */}
          <div className="hero-cta">
            <Button size="lg" className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 text-lg font-medium rounded-full mb-4" onClick={() => document.getElementById('buy')?.scrollIntoView({
            behavior: 'smooth'
          })}>
              Buy
            </Button>
            
            {/* Pricing */}
            <p className="text-base text-gray-600">
              From 1,090 BDT
            </p>
          </div>
        </div>
      </section>

      {/* Brand Story Section - Apple Style with Side-by-Side */}
      <section id="story" className="apple-spacing bg-background">
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
              <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80" alt="Plastic bottles" className="w-full rounded-3xl shadow-xl" />
            </div>
          </div>

          {/* Story Block 2 */}
          <div className="grid lg:grid-cols-2 gap-16 items-center fade-on-scroll">
            <div>
              <img src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&q=80" alt="Ximpul Flow lifestyle" className="w-full rounded-3xl shadow-xl" />
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
              <img src="https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=800&q=80" alt="Lifestyle with bottle" className="w-full rounded-3xl shadow-xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Product Features Section - Enhanced Apple Style */}
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
            {features.map((feature, index) => <div key={index} className="text-center group hover:transform hover:scale-105 transition-all duration-300">
                <div className="mb-6 flex justify-center">
                  <div className="p-4 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    {feature.icon}
                  </div>
                </div>
                <h3 className="text-xl font-medium text-foreground mb-4">{feature.title}</h3>
                <p className="text-muted-foreground font-light leading-relaxed">
                  {feature.description}
                </p>
              </div>)}
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
            {[{
            name: 'Obsidian Black',
            image: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=600&q=80',
            benefits: ['Hot or cold — your choice', 'Safe & leak-proof', 'Personalize your bottle', 'Lifestyle-first — not just a bottle']
          }, {
            name: 'Graphite Gray',
            image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=600&q=80',
            benefits: ['Premium materials', 'Condensation-free design', 'Easy-grip surface', 'Statement piece for your lifestyle']
          }].map((product, index) => <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-[1.02] overflow-hidden rounded-3xl">
                <CardContent className="p-0">
                  <div className="relative">
                    <img src={product.image} alt={product.name} className="w-full h-96 object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-8">
                      <h3 className="text-white text-2xl font-light mb-4">{product.name}</h3>
                      <div className="space-y-2">
                        {product.benefits.map((benefit, idx) => <p key={idx} className="text-white/90 text-sm font-light">
                            {benefit}
                          </p>)}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>)}
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
                <RadioGroup value={selectedColor} onValueChange={setSelectedColor} className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {colors.map(color => <div key={color.value} className="flex items-center space-x-3 p-4 rounded-2xl border-2 hover:border-primary/50 transition-colors">
                      <RadioGroupItem value={color.value} id={color.value} />
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 rounded-full border-2 border-border" style={{
                      backgroundColor: color.color
                    }} />
                        <label htmlFor={color.value} className="text-lg font-medium cursor-pointer">
                          {color.name}
                        </label>
                      </div>
                    </div>)}
                </RadioGroup>
              </div>

              {/* Accessories Selection */}
              <div className="mb-12">
                <h3 className="text-2xl font-light text-foreground mb-6">Add Accessories</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {accessories.map(accessory => <div key={accessory.name} className={`p-4 rounded-2xl border-2 cursor-pointer transition-all ${selectedAccessories.includes(accessory.name) ? 'border-primary bg-primary/5' : 'border-border hover:border-primary/50'}`} onClick={() => handleAccessoryToggle(accessory.name)}>
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium">{accessory.name}</p>
                          <p className="text-sm text-muted-foreground">+{accessory.price} BDT</p>
                        </div>
                        {selectedAccessories.includes(accessory.name) && <Check className="w-5 h-5 text-primary" />}
                      </div>
                    </div>)}
                </div>
              </div>

              {/* Personalization */}
              <div className="mb-12">
                <h3 className="text-2xl font-light text-foreground mb-6">Personalize</h3>
                <Input placeholder="Add your name (optional)" className="text-lg p-4 rounded-2xl border-2" />
                <p className="text-sm text-muted-foreground mt-2">+300 BDT for engraving</p>
              </div>

              {/* Price and Buy Button */}
              <div className="text-center">
                <div className="mb-6">
                  <p className="text-3xl font-light text-foreground">
                    Starting at <span className="text-primary font-medium">1,090 BDT</span>
                  </p>
                </div>
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-12 py-6 text-xl font-medium rounded-full transition-all duration-300 hover:scale-105 w-full md:w-auto">
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
              What Our Community Says
            </h2>
            <p className="text-xl text-muted-foreground font-light">
              Real stories from real customers
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {testimonials.map((testimonial, index) => <Card key={index} className="border-0 shadow-lg rounded-3xl overflow-hidden">
                <CardContent className="p-8 text-center">
                  <Quote className="w-8 h-8 text-primary mb-4 mx-auto opacity-60" />
                  <p className="text-lg font-light text-foreground mb-6 leading-relaxed">
                    "{testimonial.quote}"
                  </p>
                  
                  <div className="flex items-center justify-center mb-2">
                    {[...Array(testimonial.rating)].map((_, i) => <Star key={i} className="w-4 h-4 fill-primary text-primary" />)}
                  </div>
                  <p className="font-medium text-foreground">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
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
            {faqItems.map((item, index) => <AccordionItem key={index} value={`item-${index}`} className="border border-border rounded-2xl px-6 bg-background">
                <AccordionTrigger className="text-left text-lg font-medium hover:no-underline">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground font-light leading-relaxed">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>)}
          </Accordion>
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
          
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-12 py-6 text-xl font-medium rounded-full transition-all duration-300 hover:scale-105 shadow-2xl" onClick={() => document.getElementById('buy')?.scrollIntoView({
          behavior: 'smooth'
        })}>
            Buy Now
            <ChevronRight className="ml-2 h-6 w-6" />
          </Button>
        </div>
      </section>

      {/* Simple Footer */}
      <footer className="bg-background border-t py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <p className="text-lg md:text-xl font-light leading-relaxed max-w-3xl mx-auto text-muted-foreground">
              "Every refill tells a story — of change, of freedom, of a better way to live."
            </p>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
            {/* Links */}
            <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-6 text-center">
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                Refund Policy
              </a>
            </div>

            {/* Social Icons */}
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div className="text-center mt-8 pt-8 border-t">
            <p className="text-muted-foreground font-light">
              © 2024 Ximpul Flow. Made with love in Bangladesh.
            </p>
          </div>
        </div>
      </footer>
    </div>;
};
export default Index;