import React, { useState, useEffect } from 'react';
import { Menu, X, Sparkles } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const navLinks = ['Home', 'Collections', 'Custom', 'About', 'Contact'];

  return (
    <>
      <nav 
        className={`fixed w-full z-50 transition-all duration-500 ${
          scrolled 
            ? 'glass-effect shadow-2xl backdrop-blur-xl' 
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
          {/* Logo Section */}
          <div className="flex items-center space-x-16">
            <a href="#home" className="flex items-center space-x-3 group">
              <div className="relative">
                <Sparkles className="w-6 h-6 text-yellow-500 transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110" />
                <div className="absolute inset-0 w-6 h-6 bg-yellow-500/20 rounded-full blur-md group-hover:blur-lg transition-all duration-300"></div>
              </div>
              <h1 className="text-3xl font-display font-bold tracking-wider gradient-text transition-all duration-300 group-hover:tracking-widest">
                MADRE · PACKAGES
              </h1>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-10">
              {navLinks.map((link, index) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="relative text-xs font-sans tracking-[0.2em] uppercase transition-all duration-300 hover:text-yellow-500 group"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  {link}
                  {/* Underline animation */}
                  <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-gradient-to-r from-yellow-500 to-yellow-300 transition-all duration-300 group-hover:w-full"></span>
                </a>
              ))}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden relative w-10 h-10 flex items-center justify-center rounded-lg hover:bg-white/5 transition-all duration-300 group"
            aria-label="Toggle menu"
          >
            <div className="relative w-6 h-6">
              <Menu 
                className={`absolute inset-0 w-6 h-6 transition-all duration-300 ${
                  isMenuOpen ? 'opacity-0 rotate-90 scale-0' : 'opacity-100 rotate-0 scale-100'
                }`}
              />
              <X 
                className={`absolute inset-0 w-6 h-6 transition-all duration-300 ${
                  isMenuOpen ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-90 scale-0'
                }`}
              />
            </div>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-500 ${
          isMenuOpen 
            ? 'opacity-100 pointer-events-auto' 
            : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Backdrop */}
        <div 
          className={`absolute inset-0 bg-black/60 backdrop-blur-xl transition-all duration-500 ${
            isMenuOpen ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={() => setIsMenuOpen(false)}
        ></div>

        {/* Menu Content */}
        <div 
          className={`relative h-full flex flex-col items-center justify-center transition-all duration-700 ${
            isMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-8 opacity-0'
          }`}
        >
          {/* Decorative elements */}
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-yellow-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>

          <div className="relative space-y-8">
            {navLinks.map((link, index) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                onClick={() => setIsMenuOpen(false)}
                className={`block text-center text-3xl font-display tracking-[0.15em] uppercase hover:text-yellow-500 transition-all duration-500 hover:tracking-[0.25em] hover:scale-110 ${
                  isMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'
                }`}
                style={{ 
                  transitionDelay: isMenuOpen ? `${index * 80 + 200}ms` : '0ms'
                }}
              >
                <span className="relative inline-block">
                  {link}
                  <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-gradient-to-r from-transparent via-yellow-500 to-transparent transition-all duration-300 hover:w-full"></span>
                </span>
              </a>
            ))}
          </div>

          {/* Mobile menu footer decoration */}
          <div 
            className={`absolute bottom-12 flex items-center space-x-2 transition-all duration-700 ${
              isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
            }`}
            style={{ transitionDelay: isMenuOpen ? '600ms' : '0ms' }}
          >
            <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-yellow-500/50"></div>
            <Sparkles className="w-4 h-4 text-yellow-500/50" />
            <div className="h-[1px] w-12 bg-gradient-to-l from-transparent to-yellow-500/50"></div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .glass-effect {
          background: rgba(0, 0, 0, 0.7);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }

        .gradient-text {
          background: linear-gradient(135deg, #fff 0%, #f0e68c 50%, #ffd700 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
      `}</style>
    </>
  );
};

export default Navbar;