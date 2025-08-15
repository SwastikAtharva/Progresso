import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface StatusBadgeProps {
  status: "Alpha" | "Beta" | "Coming Soon" | "Private Alpha" | "Closed Beta";
  className?: string;
}

export const StatusBadge = ({ status, className }: StatusBadgeProps) => {
  const statusConfig = {
    "Alpha": {
      color: "bg-progress-alpha text-background",
      icon: "🚀"
    },
    "Beta": {
      color: "bg-progress-beta text-background",
      icon: "⚡"
    },
    "Coming Soon": {
      color: "bg-progress-coming text-progress-coming-foreground",
      icon: "⏳"
    },
    "Private Alpha": {
      color: "bg-progress-private text-background",
      icon: "🔒"
    },
    "Closed Beta": {
      color: "bg-progress-closed text-background",
      icon: "✨"
    }
  };

  const config = statusConfig[status];

  return (
    <Badge 
      className={cn(
        "px-3 py-1 text-xs font-medium rounded-full transition-all duration-200 hover:scale-105",
        config.color,
        className
      )}
    >
      <span className="mr-1">{config.icon}</span>
      {status}
    </Badge>
  );
};