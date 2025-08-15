import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { StatusBadge } from "@/components/StatusBadge";
import { LucideIcon } from "lucide-react";

interface ProjectCardProps {
  title: string;
  tagline: string;
  status: "Alpha" | "Beta" | "Coming Soon" | "Private Alpha" | "Closed Beta";
  cta: string;
  icon: LucideIcon;
  progress: number;
  onClick: () => void;
}

export const ProjectCard = ({ 
  title, 
  tagline, 
  status, 
  cta, 
  icon: Icon, 
  progress, 
  onClick 
}: ProjectCardProps) => {
  return (
    <Card className="group relative overflow-hidden transition-all duration-500 hover:shadow-glow-lg hover:-translate-y-2 animate-scale-in-bounce cursor-pointer border-2 hover:border-primary/20">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/5 to-primary/5 opacity-0 group-hover:opacity-100 transition-all duration-500" />
      
      {/* Shimmer effect overlay */}
      <div className="absolute inset-0 shimmer opacity-0 group-hover:opacity-100 group-hover:animate-shimmer transition-opacity duration-300" />
      
      <CardHeader className="relative">
        <div className="flex items-start justify-between mb-4">
          <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/30 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6 group-hover:shadow-glow">
            <Icon className="h-6 w-6 text-primary transition-all duration-300 group-hover:animate-float" />
          </div>
          <div className="animate-fade-in-right" style={{ animationDelay: '100ms' }}>
            <StatusBadge status={status} />
          </div>
        </div>
        
        <h3 className="text-lg font-semibold text-card-foreground group-hover:text-primary transition-all duration-300 group-hover:scale-105 origin-left">
          {title}
        </h3>
        <p className="text-sm text-muted-foreground leading-relaxed group-hover:text-foreground transition-colors duration-300">
          {tagline}
        </p>
      </CardHeader>

      <CardContent className="relative">
        <div className="space-y-2">
          <div className="flex justify-between text-xs text-muted-foreground group-hover:text-foreground transition-colors duration-300">
            <span className="animate-fade-in-left" style={{ animationDelay: '200ms' }}>Development Progress</span>
            <span className="animate-fade-in-right" style={{ animationDelay: '250ms' }}>{progress}%</span>
          </div>
          <div className="relative">
            <Progress 
              value={progress} 
              className="h-3 transition-all duration-300 group-hover:h-4 group-hover:shadow-glow animate-fade-in-up" 
              style={{ animationDelay: '300ms' }}
            />
            <div 
              className="absolute top-0 left-0 h-full bg-gradient-to-r from-primary via-accent to-primary rounded-full opacity-0 group-hover:opacity-20 transition-all duration-500 group-hover:animate-shimmer"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      </CardContent>

      <CardFooter className="relative">
        <Button 
          onClick={onClick}
          className="w-full magnetic-button group-hover:animate-pulse-glow transition-all duration-300 group-hover:scale-105 hover:shadow-glow animate-fade-in-up"
          variant="outline"
          style={{ animationDelay: '400ms' }}
        >
          <span className="transition-all duration-300 group-hover:tracking-wider">{cta}</span>
        </Button>
      </CardFooter>

      {/* Floating particles effect on hover */}
      <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-primary rounded-full animate-float" style={{ animationDelay: '0s' }} />
        <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-accent rounded-full animate-float" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-1/4 left-3/4 w-1 h-1 bg-primary rounded-full animate-float" style={{ animationDelay: '2s' }} />
      </div>
    </Card>
  );
};
