import React from 'react';
import { portfolioConfig } from '../data/config';
import { Button } from './ui/Button';
import { Badge } from './ui/Badge';
import { ArrowUpRight, Download } from 'lucide-react';
import { motion } from 'framer-motion';

export const Hero = () => {
  const { hero, personal } = portfolioConfig;

  return (
    <section id="home" className="pt-32 pb-20 min-h-screen flex items-center relative overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] -z-10 pointer-events-none"></div>
      <div className="absolute bottom-0 left-1/4 w-[300px] h-[300px] bg-secondary/10 rounded-full blur-[100px] -z-10 pointer-events-none"></div>

      <div className="container mx-auto px-6 max-w-6xl">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-8">
          
          {/* Left Content */}
          <motion.div 
            className="flex-1 text-left"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Badge>{hero.badge}</Badge>
            
            <h1 className="text-5xl md:text-6xl lg:text-[64px] font-bold leading-tight mb-4 tracking-tight">
              {hero.headlinePart1}
              <span className="text-gradient">{personal.name}</span>
              <br />
              {hero.headlinePart2}
            </h1>
            
            <p className="text-text-secondary text-lg mb-8 max-w-lg leading-relaxed">
              {hero.description}
            </p>
            
            <div className="flex flex-wrap items-center gap-4 mb-12">
              <Button className="gap-2">
                View My Work <ArrowUpRight className="w-5 h-5" />
              </Button>
              <Button variant="secondary" className="gap-2">
                Download CV <Download className="w-5 h-5" />
              </Button>
            </div>

            <div>
              <p className="text-xs font-semibold text-text-secondary tracking-widest uppercase mb-4">
                Technologies I Work With
              </p>
              <div className="flex flex-wrap items-center gap-4">
                {hero.techIcons.map((tech, idx) => (
                  <motion.div 
                    key={idx}
                    whileHover={{ scale: 1.1, y: -2 }}
                    className="w-10 h-10 flex items-center justify-center bg-card border border-border rounded-lg p-2 transition-colors hover:border-primary/50 hover:shadow-[0_0_15px_rgba(124,77,255,0.2)]"
                  >
                    <img src={tech.src} alt={tech.name} className="w-full h-full object-contain" />
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Content - Portrait */}
          <motion.div 
            className="flex-1 relative w-full max-w-md lg:max-w-none mx-auto"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* Big Circular Background behind portrait */}
            <div className="absolute inset-0 bg-primary-gradient rounded-full blur-[80px] opacity-20 -z-10 transform translate-y-10"></div>
            
            <div className="relative z-10 w-full aspect-square md:aspect-[4/5] rounded-[2rem] overflow-hidden border border-border bg-card/50 backdrop-blur-sm p-4">
               {/* Inner glow and portrait */}
               <div className="w-full h-full rounded-3xl overflow-hidden relative bg-gradient-to-br from-primary/30 to-secondary/10">
                  <img 
                    src={personal.portrait} 
                    alt={personal.fullName} 
                    className="absolute bottom-0 w-full h-auto object-cover object-bottom filter contrast-125"
                  />
               </div>
            </div>

            {/* Dotted pattern decoration */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-[radial-gradient(#4F46E5_2px,transparent_2px)] [background-size:12px_12px] opacity-30 -z-10"></div>

            {/* Floating Code Card */}
            <motion.div 
              className="absolute -right-8 bottom-20 glass-card p-4 rounded-xl text-xs font-mono text-left hidden md:block max-w-[240px] shadow-2xl border-primary/30"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              whileHover={{ y: -5 }}
            >
              <div className="flex items-center gap-2 mb-2 pb-2 border-b border-border">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500"></div>
                </div>
                <span className="text-text-secondary opacity-70">developer.js</span>
              </div>
              <div className="text-text-main">
                <span className="text-primary">const</span> developer = {'{'} <br/>
                &nbsp;&nbsp;name: <span className="text-green-400">"{personal.name}"</span>,<br/>
                &nbsp;&nbsp;skills: [<span className="text-green-400">"React"</span>, <span className="text-green-400">"TS"</span>],<br/>
                &nbsp;&nbsp;passion: <span className="text-green-400">"Web"</span><br/>
                {'}'};
              </div>
            </motion.div>

          </motion.div>
        </div>
      </div>
    </section>
  );
};
