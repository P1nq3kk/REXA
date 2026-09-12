import { portfolioConfig } from '../data/config';
import { Badge } from './ui/Badge';
import { ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';

export const Projects = () => {
  const { projects } = portfolioConfig;

  return (
    <section id="projects" className="py-24 border-t border-border/50 relative">
      <div className="container mx-auto px-6 max-w-6xl">
        
        {/* Section Header */}
        <div className="text-center mb-16 flex flex-col items-center">
          <Badge>{projects.badge}</Badge>
          <h2 className="text-3xl md:text-4xl lg:text-[40px] font-bold mt-2">
            {projects.headline}
          </h2>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {projects.items.map((project, idx) => (
            <motion.a
              href={project.link}
              key={idx}
              className="glass-card group flex flex-col overflow-hidden hover:-translate-y-2 transition-all duration-300 hover:border-primary/50 hover:shadow-[0_10px_40px_rgba(124,77,255,0.15)] block"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              {/* Image Container */}
              <div className="aspect-[16/9] overflow-hidden relative border-b border-border">
                <div className="absolute top-4 left-4 z-10 text-xs font-bold font-mono text-white bg-black/50 backdrop-blur-md px-2 py-1 rounded">
                  0{idx + 1}
                </div>
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>

              {/* Content */}
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
                <p className="text-text-secondary text-sm mb-6 flex-1 line-clamp-2">
                  {project.description}
                </p>
                
                <div className="flex items-center text-sm font-medium text-text-secondary group-hover:text-primary transition-colors mt-auto">
                  Смотреть проект <ArrowUpRight className="w-4 h-4 ml-1 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Carousel Dots Placeholder (Visual only to match design) */}
        <div className="flex justify-center items-center gap-2 mt-12">
          <div className="w-2.5 h-2.5 rounded-full bg-primary"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-border"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-border"></div>
        </div>

      </div>
    </section>
  );
};
