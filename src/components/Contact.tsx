import React from 'react';
import { portfolioConfig } from '../data/config';
import { Badge } from './ui/Badge';
import { Button } from './ui/Button';
import { ArrowUpRight, Github, Linkedin, Twitter, Instagram, Mail, Phone, Quote } from 'lucide-react';
import { motion } from 'framer-motion';

const socialIcons: Record<string, React.ElementType> = {
  github: Github,
  linkedin: Linkedin,
  twitter: Twitter,
  instagram: Instagram,
};

export const Contact = () => {
  const { contact, personal } = portfolioConfig;

  return (
    <section id="contact" className="py-24 border-t border-border/50 relative bg-background-secondary/30">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-8">
          
          {/* Left - CTA */}
          <motion.div 
            className="flex flex-col items-start"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Badge>{contact.badge}</Badge>
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              {contact.headline}
            </h2>
            <p className="text-text-secondary mb-8">
              {contact.description}
            </p>
            <Button className="gap-2">
              Связаться <ArrowUpRight className="w-5 h-5" />
            </Button>
          </motion.div>

          {/* Center - Testimonial */}
          <motion.div 
            className="glass-card p-8 flex flex-col relative"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Quote className="absolute top-6 left-6 w-10 h-10 text-primary/20" />
            <p className="text-text-main font-medium italic relative z-10 pt-4 mb-8 flex-1">
              "{contact.testimonial.quote}"
            </p>
            <div className="flex items-center gap-4">
              <img 
                src={contact.testimonial.avatar} 
                alt={contact.testimonial.author} 
                className="w-12 h-12 rounded-full object-cover border-2 border-border"
              />
              <div>
                <h4 className="font-bold text-sm">{contact.testimonial.author}</h4>
                <p className="text-text-secondary text-xs">{contact.testimonial.role}</p>
              </div>
            </div>
          </motion.div>

          {/* Right - Info & Socials */}
          <motion.div 
            className="flex flex-col lg:pl-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-xs font-semibold text-text-secondary tracking-widest uppercase mb-6">
              Мои соцсети
            </h3>
            
            <div className="flex items-center gap-4 mb-10">
              {contact.socials.map((social, idx) => {
                const Icon = socialIcons[social.icon];
                return (
                  <a 
                    key={idx} 
                    href={social.link} 
                    className="w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center text-text-secondary hover:text-primary hover:border-primary/50 transition-all hover:-translate-y-1"
                    aria-label={social.name}
                  >
                    {Icon && <Icon className="w-4 h-4" />}
                  </a>
                )
              })}
            </div>

            <div className="flex flex-col gap-4">
              <a href={`mailto:${personal.email}`} className="flex items-center gap-3 text-text-secondary hover:text-primary transition-colors group">
                <Mail className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span className="font-medium text-sm">{personal.email}</span>
              </a>
              <a href={`tel:${personal.phone.replace(/[^0-9+]/g, '')}`} className="flex items-center gap-3 text-text-secondary hover:text-primary transition-colors group">
                <Phone className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span className="font-medium text-sm">{personal.phone}</span>
              </a>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
