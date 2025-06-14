
import React from 'react';
import { Button } from '@/components/ui/button';
import { Instagram, Facebook, Youtube } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      {/* Pre-footer CTA */}
      <section className="py-16 bg-muted/50">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h3 className="text-3xl md:text-4xl font-light text-foreground mb-4">
            Ready to carry freedom?
          </h3>
          <p className="text-lg md:text-xl font-light leading-relaxed max-w-3xl mx-auto text-muted-foreground mb-8">
            "Every refill tells a story — of change, of freedom, of a better way to live."
          </p>
          <Button 
            size="lg" 
            className="bg-black hover:bg-black/90 text-white px-8 py-4 text-lg font-medium rounded-2xl"
            onClick={() => scrollToSection('buy')}
          >
            Buy Now
          </Button>
        </div>
      </section>

      {/* Main Footer - Simple horizontal layout */}
      <footer className="bg-background border-t py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">


          <div className="flex flex-col items-center">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 text-center mb-6">
              <Link to="/about" className="text-muted-foreground hover:text-foreground transition-colors">
                About Ximpul
              </Link>
              <Link to="/" className="text-muted-foreground hover:text-foreground transition-colors">
                Ximpul Flow
              </Link>
              <Link to="/trueprice" className="text-muted-foreground hover:text-foreground transition-colors">
                #TruePrice Explained
              </Link>
              <Link to="/faq" className="text-muted-foreground hover:text-foreground transition-colors">
                FAQ
              </Link>
              <Link to="/terms-privacy" className="text-muted-foreground hover:text-foreground transition-colors">
                Terms & Privacy
              </Link>
              <Link to="/contact" className="text-muted-foreground hover:text-foreground transition-colors">
                Contact
              </Link>
            </div>

            <div className="flex space-x-6 mt-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Youtube className="w-6 h-6" />
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
    </>
  );
};
