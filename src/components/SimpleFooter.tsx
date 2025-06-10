
import React from 'react';
import { Facebook, Instagram, Youtube } from 'lucide-react';

export const SimpleFooter = () => {
  return (
    <footer className="bg-background border-t py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <p className="text-lg md:text-xl font-light leading-relaxed max-w-3xl mx-auto text-muted-foreground">
            "Every refill tells a story — of change, of freedom, of a better way to live."
          </p>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          {/* Links */}
          <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-6 text-center">
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              Refund Policy
            </a>
          </div>

          {/* Social Icons */}
          <div className="flex space-x-4">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Youtube className="w-5 h-5" />
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
  );
};
