import { useState, useEffect } from 'react';
import { portfolioConfig } from '../data/config';
import { Button } from './ui/Button';
import { Code2, Menu, X, ArrowUpRight } from 'lucide-react';

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-background/80 backdrop-blur-md border-b border-border py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 max-w-6xl flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <Code2 className="w-8 h-8 text-primary group-hover:text-glow transition-colors" />
          <span className="text-xl font-bold tracking-tight">{portfolioConfig.personal.logo}</span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {portfolioConfig.nav.map((item, index) => (
            <a 
              key={index} 
              href={item.href}
              className="text-sm font-medium text-text-secondary hover:text-text-main transition-colors relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all hover:after:w-full"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Нанять меня CTA */}
        <div className="hidden md:block">
          <Button size="sm" className="gap-2">
            Нанять меня <ArrowUpRight className="w-4 h-4" />
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-text-secondary hover:text-text-main"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-card border-b border-border p-6 flex flex-col gap-4 shadow-xl">
          {portfolioConfig.nav.map((item, index) => (
            <a 
              key={index} 
              href={item.href}
              className="text-base font-medium text-text-secondary hover:text-primary transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <Button className="mt-4 gap-2 w-full">
            Нанять меня <ArrowUpRight className="w-4 h-4" />
          </Button>
        </div>
      )}
    </header>
  );
};
