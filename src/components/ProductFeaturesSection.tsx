
import React from 'react';
import { Shield, Thermometer } from 'lucide-react';

export const ProductFeaturesSection = () => {
  return (
    <section className="apple-spacing bg-background fade-on-scroll">
      <div className="max-w-7xl mx-auto px-2 md:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-foreground mb-6">
            Product Features
          </h2>
        </div>
        {/* Feature grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {/* Main Feature Card */}
          <div className="col-span-1 md:col-span-2 bg-white rounded-3xl p-6 flex flex-col md:flex-row items-center justify-between shadow-sm">
            <div>
              <h3 className="text-2xl font-light text-foreground mb-2">
                500ml Premium 304 Stainless Steel
              </h3>
              <p className="text-base text-muted-foreground font-light max-w-xs">
                Perfect size for daily use — fits in bags, car holders, and backpack pockets
              </p>
            </div>
            <div className="mt-6 md:mt-0 flex justify-center items-center w-full md:w-auto">
              <img
                src="/lovable-uploads/16c1bc75-1a09-4086-9fb8-0b6e8e51017f.png"
                alt="Product Feature"
                className="rounded-xl w-44 h-32 object-cover object-center"
                style={{ background: '#f5f5f5' }}
              />
            </div>
          </div>
          {/* Classic/Straw Lid */}
          <div className="bg-white rounded-3xl p-6 flex flex-col items-center justify-center shadow-sm">
            <h3 className="text-base md:text-lg font-medium text-foreground mb-2 text-center">
              Two lid options: classic or straw
            </h3>
            <div className="flex items-center justify-center mb-2">
              <span className="bg-gray-50 rounded-full flex items-center justify-center w-12 h-12">
                <Shield className="w-6 h-6 text-muted-foreground" />
              </span>
            </div>
            <p className="text-sm text-muted-foreground font-light text-center">
              Choose your preferred way to sip
            </p>
          </div>
          {/* BPA-free */}
          <div className="bg-white rounded-3xl p-6 flex flex-col items-center justify-center shadow-sm">
            <h3 className="text-base md:text-lg font-medium text-foreground mb-2 text-center">
              BPA-free, leak-proof, FDA-grade
            </h3>
            <div className="flex items-center justify-center mb-2">
              <span className="bg-gray-50 rounded-full flex items-center justify-center w-12 h-12">
                <Shield className="w-6 h-6 text-muted-foreground" />
              </span>
            </div>
            <p className="text-sm text-muted-foreground font-light text-center">
              Built for family safety
            </p>
          </div>
          {/* Hot/Cold */}
          <div className="bg-white rounded-3xl p-6 flex flex-col items-center justify-center shadow-sm">
            <h3 className="text-base md:text-lg font-medium text-foreground mb-2 text-center">
              Keeps water hot/cold for up to 24 hrs
            </h3>
            <div className="flex items-center justify-center mb-2">
              <span className="bg-gray-50 rounded-full flex items-center justify-center w-12 h-12">
                <Thermometer className="w-6 h-6 text-muted-foreground" />
              </span>
            </div>
            <p className="text-sm text-muted-foreground font-light text-center">
              Double-wall vacuum insulation
            </p>
          </div>
          {/* Safe for usage */}
          <div className="bg-white rounded-3xl p-6 flex flex-col items-center justify-center shadow-sm">
            <h3 className="text-base md:text-lg font-medium text-red-500 mb-4 text-center" style={{ color: '#ff4040', fontWeight: 500 }}>
              Safe for school, office, gym, <br className="hidden md:block" /> travel
            </h3>
            {/* Empty for spacing only, matches screenshot */}
          </div>
        </div>
      </div>
    </section>
  );
};
