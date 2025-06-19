
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
      

      {/* Main Footer - Simple horizontal layout */}
      <footer className="border-t bg-[#f5f5f7] py-[18px]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-[20px]">

          <div className="flex flex-col items-center">
            <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-9 gap-4 text-center mb-6">
              <button onClick={() => navigateToPage('/')} className="text-muted-foreground hover:text-foreground transition-colors">
                Ximpul Flow
              </button>
              <button onClick={() => navigateToPage('/specs')} className="text-muted-foreground hover:text-foreground transition-colors">
                Specs
              </button>
              <button onClick={() => scrollToSection('products')} className="text-muted-foreground hover:text-foreground transition-colors">
                Compare
              </button>
              <button onClick={() => scrollToSection('gallery')} className="text-muted-foreground hover:text-foreground transition-colors">
                Gallery
              </button>
              <button onClick={() => navigateToPage('/trueprice')} className="text-muted-foreground hover:text-foreground transition-colors">#TruePrice</button>
              <button onClick={() => scrollToSection('faq')} className="text-muted-foreground hover:text-foreground transition-colors">
                FAQ
              </button>
              <button onClick={() => navigateToPage('/about')} className="text-muted-foreground hover:text-foreground transition-colors">
                About
              </button>
              <button onClick={() => navigateToPage('/terms-privacy')} className="text-muted-foreground hover:text-foreground transition-colors">
                Terms & Privacy
              </button>
              <button onClick={() => navigateToPage('/contact')} className="text-muted-foreground hover:text-foreground transition-colors">
                Contact
              </button>
            </div>

            
          </div>

          <div className="text-center mt-8 pt-8 border-t py-0 my-0">
            <p className="text-muted-foreground font-light">© 2024 www.ximpul.com - Made with love, for Bangladesh.</p>
          </div>
        </div>
      </footer>
    </>;
};
