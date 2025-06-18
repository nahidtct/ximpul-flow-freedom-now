
import React from 'react';
import { CircularRevealHeading } from '@/components/ui/circular-reveal-heading';

export const CircularRevealSection = () => {
  const items = [
    {
      text: "PREMIUM STEEL",
      image: "/lovable-uploads/4b5a8dad-1d37-4033-9f2d-86550eef1db6.png"
    },
    {
      text: "DUAL CAP SYSTEM",
      image: "/lovable-uploads/58ab89a6-dcd6-4dbd-8f34-f33d92e0dad9.png"
    },
    {
      text: "24HR INSULATION",
      image: "/lovable-uploads/6d02ee6b-27ea-423a-b207-0225e530b813.png"
    },
    {
      text: "LEAK PROOF",
      image: "/lovable-uploads/f20b8efa-8169-4ff2-9742-0d729584792c.png"
    },
    {
      text: "BPA FREE",
      image: "/lovable-uploads/ec80b5a4-7467-4700-acfe-06bf9d6b46e1.png"
    }
  ];

  return (
    <section className="apple-spacing bg-background fade-on-scroll">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="lg:text-[2.7rem] xl:text-[3.24rem] font-semibold leading-tight tracking-tight apple-gradient-text mb-6 text-[3.24rem]" style={{ lineHeight: 1.09 }}>
            Experience Innovation
          </h2>
          <p className="text-lg text-muted-foreground font-light max-w-2xl mx-auto">
            Hover over each feature to discover the premium quality behind Ximpul Flow
          </p>
        </div>

        {/* Centered Circular Reveal Component */}
        <div className="flex justify-center items-center min-h-[600px]">
          <CircularRevealHeading
            items={items}
            centerText={
              <div className="text-center">
                <div className="text-2xl font-bold apple-gradient-text mb-2">
                  XIMPUL
                </div>
                <div className="text-lg text-muted-foreground font-light">
                  Flow
                </div>
              </div>
            }
            size="lg"
          />
        </div>
      </div>
    </section>
  );
};
