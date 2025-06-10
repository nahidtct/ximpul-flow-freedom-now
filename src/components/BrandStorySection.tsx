
import React from 'react';

export const BrandStorySection = () => {
  return (
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
  );
};
