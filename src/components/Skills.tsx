import { portfolioConfig } from '../data/config';
import { Badge } from './ui/Badge';
import { motion } from 'framer-motion';

export const Skills = () => {
  const { skills } = portfolioConfig;

  return (
    <section id="skills" className="py-24 border-t border-border/50 relative bg-background-secondary/30">
      <div className="container mx-auto px-6 max-w-6xl">
        
        {/* Section Header */}
        <div className="text-center mb-16 flex flex-col items-center">
          <Badge>{skills.badge}</Badge>
          <h2 className="text-3xl md:text-4xl lg:text-[40px] font-bold mt-2">
            {skills.headline}
          </h2>
        </div>

        {/* Skills Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {skills.categories.map((category, catIdx) => (
            <div key={catIdx} className="flex flex-col gap-8">
              {category.skills.map((skill, idx) => (
                <div key={idx} className="flex flex-col gap-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <img src={skill.icon} alt={skill.name} className="w-5 h-5 object-contain" />
                      <span className="font-semibold text-text-main">{skill.name}</span>
                    </div>
                    <span className="text-sm font-medium text-text-secondary">{skill.percentage}%</span>
                  </div>
                  
                  {/* Progress Bar Track */}
                  <div className="h-2 w-full bg-card border border-border rounded-full overflow-hidden">
                    {/* Progress Bar Fill */}
                    <motion.div 
                      className="h-full bg-primary-gradient rounded-full relative"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.percentage}%` }}
                      viewport={{ once: true, margin: "-50px" }}
                      transition={{ duration: 1, delay: 0.1 * idx, ease: "easeOut" }}
                    >
                      <div className="absolute inset-0 bg-white/20 w-full h-full animate-pulse blur-[2px]"></div>
                    </motion.div>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
