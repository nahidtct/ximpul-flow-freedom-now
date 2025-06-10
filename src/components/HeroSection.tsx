import React from 'react';
import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';
export const HeroSection = () => {
  return <section className="hero-section h-screen flex flex-col justify-center items-center relative overflow-hidden py-0 mx-0 my-[65px]">
      {/* Background Gradient */}
      <div className="absolute inset-0" style={{
      background: 'linear-gradient(180deg, #D4EAF6, #F9F9F9 75%, #FFF)',
      transition: 'opacity 1.83s ease-out'
    }} />
      
      {/* Content Container - Desktop Layout */}
      <div className="relative z-10 w-full h-full hidden md:flex">
        <div className="w-full h-full flex flex-col justify-center items-center text-center px-4 sm:px-6 lg:px-8 py-0 my-[28px]">
          {/* Product Name */}
          <h1 className="hero-product-name text-black mb-8 font-semibold" style={{
          fontSize: '32px',
          lineHeight: '1.125',
          fontWeight: '600',
          letterSpacing: '.004em',
          fontFamily: 'SF Pro Display, SF Pro Icons, Helvetica Neue, Helvetica, Arial, sans-serif'
        }}>
            Ximpul Flow
          </h1>
          
          {/* Main Headline */}
          <h2 className="hero-main-heading text-black mb-12 font-semibold tracking-tight" style={{
          fontSize: '56px',
          lineHeight: '1.0714285714',
          fontWeight: '600',
          letterSpacing: '0em',
          fontFamily: 'SF Pro Display, SF Pro Icons, Helvetica Neue, Helvetica, Arial, sans-serif'
        }}>
            Your Water. Your Freedom.
          </h2>
          
          {/* Product Image - Centered and Large */}
          <div className="hero-product-image mb-12">
            <img src="/lovable-uploads/ac604d15-e2d6-44f4-8750-0fced0ad0285.png" alt="Ximpul Flow Water Bottle" className="max-w-sm lg:max-w-md xl:max-w-lg w-full h-auto object-contain" />
          </div>
          
          {/* Tagline */}
          <p className="hero-tagline text-xl lg:text-2xl mb-8">
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
            <p className="text-lg text-gray-600">
              From 1,090 BDT or 91 BDT/mo. for 12 mo.*
            </p>
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
            From 1,090 BDT or 91 BDT/mo. for 12 mo.*
          </p>
        </div>
      </div>
    </section>;
};