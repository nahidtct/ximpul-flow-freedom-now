
import React from 'react';
import { Instagram, Facebook, Youtube } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';
import { RainbowButton } from '@/components/ui/rainbow-button';

export const Footer = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToSection = (sectionId: string) => {
    // If we're already on the home page, just scroll
    if (location.pathname === '/') {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({
          behavior: 'smooth'
        });
      }
    } else {
      // If we're on a different page, navigate to home first, then scroll
      navigate('/');
      // Use setTimeout to ensure the page has loaded before scrolling
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({
            behavior: 'smooth'
          });
        }
      }, 100);
    }
  };

  const navigateToPage = (path: string) => {
    navigate(path);
    // Always scroll to top when navigating to a new page
    setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }, 100);
  };

  return <>
      {/* Pre-footer CTA */}
      <section className="py-16 bg-muted/50">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h3 className="text-3xl md:text-4xl font-light text-foreground mb-4">
            Ready to carry freedom?
          </h3>
          <p className="text-lg font-light leading-relaxed max-w-3xl mx-auto text-muted-foreground mb-8">
            "Every refill tells a story — of change, of freedom, of a better way to live."
          </p>
          <RainbowButton className="text-lg" onClick={() => scrollToSection('buy')}>
            Buy Now
          </RainbowButton>
        </div>
      </section>

      {/* Main Footer - Simple horizontal layout */}
      <footer className="bg-background border-t py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="flex flex-col items-center">
            <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-7 gap-4 text-center mb-6">
              <button onClick={() => navigateToPage('/')} className="text-muted-foreground hover:text-foreground transition-colors">
                Ximpul Flow
              </button>
              <button onClick={() => navigateToPage('/specs')} className="text-muted-foreground hover:text-foreground transition-colors">
                Specs
              </button>
              <button onClick={() => scrollToSection('products')} className="text-muted-foreground hover:text-foreground transition-colors">
                Compare
              </button>
              <button onClick={() => navigateToPage('/trueprice')} className="text-muted-foreground hover:text-foreground transition-colors">
                #TruePrice Explained
              </button>
              <button onClick={() => scrollToSection('faq')} className="text-muted-foreground hover:text-foreground transition-colors">
                FAQ
              </button>
              <button onClick={() => navigateToPage('/terms-privacy')} className="text-muted-foreground hover:text-foreground transition-colors">
                Terms & Privacy
              </button>
              <button onClick={() => navigateToPage('/contact')} className="text-muted-foreground hover:text-foreground transition-colors">
                Contact
              </button>
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
            <p className="text-muted-foreground font-light">© 2024 www.ximpul.com - Made with love in Bangladesh.</p>
          </div>
        </div>
      </footer>
    </>;
};
