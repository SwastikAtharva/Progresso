import React, { useEffect, useState, ReactNode } from "react";
import { useLocation } from "react-router-dom";

interface PageTransitionProps {
  children: ReactNode;
  className?: string;
}

export const PageTransition: React.FC<PageTransitionProps> = ({ 
  children, 
  className = "" 
}) => {
  const location = useLocation();
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    setIsTransitioning(true);
    const timer = setTimeout(() => {
      setIsTransitioning(false);
    }, 200);

    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <div
      className={`
        transition-all duration-1000 ease-out
        ${isTransitioning ? 'opacity-0 translate-y-6' : 'opacity-100 translate-y-0'}
        ${className}
      `}
    >
      {children}
    </div>
  );
};

export default PageTransition;
