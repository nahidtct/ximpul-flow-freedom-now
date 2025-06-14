
import React from 'react';

export const AppleIntelligenceSection = () => {
  return (
    <section className="bg-background fade-on-scroll py-24 sm:py-20">
      <div className="max-w-3xl mx-auto px-4 text-center flex flex-col items-center">
        <h2
          className="lg:text-[2.7rem] xl:text-[3.24rem] font-semibold leading-tight tracking-tight apple-gradient-text mb-3 text-[3.24rem]"
          style={{ lineHeight: 1.09 }}
        >
          Carry your freedom.
        </h2>
        <div className="apple-section-subtitle text-4xl sm:text-3xl md:text-5xl mb-5">
          One refill at a time.
        </div>
        <div className="apple-section-desc mx-auto max-w-2xl mb-6">
          In Bangladesh, we still rely on natural groundwater — but we buy bottled water daily, wrapped in plastic, priced unfairly.<br />
          <span className="hidden sm:inline"><br /></span>
          Ximpul Flow is your tool to change that. Built to last. Designed for freedom. This isn't just a bottle — it's a movement.
        </div>
        {/* Added image, large and rounded, centered */}
        <img
          src="/lovable-uploads/be7116ca-cede-48e6-be7a-34d9c8ac4362.png"
          alt="Water falling into cupped hands"
          className="mt-4 rounded-2xl shadow-xl w-full max-w-2xl object-cover"
        />
      </div>
    </section>
  );
};
