import React from 'react';
import { Check, Shield, Thermometer } from 'lucide-react';
import { GlowingEffect } from '@/components/ui/glowing-effect';
import { useNavigate } from 'react-router-dom';
import { SpecsPulseBeams } from '@/components/ui/specs-pulse-beams';

export const ProductFeaturesSection = () => {
  const navigate = useNavigate();

  const goToSpecs = () => {
    navigate('/specs');
  };

  return (
    <section className="apple-spacing bg-background fade-on-scroll">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="lg:text-[2.7rem] xl:text-[2.916rem] font-semibold leading-tight tracking-tight apple-gradient-text mb-6 text-[3.24rem]" style={{ lineHeight: 1.09 }}>
            Product Features
          </h2>
        </div>

        {/* Mobile-first responsive grid - 2 columns on mobile, responsive on larger screens */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6">
          {/* Updated large feature card */}
          <div className="relative col-span-2 lg:col-span-2 rounded-2xl md:rounded-3xl">
            <GlowingEffect
              spread={40}
              glow={true}
              disabled={false}
              proximity={64}
              inactiveZone={0.01}
              borderWidth={1}
            />
            <div className="h-full bg-muted/30 rounded-2xl md:rounded-3xl p-4 md:p-8 lg:p-12">
              <div className="grid md:grid-cols-2 gap-4 md:gap-8 items-center h-full">
                <div>
                  <h3 className="text-lg md:text-2xl lg:text-3xl font-light text-foreground mb-2 md:mb-4">
                    500ml Premium 304 Stainless Steel
                  </h3>
                  <p className="text-sm md:text-lg text-muted-foreground font-light">
                    Perfect size for daily use — fits in bags, car holders, and backpack pockets
                  </p>
                </div>
                <div className="flex justify-center">
                  <img
                    src="/lovable-uploads/4b5a8dad-1d37-4033-9f2d-86550eef1db6.png"
                    alt="Premium steel bottles with different grip textures"
                    className="w-16 h-16 md:w-32 md:h-32 lg:w-48 lg:h-48 object-contain"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Smaller feature cards - updated as requested */}
          <div className="relative rounded-2xl md:rounded-3xl">
            <GlowingEffect
              spread={40}
              glow={true}
              disabled={false}
              proximity={64}
              inactiveZone={0.01}
              borderWidth={1}
            />
            <div className="h-full bg-muted/30 rounded-2xl md:rounded-3xl p-3 md:p-8 text-center">
              <h3 className="text-sm md:text-xl font-medium text-foreground mb-2 md:mb-4">
                Two lid options: classic or straw
              </h3>
              <div className="flex justify-center mb-2 md:mb-4">
                <div className="w-8 h-8 md:w-16 md:h-16 bg-muted rounded-full flex items-center justify-center">
                  <Shield className="w-4 h-4 md:w-8 md:h-8 text-muted-foreground" />
                </div>
              </div>
              <p className="text-xs md:text-base text-muted-foreground font-light">
                Choose your preferred way to sip
              </p>
            </div>
          </div>

          <div className="relative rounded-2xl md:rounded-3xl">
            <GlowingEffect
              spread={40}
              glow={true}
              disabled={false}
              proximity={64}
              inactiveZone={0.01}
              borderWidth={1}
            />
            <div className="h-full bg-muted/30 rounded-2xl md:rounded-3xl p-3 md:p-8 text-center">
              <h3 className="text-sm md:text-xl font-medium text-foreground mb-2 md:mb-4">
                BPA-free, leak-proof, FDA-grade
              </h3>
              <div className="flex justify-center mb-2 md:mb-4">
                <div className="w-8 h-8 md:w-16 md:h-16 bg-muted rounded-full flex items-center justify-center">
                  <Shield className="w-4 h-4 md:w-8 md:h-8 text-muted-foreground" />
                </div>
              </div>
              <p className="text-xs md:text-base text-muted-foreground font-light">
                Built for family safety
              </p>
            </div>
          </div>

          <div className="relative rounded-2xl md:rounded-3xl">
            <GlowingEffect
              spread={40}
              glow={true}
              disabled={false}
              proximity={64}
              inactiveZone={0.01}
              borderWidth={1}
            />
            <div className="h-full bg-muted/30 rounded-2xl md:rounded-3xl p-3 md:p-8 text-center">
              <h3 className="text-sm md:text-xl font-medium text-foreground mb-2 md:mb-4">
                Keeps water hot/cold for up to 24 hrs
              </h3>
              <div className="flex justify-center mb-2 md:mb-4">
                <div className="w-8 h-8 md:w-16 md:h-16 bg-muted rounded-full flex items-center justify-center">
                  <Thermometer className="w-4 h-4 md:w-8 md:h-8 text-muted-foreground" />
                </div>
              </div>
              <p className="text-xs md:text-base text-muted-foreground font-light">
                Double-wall vacuum insulation
              </p>
            </div>
          </div>

          {/* Updated volume/usage card */}
          <div className="relative rounded-2xl md:rounded-3xl">
            <GlowingEffect
              spread={40}
              glow={true}
              disabled={false}
              proximity={64}
              inactiveZone={0.01}
              borderWidth={1}
            />
            <div className="h-full bg-muted/30 rounded-2xl md:rounded-3xl p-3 md:p-8 text-center">
              <div className="mb-2 md:mb-4">
                <span className="text-base md:text-xl lg:text-2xl font-light text-primary">
                  Safe for school, office, gym, travel
                </span>
              </div>
              {/* Title is just hidden, to keep visual spacing */}
              <h3 className="text-sm md:text-xl font-medium text-foreground mb-1 md:mb-2 invisible">volume</h3>
              {/* No additional description, for cleanness */}
            </div>
          </div>
        </div>

        {/* Detailed features list */}
        <div className="mt-16 bg-muted/20 backdrop-blur-sm rounded-3xl p-8 lg:p-12">
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

        {/* Animated PulseBeams button for "View Full Specs" */}
        <div className="text-center mt-12">
          <SpecsPulseBeams onClick={goToSpecs} />
        </div>
      </div>
    </section>
  );
};
