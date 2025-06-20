
import React from 'react';
import { Button } from '@/components/ui/button';
import { ChevronRight, Check } from 'lucide-react';
import { Link } from 'react-router-dom';

const TruePrice = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-light text-foreground mb-6 leading-tight">
            #TruePrice Explained
          </h1>
          <p className="text-xl md:text-2xl font-light text-muted-foreground mb-8">
            The Heart of Ximpul
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-light mb-8">What is #TruePrice?</h2>
            
            <p className="text-xl font-light leading-relaxed mb-8">
              #TruePrice is the core philosophy of Ximpul.<br />
              It is the reason this brand exists.
            </p>

            <div className="bg-muted/30 rounded-2xl p-8 my-12">
              <p className="text-lg font-light leading-relaxed mb-4">
                In today's world, branded products hide the truth.
                Many products you buy for 5x or 10x the actual cost are not expensive because of quality — they are expensive because of branding, marketing, and inflated positioning.
              </p>
              <p className="text-lg font-medium">
                We believe the new generation of Bangladesh is too smart for this.
              </p>
            </div>

            <p className="text-lg font-light leading-relaxed mb-12">
              Ximpul was created to bring the #TruePrice of global-quality products to Bangladesh — with no compromise on quality, no fake promises, and full transparency.
            </p>

            <div className="bg-black text-white rounded-2xl p-8 my-12">
              <h3 className="text-2xl font-light mb-6 text-center">#TruePrice means:</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Check className="w-6 h-6 mt-0.5 flex-shrink-0" />
                  <p className="text-lg">You get the same factory quality as top global brands.</p>
                </div>
                <div className="flex items-start space-x-3">
                  <Check className="w-6 h-6 mt-0.5 flex-shrink-0" />
                  <p className="text-lg">You do not pay inflated brand tax.</p>
                </div>
                <div className="flex items-start space-x-3">
                  <Check className="w-6 h-6 mt-0.5 flex-shrink-0" />
                  <p className="text-lg">You do not buy scrap pretending to be "factory-direct."</p>
                </div>
                <div className="flex items-start space-x-3">
                  <Check className="w-6 h-6 mt-0.5 flex-shrink-0" />
                  <p className="text-lg">You get simple, honest packaging — your money goes to the product, not a box.</p>
                </div>
                <div className="flex items-start space-x-3">
                  <Check className="w-6 h-6 mt-0.5 flex-shrink-0" />
                  <p className="text-lg">You join a community that respects truth and innovation.</p>
                </div>
              </div>
            </div>

            <p className="text-lg font-light leading-relaxed mb-8">
              Our first initiative, Ximpul Flow, is about making water free again — empowering you to carry your own water, with the best product at #TruePrice.
            </p>

            <div className="bg-muted/30 rounded-2xl p-8 my-12 text-center">
              <p className="text-lg font-light leading-relaxed mb-4">
                But we will not stop here.<br />
                #TruePrice is our permanent brand philosophy.<br />
                Every Ximpul product will always follow this principle — because you deserve the best — at the right price.
              </p>
            </div>

            <div className="text-center my-12">
              <h2 className="text-3xl font-light mb-6">Join the movement.</h2>
              <p className="text-lg text-muted-foreground mb-8">
                #TruePrice | #OwnYourTruePrice
              </p>
              
              <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
                <Link to="/" onClick={() => window.scrollTo(0, 0)}>
                  <Button className="bg-black hover:bg-black/90 text-white px-8 py-4 text-lg font-medium rounded-2xl w-full sm:w-auto">
                    Shop Ximpul Flow
                    <ChevronRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link to="/about" onClick={() => window.scrollTo(0, 0)}>
                  <Button variant="outline" className="px-8 py-4 text-lg font-medium rounded-2xl w-full sm:w-auto">
                    Learn About Ximpul
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TruePrice;
