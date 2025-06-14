
import React from 'react';
import { Navigation } from '@/components/Navigation';
import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Footer } from '@/components/Footer';

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-light text-foreground mb-6 leading-tight">
            About Ximpul
          </h1>
          <p className="text-xl md:text-2xl font-light text-muted-foreground mb-8">
            The Brand Bringing #TruePrice to Bangladesh
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg max-w-none">
            <p className="text-xl font-light leading-relaxed mb-8">
              Ximpul is a new kind of brand from Bangladesh.
              A brand born with one purpose: to bring global-quality products to our people — at a price that is fair, honest, and transparent.
            </p>

            <p className="text-lg font-light leading-relaxed mb-8">
              In today's world, we all know the truth. Many so-called "branded" products sell at 5 to 10 times their actual cost. The factories that make them are open secrets. China is exposing these realities every day. But most Bangladeshis still pay inflated prices — or get stuck with poor-quality factory rejects when trying to shop "direct."
            </p>

            <div className="bg-muted/30 rounded-2xl p-8 my-12">
              <h2 className="text-2xl font-light mb-4">We believe this is not acceptable.</h2>
              <h2 className="text-2xl font-light mb-6">We believe #TruePrice is a right, not a luxury.</h2>
            </div>

            <p className="text-lg font-light leading-relaxed mb-8">
              At Ximpul, we bridge this gap.
              We connect you to the same factory-level quality you deserve — but with:
            </p>

            <div className="grid md:grid-cols-2 gap-6 my-12">
              <div className="bg-background border border-border rounded-2xl p-6">
                <h3 className="font-medium mb-2">100% curated and tested products</h3>
              </div>
              <div className="bg-background border border-border rounded-2xl p-6">
                <h3 className="font-medium mb-2">No scrap</h3>
              </div>
              <div className="bg-background border border-border rounded-2xl p-6">
                <h3 className="font-medium mb-2">No fake products</h3>
              </div>
              <div className="bg-background border border-border rounded-2xl p-6">
                <h3 className="font-medium mb-2">No inflated price for "branding"</h3>
              </div>
              <div className="bg-background border border-border rounded-2xl p-6">
                <h3 className="font-medium mb-2">Full transparency</h3>
              </div>
              <div className="bg-background border border-border rounded-2xl p-6">
                <h3 className="font-medium mb-2">Simple, eco-friendly packaging</h3>
                <p className="text-sm text-muted-foreground">(we do not believe in making you pay extra for a box!)</p>
              </div>
            </div>

            <div className="text-center my-12">
              <p className="text-lg font-light leading-relaxed mb-4">
                We do not copy brands.<br />
                We do not chase trends.<br />
                We focus on honest innovation and product integrity.
              </p>
            </div>

            <div className="bg-black text-white rounded-2xl p-8 text-center my-12">
              <h2 className="text-3xl font-light mb-4">Our mission is clear:</h2>
              <p className="text-2xl font-medium">"The best. For all. At #TruePrice."</p>
            </div>

            <p className="text-lg font-light leading-relaxed mb-8">
              And we are starting this journey with our first initiative: Ximpul Flow — a movement to help make water free again.
            </p>

            <p className="text-lg font-light leading-relaxed mb-8">
              We believe this is the future of responsible brands in Bangladesh.
              We invite you to be part of it.
            </p>

            <div className="text-center my-12">
              <h2 className="text-3xl font-light mb-4">Ximpul</h2>
              <p className="text-lg text-muted-foreground">
                #TruePrice | #OwnYourTruePrice | #BangladeshDeservesTheBest
              </p>
            </div>

            <div className="text-center">
              <Link to="/trueprice">
                <Button className="bg-black hover:bg-black/90 text-white px-8 py-4 text-lg font-medium rounded-2xl">
                  Learn About #TruePrice
                  <ChevronRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default About;
