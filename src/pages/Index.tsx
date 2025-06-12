import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { ChevronRight, Star, Quote, Instagram, Facebook, Youtube, Check, Droplets, Shield, Thermometer, Zap, Recycle, Award, Heart, Coffee, Dumbbell, Car, Users } from 'lucide-react';
import { Navigation } from '@/components/Navigation';
import { ProductShowcase } from '@/components/ProductShowcase';
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
    price: 300,
    note: 'Soft grip and extra protection'
  }, {
    name: 'Straw Cap',
    price: 250,
    note: 'Flexibility for active use'
  }, {
    name: 'Handle Rope',
    price: 200,
    note: 'Additional or alternative handle'
  }, {
    name: 'Cleaning Brush',
    price: 150,
    note: 'Maintain hygiene easily'
  }, {
    name: 'Engraving Service',
    price: 300,
    note: 'Personalize with name/message'
  }];

  const features = [{
    icon: <Droplets className="w-8 h-8 text-primary" />,
    title: "500ML Capacity",
    description: "Ideal for daily hydration — perfect size for office, gym, school or travel"
  }, {
    icon: <Shield className="w-8 h-8 text-primary" />,
    title: "304 Stainless Steel",
    description: "Premium body material with PP cap and silicone sleeve — FDA approved & BPA-free"
  }, {
    icon: <Thermometer className="w-8 h-8 text-primary" />,
    title: "24-Hour Insulation",
    description: "Double-wall vacuum insulation keeps water hot or cold up to 24 hours"
  }, {
    icon: <Coffee className="w-8 h-8 text-primary" />,
    title: "Two Cap Options",
    description: "Choose between Standard Cap or Straw Cap — two drinking styles for your preference"
  }, {
    icon: <Award className="w-8 h-8 text-primary" />,
    title: "100% Leak-Proof",
    description: "Safe to carry in bags, perfect for any lifestyle activity"
  }, {
    icon: <Car className="w-8 h-8 text-primary" />,
    title: "Everyday Convenience",
    description: "Fits in car holders, portable handle rope, designed for daily use"
  }];

  const lifestyleImages = [
    {
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80',
      caption: 'From morning commute to mountain trail — one bottle, all day.'
    },
    {
      image: 'https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=800&q=80',
      caption: 'Convenient — drink hot or cold as you prefer.'
    },
    {
      image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&q=80',
      caption: 'Not just a bottle — it\'s a lifestyle.'
    },
    {
      image: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=800&q=80',
      caption: 'Premium but affordable.'
    }
  ];

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
    answer: "Ximpul Flow keeps drinks hot or cold for up to 24 hours thanks to our double-wall vacuum insulation technology."
  }, {
    question: "What cap options are available?",
    answer: "You can choose between Standard Cap or Straw Cap. The Lifestyle Edition includes both caps for maximum flexibility."
  }, {
    question: "Is Ximpul Flow safe for all types of beverages?",
    answer: "Yes, Ximpul Flow is made from premium 304 stainless steel and is FDA approved & BPA-free, making it safe for water, coffee, tea, juices, and other beverages."
  }, {
    question: "Can I personalize my bottle with engraving?",
    answer: "Absolutely! We offer professional engraving services to add your name or custom message to your bottle for an additional 300 BDT."
  }, {
    question: "What's the difference between Base and Lifestyle Edition?",
    answer: "Base Edition (1090 BDT) includes the bottle, one cap, and handle rope. Lifestyle Edition (1590 BDT) includes both caps, extra accessories, cleaning brushes, silicone sleeve, and aluminum hook."
  }, {
    question: "Do you offer international shipping?",
    answer: "Currently, we ship within Bangladesh. We're working on expanding our shipping options to serve customers internationally."
  }];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section - Don't Touch (Already Done) */}
      <section className="hero-section min-h-[80vh] flex flex-col justify-center items-center relative overflow-hidden my-0">
        {/* Animated Background Paths */}
        <BackgroundPathsOnly />
        
        {/* Background Gradient */}
        <div className="absolute inset-0 z-[1]" style={{
          background: 'linear-gradient(180deg, rgba(212, 234, 246, 0.3), rgba(249, 249, 249, 0.6) 75%, rgba(255, 255, 255, 0.8))',
          transition: 'opacity 1.83s ease-out'
        }} />
        
        {/* Content Container - Desktop Layout */}
        <div className="relative z-10 w-full h-full hidden md:block">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 h-full text-center">
            {/* Desktop Vertical Layout (matching mobile) */}
            <div className="flex flex-col justify-center items-center h-full">
              {/* Product Name */}
              <h1 className="hero-product-name lg:text-3xl xl:text-4xl text-[#1d1d1f] mb-3 mt-16 font-semibold text-3xl py-[10px]">
                Ximpul Flow
              </h1>
              
              {/* Main Headline */}
              <h2 className="hero-main-heading lg:text-5xl xl:text-6xl font-semibold leading-tight tracking-tight apple-gradient-text mb-6 text-6xl">
                Your Water. Your Freedom.
              </h2>
              
              {/* Product Image */}
              <div className="hero-product-image mb-6 flex justify-center">
                <img src="/lovable-uploads/eaa1a148-5371-4701-8c74-ebc7f19de062.png" alt="Ximpul Flow Water Bottle" className="max-w-xs lg:max-w-sm xl:max-w-md w-full h-auto object-contain" />
              </div>
              
              {/* Tagline with Gradient Background */}
              <p className="hero-tagline mb-5 gradient-text text-2xl font-bold">
                Will you keep paying for what falls from the sky?
              </p>
              
              {/* CTA Section */}
              <div className="hero-cta space-y-4">
                <Button size="default" className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 text-base font-medium rounded-full" onClick={() => document.getElementById('buy')?.scrollIntoView({
                  behavior: 'smooth'
                })}>
                  Buy
                </Button>
                
                {/* Pricing */}
                <p className="text-base text-[#1d1d1f] font-semibold">
                  From 1,090 BDT
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Content Container - Mobile Layout */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center md:hidden">
          {/* Product Name */}
          <h1 className="hero-product-name text-2xl text-[#1d1d1f] mb-4 font-semibold">
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
          
          {/* Tagline with Gradient Background */}
          <p className="hero-tagline mb-6 gradient-text">
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

      {/* Water Freedom Section - Apple Inspired */}
      <section className="apple-spacing bg-background fade-on-scroll">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Opening paragraph in Apple style */}
          <div className="mb-16">
            <p className="text-lg md:text-xl text-muted-foreground font-light leading-relaxed max-w-4xl mx-auto mb-12">
              In Bangladesh, most of us drink natural groundwater. Yet we buy bottled water — wrapped in plastic, sold at a premium. 
              <span className="text-foreground font-medium"> Ximpul Flow is your freedom.</span> A bottle to carry your own clean water — hot or cold — wherever life takes you. 
              Every refill makes water free again.
            </p>
          </div>

          {/* Section label */}
          <div className="mb-8">
            <p className="text-sm font-medium text-primary uppercase tracking-wider mb-4">FREEDOM</p>
          </div>

          {/* Main heading in Apple style */}
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-light text-foreground mb-20 leading-tight tracking-tight">
            Water is free. Why pay for it?
          </h2>

          {/* Image section */}
          <div className="relative max-w-5xl mx-auto">
            <div className="relative overflow-hidden rounded-3xl shadow-2xl">
              <img
                src="/lovable-uploads/f9439641-a560-4a74-91d0-703236696c10.png"
                alt="Pure water flowing into hands - the essence of freedom"
                className="w-full h-[500px] md:h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            </div>
            
            {/* Floating caption */}
            <div className="absolute bottom-8 left-8 right-8">
              <p className="text-white text-lg font-light leading-relaxed bg-black/40 backdrop-blur-sm rounded-2xl p-6 max-w-md mx-auto">
                Pure. Natural. Free as it should be.
              </p>
            </div>
          </div>

          {/* Call to action */}
          <div className="mt-16">
            <p className="text-2xl md:text-3xl font-light text-foreground mb-8">
              Will you choose freedom?
            </p>
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-12 py-4 text-lg font-medium rounded-full transition-all duration-300 hover:scale-105"
              onClick={() => document.getElementById('buy')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Choose Freedom
              <ChevronRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Premium but Affordable Section */}
      <section className="apple-spacing bg-gradient-to-br from-amber-50 to-orange-50 fade-on-scroll">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left side - Text content */}
            <div className="order-2 lg:order-1">
              <h2 className="text-4xl md:text-6xl lg:text-7xl font-light text-foreground mb-8 leading-tight tracking-tight">
                Premium but affordable
              </h2>
              <p className="text-xl text-muted-foreground font-light leading-relaxed">
                World-class quality that doesn't break the bank. Experience premium materials and innovative design at a price that makes sense.
              </p>
            </div>
            
            {/* Right side - Product image */}
            <div className="order-1 lg:order-2">
              <div className="relative">
                <img
                  src="/lovable-uploads/859d4aae-9ba7-49d6-9f8c-5dd7370a224c.png"
                  alt="Lightweight and compact water bottles"
                  className="w-full h-auto object-contain rounded-3xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Features Grid Section */}
      <section className="apple-spacing bg-gradient-to-br from-amber-50 to-orange-50 fade-on-scroll">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light text-foreground mb-6">
              Product Features
            </h2>
          </div>

          {/* Features grid matching the reference image layout */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Large feature card - spans 2 columns on lg screens */}
            <div className="lg:col-span-2 bg-gradient-to-br from-amber-100 to-orange-100 rounded-3xl p-8 lg:p-12">
              <div className="grid lg:grid-cols-2 gap-8 items-center h-full">
                <div>
                  <h3 className="text-2xl lg:text-3xl font-light text-foreground mb-4">
                    Dual-thread lid for fast opening
                  </h3>
                  <p className="text-lg text-muted-foreground font-light">
                    Choose between Standard Cap or Straw Cap — two drinking styles for your preference
                  </p>
                </div>
                <div className="flex justify-center">
                  <img
                    src="/lovable-uploads/bc4b68af-e1e3-4507-9871-146b30a058fb.png"
                    alt="Dual-thread lid demonstration"
                    className="w-32 h-32 lg:w-48 lg:h-48 object-contain"
                  />
                </div>
              </div>
            </div>

            {/* Smaller feature cards */}
            <div className="bg-gradient-to-br from-amber-100 to-orange-100 rounded-3xl p-8 text-center">
              <h3 className="text-xl font-medium text-foreground mb-4">
                316L thin interior wall
              </h3>
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-gray-200 to-gray-300 rounded-full flex items-center justify-center">
                  <Shield className="w-8 h-8 text-gray-600" />
                </div>
              </div>
              <p className="text-muted-foreground font-light">
                Premium 304 stainless steel construction
              </p>
            </div>

            <div className="bg-gradient-to-br from-amber-100 to-orange-100 rounded-3xl p-8 text-center">
              <div className="mb-4">
                <span className="text-5xl font-light text-amber-600">500</span>
                <span className="text-xl text-muted-foreground ml-2">mL</span>
              </div>
              <h3 className="text-xl font-medium text-foreground mb-2">volume</h3>
              <p className="text-muted-foreground font-light">
                Ideal for daily hydration
              </p>
            </div>

            <div className="bg-gradient-to-br from-amber-100 to-orange-100 rounded-3xl p-8 text-center">
              <h3 className="text-xl font-medium text-foreground mb-4">
                Tailless vacuum technology
              </h3>
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-200 to-blue-300 rounded-full flex items-center justify-center">
                  <Thermometer className="w-8 h-8 text-blue-600" />
                </div>
              </div>
              <p className="text-muted-foreground font-light">
                Double-wall vacuum insulation
              </p>
            </div>

            <div className="bg-gradient-to-br from-amber-100 to-orange-100 rounded-3xl p-8 text-center">
              <div className="mb-4">
                <span className="text-5xl font-light text-amber-600">24</span>
                <span className="text-xl text-muted-foreground ml-2">hours</span>
              </div>
              <h3 className="text-xl font-medium text-foreground mb-2">
                Heat preservation/ cold preservation
              </h3>
              <p className="text-muted-foreground font-light">
                Keeps drinks at perfect temperature
              </p>
            </div>
          </div>

          {/* Detailed features list */}
          <div className="mt-16 bg-white/50 backdrop-blur-sm rounded-3xl p-8 lg:p-12">
            <h3 className="text-2xl font-light text-foreground mb-8 text-center">Complete Feature Set</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="flex items-start space-x-3">
                <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="font-medium text-foreground">Capacity: 500ML</p>
                  <p className="text-sm text-muted-foreground">Ideal for daily hydration</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="font-medium text-foreground">Material: 304 Stainless Steel</p>
                  <p className="text-sm text-muted-foreground">Body, PP (Cap), Silicone (Sleeve)</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="font-medium text-foreground">24-Hour Insulation</p>
                  <p className="text-sm text-muted-foreground">Double-wall vacuum insulation</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="font-medium text-foreground">Two Cap Options</p>
                  <p className="text-sm text-muted-foreground">Standard Cap or Straw Cap</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="font-medium text-foreground">100% Leak-Proof</p>
                  <p className="text-sm text-muted-foreground">Safe for office, gym, school or travel</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="font-medium text-foreground">Portable Handle Rope</p>
                  <p className="text-sm text-muted-foreground">Easy to carry, hang on backpack</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="font-medium text-foreground">Silicone Sleeve (Optional)</p>
                  <p className="text-sm text-muted-foreground">Soft grip + impact protection</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="font-medium text-foreground">FDA Approved & BPA-Free</p>
                  <p className="text-sm text-muted-foreground">Safe for kids and adults</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="font-medium text-foreground">Fits in Car Holders</p>
                  <p className="text-sm text-muted-foreground">Designed for everyday convenience</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section - Emotional Paragraphs */}
      <section id="story" className="apple-spacing bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-32">
          {/* Story Block 1 */}
          <div className="grid lg:grid-cols-2 gap-16 items-center fade-on-scroll">
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl md:text-4xl font-light text-foreground mb-6 leading-relaxed">
                Water falls from the sky. It should be free.
              </h2>
              <p className="text-lg text-muted-foreground font-light">
                Yet we pay for it every day — trapped in plastic, polluted, overpriced. Ximpul Flow is here to change that.
              </p>
            </div>
            <div className="order-1 lg:order-2">
              <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80" alt="Plastic bottles problem" className="w-full rounded-3xl shadow-xl" />
            </div>
          </div>

          {/* Story Block 2 */}
          <div className="grid lg:grid-cols-2 gap-16 items-center fade-on-scroll">
            <div>
              <img src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&q=80" alt="Ximpul Flow lifestyle" className="w-full rounded-3xl shadow-xl" />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-light text-foreground mb-6 leading-relaxed">
                It is more than a bottle. It is a statement.
              </h2>
              <p className="text-lg text-muted-foreground font-light">
                <span className="text-primary font-medium">Make Water Free Again.</span> Safe beyond plastic, convenient beyond the ordinary. Hot or cold, exactly how you want it. Premium, affordable, and built with world-class quality — not just for luxury brands, but for Bangladesh.
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
                You take back the freedom to drink water as it was meant to be. You stop buying plastic water bottles again and again. You become part of a lifestyle that respects simplicity, health, and the planet.
              </p>
            </div>
            <div className="order-1 lg:order-2">
              <img src="https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=800&q=80" alt="Lifestyle with bottle" className="w-full rounded-3xl shadow-xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Product Features Section */}
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

      {/* Lifestyle Section - Photos with One-line Captions */}
      <section className="apple-spacing bg-background fade-on-scroll">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light text-foreground mb-6">
              Add it into your lifestyle
            </h2>
            <p className="text-xl text-muted-foreground font-light">
              Premium. Safer. Smarter.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {lifestyleImages.map((item, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-2xl overflow-hidden">
                <CardContent className="p-0">
                  <div className="relative overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.caption}
                      className="w-full h-80 object-cover transition-transform duration-500 hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-6 left-6 right-6">
                      <p className="text-white text-lg font-light leading-relaxed">{item.caption}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Movement Section - "Make Water Free Again" Story */}
      <section className="apple-spacing bg-gradient-to-br from-primary/10 to-primary/5 fade-on-scroll">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-4xl md:text-6xl font-light text-foreground mb-8 leading-tight">
              Make Water Free Again
            </h2>
            <p className="text-xl md:text-2xl font-light text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              Every refill is a small revolution. Be part of the movement. Say goodbye to plastic bottles. Say hello to flow.
            </p>
            <p className="text-lg text-muted-foreground font-light max-w-2xl mx-auto">
              Stop buying plastic bottles — choose freedom with Ximpul Flow. It's safer than plastic bottles — for your health and the planet.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Section - Clear Packages */}
      <ProductShowcase />

      {/* Buy Section with Color and Accessories Selection */}
      <section id="buy" className="apple-spacing bg-muted/30 fade-on-scroll">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light text-foreground mb-6">
              Customize Your Level
            </h2>
            <p className="text-xl text-muted-foreground font-light">
              Personalize with engraving
            </p>
          </div>

          <Card className="border-0 shadow-2xl rounded-3xl overflow-hidden">
            <CardContent className="p-12">
              {/* Color Selection */}
              <div className="mb-12">
                <h3 className="text-2xl font-light text-foreground mb-6">Choose Your Color</h3>
                <RadioGroup value={selectedColor} onValueChange={setSelectedColor} className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {colors.map(color => (
                    <div key={color.value} className="flex items-center space-x-3 p-4 rounded-2xl border-2 hover:border-primary/50 transition-colors">
                      <RadioGroupItem value={color.value} id={color.value} />
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 rounded-full border-2 border-border" style={{backgroundColor: color.color}} />
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
                <div className="grid grid-cols-1 gap-4">
                  {accessories.map(accessory => (
                    <div key={accessory.name} className={`p-4 rounded-2xl border-2 cursor-pointer transition-all ${selectedAccessories.includes(accessory.name) ? 'border-primary bg-primary/5' : 'border-border hover:border-primary/50'}`} onClick={() => handleAccessoryToggle(accessory.name)}>
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium">{accessory.name}</p>
                          <p className="text-sm text-muted-foreground">{accessory.note}</p>
                        </div>
                        <div className="text-right">
                          <p className="font-medium">+{accessory.price} BDT</p>
                          {selectedAccessories.includes(accessory.name) && <Check className="w-5 h-5 text-primary mt-1 ml-auto" />}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Personalization */}
              <div className="mb-12">
                <h3 className="text-2xl font-light text-foreground mb-6">Personalize</h3>
                <Input placeholder="Add your name or message (optional)" className="text-lg p-4 rounded-2xl border-2" />
                <p className="text-sm text-muted-foreground mt-2">Engraving service: +300 BDT</p>
              </div>

              {/* Price and Buy Button */}
              <div className="text-center">
                <div className="mb-6">
                  <p className="text-3xl font-light text-foreground">
                    Starting at <span className="text-primary font-medium">1,090 BDT</span>
                  </p>
                </div>
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-12 py-6 text-xl font-medium rounded-full transition-all duration-300 hover:scale-105 w-full md:w-auto">
                  Join the Movement
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
            {faqItems.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border border-border rounded-2xl px-6 bg-background">
                <AccordionTrigger className="text-left text-lg font-medium hover:no-underline">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground font-light leading-relaxed">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Final CTA - Emotional + Action */}
      <section className="apple-spacing bg-gradient-to-br from-primary/10 to-primary/5 fade-on-scroll">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-6xl font-light text-foreground mb-8 leading-tight">
            Will you pay again
            <br />
            for what falls from the sky?
          </h2>
          
          <p className="text-xl md:text-2xl font-light text-muted-foreground mb-12 max-w-2xl mx-auto">
            Or will you help make it free again — one refill at a time?
          </p>
          
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-12 py-6 text-xl font-medium rounded-full transition-all duration-300 hover:scale-105 shadow-2xl" onClick={() => document.getElementById('buy')?.scrollIntoView({
            behavior: 'smooth'
          })}>
            Join the Movement
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
    </div>
  );
};

export default Index;
