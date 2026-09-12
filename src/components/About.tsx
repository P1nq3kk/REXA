import React from 'react';
import { portfolioConfig } from '../data/config';
import { Badge } from './ui/Badge';
import { Button } from './ui/Button';
import { Calendar, Code, Smile, Trophy } from 'lucide-react';
import { motion } from 'framer-motion';

const iconMap: Record<string, React.ReactNode> = {
  calendar: <Calendar className="w-5 h-5 text-primary" />,
  code: <Code className="w-5 h-5 text-primary" />,
  smile: <Smile className="w-5 h-5 text-primary" />,
  trophy: <Trophy className="w-5 h-5 text-primary" />
};

export const About = () => {
  const { about } = portfolioConfig;

  return (
    <section id="about" className="py-24 border-t border-border/50 relative">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          {/* Left Content */}
          <motion.div 
            className="flex-1"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <Badge>{about.badge}</Badge>
            <h2 className="text-3xl md:text-4xl lg:text-[40px] font-bold mb-6 leading-tight whitespace-pre-line">
              {about.headline}
            </h2>
            <p className="text-text-secondary text-lg mb-8 leading-relaxed max-w-lg">
              {about.description}
            </p>
            <Button variant="secondary" className="gap-2">
              Узнать обо мне больше
            </Button>
          </motion.div>

          {/* Right Content - Stats Grid */}
          <motion.div 
            className="flex-1 w-full"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="grid grid-cols-2 gap-4 md:gap-6">
              {about.stats.map((stat, idx) => (
                <div 
                  key={idx} 
                  className="glass-card p-6 md:p-8 flex flex-col gap-4 hover:border-primary/30 transition-colors group"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                    {iconMap[stat.icon]}
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold mb-1">{stat.value}</h3>
                    <p className="text-sm text-text-secondary font-medium">{stat.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
