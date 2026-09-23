import { useState, useEffect } from 'react';
import { portfolioConfig } from '../data/config';
import { Button } from './ui/Button';
import { Menu, X, ArrowUpRight, Mail, Phone } from 'lucide-react';

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [contactModalOpen, setContactModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Format WhatsApp link as a nice bonus
  const waLink = `https://wa.me/${portfolioConfig.personal.phone.replace(/[^0-9]/g, '')}`;

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled ? 'bg-background/80 backdrop-blur-md border-b border-border py-4' : 'bg-transparent py-6'
        }`}
      >
        <div className="container mx-auto px-6 max-w-6xl flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <svg viewBox="0 0 24 24" className="w-8 h-8 text-[#0055FF] fill-current group-hover:drop-shadow-[0_0_15px_rgba(0,85,255,0.8)] transition-all" xmlns="http://www.w3.org/2000/svg">
              <polygon points="14,2 4,13 13,13 10,22 20,11 11,11" />
            </svg>
            <span className="text-2xl font-black tracking-widest text-text-main mt-1">ISKRΛ</span>
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
            <Button size="sm" className="gap-2" onClick={() => setContactModalOpen(true)}>
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
            <Button className="mt-4 gap-2 w-full" onClick={() => { setContactModalOpen(true); setMobileMenuOpen(false); }}>
              Нанять меня <ArrowUpRight className="w-4 h-4" />
            </Button>
          </div>
        )}
      </header>

      {/* Contact Modal */}
      {contactModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <div className="glass-card w-full max-w-sm p-6 relative animate-in fade-in zoom-in duration-200">
            <button 
              onClick={() => setContactModalOpen(false)}
              className="absolute top-4 right-4 text-text-secondary hover:text-text-main transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
            
            <h3 className="text-xl font-bold mb-2">Связаться с нами</h3>
            <p className="text-text-secondary text-sm mb-6">Выберите удобный способ для связи:</p>
            
            <div className="flex flex-col gap-3">
              <a 
                href={`mailto:${portfolioConfig.personal.email}`}
                className="flex items-center gap-3 p-4 rounded-xl bg-background border border-border hover:border-primary/50 hover:bg-primary/5 transition-all group"
              >
                <div className="w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="font-semibold text-sm">Написать на почту</div>
                  <div className="text-xs text-text-secondary">{portfolioConfig.personal.email}</div>
                </div>
              </a>
              
              <a 
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-4 rounded-xl bg-background border border-border hover:border-primary/50 hover:bg-primary/5 transition-all group"
              >
                <div className="w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Phone className="w-5 h-5 text-green-500" />
                </div>
                <div>
                  <div className="font-semibold text-sm">Написать в WhatsApp</div>
                  <div className="text-xs text-text-secondary">{portfolioConfig.personal.phone}</div>
                </div>
              </a>
            </div>
            
          </div>
        </div>
      )}
    </>
  );
};
