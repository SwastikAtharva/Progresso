import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ThemeToggle } from "./ThemeToggle";

export const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-enhanced border-b animate-slide-down shadow-sm hover:shadow-glow transition-all duration-300">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2 group animate-fade-in-left">
          <div className="h-8 w-8 bg-primary rounded-lg flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:rotate-12 group-hover:shadow-glow">
            <span className="text-primary-foreground font-bold text-sm transition-transform duration-300 group-hover:scale-110">P</span>
          </div>
          <span className="text-xl font-bold text-foreground transition-all duration-300 group-hover:text-primary group-hover:scale-105">Progresso</span>
        </Link>
        
        <div className="hidden md:flex items-center space-x-6 animate-fade-in-down" style={{animationDelay: '200ms'}}>
          <Link 
            to="/" 
            className="text-sm font-medium text-muted-foreground hover:text-primary transition-all duration-300 relative group pb-1"
          >
            Projects
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link 
            to="/about" 
            className="text-sm font-medium text-muted-foreground hover:text-primary transition-all duration-300 relative group pb-1"
          >
            About
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link 
            to="/team" 
            className="text-sm font-medium text-muted-foreground hover:text-primary transition-all duration-300 relative group pb-1"
          >
            Team
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link 
            to="/technical" 
            className="text-sm font-medium text-muted-foreground hover:text-primary transition-all duration-300 relative group pb-1"
          >
            Technical
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link 
            to="/contact" 
            className="text-sm font-medium text-muted-foreground hover:text-primary transition-all duration-300 relative group pb-1"
          >
            Contact
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
          </Link>
        </div>

        <div className="flex items-center space-x-3">
          <ThemeToggle />
          <Button 
            size="sm" 
            className="animate-pulse-glow magnetic-button animate-fade-in-right hover:scale-105 transform transition-all duration-500" 
            style={{animationDelay: '400ms', animationDuration: '8s'}}
          >
            Join Our Journey
          </Button>
        </div>
      </div>
    </nav>
  );
};
