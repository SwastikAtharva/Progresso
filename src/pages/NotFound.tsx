import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Home, ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-40 h-40 bg-primary/5 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/3 right-1/3 w-60 h-60 bg-accent/5 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-primary/3 rounded-full blur-2xl animate-pulse" />
      </div>
      
      <Card className="relative z-10 animate-scale-in-bounce hover:shadow-glow-lg transition-all duration-500 border-2 hover:border-primary/20">
        <CardContent className="p-12 text-center">
          <div className="mb-8">
            <h1 className="text-8xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent animate-pulse">
              404
            </h1>
            <p className="text-2xl text-muted-foreground mb-2 animate-fade-in-up" style={{animationDelay: '300ms'}}>
              Oops! Page not found
            </p>
            <p className="text-muted-foreground animate-fade-in-up" style={{animationDelay: '500ms'}}>
              The page you're looking for doesn't exist or has been moved.
            </p>
          </div>
          
          <div className="space-y-4 animate-fade-in-up" style={{animationDelay: '700ms'}}>
            <Link to="/">
              <Button className="magnetic-button hover:scale-105 transition-all duration-300 group">
                <Home className="mr-2 h-4 w-4 transition-transform duration-300 group-hover:scale-110" />
                <span className="transition-all duration-300 group-hover:tracking-wider">Go Home</span>
              </Button>
            </Link>
            
            <div className="pt-4">
              <Button 
                variant="outline" 
                onClick={() => window.history.back()}
                className="magnetic-button hover:scale-105 transition-all duration-300 group"
              >
                <ArrowLeft className="mr-2 h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1" />
                <span className="transition-all duration-300 group-hover:tracking-wider">Go Back</span>
              </Button>
            </div>
          </div>
          
          {/* Floating elements */}
          <div className="absolute inset-0 pointer-events-none opacity-20">
            <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary rounded-full animate-float" style={{animationDelay: '1s'}} />
            <div className="absolute bottom-1/4 right-1/4 w-2 h-2 bg-accent rounded-full animate-float" style={{animationDelay: '2s'}} />
            <div className="absolute top-3/4 left-3/4 w-2 h-2 bg-primary rounded-full animate-float" style={{animationDelay: '3s'}} />
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default NotFound;
