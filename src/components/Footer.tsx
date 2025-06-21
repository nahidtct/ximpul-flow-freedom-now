
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
  
  return (
    <footer className="border-t bg-[#f5f5f7] py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <div className="text-center md:text-left">
            <div className="mb-4">
              <img 
                src="/lovable-uploads/84aae5ae-dcca-4942-a63a-ee14ebc01c94.png" 
                alt="Ximpul" 
                className="h-8 w-auto mx-auto md:mx-0"
              />
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              World-class quality at #TruePrice.<br />
              Made with love, for Bangladesh.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="text-center">
            <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
            <div className="grid grid-cols-3 gap-2 text-sm">
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
              <button onClick={() => navigateToPage('/trueprice')} className="text-muted-foreground hover:text-foreground transition-colors">
                #TruePrice
              </button>
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

          {/* Social & Contact */}
          <div className="text-center md:text-right">
            <h4 className="font-semibold text-foreground mb-4">Connect</h4>
            <div className="flex justify-center md:justify-end space-x-4 mb-4">
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
            <p className="text-sm text-muted-foreground">Follow us for updates</p>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-gray-300">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <p className="text-sm text-muted-foreground">© 2025 www.ximpul.com</p>
            </div>
            
            <div className="text-center">
              <a 
                href="https://sohub.com.bd/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <img 
                  src="/lovable-uploads/ace41ae7-2ae1-4476-85cf-1d1637a02cb0.png" 
                  alt="Solution Hub Technologies Logo" 
                  className="w-6 h-6"
                />
                <span>Solution Hub Technologies</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
