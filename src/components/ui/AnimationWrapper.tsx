import React, { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface AnimationWrapperProps {
  children: ReactNode;
  animation?: "fade-in" | "fade-in-up" | "fade-in-down" | "fade-in-left" | "fade-in-right" | "scale-in" | "scale-in-bounce" | "slide-up" | "slide-down";
  delay?: number;
  duration?: "short" | "medium" | "long";
  className?: string;
  hover?: boolean;
  stagger?: boolean;
  index?: number;
}

export const AnimationWrapper: React.FC<AnimationWrapperProps> = ({
  children,
  animation = "fade-in",
  delay = 0,
  duration = "medium",
  className = "",
  hover = false,
  stagger = false,
  index = 0
}) => {
  const staggerDelay = stagger ? index * 100 : 0;
  const totalDelay = delay + staggerDelay;

  const durationClasses = {
    short: "duration-700",
    medium: "duration-1000",
    long: "duration-1500"
  };

  const animationClasses = {
    "fade-in": "animate-fade-in",
    "fade-in-up": "animate-fade-in-up", 
    "fade-in-down": "animate-fade-in-down",
    "fade-in-left": "animate-fade-in-left",
    "fade-in-right": "animate-fade-in-right",
    "scale-in": "animate-scale-in",
    "scale-in-bounce": "animate-scale-in-bounce",
    "slide-up": "animate-slide-up",
    "slide-down": "animate-slide-down"
  };

  const hoverClasses = hover ? "hover:scale-105 hover:shadow-glow transition-all duration-500 ease-out" : "";

  return (
    <div
      className={cn(
        animationClasses[animation],
        durationClasses[duration],
        hoverClasses,
        className
      )}
      style={{ animationDelay: `${totalDelay}ms` }}
    >
      {children}
    </div>
  );
};

interface StaggeredAnimationProps {
  children: ReactNode[];
  animation?: AnimationWrapperProps['animation'];
  delay?: number;
  staggerDelay?: number;
  className?: string;
  itemClassName?: string;
}

export const StaggeredAnimation: React.FC<StaggeredAnimationProps> = ({
  children,
  animation = "fade-in-up",
  delay = 0,
  staggerDelay = 100,
  className = "",
  itemClassName = ""
}) => {
  return (
    <div className={className}>
      {children.map((child, index) => (
        <AnimationWrapper
          key={index}
          animation={animation}
          delay={delay + (index * staggerDelay)}
          className={itemClassName}
        >
          {child}
        </AnimationWrapper>
      ))}
    </div>
  );
};

interface ParallaxProps {
  children: ReactNode;
  offset?: number;
  className?: string;
}

export const ParallaxWrapper: React.FC<ParallaxProps> = ({
  children,
  offset = 0.5,
  className = ""
}) => {
  return (
    <div 
      className={cn("transform transition-transform duration-300 ease-out", className)}
      style={{
        transform: `translateY(${offset * window.scrollY}px)`
      }}
    >
      {children}
    </div>
  );
};

interface FloatingElementProps {
  children: ReactNode;
  intensity?: "low" | "medium" | "high";
  direction?: "vertical" | "horizontal" | "both";
  duration?: number;
  className?: string;
}

export const FloatingElement: React.FC<FloatingElementProps> = ({
  children,
  intensity = "medium",
  direction = "vertical",
  duration = 3,
  className = ""
}) => {
  const intensityClasses = {
    low: "animate-float",
    medium: "animate-float",
    high: "animate-float"
  };

  return (
    <div
      className={cn(intensityClasses[intensity], className)}
      style={{ animationDuration: `${duration}s` }}
    >
      {children}
    </div>
  );
};

interface GlowEffectProps {
  children: ReactNode;
  color?: "primary" | "accent" | "success" | "warning" | "info";
  intensity?: "low" | "medium" | "high";
  className?: string;
}

export const GlowEffect: React.FC<GlowEffectProps> = ({
  children,
  color = "primary",
  intensity = "medium",
  className = ""
}) => {
  const glowClasses = {
    primary: {
      low: "hover:shadow-glow",
      medium: "hover:shadow-glow-lg",
      high: "hover:shadow-glow-lg animate-pulse-glow"
    },
    accent: {
      low: "hover:shadow-[0_0_20px_hsl(var(--accent)/0.15)]",
      medium: "hover:shadow-[0_0_40px_hsl(var(--accent)/0.2)]",
      high: "hover:shadow-[0_0_60px_hsl(var(--accent)/0.3)]"
    },
    success: {
      low: "hover:shadow-[0_0_20px_hsl(var(--success)/0.15)]",
      medium: "hover:shadow-[0_0_40px_hsl(var(--success)/0.2)]",
      high: "hover:shadow-[0_0_60px_hsl(var(--success)/0.3)]"
    },
    warning: {
      low: "hover:shadow-[0_0_20px_hsl(var(--warning)/0.15)]",
      medium: "hover:shadow-[0_0_40px_hsl(var(--warning)/0.2)]",
      high: "hover:shadow-[0_0_60px_hsl(var(--warning)/0.3)]"
    },
    info: {
      low: "hover:shadow-[0_0_20px_hsl(var(--info)/0.15)]",
      medium: "hover:shadow-[0_0_40px_hsl(var(--info)/0.2)]",
      high: "hover:shadow-[0_0_60px_hsl(var(--info)/0.3)]"
    }
  };

  return (
    <div className={cn(glowClasses[color][intensity], "transition-all duration-300", className)}>
      {children}
    </div>
  );
};
