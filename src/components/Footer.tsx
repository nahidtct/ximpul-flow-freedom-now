
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
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
          <h3 className="text-3xl md:text-4xl font-light text-foreground mb-8">
            Ready to carry freedom?
          </h3>
          <Button 
            size="lg" 
            className="bg-black hover:bg-black/90 text-white px-8 py-4 text-lg font-medium rounded-2xl"
            onClick={() => scrollToSection('buy')}
          >
            Buy Now
          </Button>
        </div>
      </section>

      {/* Main Footer */}
      <footer className="bg-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Brand Quote */}
          <div className="text-center mb-12">
            <p className="text-xl md:text-2xl font-light leading-relaxed max-w-4xl mx-auto">
              "Every refill tells a story — of change, of freedom, of a better way to live."
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {/* Newsletter */}
            <div>
              <h4 className="text-lg font-medium mb-4">Join the Movement</h4>
              <p className="text-white/80 mb-4 font-light">Stay updated with our latest news and offers.</p>
              <div className="flex gap-2">
                <Input 
                  placeholder="Enter your email" 
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/60 rounded-2xl"
                />
                <Button className="bg-white text-slate-900 hover:bg-white/90 rounded-2xl">
                  Subscribe
                </Button>
              </div>
            </div>

            {/* Links */}
            <div>
              <h4 className="text-lg font-medium mb-4">Pages</h4>
              <div className="space-y-2">
                <Link to="/about" className="block text-white/80 hover:text-white transition-colors">
                  About Ximpul
                </Link>
                <Link to="/" className="block text-white/80 hover:text-white transition-colors">
                  Ximpul Flow
                </Link>
                <Link to="/trueprice" className="block text-white/80 hover:text-white transition-colors">
                  #TruePrice Explained
                </Link>
                <button 
                  onClick={() => scrollToSection('faq')} 
                  className="block text-white/80 hover:text-white transition-colors text-left"
                >
                  FAQ
                </button>
                <Link to="/terms-privacy" className="block text-white/80 hover:text-white transition-colors">
                  Terms & Privacy
                </Link>
                <Link to="/contact" className="block text-white/80 hover:text-white transition-colors">
                  Contact
                </Link>
              </div>
            </div>

            {/* Social */}
            <div>
              <h4 className="text-lg font-medium mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-white/80 hover:text-white transition-colors">
                  <Facebook className="w-6 h-6" />
                </a>
                <a href="#" className="text-white/80 hover:text-white transition-colors">
                  <Instagram className="w-6 h-6" />
                </a>
                <a href="#" className="text-white/80 hover:text-white transition-colors">
                  <Youtube className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>

          {/* Bottom */}
          <div className="border-t border-white/20 mt-12 pt-8 text-center">
            <p className="text-white/60 font-light">
              © 2024 Ximpul Flow. Made with love in Bangladesh.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};
