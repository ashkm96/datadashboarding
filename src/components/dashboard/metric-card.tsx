import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface MetricCardProps {
  title: string;
  value: string | number;
  change?: {
    value: number;
    label: string;
  };
  icon: LucideIcon;
  variant?: "default" | "success" | "warning" | "destructive";
  className?: string;
}

export function MetricCard({
  title,
  value,
  change,
  icon: Icon,
  variant = "default",
  className
}: MetricCardProps) {
  const getVariantStyles = () => {
    switch (variant) {
      case "success":
        return "bg-gradient-success text-success-foreground";
      case "warning":
        return "bg-gradient-warning text-warning-foreground";
      case "destructive":
        return "bg-gradient-to-br from-destructive/90 to-destructive text-destructive-foreground";
      default:
        return "bg-gradient-primary text-primary-foreground";
    }
  };

  const getChangeColor = () => {
    if (!change) return "";
    return change.value >= 0 ? "text-success" : "text-destructive";
  };

  return (
    <Card className={cn("relative overflow-hidden shadow-soft hover:shadow-medium transition-shadow", className)}>
      <CardContent className="p-6">
        <div className="flex items-start justify-between">
          <div className="space-y-2">
            <p className="text-sm font-medium text-muted-foreground">{title}</p>
            <div>
              <p className="text-3xl font-bold text-foreground">{value}</p>
              {change && (
                <p className={cn("text-sm font-medium", getChangeColor())}>
                  {change.value >= 0 ? "+" : ""}{change.value}% {change.label}
                </p>
              )}
            </div>
          </div>
          <div className={cn("p-3 rounded-xl", getVariantStyles())}>
            <Icon className="h-6 w-6" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}