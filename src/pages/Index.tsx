
import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { BrandStorySection } from "@/components/BrandStorySection";
import { LifestyleGallery } from "@/components/LifestyleGallery";
import { FinalCTA } from "@/components/FinalCTA";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

const Index = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      
      {/* Water Freedom Section */}
      <section id="story" className="relative min-h-screen flex items-center justify-center bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <h2 className="text-5xl md:text-6xl font-light text-black leading-tight">
              Water is free.
              <br />
              <span className="text-gray-600">Why pay for it?</span>
            </h2>
            
            <div className="space-y-6 text-xl md:text-2xl font-light text-gray-800 leading-relaxed">
              <p>
                In Bangladesh, most of us drink natural groundwater. Yet we buy bottled water — wrapped in plastic, sold at a premium.
              </p>
              
              <p>
                <span className="text-black font-medium">Ximpul Flow</span> is your freedom. A bottle to carry your own clean water — hot or cold — wherever life takes you.
              </p>
              
              <p>
                Every refill makes water free again.
              </p>
              
              <p className="text-black font-medium">
                Will you choose freedom?
              </p>
            </div>
            
            <Button 
              size="lg" 
              className="bg-black hover:bg-black/90 text-white px-8 py-6 text-lg font-medium rounded-full transition-all duration-300 hover:scale-105"
              onClick={() => scrollToSection('buy')}
            >
              Choose Freedom
              <ChevronRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
          
          {/* Right Image */}
          <div className="relative">
            <img
              src="/lovable-uploads/f9439641-a560-4a74-91d0-703236696c10.png"
              alt="Ximpul Flow Water Bottle"
              className="w-full h-auto max-w-lg mx-auto"
            />
          </div>
        </div>
      </section>
      
      <BrandStorySection />
      <LifestyleGallery />
      <FinalCTA />
    </div>
  );
};

export default Index;
