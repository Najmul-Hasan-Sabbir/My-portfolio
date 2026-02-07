import { ArrowUp } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-12 px-4 bg-card relative border-t border-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
      <p className="text-sm text-muted-foreground text-center md:text-left">
        &copy; {currentYear} Najmul Hasan Sabbir. All rights reserved.
      </p>
      
      <div className="flex items-center gap-6">
        <div className="text-sm text-muted-foreground hidden md:block">
          Software Engineer | Competitive Programmer | Data Alchemist
        </div>
        
        <a
          href="#hero"
          className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors hover:scale-110"
          aria-label="Back to top"
        >
          <ArrowUp size={20} />
        </a>
      </div>
    </footer>
  );
};