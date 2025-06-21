
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { RainbowButton } from '@/components/ui/rainbow-button';

export const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    setIsMobileMenuOpen(false);
    
    // If we're already on the home page, just scroll
    if (location.pathname === '/') {
      const element = document.getElementById(sectionId);
      if (element) {
        const navbarHeight = 48; // 12 * 4 = 48px (h-12 class)
        const elementPosition = element.offsetTop - navbarHeight;
        window.scrollTo({
          top: elementPosition,
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
          const navbarHeight = 48; // 12 * 4 = 48px (h-12 class)
          const elementPosition = element.offsetTop - navbarHeight;
          window.scrollTo({
            top: elementPosition,
            behavior: 'smooth'
          });
        }
      }, 100);
    }
  };

  const goToHome = () => {
    setIsMobileMenuOpen(false);
    navigate('/');
    // Scroll to top after navigation
    setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }, 100);
  };

  const navigateToPage = (path: string) => {
    setIsMobileMenuOpen(false);
    navigate(path);
    // Always scroll to top when navigating to a new page
    setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }, 100);
  };

  const navItems = [{
    name: 'Ximpul Flow',
    action: goToHome
  }, {
    name: 'Specs',
    action: () => navigateToPage('/specs')
  }, {
    name: 'Gallery',
    action: () => scrollToSection('gallery')
  }, {
    name: 'Compare',
    action: () => scrollToSection('products')
  }, {
    name: 'FAQ',
    action: () => scrollToSection('faq')
  }, {
    name: '#TruePrice',
    action: () => navigateToPage('/trueprice')
  }];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-background/95 backdrop-blur-sm border-b shadow-sm' : 'bg-white border-b border-white/10'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-12">
          {/* Logo - Now using the uploaded image */}
          <button onClick={goToHome} className="flex items-center space-x-2">
            <img 
              src="/lovable-uploads/84aae5ae-dcca-4942-a63a-ee14ebc01c94.png" 
              alt="Ximpul" 
              className="h-8 w-auto"
            />
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map(item => (
              <button 
                key={item.name} 
                onClick={item.action} 
                className="text-sm font-medium transition-colors text-black"
              >
                {item.name}
              </button>
            ))}
          </div>

          {/* Desktop Buy Button */}
          <div className="hidden md:block">
            <RainbowButton className="h-8 px-4 text-sm" onClick={() => scrollToSection('buy')}>
              Buy
            </RainbowButton>
          </div>

          {/* Mobile Buy Button and Menu Button */}
          <div className="md:hidden flex items-center space-x-2">
            <RainbowButton
              className="h-7 px-3 text-sm"
              onClick={() => scrollToSection('buy')}
            >
              Buy
            </RainbowButton>
            <button 
              className="p-2" 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-background border-t">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map(item => (
                <button 
                  key={item.name} 
                  onClick={item.action} 
                  className="block w-full text-left px-3 py-2 text-base font-medium text-muted-foreground hover:text-foreground"
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
