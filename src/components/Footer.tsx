import { portfolioConfig } from '../data/config';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-border/50 bg-background text-sm">
      <div className="container mx-auto px-6 max-w-6xl flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-text-secondary">
          © {currentYear} {portfolioConfig.personal.fullName}. Все права защищены.
        </p>
        <p className="text-text-secondary flex items-center gap-1.5">
          Сделано с <span className="text-red-500 animate-pulse">♥</span> — {portfolioConfig.personal.name}
        </p>
      </div>
    </footer>
  );
};
